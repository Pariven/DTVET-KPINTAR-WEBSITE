'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/cart-context';
import { useAuthStore } from '@/lib/store';
import useAuthRedirect from '@/hooks/use-auth-redirect';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SimpleStripeButton from '@/components/payment/simple-stripe-button';
import PaymentMethodsInfo from '@/components/payment-methods-info';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [paymentCancelled, setPaymentCancelled] = useState(false);
  
  // Use simple authentication hook
  const { isAuthenticated, isLoading, token } = useAuthRedirect({
    redirectTo: '/login',
    allowUnauthenticated: false
  });

  useEffect(() => {
    setMounted(true);
    
    // Check if payment was cancelled (coming back from Stripe)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('canceled') === 'true') {
      setPaymentCancelled(true);
      // Clean up URL without refreshing page
      window.history.replaceState({}, '', '/checkout');
    }
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl font-barlow">Loading checkout...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl font-barlow">Redirecting to login...</div>
      </div>
    );
  }

  const total = cartItems.reduce((sum: number, item: any) => sum + item.price, 0);

  const checkoutItems = cartItems.map((item: any) => ({
    certificationId: item.id.toString(),
    certificationName: item.name,
    price: item.price,
    logoUrl: item.logo,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 pt-20 md:pt-32 pb-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-white mb-1 font-barlow">Checkout</h1>
            <p className="text-gray-400 text-sm">Review your order and proceed to payment</p>
          </div>

          {/* Payment Cancelled Notification */}
          {paymentCancelled && (
            <div className="mb-6 p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-400">⚠️</span>
                </div>
                <div>
                  <p className="text-orange-300 font-semibold">Payment Cancelled</p>
                  <p className="text-orange-200/90 text-sm mt-1">
                    No problem! Your cart items are safely saved. You can complete your purchase whenever you're ready.
                  </p>
                </div>
              </div>
            </div>
          )}

          {cartItems.length === 0 ? (
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                  <ShoppingCart className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-barlow">Your cart is empty</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto">
                  Discover our professional certification programs and start your learning journey today.
                </p>
                
                <Button 
                  onClick={() => router.push('/#certifications')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-110 text-white font-semibold px-8 py-3 transition-all duration-300"
                  size="lg"
                >
                  Browse Certifications
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items - Left Side */}
              <div className="lg:col-span-2 space-y-6">
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white font-barlow">Order Summary</h2>
                    <p className="text-gray-400 text-sm">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-400 hover:text-red-300 hover:bg-red-400/5 hover:scale-110 border border-red-400/20 hover:border-red-400/40 transition-all duration-300"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                </div>

                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item: any, index: number) => (
                    <Card key={item.id} className="bg-gray-800/40 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-8">
                          {/* Product Image */}
                          <div className="relative w-32 h-32 flex-shrink-0">
                            <div className="w-full h-full bg-white rounded-xl p-4 shadow-xl">
                              <Image
                                src={item.logo || '/placeholder.svg'}
                                alt={item.name}
                                fill
                                sizes="(max-width: 768px) 100px, 128px"
                                className="object-contain p-2"
                                priority={index === 0}
                              />
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0 space-y-4">
                            <div>
                              <h3 className="text-white font-bold text-2xl leading-tight mb-3">
                                {item.name}
                              </h3>
                              <div className="flex items-center gap-4 mb-4">
                                <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#F4BB44]/20 text-[#F4BB44] border border-[#F4BB44]/40">
                                  Professional Certification
                                </span>
                                <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold bg-green-500/20 text-green-400 border border-green-500/40">
                                  ✓ Instant Access
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Price and Remove */}
                          <div className="text-right flex-shrink-0 flex flex-col items-end gap-4">
                            <div className="bg-gradient-to-br from-[#F4BB44]/20 to-orange-500/20 border border-[#F4BB44]/30 rounded-xl p-6 text-center">
                              <p className="text-gray-300 text-sm mb-2">Price</p>
                              <p className="text-white font-bold text-3xl mb-1">RM {item.price.toFixed(2)}</p>
                              <p className="text-gray-400 text-xs">per certification</p>
                            </div>
                            <Button
                              variant="ghost"
                              size="lg"
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 hover:scale-110 border border-gray-600/50 hover:border-red-500/50 px-4 py-2 transition-all duration-300"
                            >
                              <Trash2 className="w-5 h-5 mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Payment Section - Right Side */}
              <div className="lg:col-span-1 space-y-6">
                <div className="sticky top-24 md:top-32 z-40">
                  <Card className="bg-gray-800/60 border border-gray-700/50">
                  <CardHeader className="border-b border-gray-700/50 pb-3">
                    <CardTitle className="text-white font-barlow text-lg">Payment Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4">
                    {/* Order Total */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-300 text-sm">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span>RM {total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-gray-300 text-sm">
                        <span>Platform Fee</span>
                        <span className="text-green-400 font-medium">FREE</span>
                      </div>
                      <Separator className="bg-gray-700/50" />
                      
                      {/* Payment Method Fees Info */}
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                        <h4 className="text-blue-400 font-semibold text-xs mb-2">💳 Payment Processing Fees</h4>
                        <div className="space-y-1 text-xs text-gray-300">
                          <div className="flex justify-between">
                            <span>Credit/Debit Cards:</span>
                            <span className="text-yellow-300">+ RM 2.50</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Online Banking (FPX):</span>
                            <span className="text-green-300">+ RM 1.00</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Digital Wallets:</span>
                            <span className="text-blue-300">+ RM 2.50</span>
                          </div>
                        </div>
                        <p className="text-xs text-green-400 mt-2 italic">💡 FPX saves you RM 1.50 per transaction!</p>
                      </div>
                      
                      <div className="flex justify-between text-white font-bold text-xl">
                        <span>Subtotal</span>
                        <span className="text-[#F4BB44]">RM {total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-300 mt-1">
                        <span>+ Processing fee (added at checkout)</span>
                        <span className="text-yellow-300">Varies by method</span>
                      </div>
                    </div>

                    {/* Payment Button */}
                    <SimpleStripeButton 
                      items={checkoutItems} 
                      total={total}
                    />
                    
                    {/* Security Badge */}
                    <div className="bg-gray-700/30 rounded-lg p-3 text-center border border-gray-600/30">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-green-400 text-sm">🔒</span>
                        <span className="text-white font-semibold text-xs">Secure Payment</span>
                      </div>
                      <p className="text-gray-400 text-xs">256-bit SSL • PCI DSS compliant</p>
                    </div>
                  </CardContent>
                </Card>
                </div>

                {/* Payment Methods */}
                <PaymentMethodsInfo />
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
