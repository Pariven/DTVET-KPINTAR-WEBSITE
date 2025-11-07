"use client"

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import Navbar from "@/components/navbar"
import StudentDashboard from "@/components/student-dashboard"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

function DashboardContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for canceled parameter
    const canceled = searchParams.get('canceled');
    
    if (canceled === 'true') {
      toast.error('Payment was canceled. Your items are still in your cart.');
      
      // Remove the canceled parameter from URL without triggering a page reload
      const url = new URL(window.location.href);
      url.searchParams.delete('canceled');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams]);

  return (
    <div
      className="w-full min-h-screen relative bg-black"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/walpaper-BVmVcQyaAZdQGadzPXmbyLkPLQe8jv.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Content */}
      <div className="w-full min-h-screen">
        <Navbar />
        <StudentDashboard />
        <Footer />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <DashboardContent />
    </Suspense>
  );
}
