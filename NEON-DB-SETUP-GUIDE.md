# 🚀 Neon DB Setup Guide for Enhanced User Management

## Current Setup ✅
Your Neon DB is already configured and working with:
- User authentication (login/signup)
- Payment processing with Stripe
- Cart management
- Basic payment history

## What You Need to Do for Enhanced User Management

### Option 1: Manual Table Creation (Recommended - Safe)

**Step 1:** Go to your [Neon Console](https://console.neon.tech/)

**Step 2:** Navigate to your database and open the SQL Editor

**Step 3:** Run these SQL commands one by one:

```sql
-- Add new columns to existing User table
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS profileImage TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'english';
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS city TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS occupation TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS bio TEXT;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS lastLoginAt TIMESTAMP(3);
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS totalSpent DOUBLE PRECISION DEFAULT 0;
ALTER TABLE "User" ADD COLUMN IF NOT EXISTS coursesOwned INTEGER DEFAULT 0;
```

```sql
-- Create Course Enrollments table
CREATE TABLE course_enrollments (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "paymentId" TEXT NOT NULL,
    "certificationId" TEXT NOT NULL,
    "certificationName" TEXT NOT NULL,
    provider TEXT NOT NULL,
    category TEXT NOT NULL,
    "examCode" TEXT,
    price DOUBLE PRECISION NOT NULL,
    "logoUrl" TEXT,
    status TEXT NOT NULL DEFAULT 'ACTIVE',
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "certificateUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE,
    FOREIGN KEY ("paymentId") REFERENCES "Payment"(id) ON DELETE CASCADE
);
```

```sql
-- Create User Progress table
CREATE TABLE user_progress (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "enrollmentId" TEXT NOT NULL,
    "progressPercent" INTEGER NOT NULL DEFAULT 0,
    "timeSpentMinutes" INTEGER NOT NULL DEFAULT 0,
    "lastAccessed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modulesCompleted" INTEGER NOT NULL DEFAULT 0,
    "totalModules" INTEGER NOT NULL DEFAULT 10,
    notes TEXT,
    bookmarks JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE,
    FOREIGN KEY ("enrollmentId") REFERENCES course_enrollments(id) ON DELETE CASCADE,
    
    UNIQUE("userId", "enrollmentId")
);
```

```sql
-- Create Achievements table
CREATE TABLE achievements (
    id TEXT PRIMARY KEY,
    "userId" TEXT NOT NULL,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    "certificationId" TEXT,
    "badgeUrl" TEXT,
    "certificateUrl" TEXT,
    points INTEGER NOT NULL DEFAULT 0,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "verificationCode" TEXT UNIQUE,
    
    FOREIGN KEY ("userId") REFERENCES "User"(id) ON DELETE CASCADE
);
```

```sql
-- Add indexes for better performance
CREATE INDEX idx_course_enrollments_user ON course_enrollments("userId");
CREATE INDEX idx_course_enrollments_payment ON course_enrollments("paymentId");
CREATE INDEX idx_user_progress_user ON user_progress("userId");
CREATE INDEX idx_achievements_user ON achievements("userId");
```

### Option 2: Using Prisma CLI (If you prefer automated)

```bash
# Generate new Prisma client
npx prisma generate

# Apply schema changes (this will prompt for confirmation)
npx prisma db push
```

## Enhanced API Endpoints Already Created ✅

I've created these new API endpoints for you:

1. **`/api/user/profile`** - Enhanced user dashboard data
2. **`/api/user/dashboard`** - Complete user management (needs new schema)

## What This Gives You

### For Each User Account:
- ✅ **Complete Profile Management** - Phone, avatar, bio, preferences
- ✅ **Course Enrollment Tracking** - Know exactly which courses they own
- ✅ **Progress Monitoring** - Track learning progress, time spent
- ✅ **Achievement System** - Badges, certificates, milestones
- ✅ **Detailed Analytics** - Learning patterns, engagement metrics

### For Your Dashboard:
- ✅ **User Statistics** - Total spent, courses owned, progress
- ✅ **Course Analytics** - Which courses are popular
- ✅ **Revenue Tracking** - Detailed financial reporting
- ✅ **Engagement Metrics** - Who's actively learning

## Sample Data You'll Get

```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "totalSpent": 450.00,
    "coursesOwned": 8,
    "language": "english",
    "occupation": "Software Developer"
  },
  "statistics": {
    "totalCourses": 8,
    "completedCourses": 3,
    "averageProgress": 65,
    "learningStreak": 7
  },
  "courses": [
    {
      "name": "Microsoft Excel Expert",
      "provider": "Microsoft",
      "progress": 85,
      "timeSpent": 120,
      "status": "active"
    }
  ],
  "achievements": [
    {
      "title": "First Purchase",
      "type": "milestone",
      "points": 100,
      "issuedAt": "2024-01-15"
    }
  ]
}
```

## Benefits for Your Business

### User Retention
- Users can track their learning progress
- Achievement system keeps them engaged
- Clear course ownership and access

### Business Intelligence
- Know your most valuable customers
- Track course completion rates
- Optimize course offerings based on data

### Customer Support
- Complete user history for support tickets
- Easy verification of course ownership
- Clear payment and enrollment records

## Next Steps

1. **Choose Option 1 (Manual)** or **Option 2 (Automated)** above
2. **Run the SQL commands** in your Neon console
3. **Test the new `/api/user/profile` endpoint**
4. **Update your dashboard** to use the new data

Would you like me to help you with any specific step or show you how to test the new features?