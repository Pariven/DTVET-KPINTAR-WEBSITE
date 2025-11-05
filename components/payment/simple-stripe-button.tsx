'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard } from 'lucide-react';
import { toast } from 'sonner';
import { useAuthStore } from '@/lib/store';

interface SimpleStripeButtonProps {
  items: Array<{
    certificationId: string;
    certificationName: string;
    price: number;
    logoUrl?: string;
  }>;
  total: number;
  onPaymentStart?: () => void;
}

export default function SimpleStripeButton({ items, total, onPaymentStart }: SimpleStripeButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useAuthStore();

  const handlePayNow = async () => {
    if (isLoading || items.length === 0) return;

    onPaymentStart?.();
    setIsLoading(true);

    try {
      // Get token using consistent approach - prioritize localStorage first
      const freshToken = localStorage.getItem('token') || token;
      
      console.log('Payment Token Check:', {
        hasLocalStorageToken: !!localStorage.getItem('token'),
        hasStoreToken: !!token,
        finalToken: !!freshToken
      });
      
      if (!freshToken) {
        toast.error('Authentication required. Please log in to proceed with payment.');
        // Store current path for redirect after login
        sessionStorage.setItem('redirectAfterLogin', '/checkout');
        window.location.href = '/login?redirect=/checkout&reason=no_token';
        setIsLoading(false);
        return;
      }

      // Create Stripe checkout session
      const response = await fetch('/api/stripe/checkout-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${freshToken}`,
        },
        body: JSON.stringify({ items }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: 'Failed to parse server response' };
        }
        
        if (response.status === 401) {
          toast.error('Your session has expired. Please log in again.');
          // Clear all authentication data
          localStorage.clear();
          useAuthStore.getState().clearAuth();
          
          // Store redirect path and navigate to login
          sessionStorage.setItem('redirectAfterLogin', '/checkout');
          window.location.href = '/login?redirect=/checkout&reason=session_expired';
          return;
        }
        
        console.error('Payment API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorData.error,
          url: response.url
        });
        
        throw new Error(errorData.error || `Payment failed (${response.status}): ${response.statusText}`);
      }

      const data = await response.json();

      if (!data.url) {
        throw new Error('No payment URL received from server');
      }

      // Show success message
      toast.success(`Redirecting to secure payment for RM ${total.toFixed(2)}`);
      
      // Redirect to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Payment failed. Please try again.');
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <Button
        disabled
        className="w-full bg-gray-600 text-gray-300 cursor-not-allowed"
        size="lg"
      >
        <CreditCard className="mr-2 h-5 w-5" />
        Cart is Empty
      </Button>
    );
  }

  return (
    <div className="space-y-4">
      {/* Pay Now Button */}
      <Button
        onClick={handlePayNow}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-[#F4BB44] to-[#E5A63D] hover:from-[#E5A63D] hover:to-[#D4941F] text-black font-bold py-4 text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0 active:scale-95"
        size="lg"
      >
        {isLoading ? (
          <div className="flex items-center justify-center py-2">
            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
            <div className="text-left">
              <div className="text-base font-bold">Processing Payment...</div>
              <div className="text-xs opacity-80">Redirecting to secure checkout</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 py-2">
            <div className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xl font-bold">Pay RM {total.toFixed(2)}</div>
              <div className="text-xs opacity-80">Secure payment powered by Stripe</div>
            </div>
          </div>
        )}
      </Button>

      {/* Quick Payment Methods Preview */}
      <div className="flex items-center justify-center gap-3 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">💳</span>
          </div>
          <div className="w-8 h-6 bg-green-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">🏦</span>
          </div>
          <div className="w-8 h-6 bg-emerald-600 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">📱</span>
          </div>
          <div className="w-8 h-6 bg-gray-800 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs">🍎</span>
          </div>
        </div>
        <span className="text-xs text-gray-400">+ more options</span>
      </div>
    </div>
  );
}
