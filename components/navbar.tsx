"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ShoppingCart, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useCart } from "@/contexts/cart-context"
import { useAuthStore } from "@/lib/store"

const certificationPrograms = [
  { name: "Adobe", href: "/certifications/adobe" },
  { name: "Apple Swift", href: "/certifications/apple" },
  { name: "Autodesk", href: "/certifications/autodesk" },
  { name: "Cisco", href: "/certifications/cisco" },
  { name: "Unity", href: "/certifications/unity" },
  { name: "Meta", href: "/certifications/meta" },
  { name: "Microsoft", href: "/certifications/microsoft" },
  { name: "IT Specialist", href: "/certifications/its" },
  { name: "IC3", href: "/certifications/ic3" },
  { name: "Intuit", href: "/certifications/intuit" },
  { name: "PMI", href: "/certifications/pmi" },
  { name: "Entrepreneurship", href: "/certifications/entrepreneurship" },
  { name: "Health Science", href: "/certifications/health-science" },
  { name: "Hospitality", href: "/certifications/hospitality" },
  { name: "Agriscience", href: "/certifications/agriscience" },
  { name: "WordPress", href: "/certifications/knowledge-pillars" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCertifications, setShowCertifications] = useState(false)
  const [showMobileCertifications, setShowMobileCertifications] = useState(false)
  const { getCartCount } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Use the auth store to check login status
  const { token } = useAuthStore()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check auth status on client side only
  useEffect(() => {
    const checkAuth = () => {
      const storedToken = localStorage.getItem('token')
      const hasToken = !!token || !!storedToken
      console.log('Auth check - token:', token, 'storedToken:', storedToken, 'isLoggedIn:', hasToken)
      setIsLoggedIn(hasToken)
    }
    
    checkAuth()
  }, [token])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCertifications(false)
      }
    }

    if (showCertifications) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside as any)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside as any)
    }
  }, [showCertifications])

  const router = useRouter()

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    setShowCertifications(false)
    setShowMobileCertifications(false)
    router.push(href)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLogout = () => {
    console.log('Logging out...')
    // Clear all auth data
    localStorage.clear()
    // Clear auth store
    useAuthStore.getState().clearAuth()
    // Redirect to home
    router.push("/")
  }

  const handleDashboardNavigation = () => {
    console.log('Navigating to dashboard...')
    console.log('Current token:', localStorage.getItem('token'))
    console.log('Current auth-token cookie:', document.cookie)
    handleNavigation("/dashboard")
  }

  const toggleCertifications = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowCertifications(!showCertifications)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-md shadow-2xl" : "bg-gradient-to-r from-black/50 via-gray-900/50 to-black/50 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-28">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigation("/")} className="flex items-center">
              <div className="h-20 md:h-36 w-auto flex items-center">
                <Image
                  src="/dtvet-logo.png"
                  alt="DTVET - Digital TVET Malaysia"
                  width={280}
                  height={280}
                  className="h-20 md:h-36 w-auto object-contain"
                  priority
                />
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => handleNavigation("/")}
              className="text-white hover:text-[#008080] px-4 py-3 text-lg font-medium transition-colors duration-200 font-barlow relative group"
            >
              Home
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#008080] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleCertifications}
                className="text-white hover:text-[#008080] px-4 py-3 text-lg font-medium transition-colors duration-200 font-barlow relative group flex items-center gap-2"
              >
                Certifications
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${showCertifications ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#008080] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </button>

              {showCertifications && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-slate-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-[#008080]/30 z-[100000] overflow-hidden">
                  <div className="bg-gradient-to-r from-[#008080]/20 to-[#F4BB44]/20 px-6 py-4 border-b border-white/10">
                    <h3 className="text-white text-lg font-bold font-barlow">Our Certification Programs</h3>
                    <p className="text-white/70 text-sm mt-1">16 industry-leading certifications</p>
                  </div>

                  <div className="p-4 grid grid-cols-2 gap-2 max-h-[420px] overflow-y-auto custom-scrollbar">
                    {certificationPrograms.map((cert, index) => (
                      <button
                        key={cert.name}
                        onClick={() => handleNavigation(cert.href)}
                        className="group relative text-left px-5 py-3.5 text-white/90 hover:text-white bg-slate-800/50 hover:bg-gradient-to-r hover:from-[#008080]/30 hover:to-[#F4BB44]/20 rounded-lg transition-all duration-300 font-medium font-barlow touch-manipulation border border-white/5 hover:border-[#008080]/50 hover:shadow-lg hover:shadow-[#008080]/20 overflow-hidden"
                        style={{ animationDelay: `${index * 30}ms` }}
                      >
                        <span className="relative z-10">{cert.name}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#008080]/0 via-[#008080]/10 to-[#008080]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-slate-800/50 px-6 py-3 border-t border-white/10">
                    <p className="text-white/60 text-xs text-center font-barlow">
                      Globally recognized & industry-certified programs
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigation("/contact")}
              className="text-white hover:text-[#008080] px-4 py-3 text-lg font-medium transition-colors duration-200 font-barlow relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#008080] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[#008080] p-3 relative"
              onClick={() => handleNavigation("/cart")}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#F4BB44] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-barlow">
                {getCartCount()}
              </span>
            </Button>

            {isLoggedIn ? (
              <>
                <button
                  onClick={handleDashboardNavigation}
                  className="text-white hover:text-[#008080] px-4 py-3 text-lg font-medium transition-colors duration-200 font-barlow relative group flex items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  Dashboard
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#008080] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </button>
                <button
                  onClick={handleLogout}
                  className="text-white/80 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-200 font-barlow border border-white/20 hover:border-red-400/50 rounded-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavigation("/login")}
                className="relative text-white bg-gradient-to-r from-[#008080] via-[#009999] to-[#F4BB44] hover:from-[#006666] hover:via-[#008888] hover:to-[#E5A63D] px-4 py-2 text-base font-bold transition-all duration-300 font-barlow rounded-lg shadow-lg shadow-[#008080]/40 hover:shadow-xl hover:shadow-[#008080]/60 border-2 border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Now
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:text-[#008080] p-3 relative"
              onClick={() => handleNavigation("/cart")}
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-[#F4BB44] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-barlow">
                {getCartCount()}
              </span>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="relative w-10 h-10 bg-transparent border-none outline-none focus:outline-none flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200 touch-manipulation"
                  aria-label="Open mobile menu"
                >
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-45 top-3" : "top-1"
                      }`}
                    />
                    <span
                      className={`absolute block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? "opacity-0" : "top-3"
                      }`}
                    />
                    <span
                      className={`absolute block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 top-3" : "top-5"
                      }`}
                    />
                  </div>
                  <span className="sr-only">Open main menu</span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-900/95 backdrop-blur-xl border-l-2 border-[#008080]/30 z-[100001] w-full overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center px-4 py-4 border-b-2 border-white/10 justify-between bg-gradient-to-r from-[#008080]/30 to-[#F4BB44]/20">
                    <h2 className="text-white text-xl font-bold font-barlow">Menu</h2>
                    <SheetClose asChild>
                      <button
                        className="relative w-10 h-10 bg-white/10 border border-white/20 outline-none focus:outline-none flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors duration-200 touch-manipulation"
                        aria-label="Close mobile menu"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 6L6 18" />
                          <path d="M6 6l12 12" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                      </button>
                    </SheetClose>
                  </div>

                  <div className="flex-1 py-4 overflow-y-auto">
                    <div className="flex flex-col space-y-2 px-3">
                      <button
                        onClick={() => handleNavigation("/")}
                        className="text-white hover:text-[#008080] hover:bg-[#008080]/20 px-4 py-3 text-lg font-semibold transition-colors duration-200 font-barlow text-left touch-manipulation rounded-lg border border-transparent hover:border-[#008080]/30"
                      >
                        Home
                      </button>

                      <div className="flex flex-col">
                        <button
                          onClick={() => setShowMobileCertifications(!showMobileCertifications)}
                          className="text-white hover:text-[#008080] hover:bg-[#008080]/20 px-4 py-3 text-lg font-semibold transition-colors duration-200 font-barlow text-left flex items-center justify-between touch-manipulation rounded-lg border border-transparent hover:border-[#008080]/30"
                        >
                          Certifications
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${showMobileCertifications ? "rotate-180" : ""}`}
                          />
                        </button>

                        {showMobileCertifications && (
                          <div className="mt-2 space-y-1.5 max-h-[60vh] overflow-y-auto px-2 custom-scrollbar">
                            {certificationPrograms.map((cert, index) => (
                              <button
                                key={cert.name}
                                onClick={() => handleNavigation(cert.href)}
                                className="text-left px-4 py-3 text-white/80 hover:text-white bg-slate-800/50 hover:bg-gradient-to-r hover:from-[#008080]/30 hover:to-[#F4BB44]/20 rounded-lg transition-all duration-200 font-medium font-barlow w-full touch-manipulation border border-white/5 hover:border-[#008080]/50"
                                style={{ animationDelay: `${index * 30}ms` }}
                              >
                                {cert.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleNavigation("/contact")}
                        className="text-white hover:text-[#008080] hover:bg-[#008080]/20 px-4 py-3 text-lg font-semibold transition-colors duration-200 flex items-center gap-3 font-barlow w-full text-left touch-manipulation rounded-lg border border-white/10 hover:border-[#008080]/30"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>

                  <div className="border-t-2 border-white/10 p-4 space-y-2 bg-slate-800/50">
                    <button
                      onClick={() => handleNavigation("/cart")}
                      className="text-white hover:text-[#008080] hover:bg-[#008080]/20 px-4 py-3 text-lg font-semibold transition-colors duration-200 flex items-center gap-3 font-barlow w-full text-left touch-manipulation rounded-lg border border-white/10 hover:border-[#008080]/30"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Cart ({getCartCount()})
                    </button>
                    {isLoggedIn ? (
                      <>
                        <button
                          onClick={handleDashboardNavigation}
                          className="text-white hover:text-[#008080] hover:bg-[#008080]/20 px-4 py-3 text-lg font-semibold transition-colors duration-200 flex items-center gap-3 font-barlow w-full text-left touch-manipulation rounded-lg border border-white/10 hover:border-[#008080]/30"
                        >
                          <User className="h-5 w-5" />
                          Dashboard
                        </button>
                        <button
                          onClick={handleLogout}
                          className="text-white/80 hover:text-red-400 hover:bg-red-400/10 px-4 py-3 text-lg font-semibold transition-colors duration-200 flex items-center gap-3 font-barlow w-full text-left touch-manipulation rounded-lg border border-white/10 hover:border-red-400/50"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavigation("/login")}
                        className="relative text-white bg-gradient-to-r from-[#008080] via-[#009999] to-[#F4BB44] hover:from-[#006666] hover:via-[#008888] hover:to-[#E5A63D] px-4 py-2.5 text-base font-bold transition-all duration-300 font-barlow w-full text-center touch-manipulation rounded-lg shadow-lg shadow-[#008080]/40 border-2 border-white/20 active:scale-95 overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Register Now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-active:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
