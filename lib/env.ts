import { env } from 'process';

export const ENV = {
  DATABASE_URL: env.DATABASE_URL || '',
  JWT_SECRET: env.JWT_SECRET || 'your-default-secret-key',
  NEXT_PUBLIC_APP_URL: env.NEXT_PUBLIC_APP_URL || env.NEXT_PUBLIC_BASE_URL || 'https://www.digitaltvetmalaysia.com',
  NEXT_PUBLIC_BASE_URL: env.NEXT_PUBLIC_BASE_URL || 'https://www.digitaltvetmalaysia.com',
};

// Validate required environment variables
const requiredEnvVars = ['DATABASE_URL'] as const;
for (const envVar of requiredEnvVars) {
  if (!ENV[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
