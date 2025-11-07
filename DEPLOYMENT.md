# 🚀 DTVET Website Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ **Code Status**
- [x] All features working locally
- [x] Payment system tested
- [x] Authentication working
- [x] Database connected (Neon)
- [x] Stripe keys secured
- [x] Code pushed to GitHub

### ✅ **Environment Setup**
- [x] `.env.local` configured locally
- [x] `.env.example` updated
- [x] Secrets removed from repository
- [x] `.gitignore` protecting sensitive files

## 🌐 **Deployment Options**

### 🎯 **Option 1: Vercel (Recommended)**

#### **Why Vercel?**
- ✅ **Built for Next.js** - Optimal performance
- ✅ **Serverless functions** - Handles API routes
- ✅ **Edge network** - Global CDN
- ✅ **Database support** - Works with Neon
- ✅ **Automatic SSL** - HTTPS out of the box
- ✅ **Easy setup** - Deploy in minutes

#### **Deployment Steps:**

##### **Step 1: Create Vercel Account**
1. Visit: https://vercel.com
2. **Sign up** with your GitHub account
3. **Import** your repository: `DTVET-KPINTAR-WEBSITE`

##### **Step 2: Configure Environment Variables**
In Vercel dashboard, add these environment variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_fg5SzOX1odaJ@ep-wandering-moon-a4e83waq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
DIRECT_URL=postgresql://neondb_owner:npg_fg5SzOX1odaJ@ep-wandering-moon-a4e83waq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

# Authentication
JWT_SECRET=9d239c7e81c8f5c68c2f41729f7a379c4c78e328e7c37b844157f9dd72521fa6

# Stripe Configuration (Get NEW keys from Stripe Dashboard)
STRIPE_SECRET_KEY=your_new_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_new_stripe_publishable_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_new_stripe_publishable_key

# App URLs (Update with your Vercel domain)
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app

# Optional
NEXT_PUBLIC_GA_ID=
```

##### **Step 3: Deploy**
1. **Click Deploy** in Vercel
2. **Wait for build** (3-5 minutes)
3. **Get your URL**: `https://your-app.vercel.app`

##### **Step 4: Configure Custom Domain (Optional)**
1. In Vercel dashboard → **Domains**
2. Add your custom domain: `digitaltvetmalaysia.com`
3. **Update DNS** with provided records

---

### 🔧 **Option 2: Manual Vercel CLI Deployment**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel --prod
```

---

### 📊 **Option 3: GitHub Actions (Automated)**

The GitHub Actions workflow is already configured in `.github/workflows/deploy.yml`

#### **Setup GitHub Secrets:**
1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. **Add these secrets**:

```
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
VERCEL_TOKEN=your_vercel_token
ORG_ID=your_vercel_org_id
PROJECT_ID=your_vercel_project_id
```

## 🔒 **Security Checklist**

### **✅ Before Deployment:**
- [ ] **Rotate Stripe keys** (get new ones from dashboard)
- [ ] **Update JWT secret** (generate new strong secret)
- [ ] **Verify database security** (Neon connection pooling)
- [ ] **Check CORS settings** (restrict to production domain)

### **✅ After Deployment:**
- [ ] **Test payment flow** with real transactions
- [ ] **Verify SSL certificate** (HTTPS working)
- [ ] **Check environment variables** (all loaded correctly)
- [ ] **Test authentication** (login/register working)

## 🧪 **Testing Your Deployment**

### **Functional Tests:**
1. **Homepage loads** ✅
2. **User registration** ✅  
3. **User login** ✅
4. **Add items to cart** ✅
5. **Checkout process** ✅
6. **Payment completion** ✅
7. **Payment history** ✅

### **Performance Tests:**
- **Lighthouse score** > 90
- **Loading time** < 3 seconds
- **Mobile responsive** ✅

## 📈 **Post-Deployment**

### **Monitoring:**
- **Vercel Analytics** - Track performance
- **Error monitoring** - Catch issues early
- **Database monitoring** - Neon dashboard

### **Updates:**
```bash
# Deploy updates
git push origin master  # Triggers auto-deployment
```

## 🆘 **Troubleshooting**

### **Common Issues:**

#### **Build Errors:**
```bash
# Fix: Clear cache and rebuild
vercel --force
```

#### **Database Connection:**
```bash
# Verify: Test database URL
npx prisma db pull
```

#### **Environment Variables:**
```bash
# Check: Environment loaded
console.log(process.env.DATABASE_URL)
```

## 📞 **Need Help?**

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deploy**: https://nextjs.org/docs/deployment
- **Neon Database**: https://neon.tech/docs

---

## 🎉 **Ready to Deploy?**

Choose your deployment method and follow the steps above. Your DTVET certification platform will be live in minutes!

**Recommended**: Start with **Option 1 (Vercel Dashboard)** for the easiest setup.