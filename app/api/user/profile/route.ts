import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/lib/auth';

const prisma = new PrismaClient();

// Force this route to be dynamic
export const dynamic = 'force-dynamic';

/**
 * Get enhanced user dashboard data
 * Works with current schema while providing comprehensive user analytics
 */
export async function GET(request: NextRequest) {
  try {
    // Get auth token
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

    // Get comprehensive user data with current schema
    const [user, payments, cartItems] = await Promise.all([
      // User profile
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      }),

      // All payment history with detailed analysis
      prisma.payment.findMany({
        where: { 
          userId,
          status: 'COMPLETED',
        },
        orderBy: { createdAt: 'desc' },
      }),

      // Current cart items
      prisma.cartItem.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Parse and analyze purchased courses from payment history
    const purchasedCourses: any[] = [];
    const courseProviders = new Set<string>();
    const courseCategories = new Set<string>();
    let totalSpent = 0;

    payments.forEach(payment => {
      totalSpent += payment.amount;
      
      try {
        const items = typeof payment.items === 'string' 
          ? JSON.parse(payment.items) 
          : payment.items;
        
        if (Array.isArray(items)) {
          items.forEach((item: any) => {
            const course = {
              id: item.certificationId || `course_${Date.now()}_${Math.random()}`,
              name: item.certificationName || 'Unknown Course',
              provider: extractProvider(item.certificationName || ''),
              category: extractCategory(item.certificationName || ''),
              price: item.price || 0,
              logoUrl: item.logoUrl || '/logos/default-logo.png',
              purchaseDate: payment.createdAt,
              paymentId: payment.id,
              receiptNumber: payment.id, // Use payment ID as receipt number
              status: 'purchased',
            };
            
            purchasedCourses.push(course);
            courseProviders.add(course.provider);
            courseCategories.add(course.category);
          });
        }
      } catch (error) {
        console.error('Error parsing payment items:', error);
      }
    });

    // Calculate learning statistics
    const totalCourses = purchasedCourses.length;
    const uniqueProviders = courseProviders.size;
    const uniqueCategories = courseCategories.size;

    // Recent activity (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const recentPurchases = purchasedCourses.filter(
      course => new Date(course.purchaseDate) > thirtyDaysAgo
    );

    const recentPayments = payments.filter(
      payment => payment.createdAt > thirtyDaysAgo
    );

    // Course categories breakdown
    const categoryBreakdown: Record<string, number> = {};
    purchasedCourses.forEach(course => {
      categoryBreakdown[course.category] = (categoryBreakdown[course.category] || 0) + 1;
    });

    // Provider breakdown
    const providerBreakdown: Record<string, number> = {};
    purchasedCourses.forEach(course => {
      providerBreakdown[course.provider] = (providerBreakdown[course.provider] || 0) + 1;
    });

    // Monthly spending analysis (last 12 months)
    const monthlySpending = calculateMonthlySpending(payments);

    return NextResponse.json({
      success: true,
      data: {
        user: {
          ...user,
          memberSince: user.createdAt.toLocaleDateString('en-MY'),
          lastUpdated: user.updatedAt.toLocaleDateString('en-MY'),
        },
        statistics: {
          totalCourses,
          totalSpent: Math.round(totalSpent),
          uniqueProviders,
          uniqueCategories,
          totalPayments: payments.length,
          averageOrderValue: payments.length > 0 ? Math.round(totalSpent / payments.length) : 0,
          cartItems: cartItems.length,
        },
        courses: purchasedCourses,
        recentActivity: {
          newPurchases: recentPurchases.length,
          recentPayments: recentPayments.length,
          recentSpending: recentPayments.reduce((sum, p) => sum + p.amount, 0),
        },
        analytics: {
          categoryBreakdown,
          providerBreakdown,
          monthlySpending,
        },
        payments: payments.map(payment => ({
          id: payment.id,
          amount: payment.amount,
          currency: payment.currency,
          status: payment.status,
          createdAt: payment.createdAt,
          stripeSessionId: payment.stripeSessionId,
          items: payment.items,
        })),
        cartItems: cartItems.map(item => ({
          id: item.id,
          certificationId: item.certificationId,
          certificationName: item.certificationName,
          price: item.price,
          logoUrl: item.logoUrl,
          createdAt: item.createdAt,
        })),
      },
    });

  } catch (error) {
    console.error('Error fetching user dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper functions
function extractProvider(courseName: string): string {
  const name = courseName.toLowerCase();
  if (name.includes('microsoft') || name.includes('mos') || name.includes('mcf') || name.includes('mce')) {
    return 'Microsoft';
  }
  if (name.includes('adobe')) {
    return 'Adobe';
  }
  if (name.includes('it specialist') || name.includes('its')) {
    return 'IT Specialist';
  }
  return 'Other';
}

function extractCategory(courseName: string): string {
  const name = courseName.toLowerCase();
  if (name.includes('mos') || name.includes('office specialist')) {
    return 'MOS';
  }
  if (name.includes('mcf') || name.includes('fundamentals')) {
    return 'MCF';
  }
  if (name.includes('mce') || name.includes('educator')) {
    return 'MCE';
  }
  if (name.includes('its') || name.includes('it specialist')) {
    return 'ITS';
  }
  if (name.includes('adobe')) {
    return 'Adobe';
  }
  return 'General';
}

function calculateMonthlySpending(payments: any[]): Array<{ month: string; amount: number; count: number }> {
  const monthlyData: Record<string, { amount: number; count: number }> = {};
  
  payments.forEach(payment => {
    const date = new Date(payment.createdAt);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!monthlyData[monthKey]) {
      monthlyData[monthKey] = { amount: 0, count: 0 };
    }
    
    monthlyData[monthKey].amount += payment.amount;
    monthlyData[monthKey].count += 1;
  });
  
  return Object.entries(monthlyData)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([month, data]) => ({
      month,
      amount: Math.round(data.amount),
      count: data.count,
    }))
    .slice(-12); // Last 12 months
}