import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { PaymentService } from '@/lib/services/payment.service';

// Force this route to be dynamic
export const dynamic = 'force-dynamic';

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

    // Verify token
    const decoded = verifyToken(token);
    if (!decoded || typeof decoded === 'string') {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const userId = decoded.userId;

    // Fetch user payments
    const payments = await PaymentService.getUserPayments(userId);

    return NextResponse.json({ payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    
    // Handle specific database connection errors
    if (error instanceof Error) {
      if (error.message.includes('Can\'t reach database server')) {
        console.log('🔄 Database temporarily unavailable - returning empty payments list');
        return NextResponse.json({ 
          payments: [],
          error: 'Database temporarily unavailable. Please try again later.'
        }, { status: 200 });
      }
      
      if (error.message.includes('PrismaClientInitializationError')) {
        console.log('🔄 Database connection issue - returning fallback response');
        return NextResponse.json({ 
          payments: [],
          error: 'Payment history temporarily unavailable.'
        }, { status: 200 });
      }
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch payments',
        payments: [] // Provide fallback empty array
      },
      { status: 500 }
    );
  }
}