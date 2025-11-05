"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const healthScienceData = {
  title: "Health Science Careers",
  subtitle: "Healthcare & Medical Technology Excellence",
  description:
    "Explore career opportunities in healthcare, medical technology, and health sciences. Develop skills in patient care, medical procedures, and healthcare administration.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-removebg-preview-m43PqxxYRmK3sfOZc3yRiDFUhCdmjy.png",
  certifications: [
    {
      name: "Medical Administrative Assistant",
      description:
        "Foundational knowledge of medical office processes, terminology, billing, and recordkeeping. Learn patient communication, medical records management, and health-related legal compliance.",
      duration: "150+ hours",
      level: "Professional",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-removebg-preview-m43PqxxYRmK3sfOZc3yRiDFUhCdmjy.png",
      pdfPath: "/pdfs/medical-administrative-assistant.pdf",
    },
  ],
  benefits: [
    "Healthcare industry knowledge",
    "Medical terminology expertise",
    "Patient care understanding",
    "Healthcare technology skills",
  ],
  careerPaths: [
    "Medical Assistant",
    "Healthcare Administrator",
    "Medical Records Technician",
    "Patient Care Coordinator",
    "Medical Laboratory Technician",
    "Health Information Specialist",
  ],
}

export default function HealthSciencePage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={healthScienceData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/health-Tpfk3xugTvJkzs5y78prekIPhpt0TU.avif"
        />
        <CertificationDetailContent data={healthScienceData} />
        <Footer />
      </div>
    </div>
  )
}
