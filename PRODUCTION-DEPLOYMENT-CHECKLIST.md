# 🚀 Production Deployment Checklist for DTVET Website

## 📧 **CRITICAL: Email Functionality Fix Required**

⚠️ **Current Issue**: Forgot password emails only work for `parivenmc06@gmail.com` due to Resend free tier limitations.

### **Before Going Live, You MUST:**

#### Option 1: Verify a Custom Domain (Recommended)
1. **Go to [resend.com/domains](https://resend.com/domains)**
2. **Add your domain** (e.g., `dtvet.com`, `dtvet-kpintar.com`)
3. **Add DNS records** they provide to your domain provider
4. **Wait for verification** (usually takes a few minutes)
5. **Update the "from" address** in `/app/api/auth/forgot-password/route.ts`:
   ```typescript
   from: 'DTVET <noreply@your-verified-domain.com>'
   ```

#### Option 2: Upgrade Resend Plan
- **Upgrade to paid plan** to send emails to any address
- **More reliable** for production use

---

## 🔑 **Vercel Environment Variables Setup**

### **Step 1: Get Production API Keys**

#### **Stripe Production Keys:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Switch to **"Live mode"** (toggle in top-left)
3. Go to **Developers > API Keys**
4. Copy **Publishable key** (starts with `pk_live_`)
5. Reveal and copy **Secret key** (starts with `sk_live_`)

#### **Stripe Webhook for Production:**
1. Go to **Developers > Webhooks**
2. Click **"Add endpoint"**
3. Set endpoint URL: `https://your-domain.vercel.app/api/webhooks/stripe`
4. Select events: `checkout.session.completed`, `payment_intent.succeeded`
5. Copy the **Signing secret** (starts with `whsec_`)

#### **Generate Secure JWT Secret:**
- Use: https://generate-secret.vercel.app/
- Or generate 64+ character random string

### **Step 2: Add to Vercel**
1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Settings > Environment Variables**
4. **Add these variables:**

```env
# Database
DATABASE_URL=postgresql://neondb_owner:npg_fg5SzOX1odaJ@ep-wandering-moon-a4e83waq-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require

# Security
JWT_SECRET=your_production_jwt_secret_64_chars_minimum

# Stripe (LIVE KEYS)
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_live_webhook_secret

# Email
RESEND_API_KEY=re_your_resend_api_key

# App URLs (replace with your actual domain)
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

# Environment
NODE_ENV=production
```

---

## ✅ **Pre-Launch Testing Checklist**

### **Email Testing:**
- [ ] Verify domain in Resend
- [ ] Test forgot password with multiple email addresses
- [ ] Check emails arrive in inbox (not spam)
- [ ] Test password reset links work

### **Payment Testing:**
- [ ] Test Stripe payments with live keys
- [ ] Verify webhook endpoints work
- [ ] Test successful payment flow
- [ ] Test failed payment handling

### **Authentication Testing:**
- [ ] Test user registration
- [ ] Test user login
- [ ] Test protected routes
- [ ] Test session persistence

### **Database Testing:**
- [ ] Verify database connection
- [ ] Test all CRUD operations
- [ ] Check data persistence

---

## 🚨 **Security Reminders**

- **Never commit** `.env.local` to Git
- **Use LIVE Stripe keys** in production (not test keys)
- **Generate new JWT secret** for production
- **Verify SSL/HTTPS** is working
- **Test all forms** for security vulnerabilities

---

## 🌐 **Domain Configuration**

If using custom domain:
1. **Add domain in Vercel**
2. **Update DNS records**
3. **Update environment variables** with new domain
4. **Update Resend verified domain**
5. **Update Stripe webhook URLs**

---

## 📱 **Final Launch Steps**

1. **Deploy to Vercel**
2. **Test all functionality**
3. **Monitor error logs**
4. **Test from different devices/browsers**
5. **Check mobile responsiveness**
6. **Test payment flow with small amounts**

---

## 🆘 **If Something Goes Wrong**

- **Check Vercel function logs**
- **Verify environment variables**
- **Test API endpoints individually**
- **Check database connectivity**
- **Verify Stripe webhook events**

**The website will work in production, but you MUST fix the email domain issue first!**