"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const partners = [
  {
    name: "Adobe",
    logo: "/logos/adobe-logo.png",
    description: "Industry-standard creative software certifications including Photoshop, Illustrator, and InDesign.",
  },
  {
    name: "Autodesk",
    logo: "/logos/autodesk-logo.png",
    description: "Professional certifications for CAD, 3D modeling, and architecture software.",
  },
  {
    name: "Apple",
    logo: "/logos/apple-logo.png",
    description: "Apple certified professional programs for macOS, iOS development, and creative applications.",
  },
  {
    name: "Cisco",
    logo: "/logos/cisco-logo.png",
    description: "Networking and IT infrastructure certifications recognized worldwide.",
  },
  {
    name: "CompTIA",
    logo: "/logos/comptia-logo.png",
    description: "Vendor-neutral IT certifications covering cybersecurity, networking, and technical support.",
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft-logo.webp",
    description: "Microsoft certified professional programs for Azure, Office, and developer technologies.",
  },
  {
    name: "Information Technology Specialist",
    logo: "/logos/its-logo.png",
    description: "Specialized IT certifications for various technology domains and career paths.",
  },
  {
    name: "Intuit",
    logo: "/logos/intuit-logo.png",
    description: "Financial software certifications for QuickBooks, TurboTax, and other Intuit products.",
  },
  {
    name: "Meta",
    logo: "/logos/meta-logo.png",
    description: "Digital marketing, social media, and Meta platform certifications.",
  },
  {
    name: "Unity",
    logo: "/logos/unity-logo.png",
    description: "Game development and interactive content creation certifications for Unity engine.",
  },
  {
    name: "Project Management Institute",
    logo: "/logos/pmi-logo.png",
    description: "Project management professional certifications including PMP, CAPM, and agile certifications.",
  },
  {
    name: "Hospitality & Culinary Arts",
    logo: "/logos/hospitality-logo.png",
    description: "Specialized certifications for hospitality management and culinary professionals.",
  },
  {
    name: "Certiport",
    logo: "/logos/certiport-logo.webp",
    description: "Certification delivery service offering various technology credential programs.",
  },
  {
    name: "IC3 Digital Literacy",
    logo: "/logos/ic3-logo.webp",
    description: "Global standard for digital literacy certification in educational institutions.",
  },
  {
    name: "Health Sciences Careers",
    logo: "/logos/health-sciences-logo.png",
    description: "Healthcare and medical technology certification programs for aspiring health professionals.",
  },
  {
    name: "WordPress",
    logo: "/logos/wordpress-logo.png",
    description: "Comprehensive certification programs for professional development and career advancement.",
  },
]

const slidingWords = ["Leading", "Premier", "Trusted", "Global", "World-Class", "Industry-Leading"]

export default function CertificationPartners() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % slidingWords.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section
      className="py-32 bg-white backdrop-blur-lg relative z-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4880206.jpg-OtINP44EislWywF0QdP7eebeHLsNbo.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Wrap existing content in relative positioned div */}
      <div className="relative">
        <div className="container mx-auto px-4 mb-20">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-black mb-4 font-barlow drop-shadow-2xl"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="inline-block text-[#F4BB44]"
                >
                  {slidingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>{" "}
              Certification Partners
            </motion.h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto drop-shadow-lg">
              DTVET collaborates with world-leading technology and industry partners to offer globally recognized
              certifications that enhance your career opportunities across multiple sectors.
            </p>
          </div>
        </div>

        {/* First Sliding Carousel - Moving Left - Full Width */}
        <div className="relative mb-8 w-full">
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-8 w-max"
              animate={{
                x: [0, -100 * partners.length * 2],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: partners.length * 6, // Slower animation
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div key={`left-${partner.name}-${index}`} className="flex-shrink-0 w-48 h-32">
                  <div className="h-full flex items-center justify-center">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        fill
                        style={{ objectFit: "contain" }}
                        className="p-2"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Minimal gradient overlays */}
          <div className="absolute left-0 top-0 w-8 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-8 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  )
}
