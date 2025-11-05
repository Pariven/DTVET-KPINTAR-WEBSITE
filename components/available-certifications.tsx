"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AvailableCertifications() {
  const availableCertifications = [
    {
      name: "Adobe Certifications",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe_Certified_Professional_badge-lYiPOGXZmWB9zMjIUkk81hWY1PCqCn.png",
      provider: "Certiport",
      href: "/certifications/adobe",
    },
    {
      name: "Apple Certifications",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swift_logo_horz_lockup_color_rgb%202-Nq5Jwd5wTcUa2xTtQqqmFGEd7yl1KI.png",
      provider: "Certiport",
      href: "/certifications/apple",
    },
    {
      name: "Autodesk Certifications",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Autodesk-logo-rgb-black-TvBZoe3E557v5k0pHfU1EEXyaRS5u3.png",
      provider: "Certiport",
      href: "/certifications/autodesk",
    },
    {
      name: "Cisco Certifications",
      logo: "/logos/cisco-logo.png",
      provider: "Certiport",
      href: "/certifications/cisco",
    },
    {
      name: "Microsoft Certifications",
      logo: "/logos/microsoft-logo.webp",
      provider: "Certiport",
      href: "/certifications/microsoft",
    },
    {
      name: "Unity Certifications",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U_Logo_Small_Black_RGB_1C%201-TXl0Z3CEF06dAVyH4wsQV8Bo2dhmqe.png",
      provider: "Certiport",
      href: "/certifications/unity",
    },
    { name: "Meta Certifications", logo: "/logos/meta-logo.png", provider: "Certiport", href: "/certifications/meta" },
    {
      name: "Information Technology Specialist",
      logo: "/logos/its-logo.png",
      provider: "Certiport",
      href: "/certifications/its",
    },
    {
      name: "Intuit Certifications",
      logo: "/logos/intuit-logo.png",
      provider: "Certiport",
      href: "/certifications/intuit",
    },
    {
      name: "Health Science Careers",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-removebg-preview-m43PqxxYRmK3sfOZc3yRiDFUhCdmjy.png",
      provider: "Certiport",
      href: "/certifications/health-science",
    },
    {
      name: "Entrepreneurship & Small Business",
      logo: "/logos/esb-logo.png",
      provider: "Certiport",
      href: "/certifications/entrepreneurship",
    },
    {
      name: "Hospitality & Culinary Arts",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-removebg-preview-LKhjuZE5PETXFRergDleCGMOXjCl1C.png",
      provider: "Certiport",
      href: "/certifications/hospitality",
    },
    {
      name: "Agriscience & Technology",
      logo: "/logos/agriscience-logo.png",
      provider: "Certiport",
      href: "/certifications/agriscience",
    },
    {
      name: "Project Management Institute",
      logo: "/logos/pmi-logo.png",
      provider: "Certiport",
      href: "/certifications/pmi",
    },
    {
      name: "IC3 Digital Literacy",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-removebg-preview-dKvIvO7N1b79CTqo8GvBwXUazkoEgl.png",
      provider: "Certiport",
      href: "/certifications/ic3",
    },
    {
      name: "WordPress",
      logo: "/logos/wordpress-logo.png",
      provider: "WordPress",
      href: "/certifications/knowledge-pillars",
    },
  ]

  const handleCertificationClick = (href: string) => {
    window.location.href = href
  }

  return (
    <>
      <section className="py-20 md:py-32 relative z-20 border-t border-gray-800/70">
        {/* Background with overlay - Same as Authorized Provider */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed md:bg-fixed bg-scroll"
          style={{
            backgroundImage: "url('/robot-library-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 font-barlow">
                Our <span className="text-[#F4BB44]">Certification Programs</span>
              </h3>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-barlow">
                Gain in-demand skills with globally recognized certifications across various industries:
              </p>
            </motion.div>

            {/* Available Certifications List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
            >
              <h4 className="text-2xl font-bold text-white font-barlow mb-8 text-center">Available Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {availableCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <button onClick={() => handleCertificationClick(cert.href)} className="w-full h-full">
                      <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group h-full min-h-[240px] max-h-[240px] flex flex-col items-center justify-between">
                        <div className="w-full flex-1 flex items-center justify-center mb-4">
                          <div
                            className={`relative w-full flex items-center justify-center ${cert.name === "Hospitality & Culinary Arts" || cert.name === "Health Science Careers" || cert.name === "IC3 Digital Literacy" ? "h-40" : cert.name === "WordPress" ? "h-32" : "h-32"}`}
                          >
                            <Image
                              src={cert.logo || "/placeholder.svg"}
                              alt={`${cert.name} logo`}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                              className={`object-contain ${cert.name === "Hospitality & Culinary Arts" || cert.name === "Health Science Careers" || cert.name === "IC3 Digital Literacy" ? "p-0 scale-125" : "p-2"}`}
                            />
                          </div>
                        </div>
                        <div className="w-full text-center">
                          <h5 className="font-bold text-gray-800 text-sm font-barlow leading-tight px-2">
                            {cert.name}
                          </h5>
                        </div>
                      </div>
                    </button>
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
