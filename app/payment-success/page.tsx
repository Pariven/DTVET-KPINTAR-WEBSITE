'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PaymentSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Get session ID for verification
    const sessionId = searchParams.get('session_id');
    
    if (sessionId) {
      console.log('✅ Payment Success - Session ID:', sessionId);
      
      // Start countdown redirect to dashboard payments page
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push('/dashboard/payments?success=true&from_success_page=true');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      // No session ID, redirect to dashboard immediately
      router.push('/dashboard/payments');
    }
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
              </div>
              
              <h1 className="text-3xl font-bold text-white mb-4 font-barlow">
                Payment Successful! 🎉
              </h1>
              
              <p className="text-gray-300 mb-6 text-lg">
                Thank you for your purchase. Your certifications have been added to your account.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Redirecting to your dashboard in {countdown} seconds...</span>
              </div>
              
              <button
                onClick={() => router.push('/dashboard/payments?success=true&manual_redirect=true')}
                className="bg-[#F4BB44] hover:bg-[#E5A63D] text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Go to Dashboard Now
              </button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}