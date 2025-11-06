import Stripe from 'stripe';

// Lazy initialization of Stripe client to avoid build-time errors
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
    }
    
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      typescript: true,
    });
  }
  return stripeInstance;
};

// For backward compatibility
export const stripe = new Proxy({} as Stripe, {
  get: (target, prop) => {
    return getStripe()[prop as keyof Stripe];
  },
});

// Get the app URL with production-ready defaults - FORCE LOCALHOST FOR DEVELOPMENT
export const getAppUrl = () => {
  // FORCE development URL to prevent undefined issues
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  
  if (isDev) {
    console.log('🌐 getAppUrl: Forcing localhost for development');
    return 'http://localhost:3000';
  }
  
  // Try multiple environment variable options for production
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 
                 process.env.NEXT_PUBLIC_BASE_URL || 
                 process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  
  console.log('🌐 getAppUrl Debug (Production):', {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    VERCEL_URL: process.env.VERCEL_URL,
    NODE_ENV: process.env.NODE_ENV,
    resolvedAppUrl: appUrl
  });
  
  if (appUrl) {
    return appUrl;
  }
  
  // Production fallback
  return 'https://www.digitaltvetmalaysia.com';
};

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  currency: 'myr',
  get successUrl() {
    const baseUrl = getAppUrl();
    const successUrl = `${baseUrl}/api/payments/success?session_id={CHECKOUT_SESSION_ID}`;
    console.log('🎯 STRIPE_CONFIG.successUrl generated:', { baseUrl, successUrl });
    return successUrl;
  },
  get cancelUrl() {
    const baseUrl = getAppUrl();
    const cancelUrl = `${baseUrl}/checkout?canceled=true`;
    console.log('🔄 STRIPE_CONFIG.cancelUrl generated:', { baseUrl, cancelUrl });
    return cancelUrl;
  },
} as const;
