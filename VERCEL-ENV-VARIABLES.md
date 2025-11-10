# Vercel Environment Variables Setup

## Required Environment Variables for Production Deployment

Add these environment variables in your Vercel dashboard:

### 1. Database Configuration
```
DATABASE_URL=postgresql://neondb_owner:npg_fg5SzOX1odaJ@ep-wandering-moon-a4e83waq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### 2. JWT Secret (Generate a secure one for production)
```
JWT_SECRET=your_super_secure_production_jwt_secret_64_characters_minimum_here
```

### 3. Stripe Configuration (PRODUCTION KEYS - NOT TEST KEYS)
```
STRIPE_SECRET_KEY=sk_live_your_live_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_stripe_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret_here
```

### 4. Email Configuration (Resend)
```
RESEND_API_KEY=re_your_production_resend_api_key_here
```

### 5. Application URLs
```
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### 6. Node Environment
```
NODE_ENV=production
```

## 🔧 How to Add These in Vercel:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add each variable one by one
5. Make sure to select "Production" environment
6. Redeploy your application

## ⚠️ Important Notes:

### For Stripe:
- **Use LIVE keys** (starting with `sk_live_` and `pk_live_`)
- **NOT test keys** (starting with `sk_test_` and `pk_test_`)
- Test your Stripe integration thoroughly before going live

### For Resend Email:
- You MUST verify a custom domain for production
- Or upgrade to a paid Resend plan
- The current setup only works for `parivenmc06@gmail.com`

### For JWT Secret:
- Generate a secure random string (64+ characters)
- Never use the development JWT secret in production
- You can generate one at: https://generate-secret.vercel.app/

## 🚨 Security Checklist:
- [ ] All API keys are production keys (not test/development)
- [ ] JWT secret is secure and different from development
- [ ] Database URL is production database
- [ ] Domain is verified in Resend (for email functionality)
- [ ] Stripe webhook endpoints are configured for production domain