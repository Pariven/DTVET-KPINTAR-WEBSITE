"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ShoppingCart, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface MCECertification {
  id: number
  name: string
  examCode: string
  description: string
  pdfPath: string
  price: number
}

const educatorCertifications: MCECertification[] = [
  {
    id: 5001,
    name: "Technology Literacy for Educators",
    examCode: "62-193",
    description:
      "Demonstrates competency in facilitating student collaboration, skilled communication, knowledge construction, self-regulation, real-world problem solving, and effective use of ICT tools. Based on the 21st Century Learning Design (21CLD) framework.",
    pdfPath: "/pdfs/mce/technology-literacy-educators-62-193.pdf",
  price: 810,
  },
]

export default function MCECertificationSection() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null)
  const { addToCart } = useCart()
  const { token } = useAuthStore()
  const router = useRouter()

  const toggleFolder = (folder: string) => {
    setExpandedFolder(expandedFolder === folder ? null : folder)
  }

  const handleDownloadBrochure = async (cert: MCECertification) => {
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

  const handleAddToCart = (cert: MCECertification) => {
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
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/microsoft-certified-educator-badge-ZXy4N9j8K2vL3mR5qT7wE1uP6sA9cF.png",
      price: cert.price,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const renderCertificationCard = (cert: MCECertification, index: number) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#F4BB44]/10 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-[#F4BB44]" />
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-barlow">
            MCE - <span className="text-[#F4BB44] font-barlow">Microsoft Certified Educator</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Educator Certifications Folder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleFolder("educator")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 font-barlow">Educator Certifications</h3>
                  <p className="text-sm text-gray-600 font-barlow">
                    {educatorCertifications.length} Certification Available
                  </p>
                </div>
              </div>
              {expandedFolder === "educator" ? (
                <ChevronUp className="w-6 h-6 text-[#F4BB44]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {expandedFolder === "educator" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {educatorCertifications.map((cert, index) => renderCertificationCard(cert, index))}
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
