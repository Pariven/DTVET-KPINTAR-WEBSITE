import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe/client';
import { PaymentService } from '@/lib/services/payment.service';
import { verifyToken } from '@/lib/auth-utils';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    const userId = payload.userId as string;

    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      );
    }

    // Get the Stripe session
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);// Check if payment was successful
    if (session.payment_status === 'paid') {
      // Check if we already have this payment in our database
      const existingPayment = await prisma.payment.findUnique({
        where: { stripeSessionId: sessionId },
      });

      if (existingPayment) {
        if (existingPayment.status === 'PENDING') {
          // Update the payment status to completed
          const updatedPayment = await prisma.payment.update({
            where: { id: existingPayment.id },
            data: {
              status: 'COMPLETED',
              stripePaymentId: session.payment_intent as string,
            },
          });

          // Clear the user's cart
          await prisma.cartItem.deleteMany({
            where: { userId: existingPayment.userId },
          });return NextResponse.json({
            success: true,
            payment: updatedPayment,
            message: 'Payment verified successfully'
          });
        } else {
          // Payment already completed
          return NextResponse.json({
            success: true,
            payment: existingPayment,
            message: 'Payment already completed'
          });
        }
      } else {
        // This shouldn't happen if the checkout was created properly
        console.error('❌ Payment session not found in database:', sessionId);
        return NextResponse.json(
          { error: 'Payment session not found in database' },
          { status: 404 }
        );
      }
    } else {return NextResponse.json(
        { error: 'Payment not completed', status: session.payment_status },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}