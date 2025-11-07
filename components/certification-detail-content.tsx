"use client"

import { motion } from "framer-motion"
import { TrendingUp, ShoppingCart, Download } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { toast } from "sonner"
import Image from "next/image"
import MCFCertificationSection from "@/components/mcf-certification-section"
import MOSCertificationSection from "@/components/mos-certification-section"
import MCECertificationSection from "@/components/mce-certification-section"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/lib/store"

interface CertificationData {
  title: string
  subtitle: string
  description: string
  logo: string
  pdfPath?: string
  applicationIcons?: Array<{
    name: string
    icon: string
  }>
  brochureIcons?: Array<{
    name: string
    icon: string
  }>
  certifications: Array<{
    id?: number
    name: string
    description: string
    duration: string
    level: string
    price?: number
    image?: string
    logo?: string
    largeImage?: boolean
    pdfPath?: string
  }>
  benefits: string[]
  careerPaths: string[]
}

interface CertificationDetailContentProps {
  data: CertificationData
}

export default function CertificationDetailContent({ data }: CertificationDetailContentProps) {
  const { addToCart } = useCart()
  const router = useRouter()
  const { token } = useAuthStore()

  const handleAddToCart = (cert: any) => {
    // Check if user is logged in
    const isLoggedIn = !!token || !!localStorage.getItem('token')
    
    if (!isLoggedIn) {
      toast.error("Please login to add items to cart", {
        description: "Redirecting to login page...",
      })
      // Redirect to login page after a short delay
      setTimeout(() => {
        router.push('/login')
      }, 1000)
      return
    }

    const cartItem = {
      id: cert.id || Math.floor(Math.random() * 10000),
      name: cert.name,
      provider: data.title.split(" ")[0],
      logo: cert.image || cert.logo || data.logo,
      price: cert.price || 810,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const handleDownloadBrochure = async (pdfPath: string, certName: string) => {
    try {
      // Use the API route for downloading - works better on iOS and Android
      const filename = pdfPath.replace('/pdfs/', 'pdfs/')
      const downloadUrl = `/api/download?file=${encodeURIComponent(filename)}`
      
      // Fetch the file first to check if it exists
      const response = await fetch(downloadUrl)
      
      if (!response.ok) {
        toast.error("Brochure not available", {
          description: "This brochure is currently being prepared. Please try again later.",
        })
        return
      }
      
      // Get the blob from the response
      const blob = await response.blob()
      
      // Create object URL for the blob
      const blobUrl = window.URL.createObjectURL(blob)
      
      // Create a temporary link to trigger download
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = filename.split('/').pop() || 'brochure.pdf'
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link)
        window.URL.revokeObjectURL(blobUrl)
      }, 100)
      
      toast.success("Download started", {
        description: `${certName} brochure is being downloaded.`,
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
      {data.applicationIcons && data.applicationIcons.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-barlow">
                Master{" "}
                <span className="text-[#F4BB44] font-barlow">
                  {data.title.includes("Microsoft") ? "Microsoft Office Suite" : "Swift Development Tools"}
                </span>
              </h3>
              <p className="text-gray-600 font-barlow">
                {data.title.includes("Microsoft")
                  ? "Get certified in the world's most widely used productivity applications"
                  : "Build iOS apps with industry-standard development tools"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
            >
              {data.applicationIcons.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={app.icon || "/placeholder.svg"}
                      alt={`${app.name} icon`}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 font-barlow group-hover:text-[#F4BB44] transition-colors duration-300">
                    {app.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {data.brochureIcons && data.brochureIcons.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative z-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-barlow">
                Certification <span className="text-[#F4BB44] font-barlow">Tracks</span>
              </h3>
              <p className="text-gray-600 font-barlow">
                {data.title.includes("Cisco")
                  ? "Explore our comprehensive Cisco certification programs"
                  : "Explore our comprehensive certification programs"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-6 md:gap-8"
            >
              {data.brochureIcons.map((track, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={track.icon || "/placeholder.svg"}
                      alt={`${track.name} icon`}
                      fill
                      sizes="(max-width: 768px) 64px, 80px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 font-barlow group-hover:text-[#F4BB44] transition-colors duration-300">
                    {track.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
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
              Available <span className="text-[#F4BB44] font-barlow">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-barlow">
              Choose from our comprehensive certification programs designed to validate your skills
            </p>
          </motion.div>

          {data.title.includes("Microsoft") ? (
            <div className="space-y-12">
              <MCFCertificationSection />
              <MOSCertificationSection />
              <MCECertificationSection />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={cert.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-[#F4BB44] group"
                >
                  {(cert.image || cert.logo) && (
                    <div
                      className={`relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 ${cert.largeImage ? "h-72" : "h-48"}`}
                    >
                      <Image
                        src={cert.image || cert.logo || "/placeholder.svg"}
                        alt={cert.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow line-clamp-2 group-hover:text-[#F4BB44] transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 font-barlow text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex justify-end mb-4">
                      <span className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{cert.price || 2}</span>
                    </div>

                    <div className="space-y-2">
                      {cert.pdfPath && (
                        <button
                          onClick={() => handleDownloadBrochure(cert.pdfPath!, cert.name)}
                          className="w-full bg-[#008080] hover:bg-[#006666] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-barlow"
                        >
                          <Download className="w-4 h-4" />
                          Download Brochure
                        </button>
                      )}
                      <button
                        onClick={() => handleAddToCart(cert)}
                        className="w-full bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-barlow"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
    </>
  )
}
