import { env } from 'process';

export const ENV = {
  DATABASE_URL: env.DATABASE_URL || '',
  JWT_SECRET: env.JWT_SECRET || 'your-default-secret-key',
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL'] as const;
for (const envVar of requiredEnvVars) {
  if (!ENV[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
