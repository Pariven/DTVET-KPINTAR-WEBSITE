-- Enhanced User Management Schema for Neon DB
-- This adds new tables while preserving existing data

-- Add new columns to existing User table
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "phone" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "profileImage" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "language" TEXT DEFAULT 'english';
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "country" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "city" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "occupation" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "company" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "linkedIn" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "bio" TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "lastLoginAt" TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "totalSpent" DOUBLE PRECISION DEFAULT 0;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS "coursesOwned" INTEGER DEFAULT 0;

-- Add new columns to existing Payment table
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "receiptNumber" TEXT;
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "paymentMethod" TEXT;
ALTER TABLE "Payment" ADD COLUMN IF NOT EXISTS "coursesCount" INTEGER DEFAULT 0;

-- Add new columns to existing CartItem table
ALTER TABLE "CartItem" ADD COLUMN IF NOT EXISTS "provider" TEXT DEFAULT 'Unknown';
ALTER TABLE "CartItem" ADD COLUMN IF NOT EXISTS "category" TEXT;
ALTER TABLE "CartItem" ADD COLUMN IF NOT EXISTS "examCode" TEXT;

-- Create Course Enrollments table
CREATE TABLE IF NOT EXISTS "course_enrollments" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "certificationId" TEXT NOT NULL,
    "certificationName" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "examCode" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "logoUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "certificateUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "course_enrollments_pkey" PRIMARY KEY ("id")
);

-- Create User Progress table
CREATE TABLE IF NOT EXISTS "user_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "progressPercent" INTEGER NOT NULL DEFAULT 0,
    "timeSpentMinutes" INTEGER NOT NULL DEFAULT 0,
    "lastAccessed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modulesCompleted" INTEGER NOT NULL DEFAULT 0,
    "totalModules" INTEGER NOT NULL DEFAULT 10,
    "notes" TEXT,
    "bookmarks" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

-- Create Achievements table
CREATE TABLE IF NOT EXISTS "achievements" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "certificationId" TEXT,
    "badgeUrl" TEXT,
    "certificateUrl" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "verificationCode" TEXT,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS "course_enrollments_userId_idx" ON "course_enrollments"("userId");
CREATE INDEX IF NOT EXISTS "course_enrollments_paymentId_idx" ON "course_enrollments"("paymentId");
CREATE INDEX IF NOT EXISTS "course_enrollments_certificationId_idx" ON "course_enrollments"("certificationId");

CREATE INDEX IF NOT EXISTS "user_progress_userId_idx" ON "user_progress"("userId");
CREATE INDEX IF NOT EXISTS "user_progress_enrollmentId_idx" ON "user_progress"("enrollmentId");

CREATE INDEX IF NOT EXISTS "achievements_userId_idx" ON "achievements"("userId");
CREATE INDEX IF NOT EXISTS "achievements_type_idx" ON "achievements"("type");
CREATE INDEX IF NOT EXISTS "achievements_verificationCode_idx" ON "achievements"("verificationCode");

-- Add unique constraints
CREATE UNIQUE INDEX IF NOT EXISTS "user_progress_userId_enrollmentId_key" ON "user_progress"("userId", "enrollmentId");
CREATE UNIQUE INDEX IF NOT EXISTS "achievements_verificationCode_key" ON "achievements"("verificationCode");
CREATE UNIQUE INDEX IF NOT EXISTS "Payment_receiptNumber_key" ON "Payment"("receiptNumber");

-- Add foreign key constraints
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_userId_fkey" 
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    
ALTER TABLE "course_enrollments" ADD CONSTRAINT "course_enrollments_paymentId_fkey" 
    FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_userId_fkey" 
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_enrollmentId_fkey" 
    FOREIGN KEY ("enrollmentId") REFERENCES "course_enrollments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "achievements" ADD CONSTRAINT "achievements_userId_fkey" 
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;