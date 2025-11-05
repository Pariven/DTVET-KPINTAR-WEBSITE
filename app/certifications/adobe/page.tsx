"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const adobeData = {
  title: "Adobe Certified Professional",
  subtitle: "Master Creative Design & Digital Media",
  description:
    "Become an Adobe Certified Professional and validate your skills in industry-standard creative applications including Photoshop, Illustrator, InDesign, and more.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe_Certified_Professional_badge-lYiPOGXZmWB9zMjIUkk81hWY1PCqCn.png",
  certifications: [
    {
      id: 1001,
      name: "Adobe Certified Professional in Graphic Design & Illustration Using Adobe Illustrator",
      description:
        "Master vector graphics, logos, and illustrations. Learn to work with paths, shapes, and typography to create professional designs for print and digital media.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/adobe-illustrator-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture4-AvS2lTaoCF4CauCaqRHYsrJnN4mFqV.png",
      largeImage: true,
    },
    {
      id: 1002,
      name: "Adobe Certified Professional in Digital Video Using Adobe Premiere Pro",
      description:
        "Edit professional videos with industry-standard software. Master video editing, color correction, audio mixing, and export workflows for various platforms.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/adobe-premiere-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture5-doeeIQNwLTY5R0W2u2Wbm4Bqs5q80L.png",
      largeImage: true,
    },
    {
      id: 1003,
      name: "Adobe Certified Professional in Visual Effects & Motion Graphics Using Adobe After Effects",
      description:
        "Create stunning visual effects and motion graphics. Learn compositing, animation, keying, and advanced effects for film, TV, and digital content.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/adobe-after-effects-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture3-UxxIH2G1DB1b4f1U8FVlN1jk3etngK.png",
      largeImage: true,
    },
    {
      id: 1004,
      name: "Adobe Certified Professional in Print & Digital Media Publication Using Adobe InDesign",
      description:
        "Design professional layouts for print and digital publications. Master typography, page layout, and document preparation for various output formats.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/adobe-indesign-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture6-DgvzLsfoWjMo9DUvn7j5HHPzoUgNBg.png",
      largeImage: true,
    },
    {
      id: 1005,
      name: "Adobe Certified Professional in Visual Design Using Adobe Photoshop",
      description:
        "Master photo editing, digital imaging, and visual design. Learn retouching, compositing, color correction, and creative techniques with industry-leading software.",
      duration: "150 hours",
      level: "Professional",
      price: 2,
      pdfPath: "/pdfs/adobe-photoshop-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-yAPCSNTTfSY0bCCjmBbuNuzJSgmPG6.png",
      largeImage: true,
    },
  ],
  benefits: [
    "Industry-recognized credentials validated by Adobe and Certiport",
    "Enhanced career opportunities in creative industries",
    "Validation of 150+ hours of hands-on experience",
    "Access to Adobe Certified Professional community and resources",
    "Demonstrate proficiency to employers and clients",
    "Stand out in competitive job markets",
  ],
  careerPaths: [
    "Graphic Designer",
    "Visual Designer",
    "Digital Artist",
    "Video Editor",
    "Motion Graphics Designer",
    "Marketing Designer",
    "Web Designer",
    "Creative Director",
    "UI/UX Designer",
    "Content Creator",
  ],
}

export default function AdobePage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      {/* Content */}
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={adobeData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A0A14528-398D-4A47-9494-5038CD72B0B6-NTZ8JGzPgTOnM9LJRsgFf8tA2B5Yhn.jpg"
        />
        <CertificationDetailContent data={adobeData} />
        <Footer />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}
