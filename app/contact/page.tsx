"use client"

import Navbar from "@/components/navbar"
import ContactContent from "@/components/contact-content"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen relative bg-black bg-gradient-to-br from-blue-900/60 via-black/80 to-purple-900/60 backdrop-blur-sm">
      {/* Content */}
      <div className="w-full min-h-screen">
        <Navbar />
        <ContactContent />
        <Footer />
      </div>

      {/* Add WhatsApp and Scroll buttons */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
