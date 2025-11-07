import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { PaymentService } from '@/lib/services/payment.service';
import { verifyToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    console.log('🚀 Checkout API called');
    
    // Get auth token from multiple sources
    const authHeader = request.headers.get('authorization');
    const cookieStore = cookies();
    const cookieToken = cookieStore.get('auth-token')?.value;
    const regularCookieToken = cookieStore.get('token')?.value;
    const token = authHeader?.replace('Bearer ', '') || cookieToken || regularCookieToken;

    console.log('🔑 Token Debug:', {
      hasAuthHeader: !!authHeader,
      hasCookieToken: !!cookieToken,
      hasRegularCookieToken: !!regularCookieToken,
      finalToken: !!token,
      tokenLength: token ? token.length : 0
    });

    if (!token) {
      console.log('❌ No auth token found');
      return NextResponse.json(
        { error: 'Unauthorized - No token provided' },
        { status: 401 }
      );
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      console.log('❌ Invalid token:', decoded);
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const userId = decoded.userId;
    console.log('✅ User authenticated:', userId);

    // Get cart items from request
    const body = await request.json();
    const { items } = body;
    
    console.log('🛒 Cart items received:', items);

    if (!items || items.length === 0) {
      console.log('❌ Empty cart');
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log('❌ STRIPE_SECRET_KEY not configured');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    console.log('💳 Creating Stripe checkout session...');

    // Create Stripe checkout session
    const { sessionId, url } = await PaymentService.createCheckoutSession(
      userId,
      items
    );

    console.log('✅ Checkout session created:', { sessionId, url });

    return NextResponse.json({
      sessionId,
      url,
    });
  } catch (error) {
    console.error('💥 Checkout session error:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
