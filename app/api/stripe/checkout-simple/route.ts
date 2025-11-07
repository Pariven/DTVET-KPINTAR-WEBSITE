import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';
import type Stripe from 'stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    // Get auth token from multiple sources
    const authHeader = request.headers.get('authorization');
    const cookieStore = cookies();
    const cookieToken = cookieStore.get('auth-token')?.value;
    const regularCookieToken = cookieStore.get('token')?.value;
    const token = authHeader?.replace('Bearer ', '') || cookieToken || regularCookieToken;

    console.log('🔍 Checkout-Simple API Debug:', {
      hasAuthHeader: !!authHeader,
      hasCookieToken: !!cookieToken,
      hasRegularCookieToken: !!regularCookieToken,
      hasFinalToken: !!token,
      authHeaderValue: authHeader ? `${authHeader.substring(0, 30)}...` : 'none',
    });

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const userId = decoded.userId;
    
    // Validate userId format (should be a valid UUID or string)
    if (!userId || typeof userId !== 'string' || userId.trim().length === 0) {
      console.error('❌ Invalid userId from token:', { userId, decoded });
      return NextResponse.json(
        { error: 'Invalid user session. Please log in again.' },
        { status: 401 }
      );
    }

    console.log('✅ Valid user session:', { userId: userId.substring(0, 8) + '...' });

    // Get cart items from request
    const body = await request.json();
    const { items } = body;
    
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment system not configured - Please set STRIPE_SECRET_KEY' },
        { status: 500 }
      );
    }

    // Use PaymentService to create checkout session
    try {
      const { sessionId, url } = await PaymentService.createCheckoutSession(userId, items);

      return NextResponse.json({
        sessionId,
        url,
      });
    } catch (paymentError) {
      console.error('❌ Payment service error:', paymentError);
      
      // Specific error handling for foreign key constraints
      if (paymentError instanceof Error && paymentError.message.includes('Foreign key constraint')) {
        return NextResponse.json(
          { error: 'User session expired. Please log in again and try your payment.' },
          { status: 401 }
        );
      }
      
      throw paymentError; // Re-throw for general error handling
    }
  } catch (error) {
    console.error('❌ Checkout API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
