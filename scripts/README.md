# Database Migration and Population Scripts

This folder contains scripts to enhance your Neon database with advanced user management capabilities.

## Scripts Overview

### 1. `setup-enhanced-db.ts` - Complete Setup (Recommended)
Runs the full database enhancement process:
- Executes database migration
- Regenerates Prisma client
- Populates user data from existing payments

**Usage:**
```bash
npm run db:setup
```

### 2. `migrate-enhanced-db.ts` - Database Migration Only
Adds new tables and columns to your existing database:
- Enhances User table with profile fields
- Creates course_enrollments table
- Creates user_progress table for learning analytics
- Creates achievements table for gamification
- Adds proper indexes and constraints

**Usage:**
```bash
npm run db:migrate
```

### 3. `populate-user-data.ts` - Data Population Only
Populates the new tables with data from existing payments:
- Updates user statistics (total spent, courses owned)
- Creates course enrollment records from payment data

**Usage:**
```bash
npm run db:populate
```

## What Gets Enhanced

### User Table Additions:
- `phone` - User phone number
- `profileImage` - Profile picture URL
- `city` - User city
- `company` - User company
- `linkedIn` - LinkedIn profile URL
- `bio` - User biography
- `lastLoginAt` - Last login timestamp
- `totalSpent` / `totalspent` - Total amount spent
- `coursesOwned` / `coursesowned` - Number of courses owned

### New Tables:
- **course_enrollments**: Tracks user course purchases and status
- **user_progress**: Learning analytics and progress tracking
- **achievements**: Gamification badges and certificates

### Payment Table Enhancements:
- `receiptNumber` - Unique receipt identifier
- `paymentMethod` - Payment method used
- `coursesCount` - Number of courses in payment

### CartItem Table Enhancements:
- `provider` - Course provider (Microsoft, etc.)
- `category` - Course category
- `examCode` - Certification exam code

## Database Schema

The enhanced schema supports:
- ✅ Complete user profile management
- ✅ Course enrollment tracking
- ✅ Learning progress analytics
- ✅ Achievement and gamification systems
- ✅ Payment history with detailed metadata
- ✅ Performance optimized with proper indexes

## Running the Scripts

### First Time Setup:
```bash
# Complete setup (recommended)
npm run db:setup
```

### Individual Operations:
```bash
# Only run migration
npm run db:migrate

# Only populate data (run after migration)
npm run db:populate
```

## Prerequisites

- Neon database configured in `.env`
- Prisma client installed
- TypeScript and ts-node available

## Troubleshooting

### If you get TypeScript errors:
1. Make sure Prisma client is generated: `npx prisma generate`
2. Check your `.env` file has correct `DATABASE_URL`

### If migration fails:
- Most statements are designed to be safe to re-run
- Check your Neon database console for any constraint violations

### If population fails:
- Ensure the migration ran successfully first
- Check that you have existing payment data to process

## Support

These scripts are designed to enhance your existing Neon database without losing any data. All operations include error handling and can be safely re-run.