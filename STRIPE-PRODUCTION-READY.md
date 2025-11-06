# 🚀 Stripe Production Deployment Guide

## ✅ Completed Steps

### 1. **Test Keys Removed**
- ❌ Removed test secret key: `sk_test_51SOD5RK6AFoYdBa...`
- ❌ Removed test publishable key from codebase
- ✅ Added production publishable key: `pk_live_51SOD5RK6AFoYdBab...`

### 2. **Environment Configuration**
- ✅ Updated `.env.local` for local development (commented out secret key)
- ✅ Created `.env.production` template
- ✅ Production URLs configured: `https://www.digitaltvetmalaysia.com`

## 🔑 Required Vercel Environment Variables

You MUST set these in Vercel Dashboard → Project → Settings → Environment Variables:

### **Critical Variables:**
```bash
STRIPE_SECRET_KEY=sk_live_your_actual_production_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_actual_production_webhook_secret_here
```

### **Optional Variables:**
```bash
DATABASE_URL=postgresql://your_production_database_url
DIRECT_URL=postgresql://your_production_database_url
JWT_SECRET=your_production_jwt_secret_64_chars
```

## 📋 Deployment Checklist

### **Before Deployment:**
- [ ] Get your LIVE Stripe secret key from Stripe Dashboard (Live mode)
- [ ] Get your LIVE webhook secret from Stripe webhooks
- [ ] Verify production domain is correct: `digitaltvetmalaysia.com`
- [ ] Test payment system in Stripe test mode locally first

### **In Vercel Dashboard:**
- [ ] Set `STRIPE_SECRET_KEY` to your live key
- [ ] Set `STRIPE_WEBHOOK_SECRET` to your live webhook secret
- [ ] Set `NODE_ENV` to `production`
- [ ] Deploy the application

### **After Deployment:**
- [ ] Verify Stripe is in Live mode (no "TEST" badge)
- [ ] Test with a small real payment (RM 0.50 test)
- [ ] Verify webhooks are working correctly
- [ ] Check all payment redirects work properly

## 🛡️ Security Notes

### **What's Safe in Code:**
✅ **Publishable Key**: `pk_live_...` (Safe to expose - already in code)
✅ **Public URLs**: Domain names and public endpoints

### **What Must Stay Secret:**
❌ **Secret Key**: `sk_live_...` (NEVER commit to code)
❌ **Webhook Secret**: `whsec_...` (NEVER commit to code)
❌ **Database URLs**: Keep in environment variables only

## 🔍 Verification Commands

### **Check Environment:**
```bash
# In production, these should work:
echo $STRIPE_SECRET_KEY  # Should start with sk_live_
echo $NODE_ENV           # Should be "production"
```

### **Test Stripe Connection:**
The application will automatically validate:
- Stripe secret key exists
- Live mode is active
- Webhook signatures are valid

## ⚡ Quick Deploy

1. **Push to GitHub**
2. **Set Environment Variables in Vercel**
3. **Deploy**
4. **Test with small payment**

## 🎯 Production Status

- ✅ **Code Ready**: All test keys removed
- ✅ **Public Key**: Live key configured  
- ⏳ **Secret Key**: Must be set in Vercel
- ⏳ **Webhook**: Must be configured in Stripe
- ⏳ **Deploy**: Ready for production deployment

Your application is now **production-ready**! 🚀

Set the secret key in Vercel and deploy!