const { PrismaClient } = require('@prisma/client');
(async () => {
  const prisma = new PrismaClient();
  try {
    const users = await prisma.user.findMany({ select: { id: true, name: true, email: true, role: true } });
    console.log('DB users:', users);
  } catch (e) {
    console.error('Error querying users:', e);
  } finally {
    await prisma.$disconnect();
  }
})();
