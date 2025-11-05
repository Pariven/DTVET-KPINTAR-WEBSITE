"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import ScrollToTop from "@/components/scroll-to-top"

const wordpressData = {
  title: "WordPress Certifications",
  subtitle: "Build Your Professional Foundation",
  description:
    "Advance your career with comprehensive certification programs designed for professional growth and industry recognition. WordPress offers globally recognized credentials valued by employers worldwide.",
  logo: "/logos/wordpress-logo.png",
  certifications: [
    {
      id: 2001,
      name: "WP Certified Editor",
      description:
        "Master WordPress content editing and management. Learn to create, edit, and publish engaging content with the WordPress block editor and advanced formatting tools.",
      duration: "40 hours",
      level: "Beginner",
      price: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property-1WP-Certified-Editor-BG-colordark-removebg-preview-houFGwGTkWyFSdIYTt7QfwQALVytqt.png",
      largeImage: true,
      pdfPath: "/pdfs/wp-certified-editor.pdf",
    },
    {
      id: 2002,
      name: "WP Elementor Specialist",
      description:
        "Become an expert in Elementor page builder. Design stunning, responsive websites with drag-and-drop functionality and advanced customization options.",
      duration: "60 hours",
      level: "Intermediate",
      price: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property-1WP-Elementor-Specialist-BG-colorlight-1-removebg-preview-F3FRfbUSTbLqabGG9CJ7vNAwwUfZGs.png",
      largeImage: true,
      pdfPath: "/pdfs/wp-elementor-specialist.pdf",
    },
    {
      id: 2003,
      name: "WP WooCommerce Specialist",
      description:
        "Build and manage successful online stores with WooCommerce. Master e-commerce setup, product management, payment gateways, and store optimization.",
      duration: "80 hours",
      level: "Intermediate",
      price: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property-1WP-WooCommerce-Specialist-BG-colorlight-1-removebg-preview-W1XN1u66mNXCaLssJbixKsxS2WkKPj.png",
      largeImage: true,
      pdfPath: "/pdfs/wp-woocommerce-specialist.pdf",
    },
    {
      id: 2004,
      name: "WP Certified Developer",
      description:
        "Develop custom WordPress themes and plugins. Learn PHP, WordPress APIs, database management, and best practices for professional WordPress development.",
      duration: "120 hours",
      level: "Advanced",
      price: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property-1WP-Certified-Developer-BG-colordark-removebg-preview-PgfqOcX0z4B5mf631MMnNIztymMIDv.png",
      largeImage: true,
      pdfPath: "/pdfs/wp-certified-developer.pdf",
    },
    {
      id: 2005,
      name: "WP Certified Administrator",
      description:
        "Master WordPress site administration and maintenance. Learn security best practices, performance optimization, backup strategies, and user management.",
      duration: "50 hours",
      level: "Intermediate",
      price: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property-1WordPress-Certified-Administrator-BG-colordark__1_-removebg-preview-MSuTNSaKevZpxUwckDafUlDRHUdJip.png",
      largeImage: true,
      pdfPath: "/pdfs/wp-certified-administrator.pdf",
    },
  ],
  benefits: [
    "Industry-recognized certifications valued by employers worldwide",
    "Comprehensive learning materials and expert instructor support",
    "Flexible study schedules designed for working professionals",
    "Career advancement opportunities and professional networking access",
    "Global credential recognition across multiple industries",
    "Practical skill development with real-world applications",
    "Lifetime access to certification resources and updates",
    "Dedicated career support and job placement assistance",
  ],
  careerPaths: [
    "WordPress Developer",
    "Web Designer",
    "Content Manager",
    "E-commerce Specialist",
    "Digital Marketing Manager",
    "Freelance Web Developer",
    "WordPress Consultant",
    "Site Administrator",
    "Theme Developer",
    "Plugin Developer",
  ],
}

export default function WordPressPage() {
  const router = useRouter()

  return (
    <div className="w-full min-h-screen relative bg-white">
      {/* Content */}
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={wordpressData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A0A14528-398D-4A47-9494-5038CD72B0B6-NTZ8JGzPgTOnM9LJRsgFf8tA2B5Yhn.jpg"
        />
        <CertificationDetailContent data={wordpressData} />
        <Footer />
      </div>

      {/* Only Scroll button */}
      <ScrollToTop />
    </div>
  )
}
