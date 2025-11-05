import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

/**
 * Simple payment completion endpoint for testing
 * This simulates a successful payment without going through Stripe
 */
export async function GET(request: Request) {
  try {
    console.log('🧪 Simple payment completion test endpoint called');

    // Get auth token from cookies
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value || cookieStore.get('token')?.value;

    if (!token) {
      console.log('❌ No authentication token found');
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      return NextResponse.redirect(`${baseUrl}/login?redirect=/dashboard/payments`);
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      console.log('❌ Invalid token');
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      return NextResponse.redirect(`${baseUrl}/login?redirect=/dashboard/payments`);
    }

    console.log('✅ User authenticated:', decoded.userId);
    
    // Simply redirect to dashboard with success
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const redirectUrl = `${baseUrl}/dashboard/payments?success=true&test=simple_completion`;
    
    console.log('🎯 Redirecting to:', redirectUrl);
    
    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    console.error('💥 Simple payment completion error:', error);
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    return NextResponse.redirect(`${baseUrl}/dashboard/payments?error=completion_failed`);
  }
}

export async function POST(request: Request) {
  return GET(request);
}