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

    // Find any pending payments for this user
    const pendingPayments = await prisma.payment.findMany({
      where: {
        userId,
        status: 'PENDING',
      },
      orderBy: { createdAt: 'desc' },
    });

    if (pendingPayments.length === 0) {
      return NextResponse.json({
        success: false,
        message: 'No pending payments found',
        payments: [],
      });
    }

    // Complete the most recent pending payment
    const paymentToComplete = pendingPayments[0];
    
    const completedPayment = await prisma.payment.update({
      where: { id: paymentToComplete.id },
      data: {
        status: 'COMPLETED',
        stripePaymentId: `pi_test_manual_${Date.now()}`, // Mock payment intent ID
      },
    });

    // Clear the user's cart
    await prisma.cartItem.deleteMany({
      where: { userId },
    });return NextResponse.json({
      success: true,
      message: 'Payment completed successfully',
      payment: completedPayment,
    });
  } catch (error) {
    console.error('Error completing payment manually:', error);
    return NextResponse.json(
      { error: 'Failed to complete payment' },
      { status: 500 }
    );
  }
}