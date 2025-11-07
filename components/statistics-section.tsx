"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StatisticsSection() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    // Animate first counter (10+) - much slower
    const timer1 = setInterval(() => {
      setCount1((prev) => {
        if (prev < 10) return prev + 1
        clearInterval(timer1)
        return 10
      })
    }, 800) // Increased from 500ms

    // Animate second counter (50+) - much slower
    const timer2 = setInterval(() => {
      setCount2((prev) => {
        if (prev < 50) return prev + 1
        clearInterval(timer2)
        return 50
      })
    }, 500) // Increased from 300ms

    // Animate third counter (10,000+) - much slower
    const timer3 = setInterval(() => {
      setCount3((prev) => {
        if (prev < 10000) return prev + 50 // Reduced increment
        clearInterval(timer3)
        return 10000
      })
    }, 200) // Increased from 150ms

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg relative z-20 border-t border-gray-800/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 font-barlow">
              Our{" "}
              <span className="text-[#F4BB44]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Impact
              </span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#F4BB44] rounded-full mx-auto mb-3 sm:mb-4"></div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto font-barlow px-4">
              Transforming careers across ASEAN with industry-recognized certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center max-w-xs sm:max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-2xl border border-white/20"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-barlow">
                {count1}+
              </h3>
              <p className="text-[#F4BB44] text-sm sm:text-lg font-semibold font-barlow mb-1 sm:mb-2">
                ASEAN Countries
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-barlow">
                Serving professionals across Southeast Asia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-2xl border border-white/20"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-barlow">
                {count2}+
              </h3>
              <p className="text-[#F4BB44] text-sm sm:text-lg font-semibold font-barlow mb-1 sm:mb-2">TVET Programs</p>
              <p className="text-gray-300 text-xs sm:text-sm font-barlow">Comprehensive certification pathways</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 shadow-2xl border border-white/20 sm:col-span-3 sm:col-start-2 sm:max-w-xs sm:mx-auto lg:col-span-1 lg:col-start-auto lg:max-w-none"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-barlow">
                {count3.toLocaleString()}+
              </h3>
              <p className="text-[#F4BB44] text-sm sm:text-lg font-semibold font-barlow mb-1 sm:mb-2">
                Certified Professionals
              </p>
              <p className="text-gray-300 text-xs sm:text-sm font-barlow">Empowered workforce ready for the future</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Button Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg relative z-20 border-t border-gray-800/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-barlow">
              Let's Keep in <span className="text-[#F4BB44] font-edu-nsw">Touch</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-gray-300 mb-8 font-barlow">
              Ready to advance your career with Digital TVET certifications? Get in touch with our team today.
            </p>

            <Link href="/contact">
              <Button
                size="lg"
                className="hover:bg-[#E5A63D] text-white px-8 sm:px-12 py-3 sm:py-4 text-lg font-semibold font-barlow rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-[#F4BB44]"
                style={{ backgroundColor: "#F4BB44" }}
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
