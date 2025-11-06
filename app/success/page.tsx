'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, RefreshCw } from 'lucide-react';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(5);
  
  const sessionId = searchParams.get('session_id');
  const paymentId = searchParams.get('payment_id');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Redirect to dashboard
          router.push('/dashboard/payments?success=true&redirected_from=success_page');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleGoToDashboard = () => {
    router.push('/dashboard/payments?success=true&manual_redirect=true');
  };

  const handleRefreshPaymentHistory = () => {
    window.location.href = '/dashboard/payments?success=true&refresh=1';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600">
            Your payment has been processed successfully.
          </p>
        </div>

        {sessionId && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Session: <span className="font-mono text-xs">{sessionId.substring(0, 20)}...</span>
            </p>
          </div>
        )}

        {paymentId && (
          <div className="mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600">
              Payment ID: <span className="font-mono text-xs">{paymentId.substring(0, 20)}...</span>
            </p>
          </div>
        )}

        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 mb-2">
            Redirecting to your dashboard in {countdown} seconds...
          </p>
          <div className="w-full bg-yellow-200 rounded-full h-2">
            <div 
              className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${((5 - countdown) / 5) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={handleGoToDashboard}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Go to Dashboard Now
          </Button>
          
          <Button 
            onClick={handleRefreshPaymentHistory}
            variant="outline"
            className="w-full"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            View Payment History
          </Button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            If you encounter any issues, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}