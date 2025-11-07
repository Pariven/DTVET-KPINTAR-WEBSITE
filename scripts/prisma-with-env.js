const { spawnSync } = require('child_process');
// Load local .env if present so Prisma sees DATABASE_URL
try {
  require('dotenv').config({ path: require('path').resolve(process.cwd(), '.env') });
  console.log('Loaded .env into process.env');
} catch (e) {
  console.warn('dotenv not available or failed to load .env (this is optional)');
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node prisma-with-env.js <prisma-args>');
  process.exit(1);
}

const cmd = 'npx';
const cmdArgs = ['prisma', ...args];
console.log('Running:', cmd, cmdArgs.join(' '));
const res = spawnSync(cmd, cmdArgs, { stdio: 'inherit', shell: true });
process.exit(res.status);
