"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CertificationDetailHeroProps {
  data: {
    title: string
    subtitle: string
    description: string
    logo: string
  }
  heroImage: string
}

export default function CertificationDetailHero({ data, heroImage }: CertificationDetailHeroProps) {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-white font-barlow drop-shadow-lg">
              {data.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#F4BB44] mb-4 sm:mb-6 font-open-sans drop-shadow-lg">
              {data.subtitle}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-white mb-6 sm:mb-8 leading-relaxed font-barlow max-w-xl drop-shadow-lg">
              {data.description}
            </p>
          </motion.div>

          {/* Right Column - Logo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 w-full max-w-[200px] sm:max-w-xs">
              <div className="aspect-[4/3] flex items-center justify-center">
                <Image
                  src={data.logo || "/placeholder.svg"}
                  alt={`${data.title} logo`}
                  width={200}
                  height={150}
                  className="object-contain w-[120px] sm:w-[200px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
