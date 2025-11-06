import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function populateEnrollments() {
  console.log('🚀 Starting course enrollment population from existing payments...');
  
  try {
    // Get all completed payments
    const payments = await prisma.payment.findMany({
      where: { status: 'COMPLETED' },
      include: { user: true }
    });
    
    console.log(`📊 Found ${payments.length} completed payments to process`);
    
    let totalEnrollments = 0;
    let totalSpentByUser: Record<string, number> = {};
    let coursesOwnedByUser: Record<string, number> = {};
    
    for (const payment of payments) {
      try {
        // Parse the items from payment
        const items = typeof payment.items === 'string' 
          ? JSON.parse(payment.items) 
          : payment.items;
        
        if (Array.isArray(items)) {
          for (const item of items) {
            // Check if enrollment already exists using raw SQL
            const existingEnrollment = await prisma.$queryRaw`
              SELECT id FROM course_enrollments 
              WHERE "userId" = ${payment.userId} 
              AND "paymentId" = ${payment.id} 
              AND "certificationName" = ${item.certificationName || 'Unknown Course'}
              LIMIT 1
            `;
            
            if (!Array.isArray(existingEnrollment) || existingEnrollment.length === 0) {
              // Create new enrollment using raw SQL
              await prisma.$executeRaw`
                INSERT INTO course_enrollments (id, "userId", "paymentId", "certificationName", provider, price, status, "enrolledAt")
                VALUES (${`enrollment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`}, ${payment.userId}, ${payment.id}, ${item.certificationName || 'Unknown Course'}, ${extractProvider(item.certificationName || '')}, ${item.price || 0}, 'active', ${payment.createdAt})
              `;
              
              totalEnrollments++;
              console.log(`✅ Created enrollment: ${item.certificationName} for ${payment.user.name}`);
            }
          }
          
          // Calculate user totals
          const userId = payment.userId;
          totalSpentByUser[userId] = (totalSpentByUser[userId] || 0) + payment.amount;
          coursesOwnedByUser[userId] = (coursesOwnedByUser[userId] || 0) + items.length;
        }
      } catch (itemError) {
        console.log(`⚠️  Error processing items for payment ${payment.id}:`, itemError);
      }
    }
    
    console.log(`📈 Created ${totalEnrollments} new course enrollments`);
    
    // Update user statistics
    console.log('📊 Updating user statistics...');
    
    for (const [userId, totalSpent] of Object.entries(totalSpentByUser)) {
      const coursesOwned = coursesOwnedByUser[userId] || 0;
      
      // Update user statistics using raw SQL
      await prisma.$executeRaw`
        UPDATE "User" 
        SET "totalspent" = ${totalSpent}, 
            "coursesowned" = ${coursesOwned}
        WHERE "id" = ${userId}
      `;
      
      console.log(`📊 Updated user ${userId}: ${coursesOwned} courses, RM${totalSpent} spent`);
    }
    
    // Summary statistics
    const totalUsers = await prisma.user.count();
    const totalEnrollmentsDb = await prisma.$queryRaw`SELECT COUNT(*) as count FROM course_enrollments` as [{count: bigint}];
    const totalPayments = await prisma.payment.count({ where: { status: 'COMPLETED' } });
    
    console.log('\n🎉 Migration completed successfully!');
    console.log('📊 Final Statistics:');
    console.log(`   👥 Total Users: ${totalUsers}`);
    console.log(`   💳 Total Completed Payments: ${totalPayments}`);
    console.log(`   📚 Total Course Enrollments: ${Number(totalEnrollmentsDb[0].count)}`);
    console.log(`   ✨ New Enrollments Created: ${totalEnrollments}`);
    
  } catch (error) {
    console.error('❌ Error populating enrollments:', error);
  } finally {
    await prisma.$disconnect();
  }
}

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

// Run the population script
populateEnrollments();