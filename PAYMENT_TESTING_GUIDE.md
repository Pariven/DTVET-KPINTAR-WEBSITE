# Payment Methods Testing Guide

## Available Payment Methods

Your website now supports all the payment methods you have enabled in your Stripe dashboard:

### 1. **Credit/Debit Cards** 💳
- **Test Cards**: 
  - Success: `4242424242424242`
  - Declined: `4000000000000002`
  - Requires 3D Secure: `4000002500003155`

### 2. **FPX (Malaysian Online Banking)** 🏦
- **Test in Stripe Test Mode**: 
  - Select any Malaysian bank during checkout
  - Use test mode credentials provided by Stripe
  - Supports major Malaysian banks: Maybank, CIMB, Public Bank, etc.

### 3. **GrabPay** 🟢
- **Test Mode**: 
  - Redirects to GrabPay test environment
  - Follow test payment flow
  - Returns to success/cancel URL

### 4. **Digital Wallets** (Auto-enabled)
- **Apple Pay** 📱: Available on Safari/iOS devices
- **Google Pay** 📱: Available on Chrome/Android
- **Link** 🔗: Stripe's payment method saving service

## Testing Steps

1. **Add items to cart** (minimum RM2.00)
2. **Go to checkout page** - you'll see all payment method options
3. **Choose payment method**:
   - Cards: Use test card numbers
   - FPX: Select test bank option
   - GrabPay: Follow test redirect flow
   - Digital wallets: Available if browser/device supports

## Important Notes

- **Test Mode**: All transactions are simulated - no real money charged
- **Regional Methods**: FPX and GrabPay are specifically for Malaysian customers
- **Digital Wallets**: Only appear on compatible devices/browsers
- **Redirect Methods**: FPX and GrabPay redirect to external pages, then return to your site

## Production Deployment

When ready for live payments:
1. Switch to live Stripe keys in environment variables
2. Test with small real amounts first
3. Ensure webhook endpoints are configured
4. Monitor payment success rates by method

## Webhook Configuration

Make sure to configure these webhook events in Stripe:
- `checkout.session.completed` - Payment success
- `checkout.session.expired` - Payment timeout
- `payment_intent.succeeded` - Additional confirmation
- `payment_intent.payment_failed` - Handle failures