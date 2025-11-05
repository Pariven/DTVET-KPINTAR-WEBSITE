import Stripe from 'stripe';

// Lazy initialization of Stripe client to avoid build-time errors
let stripeInstance: Stripe | null = null;

export const getStripe = (): Stripe => {
  if (!stripeInstance) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
    }
    
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-10-29.clover',
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
const getAppUrl = () => {
  // Always prefer environment variable
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  
  // Production fallback - should be set via Vercel environment variables
  if (process.env.NODE_ENV === 'production') {
    // This should never be used in production - always set NEXT_PUBLIC_APP_URL
    throw new Error('NEXT_PUBLIC_APP_URL must be set in production environment');
  }
  
  // Development fallback
  return 'http://localhost:3000';
};

export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  currency: 'myr',
  successUrl: `${getAppUrl()}/dashboard/payments?success=true&session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${getAppUrl()}/dashboard?canceled=true`,
} as const;
