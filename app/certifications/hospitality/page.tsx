"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const hospitalityData = {
  title: "Hospitality and Culinary Arts Careers",
  subtitle: "Excellence in Food Service & Hospitality Management",
  description:
    "Master the art of hospitality and culinary excellence. Learn food service management, culinary techniques, customer service, and hospitality industry operations.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-removebg-preview-LKhjuZE5PETXFRergDleCGMOXjCl1C.png",
  certifications: [
    {
      id: 6001,
      name: "Culinary Foundations",
      description:
        "Master essential knowledge and skills for working professionally in a commercial kitchen, including set up procedures, food safety and sanitation, executing recipes, and time management. Certified by World Association of Master Chefs.",
      duration: "150+ hours",
      level: "Fundamentals",
      price: 810,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-removebg-preview-LKhjuZE5PETXFRergDleCGMOXjCl1C.png",
      largeImage: true,
      pdfPath: "/pdfs/Hospitality and Culinary Arts Careers - Culinary Foundations WAMC - 9.24.24.pdf",
    },
  ],
  benefits: [
    "Culinary skills development",
    "Hospitality industry expertise",
    "Customer service excellence",
    "Food safety knowledge",
  ],
  careerPaths: [
    "Chef",
    "Restaurant Manager",
    "Hotel Manager",
    "Event Coordinator",
    "Food Service Supervisor",
    "Catering Manager",
  ],
}

export default function HospitalityPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={hospitalityData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/culnary.jpg-LgR55XIGkZ93OwCB4ahHOScSnA97AI.jpeg"
        />
        <CertificationDetailContent data={hospitalityData} />
        <Footer />
      </div>
    </div>
  )
}
