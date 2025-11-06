"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, ShoppingCart, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

interface MOSCertification {
  id: number
  name: string
  examCode: string
  description: string
  pdfPath: string
  price: number
  icon?: string
}

const microsoft365Certifications: MOSCertification[] = [
  {
    id: 3001,
    name: "Excel for Business Finance",
    examCode: "MO-230",
    description:
      "Demonstrates competency in preparing financial data for analysis, performing financial analysis, performing loan and investment analysis, and creating financial forecasts.",
    pdfPath: "/pdfs/mos/excel-business-finance-mo-230.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3002,
    name: "Excel Associate",
    examCode: "MO-210",
    description:
      "Demonstrates competency in creating and managing worksheets and workbooks, creating cells and ranges, creating tables, applying formulas and functions, and creating charts and objects.",
    pdfPath: "/pdfs/mos/excel-mo-210.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3003,
    name: "Excel Expert",
    examCode: "MO-211",
    description:
      "Demonstrates competency in creating, managing, and distributing professional spreadsheets for specialized purposes and situations including custom business templates and financial charts.",
    pdfPath: "/pdfs/mos/excel-expert-mo-211.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3004,
    name: "Excel for Accounting",
    examCode: "MO-220",
    description:
      "Demonstrates competency in preparing accounting data for analysis, preparing a trial balance, preparing and analyzing financial statements, and performing routine accounting activities.",
    pdfPath: "/pdfs/mos/excel-accounting-mo-220.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3005,
    name: "PowerPoint Associate",
    examCode: "MO-310",
    description:
      "Demonstrates competency to create, edit, and enhance presentations and slideshows including professional-grade sales presentations, employee training, and instructional materials.",
    pdfPath: "/pdfs/mos/powerpoint-mo-310.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft-PowerPoint-Logo-90Adh0TR48V7bU7KoidBYVrJX9c8CZ.png",
  },
  {
    id: 3011,
    name: "Word Expert",
    examCode: "MO-111",
    description:
      "Demonstrates competency in creating and managing professional documents for specialized purposes and situations. Covers customizing Word environments, managing forms and fields, creating macros, and performing mail merges.",
    pdfPath: "/pdfs/mos/word-expert-mo-111.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Word_2013-2019_logo.svg-rrP48YDAYxj2la1MAE6tuj7cnDvlL3.png",
  },
  {
    id: 3012,
    name: "Word Associate",
    examCode: "MO-110",
    description:
      "Demonstrates competency in creating and editing documents for various purposes and situations. Covers managing documents, formatting text and paragraphs, creating tables and lists, and inserting graphic elements.",
    pdfPath: "/pdfs/mos/word-associate-mo-110.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Word_2013-2019_logo.svg-rrP48YDAYxj2la1MAE6tuj7cnDvlL3.png",
  },
]

const office2019Certifications: MOSCertification[] = [
  {
    id: 3006,
    name: "Outlook Associate",
    examCode: "MO-400",
    description:
      "Demonstrates competency to customize the Outlook user interface, format message content, create or insert graphic elements, and send and respond to emails and meeting requests.",
    pdfPath: "/pdfs/mos/outlook-mo-400.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Outlook_2013-2019_logo.svg-AmPYsTKE1WxfL7iHtz9DgXmzlUhOuv.png",
  },
  {
    id: 3007,
    name: "Excel Expert",
    examCode: "MO-201",
    description:
      "Demonstrates competency in creating, managing, and distributing professional spreadsheets including custom business templates, multiple-axis financial charts, and amortization tables.",
    pdfPath: "/pdfs/mos/excel-expert-mo-201.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3008,
    name: "Access Expert",
    examCode: "MO-500",
    description:
      "Demonstrates competency in database design principles including creating and maintaining Access database objects such as tables, relationships, data entry forms, and multi-table queries.",
    pdfPath: "/pdfs/mos/access-expert-mo-500.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1583126-KYel2QFngxkb4noIUzWqiO4uFn8Sn3.webp",
  },
  {
    id: 3009,
    name: "PowerPoint Associate",
    examCode: "MO-300",
    description:
      "Demonstrates competency to create, edit, and enhance presentations and slideshows including managing presentations, inserting and formatting shapes and slides, and applying transitions.",
    pdfPath: "/pdfs/mos/powerpoint-mo-300.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft-PowerPoint-Logo-90Adh0TR48V7bU7KoidBYVrJX9c8CZ.png",
  },
  {
    id: 3010,
    name: "Excel Associate",
    examCode: "MO-200",
    description:
      "Demonstrates competency in creating and managing worksheets and workbooks, creating cells and ranges, creating tables, applying formulas and functions, and creating charts.",
    pdfPath: "/pdfs/mos/excel-mo-200.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/excel-logo-png_seeklogo-266583-RXMXHTPXrMyivL1XNmRF5GiFQn4OC8.png",
  },
  {
    id: 3013,
    name: "Word Expert",
    examCode: "MO-101",
    description:
      "Demonstrates competency in creating and managing professional documents for specialized purposes. Covers document options, advanced editing features, custom document elements, and advanced Word features.",
    pdfPath: "/pdfs/mos/word-expert-mo-101.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Word_2013-2019_logo.svg-rrP48YDAYxj2la1MAE6tuj7cnDvlL3.png",
  },
  {
    id: 3014,
    name: "Word Associate",
    examCode: "MO-100",
    description:
      "Demonstrates competency in creating and editing documents for various purposes. Covers managing documents, formatting text and paragraphs, managing tables and lists, and creating references.",
    pdfPath: "/pdfs/mos/word-associate-mo-100.pdf",
    price: 2,
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft_Word_2013-2019_logo.svg-rrP48YDAYxj2la1MAE6tuj7cnDvlL3.png",
  },
]

export default function MOSCertificationSection() {
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null)
  const { addToCart } = useCart()
  const { token } = useAuthStore()
  const router = useRouter()

  const toggleFolder = (folder: string) => {
    setExpandedFolder(expandedFolder === folder ? null : folder)
  }

  const handleAddToCart = (cert: MOSCertification) => {
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
      logo: cert.icon || "/logos/microsoft-logo.webp",
      price: cert.price,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const handleDownloadPDF = (cert: MOSCertification) => {
    const link = document.createElement("a")
    link.href = cert.pdfPath
    link.download = cert.pdfPath.split("/").pop() || "certification.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast.success("Downloading PDF", {
      description: `${cert.name} certification PDF is being downloaded.`,
    })
  }

    const handleDownloadBrochure = async (cert: MOSCertification) => {
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

  const renderCertificationCard = (cert: MOSCertification, index: number) => (
    <motion.div
      key={cert.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        {cert.icon ? (
          <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden">
            <img src={cert.icon || "/placeholder.svg"} alt={cert.name} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="flex-shrink-0 w-12 h-12 bg-[#F4BB44]/10 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-[#F4BB44]" />
          </div>
        )}
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
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-barlow">
            MCE - <span className="text-[#F4BB44] font-barlow">Microsoft Office Specialist</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Microsoft 365 Folder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleFolder("microsoft365")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#008080] to-[#006666] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 font-barlow">Microsoft 365 Apps</h3>
                  <p className="text-sm text-gray-600 font-barlow">
                    {microsoft365Certifications.length} Certifications Available
                  </p>
                </div>
              </div>
              {expandedFolder === "microsoft365" ? (
                <ChevronUp className="w-6 h-6 text-[#F4BB44]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {expandedFolder === "microsoft365" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {microsoft365Certifications.map((cert, index) => renderCertificationCard(cert, index))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Microsoft Office 2019 Folder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg"
          >
            <button
              onClick={() => toggleFolder("office2019")}
              className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F4BB44] to-[#E5A63D] rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 font-barlow">Microsoft Office 2019</h3>
                  <p className="text-sm text-gray-600 font-barlow">
                    {office2019Certifications.length} Certifications Available
                  </p>
                </div>
              </div>
              {expandedFolder === "office2019" ? (
                <ChevronUp className="w-6 h-6 text-[#F4BB44]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            <AnimatePresence>
              {expandedFolder === "office2019" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {office2019Certifications.map((cert, index) => renderCertificationCard(cert, index))}
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
