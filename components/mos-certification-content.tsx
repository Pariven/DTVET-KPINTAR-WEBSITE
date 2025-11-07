"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ShoppingCart, ChevronDown, ChevronUp, FileText } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import Image from "next/image"

interface Certification {
  id: number
  name: string
  examCode: string
  description: string
  price: number
  image?: string
}

export default function MOSCertificationContent() {
  const { addToCart } = useCart()
  const { token } = useAuthStore()
  const router = useRouter()
  const [expandedFolder, setExpandedFolder] = useState<string | null>(null)

  const microsoft365Certs: Certification[] = [
    {
      id: 3001,
      name: "Excel for Business Finance",
      examCode: "MO-230",
      description:
        "Demonstrates competency in preparing financial data, performing financial analysis, and creating forecasts.",
  price: 810,
    },
    {
      id: 3002,
      name: "Excel Associate",
      examCode: "MO-210",
      description:
        "Demonstrates competency in creating and managing worksheets, cells, ranges, tables, formulas and charts.",
  price: 810,
    },
    {
      id: 3003,
      name: "Excel Expert",
      examCode: "MO-211",
      description:
        "Demonstrates competency in creating, managing, and distributing professional spreadsheets for specialized purposes.",
  price: 810,
    },
    {
      id: 3004,
      name: "Excel for Accounting",
      examCode: "MO-220",
      description:
        "Demonstrates competency in preparing accounting data, trial balances, financial statements, and routine accounting activities.",
  price: 810,
    },
    {
      id: 3005,
      name: "PowerPoint Associate",
      examCode: "MO-310",
      description: "Demonstrates competency in creating, editing, and enhancing presentations and slideshows.",
  price: 810,
    },
  ]

  const office2019Certs: Certification[] = [
    {
      id: 2001,
      name: "Outlook Associate",
      examCode: "MO-400",
      description: "Demonstrates competency in customizing Outlook, managing messages, schedules, contacts and tasks.",
  price: 810,
    },
    {
      id: 2002,
      name: "Excel Expert",
      examCode: "MO-201",
      description:
        "Demonstrates competency in creating, managing, and distributing professional spreadsheets for specialized purposes.",
  price: 810,
    },
    {
      id: 2003,
      name: "Access Expert",
      examCode: "MO-500",
      description:
        "Demonstrates competency in database design principles and creating/maintaining Access database objects.",
  price: 810,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1583126-KYel2QFngxkb4noIUzWqiO4uFn8Sn3.webp",
    },
    {
      id: 2004,
      name: "PowerPoint Associate",
      examCode: "MO-300",
      description: "Demonstrates competency in creating, editing, and enhancing presentations and slideshows.",
  price: 810,
    },
    {
      id: 2005,
      name: "Excel Associate",
      examCode: "MO-200",
      description:
        "Demonstrates competency in creating and managing worksheets, cells, ranges, tables, formulas and charts.",
  price: 810,
    },
  ]

  const handleAddToCart = (cert: Certification, folder: string) => {
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
      name: `${cert.name} (${cert.examCode}) - ${folder}`,
      provider: "Microsoft Office Specialist",
      logo: cert.image || "/logos/microsoft-logo.webp",
      price: cert.price,
      addedDate: new Date().toLocaleDateString(),
    }

    addToCart(cartItem)

    toast.success(`Added ${cert.name} to cart!`, {
      description: "Go to your cart to complete the purchase.",
    })
  }

  const toggleFolder = (folder: string) => {
    setExpandedFolder(expandedFolder === folder ? null : folder)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-8 flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/logos/microsoft-logo.webp"
                  alt="Microsoft Office Specialist"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-barlow">
              Microsoft Office Specialist
              <span className="block text-[#F4BB44] mt-2">Certifications</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 font-barlow leading-relaxed">
              Validate your Microsoft Office skills with globally recognized certifications. Choose from Microsoft 365
              Apps or Office 2019 certification tracks.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <FileText className="w-4 h-4 text-[#F4BB44]" />
                <span className="font-barlow">Industry-Recognized</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <FileText className="w-4 h-4 text-[#F4BB44]" />
                <span className="font-barlow">Performance-Based Exams</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <FileText className="w-4 h-4 text-[#F4BB44]" />
                <span className="font-barlow">Career Advancement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Folders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-barlow">
              Choose Your <span className="text-[#F4BB44]">Certification Track</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-barlow">
              Select from Microsoft 365 Apps or Office 2019 certification programs
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Microsoft 365 Folder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Folder Header */}
              <button
                onClick={() => toggleFolder("365")}
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[#008080] to-[#006666] hover:from-[#006666] hover:to-[#005555] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#008080]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white font-barlow">Microsoft 365 Apps</h3>
                    <p className="text-gray-200 text-sm font-barlow">
                      {microsoft365Certs.length} Certifications Available
                    </p>
                  </div>
                </div>
                {expandedFolder === "365" ? (
                  <ChevronUp className="w-6 h-6 text-white" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Folder Content */}
              {expandedFolder === "365" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gray-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {microsoft365Certs.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#008080] transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <div className="mb-4">
                          <div className="inline-block bg-[#008080]/10 text-[#008080] px-3 py-1 rounded-full text-sm font-semibold font-barlow mb-3">
                            {cert.examCode}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2 font-barlow min-h-[3rem]">{cert.name}</h4>
                          <p className="text-gray-600 text-sm font-barlow leading-relaxed min-h-[4rem]">
                            {cert.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                          <span className="text-gray-500 text-sm font-barlow">Price:</span>
                          <span className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{cert.price}</span>
                        </div>

                        <div className="space-y-2">
                          <Button
                            onClick={() => handleAddToCart(cert, "Microsoft 365")}
                            className="w-full bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 font-barlow flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Office 2019 Folder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Folder Header */}
              <button
                onClick={() => toggleFolder("2019")}
                className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-[#F4BB44] to-[#E5A63D] hover:from-[#E5A63D] hover:to-[#D69530] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#F4BB44]" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white font-barlow">Microsoft Office 2019</h3>
                    <p className="text-gray-100 text-sm font-barlow">
                      {office2019Certs.length} Certifications Available
                    </p>
                  </div>
                </div>
                {expandedFolder === "2019" ? (
                  <ChevronUp className="w-6 h-6 text-white" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-white" />
                )}
              </button>

              {/* Folder Content */}
              {expandedFolder === "2019" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gray-50"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {office2019Certs.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <div className="mb-4">
                          <div className="inline-block bg-[#F4BB44]/10 text-[#F4BB44] px-3 py-1 rounded-full text-sm font-semibold font-barlow mb-3">
                            {cert.examCode}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2 font-barlow min-h-[3rem]">{cert.name}</h4>
                          <p className="text-gray-600 text-sm font-barlow leading-relaxed min-h-[4rem]">
                            {cert.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                          <span className="text-gray-500 text-sm font-barlow">Price:</span>
                          <span className="text-2xl font-bold text-[#F4BB44] font-barlow">RM{cert.price}</span>
                        </div>

                        <div className="space-y-2">
                          <Button
                            onClick={() => handleAddToCart(cert, "Office 2019")}
                            className="w-full bg-[#F4BB44] hover:bg-[#E5A63D] text-white font-semibold py-2.5 rounded-lg transition-all duration-300 font-barlow flex items-center justify-center gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </Button>
                        </div>
                        {cert.image && (
                          <div className="mt-4 flex justify-center">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.name}
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-barlow">
              Why Get <span className="text-[#F4BB44]">MOS Certified?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Industry Recognition",
                description: "Globally recognized certification that validates your Microsoft Office skills",
              },
              {
                title: "Career Advancement",
                description: "Stand out to employers and increase your earning potential",
              },
              {
                title: "Skill Validation",
                description: "Prove your proficiency with performance-based testing",
              },
              {
                title: "Competitive Edge",
                description: "Gain an advantage in the job market with verified credentials",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#F4BB44] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-barlow">{benefit.title}</h3>
                <p className="text-gray-600 font-barlow">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
