"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const ic3Data = {
  title: "IC3 Digital Literacy",
  subtitle: "Essential Digital Skills for the Modern Workplace",
  description:
    "Validate your digital literacy skills with IC3 certification, covering computing fundamentals, key applications, and living online safely and effectively.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
  certifications: [
    {
      id: 3001,
      name: "IC3 Key Applications - Global Standard 5",
      description:
        "Master essential productivity applications including word processing, spreadsheets, presentations, and database concepts. Learn common features across Microsoft Office applications and develop proficiency in creating professional documents, analyzing data, and delivering compelling presentations.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/ic3-key-applications-gs5.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
    {
      id: 3002,
      name: "IC3 Living Online - Global Standard 5",
      description:
        "Develop comprehensive skills for navigating the digital world safely and effectively. Master internet concepts, email management, calendaring, social media, online conferencing, and digital citizenship. Learn to communicate professionally and protect your digital identity.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/ic3-living-online-gs5.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
    {
      id: 3003,
      name: "IC3 GS6 Level 1",
      description:
        "Build foundational digital literacy skills for professional environments. Learn technology basics, digital citizenship, information management, content creation, communication, collaboration, and safety & security. Perfect for those starting their digital literacy journey.",
      duration: "150 hours",
      level: "Foundation",
      price: 2,
      pdfPath: "/pdfs/ic3-gs6-level1.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
    {
      id: 3004,
      name: "IC3 GS6 Level 2",
      description:
        "Advance your digital literacy with intermediate skills for professional workplace environments. Customize digital environments, manage multiple identities, create and edit digital content, and understand internet commerce. Develop proficiency in collaboration tools and device security.",
      duration: "150 hours",
      level: "Intermediate",
      price: 2,
      pdfPath: "/pdfs/ic3-gs6-level2.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
    {
      id: 3005,
      name: "IC3 GS6 Level 3",
      description:
        "Achieve advanced digital literacy skills for professional excellence and leadership. Evaluate software and hardware, construct effective information searches, create and publish original digital media content, manage interpersonal digital communications, and contribute constructively to project teams.",
      duration: "150 hours",
      level: "Advanced",
      price: 2,
      pdfPath: "/pdfs/ic3-gs6-level3.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
    {
      id: 3006,
      name: "IC3 Computing Fundamentals",
      description:
        "Gain comprehensive understanding of computer hardware, software, and security concepts. Master mobile devices, hardware devices, computer software architecture, backup and restore, file sharing, cloud computing, and security best practices. Essential foundation for IT professionals.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/ic3-computing-fundamentals.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      largeImage: true,
    },
  ],
  benefits: [
    "Globally recognized digital literacy certification",
    "Essential workplace computer skills validation",
    "Foundation for advanced IT certifications",
    "Improved productivity and efficiency in digital environments",
    "Enhanced career opportunities across all industries",
    "Comprehensive coverage of modern digital skills",
  ],
  careerPaths: [
    "Administrative Assistant",
    "Data Entry Clerk",
    "Customer Service Representative",
    "Office Coordinator",
    "Digital Marketing Assistant",
    "IT Support Trainee",
    "Help Desk Technician",
    "Office Manager",
    "Executive Assistant",
    "Business Analyst",
  ],
}

export default function IC3Page() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      {/* Content */}
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={ic3Data}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ic3.jpg-uecO7kWQMYF663eLQ6vYVQlILW8Kz9.avif"
        />
        <CertificationDetailContent data={ic3Data} />
        <Footer />
      </div>

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  )
}
