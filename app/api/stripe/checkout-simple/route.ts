import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';
import type Stripe from 'stripe';

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

    // Verify token - simplified approach
    let decoded;
    try {
      decoded = verifyToken(token);
      if (!decoded || typeof decoded === 'string') {
        throw new Error('Token verification failed');
      }
    } catch (error) {
      console.error('❌ Token verification error:', error);
      return NextResponse.json(
        { error: 'Invalid or expired token. Please login again.' },
        { status: 401 }
      );
    }

    const userId = decoded.userId || decoded.sub;

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
    const { sessionId, url } = await PaymentService.createCheckoutSession(userId, items);

    return NextResponse.json({
      sessionId,
      url,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
