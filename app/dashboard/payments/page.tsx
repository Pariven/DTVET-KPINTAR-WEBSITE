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



  useEffect(() => {
    if (!mounted) return;
    
    // Check for success or error parameters
    const success = searchParams.get('success');
    const error = searchParams.get('error');
    const paymentId = searchParams.get('payment_id');
    const refresh = searchParams.get('refresh');
    const courses = searchParams.get('courses');
    const warning = searchParams.get('warning');
    
    if (success === 'true') {
      // Payment was successful - clear cart ONLY ONCE
      const hasCleared = sessionStorage.getItem('cart-cleared-' + paymentId);
      if (!hasCleared) {
        clearCart();
        if (paymentId) {
          sessionStorage.setItem('cart-cleared-' + paymentId, 'true');
        }
      }
      
      // Show enhanced success message with course and payment details
      let successMessage = '🎉 Payment successful! Your certifications are now available.';
      
      if (paymentId && courses) {
        const courseCount = parseInt(courses) || 0;
        successMessage = `🎉 Payment successful! ${courseCount} certification${courseCount !== 1 ? 's' : ''} added to your dashboard.`;
      } else if (paymentId) {
        successMessage = '🎉 Payment successful! Your certifications are now available in your history.';
      }
      
      // Handle warnings
      if (warning === 'no_items') {
        toast.warning('⚠️ Payment completed but course details may be incomplete. Please contact support if needed.');
      } else {
        toast.success(successMessage, {
          duration: 5000,
        });
      }
      
      // Force immediate refresh if requested
      if (refresh === '1') {
        console.log('🔄 Force refreshing payment data after successful payment...');
        console.log('📚 Expected courses:', courses || 'unknown');
        fetchPayments(true);
      }
      
      // Remove URL parameters after a short delay
      setTimeout(() => {
        const url = new URL(window.location.href);
        url.searchParams.delete('success');
        url.searchParams.delete('payment_id');
        url.searchParams.delete('refresh');
        window.history.replaceState({}, '', url.toString());
      }, 2000);
      
      // Additional refresh after parameter cleanup
      setTimeout(() => {
        console.log('🔄 Secondary payment data refresh...');
        fetchPayments();
      }, 3000);
      
      // Clean up cart clearing flag after some time to prevent it from persisting forever
      setTimeout(() => {
        if (paymentId) {
          sessionStorage.removeItem('cart-cleared-' + paymentId);
        }
      }, 30000); // Clean up after 30 seconds
    } else if (error) {
      // Handle different error types
      let errorMessage = 'Payment processing failed. Please try again.';
      
      switch (error) {
        case 'no_session':
          errorMessage = 'Payment session not found. Please try again.';
          break;
        case 'payment_not_found':
          errorMessage = 'Payment record not found. Please contact support if your payment was processed.';
          break;
        case 'payment_incomplete':
          errorMessage = 'Payment was not completed. Please try again.';
          break;
        case 'stripe_error':
          errorMessage = 'Payment service error. Please try again.';
          break;
        case 'server_error':
          errorMessage = 'Server error occurred. Please contact support if needed.';
          break;
      }
      
      toast.error(errorMessage);
      
      // Remove error parameter from URL
      const url = new URL(window.location.href);
      url.searchParams.delete('error');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams, mounted]); // Removed clearCart from dependencies to prevent infinite loop

  useEffect(() => {
    if (!mounted) return;
    
    if (!token) {
      router.push('/login?redirect=/dashboard/payments');
      return;
    }

    fetchPayments();
  }, [token, router, mounted]);

  const fetchPayments = async (showLoader = false) => {
    try {
      if (showLoader) setIsLoading(true);
      console.log('📊 Fetching payment history...');
      
      const response = await fetch('/api/payments', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Payment fetch failed:', { status: response.status, error: errorData });
        throw new Error(`Failed to fetch payments: ${response.status}`);
      }

      const data = await response.json();
      const paymentList = data.payments || [];
      
      console.log('✅ Payments loaded:', { count: paymentList.length });
      setPayments(paymentList);
      
      if (paymentList.length > 0) {
        console.log('💰 Recent payments:', paymentList.slice(0, 2));
      }
      
    } catch (error) {
      console.error('💥 Error fetching payments:', error);
      toast.error('Failed to load payment history. Please refresh the page.');
      
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
        <main className="container mx-auto px-4 pt-32 pb-24">
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

      <main className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 font-barlow">Payment History</h1>
              <p className="text-gray-400">View all your certification purchases</p>
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
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-semibold text-gray-400">Course Details ({items.length} item{items.length !== 1 ? 's' : ''})</h4>
                          {payment.status === 'COMPLETED' && (
                            <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded">
                              Available in Dashboard
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          {items.map((item: any, index: number) => (
                            <div key={index} className="bg-white/5 p-3 rounded-lg border border-white/10">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h5 className="text-gray-200 font-medium text-sm">{item.certificationName}</h5>
                                  {item.certificationId && (
                                    <p className="text-xs text-gray-500 mt-1">ID: {item.certificationId}</p>
                                  )}
                                </div>
                                <div className="text-right">
                                  <span className="text-gray-300 font-semibold">RM {item.price.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="pt-2 border-t border-white/10">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Total Amount:</span>
                            <span className="text-white font-bold">RM {payment.amount.toFixed(2)}</span>
                          </div>
                          
                          {payment.stripePaymentId && (
                            <p className="text-xs text-gray-500 mt-2">
                              Payment ID: {payment.stripePaymentId}
                            </p>
                          )}
                          
                          <p className="text-xs text-gray-500 mt-1">
                            Transaction Date: {new Date(payment.createdAt).toLocaleDateString('en-MY', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
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
