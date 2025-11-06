import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function populateUserData() {
  try {
    console.log('📊 Starting user data population...');
    
    // Update existing user statistics
    console.log('📈 Updating user statistics...');
    
    const users = await prisma.user.findMany({
      include: {
        payments: {
          where: { status: 'COMPLETED' }
        }
      }
    });
    
    console.log(`Found ${users.length} users to update`);
    
    for (const user of users) {
      const totalSpent = user.payments.reduce((sum, payment) => sum + payment.amount, 0);
      const coursesOwned = user.payments.reduce((count, payment) => {
        try {
          const items = typeof payment.items === 'string' ? JSON.parse(payment.items) : payment.items;
          return count + (Array.isArray(items) ? items.length : 0);
        } catch {
          return count;
        }
      }, 0);
      
      // Use raw SQL to avoid Prisma type issues
      await prisma.$executeRaw`
        UPDATE "User" 
        SET "totalspent" = ${totalSpent}, 
            "coursesowned" = ${coursesOwned}
        WHERE "id" = ${user.id}
      `;
      
      console.log(`📊 Updated stats for ${user.name}: ${coursesOwned} courses, RM${totalSpent} spent`);
    }
    
    // Populate course enrollments
    console.log('🎓 Populating course enrollments...');
    
    const payments = await prisma.payment.findMany({
      where: { status: 'COMPLETED' }
    });
    
    console.log(`Found ${payments.length} completed payments to process`);
    
    let enrollmentCount = 0;
    for (const payment of payments) {
      try {
        const items = typeof payment.items === 'string' ? JSON.parse(payment.items) : payment.items;
        if (Array.isArray(items)) {
          for (const item of items) {
            // Check if enrollment already exists using raw SQL
            const existingEnrollment = await prisma.$queryRaw`
              SELECT id FROM course_enrollments 
              WHERE "userId" = ${payment.userId} 
              AND "paymentId" = ${payment.id} 
              AND "certificationName" = ${item.certificationName || 'Unknown'}
              LIMIT 1
            `;
            
            if (!Array.isArray(existingEnrollment) || existingEnrollment.length === 0) {
              // Create enrollment using raw SQL
              await prisma.$executeRaw`
                INSERT INTO course_enrollments (id, "userId", "paymentId", "certificationName", provider, price, status, "enrolledAt")
                VALUES (${`enrollment_${Date.now()}_${enrollmentCount}`}, ${payment.userId}, ${payment.id}, ${item.certificationName || 'Unknown'}, 'Microsoft', ${item.price || 0}, 'active', ${payment.createdAt})
              `;
              enrollmentCount++;
            }
          }
        }
      } catch (error) {
        console.log(`⚠️ Error processing payment ${payment.id}:`, error instanceof Error ? error.message : String(error));
      }
    }
    
    console.log(`✅ Created ${enrollmentCount} course enrollments`);
    console.log('🎉 User data population completed successfully!');
    
  } catch (error) {
    console.error('❌ Population failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the population
if (require.main === module) {
  populateUserData().catch(console.error);
}

export default populateUserData;