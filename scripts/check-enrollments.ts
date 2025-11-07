import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkEnrollments() {
  try {
    console.log('📚 Current course enrollments:');
    
    const enrollments = await prisma.$queryRaw`
      SELECT ce.*, u.name as user_name 
      FROM course_enrollments ce
      JOIN "User" u ON ce."userId" = u.id
      ORDER BY ce."enrolledAt" DESC
    ` as any[];
    
    console.log(`Found ${enrollments.length} enrollments:`);
    enrollments.forEach((e: any, i: number) => {
      console.log(`${i+1}. ${e.user_name} - ${e.certificationName} (RM${e.price}) - ${e.status}`);
    });
    
    // Check user statistics
    console.log('\n📊 User statistics:');
    const users = await prisma.$queryRaw`
      SELECT name, totalspent, coursesowned 
      FROM "User" 
      WHERE totalspent > 0 OR coursesowned > 0
    ` as any[];
    
    users.forEach((user: any) => {
      console.log(`👤 ${user.name}: ${user.coursesowned} courses, RM${user.totalspent} spent`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkEnrollments();