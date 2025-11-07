"use client"

import { motion } from "framer-motion"
import { TrendingUp, ShoppingCart, BookOpen, CheckCircle2, Download } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CertificationObjective {
  section: string
  items: string[]
}

interface Certification {
  id: number
  name: string
  description: string
  duration: string
  level: string
  objectives?: CertificationObjective[]
  logo?: string
  image?: string
}

interface ITSCertificationData {
  title: string
  subtitle: string
  description: string
  logo: string
  certifications: Certification[]
  benefits: string[]
  careerPaths: string[]
  pdfPath?: string
}

interface ITSCertificationContentProps {
  data: ITSCertificationData
}

export default function ITSCertificationContent({ data }: ITSCertificationContentProps) {
  const { addToCart } = useCart()
  const { token } = useAuthStore()
  const router = useRouter()

  const handleAddToCart = (cert: Certification) => {
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
      name: cert.name,
      provider: "IT Specialist",
      logo: cert.logo || cert.image || data.logo,
        price: 810,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const handleDownloadBrochure = async (cert: Certification) => {
    try {
      const pdfPath = data.pdfPath || "/pdfs/its-exam-objectives.pdf"
      const filename = pdfPath.replace('/pdfs/', 'pdfs/')
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

  return (
    <>
      {/* Copyright Notice */}
      <section className="py-4 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap text-center">
            <Image
              src="/logos/certiport-logo.webp"
              alt="Certiport Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <p className="text-xs text-gray-600 max-w-4xl">
              © 2025 Certiport, Inc. Certiport and the Certiport logo are registered trademarks of Certiport Inc. All
              other trademarks and registered trademarks are the property of their respective holders.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section with Detailed Objectives */}
      <section className="py-16 sm:py-24 md:py-32 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-barlow">
              IT Specialist <span className="text-[#F4BB44] font-barlow">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-barlow">
              Comprehensive certification programs with detailed exam objectives mapped to ISTE standards
            </p>
          </motion.div>

          <div className="space-y-8">
            {data.certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#008080] to-[#006666] p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg">
                        <Image
                          src="/logos/certiport-logo.webp"
                          alt="Certiport Logo"
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-barlow">{cert.name}</h3>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                            {cert.duration}
                          </span>
                          <span className="px-3 py-1 bg-[#F4BB44] rounded-full text-gray-900 text-sm font-semibold">
                            {cert.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white font-barlow">RM1</div>
                      <p className="text-white/80 text-sm">per certification</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600 mb-6 font-barlow leading-relaxed text-lg">{cert.description}</p>

                  {/* Exam Objectives */}
                  {cert.objectives && cert.objectives.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="w-6 h-6 text-[#008080]" />
                        <h4 className="text-xl font-bold text-gray-900 font-barlow">Exam Objectives</h4>
                      </div>

                      <Accordion type="single" collapsible className="space-y-3">
                        {cert.objectives.map((objective, objIndex) => (
                          <AccordionItem
                            key={objIndex}
                            value={`item-${objIndex}`}
                            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#F4BB44] transition-colors"
                          >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors">
                              <div className="flex items-center gap-3 text-left">
                                <div className="w-8 h-8 bg-[#008080] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                                  {objIndex + 1}
                                </div>
                                <span className="font-bold text-gray-900 font-barlow">{objective.section}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <ul className="space-y-3 mt-2">
                                {objective.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#F4BB44] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-barlow leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleDownloadBrochure(cert)}
                      className="w-full bg-[#008080] hover:bg-[#006666] text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 font-barlow flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-base"
                    >
                      <Download className="w-5 h-5" />
                      Download Brochure
                    </Button>
                    <Button
                      onClick={() => handleAddToCart(cert)}
                      className="w-full bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-semibold py-6 px-6 rounded-xl transition-all duration-300 font-barlow flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-base"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Career Paths Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-gray-50 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 font-barlow">
                Certification <span className="text-[#F4BB44] font-barlow">Benefits</span>
              </h3>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 bg-white rounded-xl p-4 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <TrendingUp className="w-6 h-6 text-[#F4BB44] flex-shrink-0" />
                    <span className="text-gray-700 font-barlow">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Career Paths */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 font-barlow">
                Career <span className="text-[#F4BB44] font-barlow">Opportunities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.careerPaths.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-[#F4BB44]/10 to-[#E5A63D]/10 rounded-xl p-4 border-2 border-[#F4BB44]/30 hover:border-[#F4BB44] transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-[#F4BB44]" />
                      <span className="text-gray-800 font-barlow font-semibold">{career}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <section className="py-6 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 flex-wrap text-center">
            <Image
              src="/logos/certiport-logo.webp"
              alt="Certiport Logo"
              width={100}
              height={30}
              className="object-contain"
            />
            <p className="text-xs text-gray-600 max-w-4xl">
              © 2025 Certiport, Inc. Certiport and the Certiport logo are registered trademarks of Certiport Inc. All
              other trademarks and registered trademarks are the property of their respective holders.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
