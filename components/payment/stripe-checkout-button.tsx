'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutButtonProps {
  items: Array<{
    certificationId: string;
    certificationName: string;
    price: number;
    logoUrl?: string;
  }>;
  disabled?: boolean;
}

export default function StripeCheckoutButton({ items, disabled }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (isLoading) return; // Prevent duplicate clicks

    console.log('🛒 Starting checkout process...');
    console.log('Items to checkout:', items);
    setIsLoading(true);

    try {
      console.log('📡 Sending request to /api/stripe/checkout');
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      console.log('📦 Response status:', response.status);
      
      if (!response.ok) {
        const error = await response.json();
        console.error('❌ API Error:', error);
        throw new Error(error.error || 'Failed to create checkout session');
      }

      const data = await response.json();
      console.log('✅ Checkout session created:', data);

      if (!data.url) {
        throw new Error('No checkout URL received from server');
      }

      console.log('🔗 Redirecting to Stripe:', data.url);
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (error) {
      console.error('💥 Checkout error:', error);
      toast.error(error instanceof Error ? error.message : 'Checkout failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={disabled || isLoading || items.length === 0}
      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
      size="lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        'Proceed to Checkout'
      )}
    </Button>
  );
}
