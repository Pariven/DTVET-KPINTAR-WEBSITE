"use client"
import { motion } from "framer-motion"

export default function HeroContent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-24 md:pt-48 pb-16 md:pb-32">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* Main content with enhanced visibility */}
      <div className="relative z-20 text-center max-w-7xl mx-auto mt-8 md:mt-0">
        {/* Enhanced title with responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 md:mb-8 leading-tight font-barlow"
        >
          <span className="text-white drop-shadow-2xl">Empowering ASEAN's Future Workforce with </span>
          <span className="drop-shadow-2xl" style={{ fontFamily: "'Open Sans', sans-serif", color: "#F4BB44" }}>
            Digital TVET Certifications
          </span>
        </motion.h1>

        {/* Enhanced description with responsive sizing */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 md:mb-12 max-w-5xl mx-auto leading-relaxed font-barlow drop-shadow-xl px-4"
        >
          Get certified in Adobe, Microsoft, Cisco, Apple & 13+ industry leading partners. Transform your career with
          globally recognized TVET certifications.
        </motion.p>
      </div>
    </div>
  )
}
