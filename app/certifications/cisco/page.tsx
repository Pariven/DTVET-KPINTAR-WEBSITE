"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const ciscoData = {
  title: "Cisco Certifications",
  subtitle: "Master Networking & IT Infrastructure",
  description:
    "Build expertise in networking, cybersecurity, and IT infrastructure with Cisco certifications. Gain the skills needed for high-demand networking careers.",
  logo: "/logos/cisco-logo.png",
  certifications: [
    {
      id: 3001,
      name: "Cisco Certified Support Technician - Networking",
      description:
        "Entry-level certification covering networking fundamentals, TCP/IP protocols, network infrastructure, and basic troubleshooting skills. Master essential networking concepts including addressing, subnet formats, endpoints, media types, and security principles.",
      duration: "40-60 hours",
      level: "Support Technician",
      price: 810,
      pdfPath: "/pdfs/cisco-ccst-networking.pdf",
      image: "/logos/cisco-logo.png",
    },
    {
      id: 3002,
      name: "Cisco Certified Support Technician - Cybersecurity",
      description:
        "Foundational cybersecurity certification covering essential security principles, network security concepts, endpoint security, vulnerability assessment, and incident handling. Learn to identify threats, implement security measures, and respond to security incidents.",
      duration: "40-60 hours",
      level: "Support Technician",
      price: 810,
      pdfPath: "/pdfs/cisco-ccst-cybersecurity.pdf",
      image: "/logos/cisco-logo.png",
    },
    {
      id: 3003,
      name: "Cisco Certified Support Technician - IT Support",
      description:
        "Comprehensive IT support certification covering help desk operations, hardware troubleshooting, connectivity issues, operating system support (Windows, macOS, mobile), and security best practices. Perfect for entry-level IT support professionals.",
      duration: "40-60 hours",
      level: "Support Technician",
      price: 810,
      pdfPath: "/pdfs/cisco-ccst-it-support.pdf",
      image: "/logos/cisco-logo.png",
    },
  ],
  benefits: [
    "Industry-leading networking credentials",
    "High-demand skill validation",
    "Career advancement in IT",
    "Access to Cisco learning resources",
  ],
  careerPaths: [
    "Network Administrator",
    "Network Engineer",
    "Cybersecurity Analyst",
    "IT Support Specialist",
    "Systems Administrator",
    "Network Security Engineer",
  ],
}

export default function CiscoPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={ciscoData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cisco-Zabtj5wQsEXavTIaKIHYHJ3iOD2jBq.jpg"
        />
        <CertificationDetailContent data={ciscoData} />
        <Footer />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}
