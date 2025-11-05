import prisma from '@/lib/prisma';
import { getStripe, STRIPE_CONFIG } from '@/lib/stripe/client';
import { getPaymentMethodsForRegion } from '@/lib/stripe/payment-methods';
import type Stripe from 'stripe';

export interface CartItemData {
  certificationId: string;
  certificationName: string;
  price: number;
  logoUrl?: string;
}

export class PaymentService {
  /**
   * Create a Stripe checkout session
   */
  static async createCheckoutSession(
    userId: string,
    items: CartItemData[]
  ): Promise<{ sessionId: string; url: string }> {
    if (!items || items.length === 0) {
      throw new Error('Cart is empty');
    }

    // Calculate total
    const totalAmount = items.reduce((sum, item) => sum + item.price, 0);

    // Create line items for Stripe
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map((item) => ({
      price_data: {
        currency: STRIPE_CONFIG.currency,
        product_data: {
          name: item.certificationName,
          images: item.logoUrl ? [item.logoUrl] : [],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: 1,
    }));

    // Create Stripe session with all enabled payment methods for Malaysia
    const stripe = getStripe();
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        'card',        // Credit/Debit cards (Visa, Mastercard, etc.)
        'fpx',         // Malaysian Online Banking (FPX)
        'grabpay',     // GrabPay Digital Wallet
      ],
      line_items: lineItems,
      mode: 'payment',
      success_url: STRIPE_CONFIG.successUrl,
      cancel_url: STRIPE_CONFIG.cancelUrl,
      client_reference_id: userId,
      metadata: {
        userId,
        totalAmount: totalAmount.toString(),
        itemCount: items.length.toString(),
      },
      // This enables Apple Pay, Google Pay, and Link automatically when available
      payment_method_configuration: undefined, // Use default configuration which includes wallets
    });

    // Store pending payment in database
    await prisma.payment.create({
      data: {
        userId,
        stripeSessionId: session.id,
        amount: totalAmount,
        currency: STRIPE_CONFIG.currency,
        status: 'PENDING',
        items: JSON.stringify(items),
      },
    });

    return {
      sessionId: session.id,
      url: session.url!,
    };
  }

  /**
   * Handle successful payment webhook
   */
  static async handlePaymentSuccess(session: Stripe.Checkout.Session): Promise<void> {
    console.log('🎯 Handling payment success for session:', session.id);
    
    const payment = await prisma.payment.findUnique({
      where: { stripeSessionId: session.id },
    });

    if (!payment) {
      console.error('❌ Payment not found for session:', session.id);
      throw new Error(`Payment not found for session: ${session.id}`);
    }

    console.log('💰 Found payment record:', {
      id: payment.id,
      userId: payment.userId,
      amount: payment.amount,
      status: payment.status
    });

    // Update payment status
    const updatedPayment = await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: 'COMPLETED',
        stripePaymentId: session.payment_intent as string,
      },
    });

    console.log('✅ Payment updated to COMPLETED:', updatedPayment.id);

    // Clear user's cart items
    const deletedItems = await prisma.cartItem.deleteMany({
      where: { userId: payment.userId },
    });

    console.log('🛒 Cart cleared:', { deletedCount: deletedItems.count });
  }

  /**
   * Handle failed payment
   */
  static async handlePaymentFailure(session: Stripe.Checkout.Session): Promise<void> {
    await prisma.payment.updateMany({
      where: { stripeSessionId: session.id },
      data: { status: 'FAILED' },
    });
  }

  /**
   * Get payment history for a user
   */
  static async getUserPayments(userId: string) {
    return await prisma.payment.findMany({
      where: {
        userId,
        status: 'COMPLETED',
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Get payment by session ID
   */
  static async getPaymentBySessionId(sessionId: string) {
    return await prisma.payment.findUnique({
      where: { stripeSessionId: sessionId },
      include: { user: true },
    });
  }
}
