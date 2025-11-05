"use client"

import Navbar from "@/components/navbar"
import CertificationCategories from "@/components/certification-categories"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function CertificationsPage() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationCategories />
        <Footer />
      </div>

      <ScrollToTop />
    </div>
  )
}
