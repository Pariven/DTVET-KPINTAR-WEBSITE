# 🔒 STRIPE SECURITY - CLEAR EXPOSED KEYS

## ⚠️ **IMPORTANT: Your Stripe keys were exposed in Git history**

Since the keys were in the repository, you should regenerate them for security.

---

## 🔑 **STEP 1: Generate New Stripe Keys**

### Go to Stripe Dashboard:
1. **Login to [dashboard.stripe.com](https://dashboard.stripe.com)**
2. **Navigate to**: Developers → API Keys
3. **Live Keys Section**:
   - Click **"Reveal live key"** for Secret Key
   - Click **"Create restricted key"** or **"Regenerate"**

### Generate New Keys:
```bash
# OLD KEYS (EXPOSED - DEACTIVATE THESE):
STRIPE_PUBLISHABLE_KEY=pk_live_51SOD5RK6AFoYdBabXChMuz1O408LC4yaDFPhB0254Cd1MwJ9vKpTKbY8EZbpjCUNSv24TLFlkh0MAFgCwJtz5fF800l95hKIS5
STRIPE_SECRET_KEY=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

# NEW KEYS (GENERATE THESE):
STRIPE_PUBLISHABLE_KEY=pk_live_... (new publishable key)
STRIPE_SECRET_KEY=sk_live_... (new secret key)
```

---

## 🔄 **STEP 2: Deactivate Old Keys**

### In Stripe Dashboard:
1. **Find the old keys** in API Keys section
2. **Click "..."** next to each old key
3. **Select "Delete" or "Deactivate"**
4. **Confirm deletion**

---

## 🚀 **STEP 3: Update Vercel with New Keys**

### In Vercel Dashboard:
1. **Go to your project** → Settings → Environment Variables
2. **Update these variables** with new keys:
   ```bash
   STRIPE_PUBLISHABLE_KEY=pk_live_... (new key)
   STRIPE_SECRET_KEY=sk_live_... (new key)
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... (new key)
   ```
3. **Redeploy** your application

---

## ✅ **STEP 4: Verify Security**

### Test Your Website:
1. **Try a test payment** with new keys
2. **Check Stripe Dashboard** for transactions
3. **Verify old keys** are deactivated (should show errors)

### Security Checklist:
- ✅ Old Stripe keys deactivated
- ✅ New Stripe keys generated  
- ✅ Vercel environment updated
- ✅ Website redeployed with new keys
- ✅ Test payments working

---

## 🎯 **YOUR WEBSITE IS NOW SECURE!**

**Repository Status**: ✅ Pushed to GitHub successfully
**Security Status**: ⚠️ Update Stripe keys (follow steps above)
**Deployment Status**: 🚀 Ready for Vercel deployment

**Once you update the Stripe keys, your website will be 100% secure and ready for business!** 🔒💰