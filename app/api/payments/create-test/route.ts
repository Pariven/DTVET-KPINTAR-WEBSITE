import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
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
    const payload = verifyToken(token);
    if (!payload || typeof payload === 'string') {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid token' },
        { status: 401 }
      );
    }

    const userId = (payload as any).userId as string;
    const { items } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items provided' },
        { status: 400 }
      );
    }

    // Calculate total
    const totalAmount = items.reduce((sum: number, item: any) => sum + item.price, 0);

    // Create test payment record
    const payment = await prisma.payment.create({
      data: {
        userId,
        stripeSessionId: `cs_test_${Date.now()}_${Math.random().toString(36).substring(7)}`,
        amount: totalAmount,
        currency: 'myr',
        status: 'PENDING',
        items: JSON.stringify(items),
      },
    });

    console.log('✅ Test payment created:', {
      id: payment.id,
      userId,
      amount: totalAmount,
      sessionId: payment.stripeSessionId
    });

    return NextResponse.json({
      success: true,
      paymentId: payment.id,
      sessionId: payment.stripeSessionId,
      amount: totalAmount,
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