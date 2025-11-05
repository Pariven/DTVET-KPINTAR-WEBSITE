import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';
import { getStripe, getAppUrl } from '@/lib/stripe/client';
import prisma from '@/lib/prisma';

/**
 * This endpoint handles payment success redirects from Stripe
 * It verifies the payment and updates the database accordingly
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    const baseUrl = getAppUrl(); // Get the correct base URL
    
    console.log('🎯 Payment success endpoint called:', { 
      sessionId, 
      baseUrl,
      fullUrl: request.url,
      hasSession: !!sessionId 
    });

    if (!sessionId) {
      console.log('❌ No session ID provided - available params:', Object.fromEntries(searchParams));
      
      // For testing purposes, if we have a simulation session, just redirect to success
      if (searchParams.get('session_id') === 'cs_test_simulation123') {
        console.log('🧪 Test simulation detected - redirecting to dashboard');
        return NextResponse.redirect(`${baseUrl}/dashboard/payments?success=true&test=simulation`);
      }
      
      return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=no_session`);
    }

    // Get auth token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value || cookieStore.get('token')?.value;

    if (!token) {
      console.log('❌ No authentication token found');
      return NextResponse.redirect(`${baseUrl}/login?redirect=/dashboard/payments`);
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      console.log('❌ Invalid token');
      return NextResponse.redirect(`${baseUrl}/login?redirect=/dashboard/payments`);
    }

    const userId = decoded.userId;
    console.log('✅ User authenticated:', userId);

    try {
      // Get the Stripe session to verify payment
      const stripe = getStripe();
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      console.log('💳 Stripe session retrieved:', {
        id: session.id,
        payment_status: session.payment_status,
        customer_details: session.customer_details?.email
      });

      if (session.payment_status === 'paid') {
        // Check if payment already exists in database
        const existingPayment = await prisma.payment.findUnique({
          where: { stripeSessionId: sessionId },
        });

        console.log('🔍 Existing payment check:', { 
          found: !!existingPayment, 
          status: existingPayment?.status 
        });

        if (existingPayment) {
          // Parse course items for detailed logging and validation
          const itemsString = typeof existingPayment.items === 'string' ? existingPayment.items : '[]';
          const courseItems = JSON.parse(itemsString);
          
          if (existingPayment.status === 'PENDING') {
            // Update payment to completed with additional metadata
            const updatedPayment = await prisma.payment.update({
              where: { id: existingPayment.id },
              data: {
                status: 'COMPLETED',
                stripePaymentId: session.payment_intent as string,
                updatedAt: new Date(),
              },
            });

            // Clear user's cart to prevent duplicate purchases
            const deletedItems = await prisma.cartItem.deleteMany({
              where: { userId: existingPayment.userId },
            });

            console.log('✅ Payment & Course Information Updated:', {
              paymentId: updatedPayment.id,
              amount: updatedPayment.amount,
              currency: updatedPayment.currency,
              courseCount: courseItems.length,
              courseNames: courseItems.map((item: any) => item.certificationName),
              cartItemsCleared: deletedItems.count,
              userId: existingPayment.userId,
              completedAt: updatedPayment.updatedAt
            });

            // Verify course items are properly stored
            console.log('📚 Course Details Verification:', {
              totalCourses: courseItems.length,
              courses: courseItems.map((item: any, index: number) => ({
                index: index + 1,
                name: item.certificationName,
                price: item.price,
                id: item.certificationId
              }))
            });

          } else {
            console.log('ℹ️ Payment already completed - Course info preserved:', {
              paymentId: existingPayment.id,
              status: existingPayment.status,
              courseCount: courseItems.length,
              courses: courseItems.map((item: any) => item.certificationName),
              userId: existingPayment.userId
            });
          }

          // Safety check: Verify payment data integrity before redirect
          if (!existingPayment.items || courseItems.length === 0) {
            console.warn('⚠️ Warning: No course items found in payment record');
            return NextResponse.redirect(`${baseUrl}/dashboard/payments?success=true&warning=no_items&payment_id=${existingPayment.id}`);
          }

          // Redirect to dashboard with complete course and payment information
          return NextResponse.redirect(`${baseUrl}/dashboard/payments?success=true&payment_id=${existingPayment.id}&refresh=1&courses=${courseItems.length}`);
        } else {
          console.log('❌ Payment record not found in database');
          return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=payment_not_found`);
        }
      } else {
        console.log('❌ Payment not completed, status:', session.payment_status);
        return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=payment_incomplete`);
      }
    } catch (stripeError) {
      console.error('💥 Stripe API error:', stripeError);
      return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=stripe_error`);
    }
  } catch (error) {
    console.error('💥 Payment success handler error:', error);
    const baseUrl = getAppUrl(); // Redeclare in catch block
    return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=server_error`);
  }
}

export async function POST(request: Request) {
  return GET(request);
}