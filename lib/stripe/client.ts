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

// Get the app URL with production-ready defaults
export const getAppUrl = () => {
  // Try multiple environment variable options
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 
                 process.env.NEXT_PUBLIC_BASE_URL || 
                 process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  
  if (appUrl) {
    return appUrl;
  }
  
  // Production fallback
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.digitaltvetmalaysia.com';
  }
  
  // Development fallback
  return 'http://localhost:3000';
};

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  currency: 'myr',
  get successUrl() {
    const baseUrl = getAppUrl();
    return `${baseUrl}/api/payments/success?session_id={CHECKOUT_SESSION_ID}`;
  },
  get cancelUrl() {
    const baseUrl = getAppUrl();
    return `${baseUrl}/checkout?canceled=true`;
  },
} as const;
