// Payment method configurations for different regions
export const PAYMENT_METHODS = {
  // Malaysia specific payment methods
  malaysia: [
    'card',      // Credit/Debit cards (Visa, MasterCard, etc.)
    'fpx',       // Malaysian banks (Maybank, CIMB, Public Bank, etc.)
    'grabpay',   // GrabPay digital wallet
  ],
  
  // Singapore payment methods
  singapore: [
    'card',
    'grabpay',
    'paynow',    // Singapore's PayNow
  ],
  
  // International payment methods
  international: [
    'card',      // All major credit cards
    'alipay',    // For Chinese customers
    'wechat_pay', // For Chinese customers
  ],
  
  // Digital wallets (enabled automatically by Stripe when available)
  digitalWallets: [
    'apple_pay',  // Apple Pay (iOS/macOS Safari)
    'google_pay', // Google Pay (Android/Chrome)
    'link',       // Stripe Link (save payment details)
  ]
} as const;

// Get payment methods based on user's location or preference
export function getPaymentMethodsForRegion(region: 'malaysia' | 'singapore' | 'international' = 'malaysia') {
  return PAYMENT_METHODS[region];
}

// Payment method display names for UI
export const PAYMENT_METHOD_NAMES = {
  card: 'Credit/Debit Card',
  fpx: 'Online Banking (FPX)',
  grabpay: 'GrabPay',
  paynow: 'PayNow',
  alipay: 'Alipay',
  wechat_pay: 'WeChat Pay',
  apple_pay: 'Apple Pay',
  google_pay: 'Google Pay',
  link: 'Link',
} as const;

// Payment method icons/logos
export const PAYMENT_METHOD_ICONS = {
  card: '💳',
  fpx: '🏦',
  grabpay: '🟢',
  paynow: '💰',
  alipay: '🔵',
  wechat_pay: '🟢',
  apple_pay: '📱',
  google_pay: '📱',
  link: '🔗',
} as const;