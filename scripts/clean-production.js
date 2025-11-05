/**
 * Production Cleanup Script
 * Removes all console.log and debug statements from production code
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to clean (exclude node_modules and keep only essential error logging)
const filesToClean = [
  // Dashboard and Payment System
  './app/dashboard/payments/page.tsx',
  './app/api/payments/verify/route.ts', 
  './app/api/test-payment/route.ts',
  './app/api/payments/complete-test/route.ts',
  './components/student-dashboard.tsx',
  './middleware.ts',
  './lib/store.ts',
  './lib/auth-utils.ts',
  
  // Keep essential error logging in these components
  // './components/its-certification-content.tsx',
  // './components/certification-detail-content.tsx',
  // './components/mce-certification-section.tsx', 
  // './components/mos-certification-section.tsx',
  // './contexts/cart-context.tsx'
];

function cleanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements (but keep console.error for production error logging)
    const cleanedContent = content
      .replace(/\s*console\.log\([^)]*\);?\s*/g, '')
      .replace(/^\s*console\.log\([^)]*\);?\s*$/gm, '')
      // Remove multi-line console.log statements
      .replace(/console\.log\(\s*['"`][^'"`]*\n[^)]*\);?/g, '')
      // Clean up extra empty lines
      .replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`✅ Cleaned: ${filePath}`);
    } else {
      console.log(`ℹ️ No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🧹 Starting production cleanup...\n');
  
  filesToClean.forEach(file => {
    if (fs.existsSync(file)) {
      cleanFile(file);
    } else {
      console.log(`⚠️ File not found: ${file}`);
    }
  });
  
  console.log('\n✅ Production cleanup complete!');
  console.log('📝 Essential error logging preserved in components for better user experience');
}

if (require.main === module) {
  main();
}