"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const microsoftData = {
  title: "Microsoft Certifications",
  subtitle: "Excel in Microsoft Technologies & Cloud Computing",
  description:
    "Advance your career with Microsoft certifications covering Azure, Office 365, Windows, and business applications. Gain skills that are in high demand across industries.",
  logo: "/logos/microsoft-logo.webp",
  certifications: [
    {
      name: "Microsoft Excel",
      description:
        "Master spreadsheet creation, data analysis, formulas, functions, charts, and advanced Excel features for business productivity.",
      duration: "40-60 hours",
      level: "Professional",
  price: 810,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
      pdfPath: "/pdfs/microsoft-excel.pdf",
    },
    {
      name: "Microsoft Word",
      description:
        "Learn document creation, formatting, styles, templates, mail merge, and advanced Word features for professional document management.",
      duration: "30-40 hours",
      level: "Professional",
  price: 810,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Word_2013-2019_logo.svg-rrP48YDAYxj2la1MAE6tuj7cnDvlL3.png",
      pdfPath: "/pdfs/microsoft-word.pdf",
    },
    {
      name: "Microsoft PowerPoint",
      description:
        "Create engaging presentations with animations, transitions, multimedia, and design principles for effective communication.",
      duration: "25-35 hours",
      level: "Professional",
  price: 810,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft-PowerPoint-Logo-90Adh0TR48V7bU7KoidBYVrJX9c8CZ.png",
      pdfPath: "/pdfs/microsoft-powerpoint.pdf",
    },
    {
      name: "Microsoft Outlook",
      description:
        "Manage email, calendars, contacts, tasks, and collaboration tools for efficient communication and time management.",
      duration: "20-30 hours",
      level: "Professional",
  price: 810,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Outlook_2013-2019_logo.svg-AmPYsTKE1WxfL7iHtz9DgXmzlUhOuv.png",
      pdfPath: "/pdfs/microsoft-outlook.pdf",
    },
  ],
  benefits: [
    "Global industry recognition",
    "Higher earning potential",
    "Career advancement opportunities",
    "Access to Microsoft partner network",
  ],
  careerPaths: [
    "Cloud Solutions Architect",
    "IT Administrator",
    "Business Analyst",
    "Data Analyst",
    "Office Manager",
    "Technical Support Specialist",
  ],
}

export default function MicrosoftPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={microsoftData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microsoft-VomukPwOWOSybXC4Domf9lpKPJwB5j.jpg"
        />
        <CertificationDetailContent data={microsoftData} />

        <Footer />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}
