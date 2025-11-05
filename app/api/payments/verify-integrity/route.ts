import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import prisma from '@/lib/prisma';

/**
 * Safety check endpoint to verify payment and course data integrity
 * This endpoint ensures all course information is properly stored after payment
 */
export async function GET(request: NextRequest) {
  try {
    // Get auth token from headers
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
      return NextResponse.json({ error: 'No authentication token' }, { status: 401 });
    }

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const userId = decoded.userId;
    console.log('🔍 Verifying payment integrity for user:', userId);

    // Get all completed payments for the user
    const payments = await prisma.payment.findMany({
      where: {
        userId,
        status: 'COMPLETED',
      },
      orderBy: { createdAt: 'desc' },
    });

    // Verify course data integrity
    const integrityReport = {
      totalPayments: payments.length,
      paymentsWithCourses: 0,
      paymentsWithoutCourses: 0,
      totalCourses: 0,
      paymentDetails: [] as any[],
      issues: [] as any[],
    };

    for (const payment of payments) {
      try {
        const itemsString = typeof payment.items === 'string' ? payment.items : '[]';
        const courseItems = JSON.parse(itemsString);
        
        const paymentDetail = {
          paymentId: payment.id,
          date: payment.createdAt,
          amount: payment.amount,
          courseCount: courseItems.length,
          courses: courseItems.map((item: any) => ({
            name: item.certificationName,
            id: item.certificationId,
            price: item.price,
          })),
          hasStripeId: !!payment.stripePaymentId,
        };

        if (courseItems.length > 0) {
          integrityReport.paymentsWithCourses++;
          integrityReport.totalCourses += courseItems.length;
        } else {
          integrityReport.paymentsWithoutCourses++;
          integrityReport.issues.push({
            type: 'missing_courses',
            paymentId: payment.id,
            message: 'Payment has no course information',
          });
        }

        if (!payment.stripePaymentId) {
          integrityReport.issues.push({
            type: 'missing_stripe_id',
            paymentId: payment.id,
            message: 'Payment missing Stripe payment ID',
          });
        }

        integrityReport.paymentDetails.push(paymentDetail);
      } catch (parseError) {
        integrityReport.issues.push({
          type: 'parse_error',
          paymentId: payment.id,
          message: 'Failed to parse course items JSON',
        });
      }
    }

    console.log('📊 Payment Integrity Report:', {
      userId,
      summary: {
        total: integrityReport.totalPayments,
        withCourses: integrityReport.paymentsWithCourses,
        withoutCourses: integrityReport.paymentsWithoutCourses,
        issues: integrityReport.issues.length,
      }
    });

    return NextResponse.json({
      success: true,
      userId,
      integrityReport,
      status: integrityReport.issues.length === 0 ? 'healthy' : 'issues_found',
    });

  } catch (error) {
    console.error('💥 Payment integrity check error:', error);
    return NextResponse.json(
      { error: 'Internal server error during integrity check' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}