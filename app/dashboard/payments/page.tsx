'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { useCart } from '@/contexts/cart-context';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Clock, Download } from 'lucide-react';
import { toast } from 'sonner';

interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: string;
  items: string;
  createdAt: string;
  stripePaymentId: string | null;
}

function PaymentsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { token } = useAuthStore();
  const { clearCart } = useCart();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const verifyPaymentCompletion = async (sessionId: string) => {
    try {const response = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      if (response.ok) {
        const result = await response.json();// Clear the cart
        clearCart();
        
        // Show success message
        toast.success('Payment successful! Your certifications are now available.');
        
        // Refresh payment history immediately
        fetchPayments();
      } else {
        console.error('❌ Payment verification failed:', await response.text());
        toast.error('Payment verification failed. Please check your payment history.');
        
        // Still try to refresh payment history in case webhook worked
        fetchPayments();
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      toast.error('Error verifying payment. Please check your payment history.');
      
      // Still try to refresh payment history
      fetchPayments();
    }
  };

  const completeTestPayment = async () => {
    try {const response = await fetch('/api/payments/complete-test', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success('Test payment completed successfully!');
        clearCart(); // Clear cart
        fetchPayments(); // Refresh payment history
      } else {
        toast.error(result.message || 'No pending payments found');
      }
    } catch (error) {
      console.error('Error completing test payment:', error);
      toast.error('Error completing test payment');
    }
  };

  useEffect(() => {
    if (!mounted) return;
    
    // Check for success parameter and session_id
    const success = searchParams.get('success');
    const sessionId = searchParams.get('session_id');
    
    if (success === 'true' && sessionId) {
      // Verify the payment with Stripe
      verifyPaymentCompletion(sessionId);
      
      // Remove the success parameter from URL without triggering a page reload
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      url.searchParams.delete('session_id');
      window.history.replaceState({}, '', url.toString());
    } else if (success === 'true') {
      // Fallback for success without session_id
      clearCart();
      toast.success('Payment successful! Your certifications are now available.');
      
      // Remove the success parameter from URL
      const url = new URL(window.location.href);
      url.searchParams.delete('success');
      window.history.replaceState({}, '', url.toString());
      
      // Force refresh payment history
      setTimeout(() => {
        fetchPayments();
      }, 1000);
    }
  }, [searchParams, mounted, clearCart]);

  useEffect(() => {
    if (!mounted) return;
    
    if (!token) {
      router.push('/login?redirect=/dashboard/payments');
      return;
    }

    fetchPayments();
  }, [token, router, mounted]);

  const fetchPayments = async () => {
    try {
      const response = await fetch('/api/payments', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch payments');
      }

      const data = await response.json();
      setPayments(data.payments || []);
      
      toast.success('Payment history loaded successfully');
    } catch (error) {
      console.error('Error fetching payments:', error);
      toast.error('Failed to load payment history');
      
      // Fallback to empty array
      setPayments([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'FAILED':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      COMPLETED: 'default',
      PENDING: 'secondary',
      FAILED: 'destructive',
    };

    return (
      <Badge variant={(variants[status] || 'secondary') as 'default' | 'secondary' | 'destructive' | 'outline'}>
        {status}
      </Badge>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-12 text-center">
                <p className="text-gray-400">Loading...</p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 font-barlow">Payment History</h1>
              <p className="text-gray-400">View all your certification purchases</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={completeTestPayment}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Complete Test Payment
              </button>
            </div>
          </div>

          {isLoading ? (
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-12 text-center">
                <p className="text-gray-400">Loading...</p>
              </CardContent>
            </Card>
          ) : payments.length === 0 ? (
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-12 text-center">
                <Download className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No payments yet</h3>
                <p className="text-gray-400">Your purchase history will appear here</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {payments.map((payment: any) => {
                const items = JSON.parse(payment.items);
                return (
                  <Card key={payment.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(payment.status)}
                          <CardTitle className="text-white">
                            {new Date(payment.createdAt).toLocaleDateString('en-MY', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </CardTitle>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-white font-bold text-lg">
                            RM {payment.amount.toFixed(2)}
                          </span>
                          {getStatusBadge(payment.status)}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Items:</h4>
                        {items.map((item: any, index: number) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{item.certificationName}</span>
                            <span className="text-gray-400">RM {item.price.toFixed(2)}</span>
                          </div>
                        ))}
                        {payment.stripePaymentId && (
                          <p className="text-xs text-gray-500 mt-4">
                            Payment ID: {payment.stripePaymentId}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <PaymentsContent />
    </Suspense>
  );
}
