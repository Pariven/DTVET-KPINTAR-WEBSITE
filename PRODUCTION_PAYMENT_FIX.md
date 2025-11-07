# 🚨 Production Payment Issue - Troubleshooting Guide

## Issue: Payment redirects to login page instead of processing

### Root Cause Analysis

The issue where clicking "Pay" redirects to the login page is typically caused by:

1. **Authentication Token Expiration**: JWT tokens expire after 24 hours
2. **Environment Variable Mismatch**: Missing or incorrect production environment variables
3. **Cookie/Session Issues**: SameSite or secure cookie problems in production
4. **API Route Authentication**: Middleware not properly protecting/authenticating routes

### Immediate Fixes Applied

#### 1. Fixed JWT Verification Mismatch
- **Problem**: Middleware was using `jose` library while API routes used `jsonwebtoken`
- **Fix**: Updated middleware to use consistent `jsonwebtoken` library
- **Files**: `middleware.ts`

#### 2. Enhanced Token Authentication
- **Problem**: Multiple token storage methods not properly checked
- **Fix**: Updated payment components to check localStorage, cookies, and auth store
- **Files**: `components/payment/simple-stripe-button.tsx`

#### 3. Fixed Stripe URL Configuration
- **Problem**: Hardcoded URLs not working in production
- **Fix**: Used dynamic `getAppUrl()` function with production fallbacks
- **Files**: `lib/stripe/client.ts`

#### 4. Updated Middleware Protection
- **Problem**: Checkout and Stripe API routes not properly protected
- **Fix**: Added missing routes to middleware matcher
- **Files**: `middleware.ts`

### Production Environment Variables Checklist

Ensure these are configured in Vercel:

```bash
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://user:pass@host.neon.tech/db?sslmode=require&pgbouncer=true"
DIRECT_URL="postgresql://user:pass@host.neon.tech/db?sslmode=require"

# JWT Secret (64+ characters)
JWT_SECRET="your_secure_64_character_jwt_secret"

# Stripe LIVE Keys
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# App URLs
NEXT_PUBLIC_APP_URL="https://www.digitaltvetmalaysia.com"
NEXT_PUBLIC_BASE_URL="https://www.digitaltvetmalaysia.com"
```

### Testing Steps

1. **Verify Authentication**: Login and check if token is stored
2. **Check Network Tab**: Look for 401 errors in payment requests
3. **Verify Environment**: Check if all required env vars are set
4. **Test Token Expiry**: Try payment after being logged in for >24 hours

### Quick Production Deploy

1. **Commit fixes**:
```bash
git add .
git commit -m "Fix: Authentication and payment redirect issues"
git push origin master
```

2. **Redeploy on Vercel**: Auto-deploy will trigger

3. **Verify Environment Variables** in Vercel dashboard

### Monitoring & Debugging

Add these debugging headers to API requests:
- Check token presence in both Authorization header and cookies
- Log authentication flow in browser console
- Monitor Vercel function logs for authentication errors

### Next Steps

1. Deploy the fixes
2. Test payment flow on production
3. Check Vercel function logs for errors
4. Verify Stripe webhook configuration