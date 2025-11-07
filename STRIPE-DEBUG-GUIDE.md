# 🧪 Stripe Integration Test & Debug Guide

## 🚨 Resolving Stripe Resource Loading Errors

Based on your screenshot showing `net::ERR_BLOCKED_BY_CLIENT` errors, here are the solutions:

### 1. **Browser/Ad Blocker Issues**
The `ERR_BLOCKED_BY_CLIENT` errors suggest that browser extensions or ad blockers are blocking Stripe resources.

**Solutions:**
```bash
1. Disable ad blockers (uBlock Origin, AdBlock, etc.)
2. Add Stripe domains to allowlist:
   - https://r.stripe.com/*
   - https://api.stripe.com/*
   - https://js.stripe.com/*
```

### 2. **Test Stripe Integration**
Open browser console and run:
```javascript
// Test 1: Check if Stripe is loaded
console.log('Stripe available:', window.Stripe);

// Test 2: Check publishable key
console.log('Stripe key:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// Test 3: Check network requests
fetch('/api/stripe/checkout-simple', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items: [] })
}).then(r => console.log('API Status:', r.status));
```

### 3. **Alternative Success URL Configuration**
I've created two redirect options:

#### Option A: API-based redirect (Current)
- Success URL: `/api/payments/success?session_id={CHECKOUT_SESSION_ID}`
- Redirects to: `/dashboard/payments?success=true`

#### Option B: Direct page redirect (New)
- Success URL: `/payment-success?session_id={CHECKOUT_SESSION_ID}`  
- Redirects to: `/dashboard/payments?success=true`

### 4. **Testing Payment Flow**

#### Test with Stripe Test Cards:
```
✅ Success: 4242424242424242
❌ Decline: 4000000000000002
💳 Expiry: Any future date (12/25)
🔒 CVC: Any 3 digits (123)
📍 ZIP: Any 5 digits (12345)
```

#### Expected Flow:
```
1. Add courses to cart
2. Go to checkout
3. Click "Pay RM X.XX"
4. Stripe checkout opens
5. Enter test card: 4242424242424242
6. Complete payment
7. Redirect to: /dashboard/payments?success=true
8. See success message & course history
```

## 🔧 Manual Testing Steps

### Step 1: Clear Browser Data
```bash
1. Clear all cookies for localhost:3000
2. Clear localStorage/sessionStorage
3. Disable all browser extensions temporarily
4. Use incognito/private browsing mode
```

### Step 2: Test Authentication
```bash
1. Visit http://localhost:3000/login
2. Login with your account
3. Check console for auth token
4. Verify no authentication errors
```

### Step 3: Test Cart & Checkout
```bash
1. Add Adobe Photoshop course to cart
2. Verify course image shows (not generic Adobe logo)
3. Go to /checkout
4. Click "Pay" button
5. Check console for any errors
```

### Step 4: Test Stripe Redirect
```bash
1. Complete test payment with 4242424242424242
2. Should redirect to /dashboard/payments
3. Should show success message
4. Should display purchased course in history
```

## 🛠️ Troubleshooting Specific Issues

### If ERR_BLOCKED_BY_CLIENT persists:
```javascript
// Add to browser console to bypass (temporary):
localStorage.setItem('stripe_test_mode', 'true');

// Or test with curl:
curl -X POST http://localhost:3000/api/stripe/checkout-simple \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"items":[{"certificationId":"1","certificationName":"Test","price":2}]}'
```

### If redirect doesn't work:
```javascript
// Manual redirect test in console:
window.location.href = '/dashboard/payments?success=true&test=manual';
```

### If payment history is empty:
```javascript
// Check database directly:
fetch('/api/payments', {
  headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
}).then(r => r.json()).then(console.log);
```

## 🎯 Expected Results

After successful payment, you should see:
- ✅ Redirect to `/dashboard/payments`
- ✅ Green success toast message
- ✅ Course appears in "Payment History"
- ✅ Course shows in main dashboard
- ✅ Cart is cleared
- ✅ Database records created

## 🔄 Alternative: Force Dashboard Redirect

If Stripe redirect still fails, use this manual approach:
```javascript
// Add to success handler in SimpleStripeButton:
setTimeout(() => {
  window.location.href = '/dashboard/payments?success=true&manual=true';
}, 2000);
```

---
**Current Setup**: Test keys active, server running on localhost:3000
**Course Images**: ✅ Fixed (shows specific course images)
**Redirect**: ✅ Configured to dashboard/payments
**Database**: ✅ Enhanced with user management