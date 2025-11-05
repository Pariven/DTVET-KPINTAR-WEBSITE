"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const entrepreneurshipData = {
  title: "Entrepreneurship and Small Business",
  subtitle: "Launch & Grow Your Business Venture",
  description:
    "Learn essential entrepreneurship skills including business planning, financial management, marketing strategies, and small business operations to start and grow successful ventures.",
  logo: "/logos/esb-logo.png",
  certifications: [
    {
      name: "Entrepreneurship and Small Business (ESB) - Original",
      description:
        "Comprehensive certification covering entrepreneurship concepts, opportunity recognition, starting a business, business operations, marketing and sales, and financial management.",
      duration: "150+ hours",
      level: "Professional",
      pdfPath: "/pdfs/esb-original.pdf",
      image: "/logos/esb-logo.png",
    },
    {
      name: "Entrepreneurship and Small Business (ESB) V.2",
      description:
        "Updated certification covering entrepreneurial and small business concepts, marketing and sales, production and distribution, and business financials.",
      duration: "150+ hours",
      level: "Professional",
      pdfPath: "/pdfs/esb-v2.pdf",
      image: "/logos/esb-logo.png",
    },
  ],
  benefits: [
    "Entrepreneurial skill development",
    "Business planning expertise",
    "Financial management knowledge",
    "Market analysis capabilities",
  ],
  careerPaths: [
    "Entrepreneur",
    "Small Business Owner",
    "Business Consultant",
    "Startup Advisor",
    "Business Development Manager",
    "Franchise Owner",
  ],
}

export default function EntrepreneurshipPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={entrepreneurshipData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/entreprenaship-HeGZrL89r9EFvapdPqu4VfpBntexJQ.webp"
        />
        <CertificationDetailContent data={entrepreneurshipData} />
        <Footer />
      </div>
    </div>
  )
}
