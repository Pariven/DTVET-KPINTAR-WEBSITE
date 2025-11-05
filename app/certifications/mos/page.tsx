"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MOSCertificationContent from "@/components/mos-certification-content"

export default function MOSCertificationPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <MOSCertificationContent />
      <Footer />
    </div>
  )
}
