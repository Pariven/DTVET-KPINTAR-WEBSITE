import runMigration from './migrate-enhanced-db';
import populateUserData from './populate-user-data';

async function runFullSetup() {
  try {
    console.log('🚀 Starting full database enhancement setup...\n');
    
    console.log('Step 1: Running database migration...');
    await runMigration();
    
    console.log('\nStep 2: Regenerating Prisma client...');
    const { exec } = require('child_process');
    await new Promise((resolve, reject) => {
      exec('npx prisma generate', (error: any, stdout: any, stderr: any) => {
        if (error) reject(error);
        else {
          console.log('✅ Prisma client regenerated successfully');
          resolve(stdout);
        }
      });
    });
    
    console.log('\nStep 3: Populating user data...');
    await populateUserData();
    
    console.log('\n🎉 Full database enhancement completed successfully!');
    console.log('\n📋 What was done:');
    console.log('✅ Added new user profile fields (phone, profileImage, bio, etc.)');
    console.log('✅ Enhanced Payment table with receipt numbers and payment methods');
    console.log('✅ Created course_enrollments table for tracking user courses');
    console.log('✅ Created user_progress table for learning analytics');
    console.log('✅ Created achievements table for gamification');
    console.log('✅ Populated user statistics and course enrollments from existing data');
    console.log('✅ Added proper indexes and foreign key constraints');
    
    console.log('\n🔗 Your Neon database is now ready for advanced user management!');
    
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
}

// Run the full setup
if (require.main === module) {
  runFullSetup();
}

export default runFullSetup;