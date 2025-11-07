const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');
  
  // Create a test user
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const user = await prisma.user.create({
    data: {
      name: 'Test Admin',
      email: 'admin@dtvet.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  
  console.log('✅ Created admin user:', {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  });
  
  // Create another test user
  const hashedUserPassword = await bcrypt.hash('user123', 12);
  
  const testUser = await prisma.user.create({
    data: {
      name: 'Test User',
      email: 'user@test.com',
      password: hashedUserPassword,
      role: 'USER',
    },
  });
  
  console.log('✅ Created test user:', {
    id: testUser.id,
    name: testUser.name,
    email: testUser.email,
    role: testUser.role
  });
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });