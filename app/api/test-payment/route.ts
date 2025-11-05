import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
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

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const userId = decoded.userId;

    // Create a test completed payment
    const testPayment = await prisma.payment.create({
      data: {
        userId,
        stripeSessionId: `test_session_${Date.now()}`,
        stripePaymentId: `test_payment_${Date.now()}`,
        amount: 4.00,
        currency: 'myr',
        status: 'COMPLETED',
        items: JSON.stringify([
          {
            certificationId: 'test_001',
            certificationName: 'Test Adobe Certification',
            price: 2,
            logoUrl: 'https://example.com/test-logo.png'
          },
          {
            certificationId: 'test_002',
            certificationName: 'Test Autodesk Certification',
            price: 2,
            logoUrl: 'https://example.com/test-logo2.png'
          }
        ]),
      },
    });return NextResponse.json({ 
      success: true,
      payment: testPayment,
      message: 'Test payment created successfully'
    });
  } catch (error) {
    console.error('Error creating test payment:', error);
    return NextResponse.json(
      { error: 'Failed to create test payment' },
      { status: 500 }
    );
  }
}