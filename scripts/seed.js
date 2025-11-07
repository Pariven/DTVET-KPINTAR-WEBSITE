const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const client = new PrismaClient();

async function createAdmin() {
  try {
    const hashedPassword = await hash('admin123', 10);
    
    const admin = await client.user.create({
      data: {
        name: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    console.log('Admin user created:', admin);
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    await client.$disconnect();
  }
}

createAdmin();
