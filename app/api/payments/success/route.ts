import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';
import { getStripe } from '@/lib/stripe/client';
import prisma from '@/lib/prisma';

/**
 * This endpoint handles payment success redirects from Stripe
 * It verifies the payment and updates the database accordingly
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    
    console.log('🎯 Payment success endpoint called:', { sessionId });

    if (!sessionId) {
      console.log('❌ No session ID provided');
      return NextResponse.redirect(new URL('/dashboard/payments?error=no_session', request.url));
    }

    // Get auth token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value || cookieStore.get('token')?.value;

    if (!token) {
      console.log('❌ No authentication token found');
      return NextResponse.redirect(new URL('/login?redirect=/dashboard/payments', request.url));
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      console.log('❌ Invalid token');
      return NextResponse.redirect(new URL('/login?redirect=/dashboard/payments', request.url));
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
          if (existingPayment.status === 'PENDING') {
            // Update payment to completed
            await prisma.payment.update({
              where: { id: existingPayment.id },
              data: {
                status: 'COMPLETED',
                stripePaymentId: session.payment_intent as string,
              },
            });

            // Clear user's cart
            await prisma.cartItem.deleteMany({
              where: { userId: existingPayment.userId },
            });

            console.log('✅ Payment updated to COMPLETED');
          } else {
            console.log('ℹ️ Payment already completed');
          }

          // Redirect to dashboard with success message
          return NextResponse.redirect(new URL('/dashboard/payments?success=true', request.url));
        } else {
          console.log('❌ Payment record not found in database');
          return NextResponse.redirect(new URL('/dashboard/payments?error=payment_not_found', request.url));
        }
      } else {
        console.log('❌ Payment not completed, status:', session.payment_status);
        return NextResponse.redirect(new URL('/dashboard/payments?error=payment_incomplete', request.url));
      }
    } catch (stripeError) {
      console.error('💥 Stripe API error:', stripeError);
      return NextResponse.redirect(new URL('/dashboard/payments?error=stripe_error', request.url));
    }
  } catch (error) {
    console.error('💥 Payment success handler error:', error);
    return NextResponse.redirect(new URL('/dashboard/payments?error=server_error', request.url));
  }
}

export async function POST(request: Request) {
  return GET(request);
}