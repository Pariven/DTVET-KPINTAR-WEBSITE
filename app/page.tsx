"use client"

import Navbar from "@/components/navbar"
import HeroContent from "@/components/hero-content"
import AvailableCertifications from "@/components/available-certifications"
import WhyDigitalTvet from "@/components/why-digital-tvet"
import AuthorizedProvider from "@/components/authorized-provider"
import Footer from "@/components/footer"
import LoadingAnimation from "@/components/loading-animation"
import StatisticsSection from "@/components/statistics-section"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <div className="w-full min-h-screen relative bg-black">
        {/* Navbar - Always on top */}
        <Navbar />

        {/* Hero Section - No 3D Background */}
        <div className="w-full">
          <HeroContent />
        </div>

        {/* Other sections */}
        <div className="w-full">
          <AvailableCertifications />
          <WhyDigitalTvet />
          <AuthorizedProvider />
          <StatisticsSection />
          <Footer />
        </div>

        {/* WhatsApp Button - Only on Home Page */}
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </>
  )
}
