import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkAndFixDatabaseIntegrity() {
  console.log('🔍 Checking database integrity...');
  
  try {
    // 1. Check for orphaned payments (payments with non-existent users)
    const orphanedPayments = await prisma.$queryRaw`
      SELECT p.id, p."userId", p."stripeSessionId", p.status
      FROM "Payment" p
      LEFT JOIN "User" u ON p."userId" = u.id
      WHERE u.id IS NULL
    `;
    
    console.log('Orphaned payments found:', orphanedPayments);
    
    if (Array.isArray(orphanedPayments) && orphanedPayments.length > 0) {
      console.log('⚠️ Found orphaned payments. Cleaning up...');
      
      // Delete orphaned payments
      const deleteResult = await prisma.$executeRaw`
        DELETE FROM "Payment" 
        WHERE "userId" NOT IN (SELECT id FROM "User")
      `;
      
      console.log('✅ Cleaned up orphaned payments:', deleteResult);
    }

    // 2. Check for orphaned cart items
    const orphanedCartItems = await prisma.$queryRaw`
      SELECT c.id, c."userId", c."certificationName"
      FROM "CartItem" c
      LEFT JOIN "User" u ON c."userId" = u.id
      WHERE u.id IS NULL
    `;
    
    console.log('Orphaned cart items found:', orphanedCartItems);
    
    if (Array.isArray(orphanedCartItems) && orphanedCartItems.length > 0) {
      console.log('⚠️ Found orphaned cart items. Cleaning up...');
      
      const deleteCartResult = await prisma.$executeRaw`
        DELETE FROM "CartItem" 
        WHERE "userId" NOT IN (SELECT id FROM "User")
      `;
      
      console.log('✅ Cleaned up orphaned cart items:', deleteCartResult);
    }

    // 3. Check for orphaned course enrollments
    const orphanedEnrollments = await prisma.$queryRaw`
      SELECT ce.id, ce."userId", ce."paymentId"
      FROM "course_enrollments" ce
      LEFT JOIN "User" u ON ce."userId" = u.id
      LEFT JOIN "Payment" p ON ce."paymentId" = p.id
      WHERE u.id IS NULL OR p.id IS NULL
    `;
    
    console.log('Orphaned course enrollments found:', orphanedEnrollments);
    
    if (Array.isArray(orphanedEnrollments) && orphanedEnrollments.length > 0) {
      console.log('⚠️ Found orphaned course enrollments. Cleaning up...');
      
      const deleteEnrollmentResult = await prisma.$executeRaw`
        DELETE FROM "course_enrollments" 
        WHERE "userId" NOT IN (SELECT id FROM "User") 
           OR "paymentId" NOT IN (SELECT id FROM "Payment")
      `;
      
      console.log('✅ Cleaned up orphaned course enrollments:', deleteEnrollmentResult);
    }

    // 4. Verify all users have valid IDs
    const allUsers = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
    
    console.log('Recent users in database:');
    allUsers.forEach((user, index) => {
      console.log(`${index + 1}. ID: ${user.id.substring(0, 8)}... | Email: ${user.email}`);
    });

    // 5. Check recent payments
    const recentPayments = await prisma.payment.findMany({
      select: {
        id: true,
        userId: true,
        status: true,
        amount: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
    
    console.log('Recent payments:');
    recentPayments.forEach((payment, index) => {
      console.log(`${index + 1}. Payment: ${payment.id.substring(0, 8)}... | User: ${payment.userId.substring(0, 8)}... | Status: ${payment.status} | Amount: ${payment.amount}`);
    });

    console.log('✅ Database integrity check completed successfully!');
    
  } catch (error) {
    console.error('❌ Error during database integrity check:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the check
checkAndFixDatabaseIntegrity();