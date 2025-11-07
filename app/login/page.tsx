"use client"

import Navbar from "@/components/navbar"
import LoginForm from "@/components/login-form"
import ScrollToTop from "@/components/scroll-to-top"

export default function LoginPage() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      {/* Dark overlay with new background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-black/80 to-purple-900/60"
        style={{
          backgroundImage: "url('/login-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="w-full min-h-screen">
        <Navbar />
        <LoginForm />
      </div>

      {/* Only Scroll button - WhatsApp removed */}
      <ScrollToTop />
    </div>
  )
}
