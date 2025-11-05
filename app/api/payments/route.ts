import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';

export async function GET(request: Request) {
  try {
    // Get auth token
    const authHeader = request.headers.get('authorization');
    const cookieStore = cookies();
    const cookieToken = cookieStore.get('auth-token')?.value;
    const token = authHeader?.replace('Bearer ', '') || cookieToken;

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
      console.error('❌ Payments API - Token verification error:', error);
      return NextResponse.json(
        { error: 'Invalid or expired token. Please login again.' },
        { status: 401 }
      );
    }

    const userId = decoded.userId || decoded.sub;

    // Fetch user payments
    const payments = await PaymentService.getUserPayments(userId);

    return NextResponse.json({ payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}