const { PrismaClient } = require("@prisma/client");
const sourceDb = new PrismaClient({
  datasourceUrl: "postgresql://postgres:Visnu0101@localhost:5432/dtvet_db?schema=public"
});
const targetDb = new PrismaClient({
  datasourceUrl: "postgresql://neondb_owner:npg_fg5SzOX1odaJ@ep-wandering-moon-a4e83waq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
});

async function migrateData() {
  // Get all users from source database
  const users = await sourceDb.user.findMany();
  console.log(`Found ${users.length} users to migrate`);

  // Migrate each user to target database
  for (const user of users) {
    try {
      await targetDb.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt
        }
      });
      console.log(`Migrated user: ${user.email}`);
    } catch (error) {
      if (error.code === "P2002") {
        console.log(`User ${user.email} already exists in target database`);
      } else {
        console.error(`Error migrating user ${user.email}:`, error);
      }
    }
  }
}

migrateData()
  .then(() => console.log("Migration completed"))
  .catch(console.error)
  .finally(async () => {
    await sourceDb.$disconnect();
    await targetDb.$disconnect();
  });
