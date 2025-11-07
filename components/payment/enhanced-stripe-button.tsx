'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, ExternalLink } from 'lucide-react';
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

export default function EnhancedStripeButton({ items, disabled }: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (isLoading) return;
    
    console.log('🛒 Starting enhanced checkout process...');
    console.log('Total amount:', total);
    console.log('Items:', items);
    
    setIsLoading(true);

    try {
      // Method 1: Try API checkout first
      console.log('📡 Attempting API checkout...');
      
      // Check if user is authenticated
      const token = localStorage.getItem('auth-token') || document.cookie.split('; ').find(row => row.startsWith('auth-token='))?.split('=')[1];
      console.log('🔑 Auth token exists:', !!token);
      
      if (!token) {
        toast.error('Please log in to proceed with checkout');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ items }),
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response headers:', response.headers);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ API checkout successful:', data);
        
        if (data.url) {
          console.log('🔗 Redirecting to Stripe checkout...');
          toast.success('Redirecting to secure payment...');
          window.location.href = data.url;
          return;
        } else {
          console.log('❌ No URL in response');
          toast.error('Payment URL not received');
        }
      } else {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { error: errorText };
        }
        console.log('⚠️ API checkout failed:', errorData);
        toast.error(`Checkout failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.log('⚠️ API checkout error:', error);
      toast.error(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    try {
      // Method 2: Fallback to payment link
      console.log('🔄 Using fallback payment link...');
      const paymentLink = 'https://buy.stripe.com/dRm00kc39gbueRs0rxaR200';
      console.log('🔗 Opening payment link:', paymentLink);
      
      // Open in new tab and show success message
      window.open(paymentLink, '_blank');
      toast.success(`Payment link opened! Total: RM ${total.toFixed(2)}`);
      
    } catch (error) {
      console.error('💥 All checkout methods failed:', error);
      toast.error('Unable to process checkout. Please contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <Button
        onClick={handleCheckout}
        disabled={disabled || isLoading || items.length === 0}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
        size="lg"
        title={`Debug: disabled=${disabled}, loading=${isLoading}, items=${items.length}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Pay RM {total.toFixed(2)} ({items.length} items)
            <ExternalLink className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      
      {/* Direct Payment Link Backup */}
      <Button
        variant="outline"
        size="sm"
        className="w-full text-xs"
        onClick={() => {
          const paymentLink = 'https://buy.stripe.com/dRm00kc39gbueRs0rxaR200';
          window.open(paymentLink, '_blank');
          toast.info('Direct payment link opened in new tab');
        }}
      >
        Or pay directly via Stripe
      </Button>
      
      <p className="text-xs text-gray-400 text-center">
        Secure payment powered by Stripe • {items.length} item{items.length !== 1 ? 's' : ''}
      </p>
    </div>
  );
}
