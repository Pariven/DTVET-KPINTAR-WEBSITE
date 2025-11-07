"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 md:bottom-24 md:right-6 z-[9998] bg-gradient-to-r from-[#F4BB44] to-[#E5A63D] text-white p-2 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm group hover:from-[#E5A63D] hover:to-[#D4952A] w-12 h-12 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:animate-bounce" />

          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-[#F4BB44]/30 animate-ping-slow opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <style jsx>{`
            @keyframes ping-slow {
              0% {
                transform: scale(0.8);
                opacity: 0.75;
              }
              75%, 100% {
                transform: scale(2);
                opacity: 0;
              }
            }
            .animate-ping-slow {
              animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
            }
          `}</style>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-barlow">
            Back to Top
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
