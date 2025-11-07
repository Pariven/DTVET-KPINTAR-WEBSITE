"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ShoppingCart, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Image from "next/image"

interface MCFCertification {
  id: number
  name: string
  examCode: string
  description: string
  pdfPath: string
  price: number
  badgeImage: string
}

const fundamentalsCertifications: MCFCertification[] = [
  {
    id: 4001,
    name: "Azure Fundamentals",
    examCode: "AZ-900",
    description:
      "Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure. Covers cloud concepts, Azure services, security, privacy, compliance, and trust.",
    pdfPath: "/pdfs/mcf/azure-fundamentals-az-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter_thumb_201604_image-KsYLaRNZoPVUIJ5VbfI79zYPQ6AiIJ.png",
  },
  {
    id: 4002,
    name: "Microsoft 365 Fundamentals",
    examCode: "MS-900",
    description:
      "Demonstrates foundational knowledge of the considerations and benefits of adopting cloud services and the Software as a Service (SaaS) cloud model, with a specific focus on Microsoft 365 cloud service offerings.",
    pdfPath: "/pdfs/mcf/microsoft-365-fundamentals-ms-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter_thumb_201604_image%20%281%29-R001QgLMC21gapTHfyOIm44HENB6ih.png",
  },
  {
    id: 4003,
    name: "Power Platform Fundamentals",
    examCode: "PL-900",
    description:
      "Demonstrates foundational knowledge of the business value and product capabilities of Microsoft Power Platform. Covers Power Apps, Power Automate, Power BI, and Power Virtual Agents.",
    pdfPath: "/pdfs/mcf/power-platform-fundamentals-pl-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CERT-Fundamentals-Power-Platform-420x420-1-YhBnPlSmoeAIXPGPoBSrVwWGMKONhZ.webp",
  },
  {
    id: 4004,
    name: "Security, Compliance, and Identity Fundamentals",
    examCode: "SC-900",
    description:
      "Demonstrates foundational knowledge on security, compliance, and identity concepts and related cloud-based Microsoft solutions. Covers security, compliance, and identity principles.",
    pdfPath: "/pdfs/mcf/security-compliance-identity-sc-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter_thumb_201604_security-compliance-and-identity-fundamentals-600x600-OjG7cHmRr7wQdDMIOtvut08IvxAkov.png",
  },
  {
    id: 4005,
    name: "Azure AI Fundamentals",
    examCode: "AI-900",
    description:
      "Demonstrates foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services. Covers AI workloads, principles of machine learning, and computer vision.",
    pdfPath: "/pdfs/mcf/azure-ai-fundamentals-ai-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b5491ddf3795e2527aa1118c56c6072d955c4552cce17253f4bc72b766c6754d-t4lIYZQvc9KZfTfpBNg5GSozvgGNWy.png",
  },
  {
    id: 4006,
    name: "Azure Data Fundamentals",
    examCode: "DP-900",
    description:
      "Demonstrates foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services. Covers relational and non-relational data, analytics workloads, and data processing.",
    pdfPath: "/pdfs/mcf/azure-data-fundamentals-dp-900.pdf",
      price: 810,
    badgeImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twitter_thumb_201604_azure-data-fundamentals-600x600-MwnQQVngD5N0Ki1t1T2WcemITWCenW.png",
  },
]

export default function MCFCertificationSection() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null)
  const { addToCart } = useCart()
  const { token } = useAuthStore()
  const router = useRouter()

  const toggleFolder = (folder: string) => {
    setExpandedFolder(expandedFolder === folder ? null : folder)
  }

  const handleAddToCart = (cert: MCFCertification) => {
    // Check if user is logged in
    const isLoggedIn = !!token || !!localStorage.getItem('token')
    
    if (!isLoggedIn) {
      toast.error("Please login to add items to cart", {
        description: "Redirecting to login page...",
      })
      // Store current page for redirect after login
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('redirectAfterLogin', window.location.pathname)
      }
      // Redirect to login page after a short delay
      setTimeout(() => {
        router.push('/login')
      }, 1000)
      return
    }

    const cartItem = {
      id: cert.id,
      name: `${cert.name} (${cert.examCode})`,
      provider: "Microsoft",
      logo: cert.badgeImage || "/logos/microsoft-logo.webp",
      price: cert.price,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const handleDownloadBrochure = async (cert: MCFCertification) => {
    try {
      const filename = cert.pdfPath.replace('/pdfs/', 'pdfs/')
      const downloadUrl = `/api/download?file=${encodeURIComponent(filename)}`
      
      const response = await fetch(downloadUrl)
      
      if (!response.ok) {
        toast.error("Brochure not available", {
          description: "This brochure is currently being prepared. Please try again later.",
        })
        return
      }
      
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = filename.split('/').pop() || 'brochure.pdf'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      
      setTimeout(() => {
        document.body.removeChild(link)
        window.URL.revokeObjectURL(blobUrl)
      }, 100)

      toast.success("Download started", {
        description: `${cert.name} brochure is being downloaded.`,
      })
    } catch (error) {
      console.error('Download error:', error)
      toast.error("Download failed", {
        description: "Please ensure the brochure file exists or contact support.",
      })
    }
  }

  const renderCertificationCard = (cert: MCFCertification, index: number) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-16 h-16 relative">
          <Image
            src={cert.badgeImage || "/placeholder.svg"}
            alt={`${cert.name} Badge`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-1 font-barlow">{cert.name}</h4>
          <p className="text-sm text-[#008080] font-semibold font-barlow">Exam Code: {cert.examCode}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4 font-barlow text-sm leading-relaxed">{cert.description}</p>

      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <span className="text-sm text-gray-500 font-barlow">Certification Price</span>
        <span className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{cert.price}</span>
      </div>

      <div className="space-y-2">
        <Button
          onClick={() => handleDownloadBrochure(cert)}
          className="w-full bg-[#008080] hover:bg-[#006666] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 font-barlow flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <Download className="w-4 h-4" />
          Download Brochure
        </Button>
        <Button
          onClick={() => handleAddToCart(cert)}
          className="w-full bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 font-barlow flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  )

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-barlow">
            <span className="text-black">Microsoft</span> <span className="text-[#F4BB44]">Certified Fundamentals</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleFolder("fundamentals")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0078D4] to-[#005A9E] rounded-lg flex items-center justify-center shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold font-barlow">
                    <span className="text-black">Microsoft</span>{" "}
                    <span className="text-[#F4BB44]">Certified Fundamentals</span>
                  </h3>
                  <p className="text-sm text-gray-600 font-barlow">
                    {fundamentalsCertifications.length} Certifications Available
                  </p>
                </div>
              </div>
              {expandedFolder === "fundamentals" ? (
                <ChevronUp className="w-6 h-6 text-[#F4BB44]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {expandedFolder === "fundamentals" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fundamentalsCertifications.map((cert, index) => renderCertificationCard(cert, index))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
