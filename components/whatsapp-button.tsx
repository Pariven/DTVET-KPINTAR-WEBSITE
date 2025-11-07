"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

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

  const handleWhatsAppClick = () => {
    const phoneNumber = "60122126956"
    const message = "Hello! I'm interested in your Digital TVET certification programs."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ scale: 1.05, width: "150px" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 md:bottom-6 md:right-6 z-[9997] bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20 backdrop-blur-sm group w-12 h-12 flex items-center justify-center overflow-hidden"
          onClick={handleWhatsAppClick}
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <div className="absolute left-0 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:w-[30%] group-hover:pl-2">
            <svg className="w-6 h-6" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </div>

          {/* Text that appears on hover */}
          <div className="absolute right-0 w-0 opacity-0 text-white font-semibold text-sm transition-all duration-300 group-hover:w-[70%] group-hover:opacity-100 group-hover:pr-3 whitespace-nowrap font-barlow">
            WhatsApp
          </div>

          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping-slow opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
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
            Chat with us
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppButton
