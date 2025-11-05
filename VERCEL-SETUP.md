# 🚀 VERCEL DEPLOYMENT INSTRUCTIONS

## ✅ **PRODUCTION CODE READY**

Your DTVET website is production-ready with:
- ✅ Customer-facing fee structure (FPX: +RM1, Cards/Wallets: +RM2.50)
- ✅ Live Stripe integration configured
- ✅ All debug code removed
- ✅ TypeScript errors resolved
- ✅ Production optimized & security hardened

---

## 🌐 **DEPLOY TO VERCEL**

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import repository: `DTVET-KPINTAR-WEBSITE`
5. Branch: `production` (or `master`)

### Step 2: Configure Environment Variables
Add these in Vercel project settings:

```bash
# Stripe (Get from your Stripe Dashboard)
STRIPE_PUBLISHABLE_KEY=pk_live_... 
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Website
NEXT_PUBLIC_BASE_URL=https://www.digitaltvetmalaysia.com

# Database (Your PostgreSQL connection)
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Security
JWT_SECRET=your-strong-secret-key

# Optional: Webhook (configure after deployment)
STRIPE_WEBHOOK_SECRET=whsec_...
```

### Step 3: Deploy
1. Click "Deploy" 
2. Wait for build completion
3. Your site will be live!

---

## 🎯 **POST-DEPLOYMENT**

### Domain Setup
1. Vercel Dashboard → Project → Settings → Domains
2. Add: `www.digitaltvetmalaysia.com`
3. Configure DNS as instructed

### Database Migration
Run in Vercel Functions or locally:
```bash
npx prisma migrate deploy
```

---

## 🎉 **READY FOR BUSINESS**

Your website will be live with:
- 💳 Live Stripe payments
- 📱 Mobile-responsive design  
- 🔒 Secure user authentication
- 💰 Transparent customer pricing
- 📊 Payment tracking dashboard

**Start accepting payments immediately!** 🚀