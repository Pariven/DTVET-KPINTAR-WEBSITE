"use client"

import Navbar from "@/components/navbar"
import CartContent from "@/components/cart-content"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function CartPage() {
  return (
    <div className="w-full min-h-screen relative bg-black bg-gradient-to-br from-blue-900/60 via-black/80 to-purple-900/60 backdrop-blur-sm">
      {/* Content */}
      <div className="w-full min-h-screen">
        <Navbar />
        <CartContent />
        <Footer />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}
