# Stripe Payment Integration Implementation Guide

## Overview
This document outlines the implementation plan for integrating Stripe payment processing into the DTVET-KPINTAR certification platform.

## Prerequisites
- Stripe account (create at https://stripe.com)
- Stripe API keys (Test and Live)
- Node.js and Next.js project setup

## Installation

### 1. Install Required Packages
```bash
npm install stripe @stripe/stripe-js
```

## Environment Variables

Add the following to your `.env.local` file:

```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Implementation Steps

### Step 1: Create Stripe API Route

Create `/app/api/stripe/checkout/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
}
```

### Step 2: Create Checkout Component

Create `/components/stripe-checkout.tsx`:

```typescript
'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@/components/ui/button';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function StripeCheckout({ items }: { items: any[] }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const { sessionId } = await response.json();

    const result = await stripe?.redirectToCheckout({
      sessionId,
    });

    if (result?.error) {
      console.error(result.error.message);
    }
  };

  return (
    <Button onClick={handleCheckout} className="w-full">
      Proceed to Checkout
    </Button>
  );
}
```

### Step 3: Add Webhook Handler

Create `/app/api/stripe/webhook/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: Request) {
  const body = await request.text();
  const signature = headers().get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      // Handle successful payment
      console.log('Payment successful:', session);
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Handle payment intent
      console.log('Payment intent succeeded:', paymentIntent);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
```

### Step 4: Update Cart to Use Stripe

Update your cart page to include the Stripe checkout button:

```typescript
import StripeCheckout from '@/components/stripe-checkout';

// In your cart component
const cartItems = cart.items.map(item => ({
  price_data: {
    currency: 'myr',
    product_data: {
      name: item.name,
      images: [item.logo],
    },
    unit_amount: item.price * 100, // Stripe uses cents
  },
  quantity: 1,
}));

<StripeCheckout items={cartItems} />
```

## Testing

### Test Cards
Use Stripe test cards for development:

- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **3D Secure**: 4000 0025 0000 3155

### Webhook Testing
Use Stripe CLI to test webhooks locally:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Security Considerations

1. ✅ Never expose secret keys in client-side code
2. ✅ Use environment variables for all API keys
3. ✅ Validate webhook signatures
4. ✅ Implement proper error handling
5. ✅ Use HTTPS in production

## Next Steps

1. [ ] Set up Stripe account
2. [ ] Install required packages
3. [ ] Add environment variables
4. [ ] Implement API routes
5. [ ] Create checkout component
6. [ ] Set up webhook handler
7. [ ] Test with test cards
8. [ ] Configure webhook endpoint in Stripe dashboard
9. [ ] Go live with production keys

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Next.js Integration](https://stripe.com/docs/payments/checkout/one-time)
- [Stripe Webhook Guide](https://stripe.com/docs/webhooks)

## Support

For issues or questions:
- Email: enquiry@digitaltvetmalaysia.com
- Stripe Support: https://support.stripe.com
