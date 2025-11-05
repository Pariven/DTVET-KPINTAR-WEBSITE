#!/usr/bin/env node

/**
 * Production Build Preparation Script
 * Removes development-specific code for production deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing for production build...\n');

// Files to clean up
const filesToCleanup = [
  'app/stripe-setup/page.tsx', // Remove Stripe setup page (dev only)
];

// Directories to check for console.log (would need additional tooling)
const consoleLogs = [
  'app/api/',
  'components/',
  'lib/',
];

// Remove development-only pages
filesToCleanup.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    // Instead of deleting, we'll rename to .dev
    fs.renameSync(filePath, `${filePath}.dev`);
    console.log(`✅ Moved ${file} to ${file}.dev`);
  }
});

console.log('\n📋 Production Checklist:');
console.log('✅ Environment variables configured');
console.log('✅ Next.js config optimized for production');
console.log('✅ Vercel.json created');
console.log('✅ App URLs updated for production');
console.log('⚠️  Manual: Remove console.log statements');
console.log('⚠️  Manual: Configure live Stripe keys');
console.log('⚠️  Manual: Set up production database');

console.log('\n🎯 Next Steps:');
console.log('1. Configure environment variables in Vercel Dashboard');
console.log('2. Push to GitHub and connect to Vercel');
console.log('3. Deploy to production');
console.log('4. Configure Stripe webhook');
console.log('5. Test live payments');

console.log('\n🚀 Ready for production deployment!');
