"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const appleData = {
  title: "Apple Swift Certifications",
  subtitle: "Master iOS App Development with Swift & SwiftUI",
  description:
    "Become certified in Apple's Swift programming language and iOS app development. Build professional iOS applications and demonstrate your expertise in Swift and SwiftUI.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swift_logo_horz_lockup_color_rgb%202-Nq5Jwd5wTcUa2xTtQqqmFGEd7yl1KI.png",
  certifications: [
    {
      name: "App Development with Swift Certified User",
      description:
        "Demonstrate knowledge of common concepts and practices that Swift developers use while building basic fluency in Xcode source and UI editors. Create iOS apps that adhere to standard practices. Master Xcode Developer Tools (interface navigation, Interface Builder, debugging with breakpoints), Swift Programming Language (data types, collection types, control flow, functions, structs/classes, optionals, variable scope), and View Building with SwiftUI (positioning views, navigation, state management with @State, @Binding, @Environment).",
      duration: "40-60 hours",
      level: "Certified User",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swift_logo_horz_lockup_color_rgb%202-Nq5Jwd5wTcUa2xTtQqqmFGEd7yl1KI.png",
  price: 810,
      pdfPath: "/pdfs/swift-certified-user.pdf",
    },
    {
      name: "App Development with Swift Associate",
      description:
        "Demonstrate knowledge of key computing concepts and a solid foundation in programming with Swift and SwiftUI. Master Planning and Design (design cycle, data protection, accessibility), XCode Project Navigation (file types, assets, UI configuration), Swift Language Usage (functions, operators, structures, arrays, control flow, data types, naming syntax), View Building with SwiftUI (declarative programming, content views, modifiers, container views, interactive views, @State), and Debugging (syntax vs runtime errors, error interpretation).",
      duration: "60-80 hours",
      level: "Associate",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Swift_logo_horz_lockup_color_rgb%202-Nq5Jwd5wTcUa2xTtQqqmFGEd7yl1KI.png",
  price: 810,
      pdfPath: "/pdfs/swift-associate.pdf",
    },
  ],
  benefits: [
    "Apple ecosystem expertise",
    "iOS app development skills",
    "Swift programming proficiency",
    "SwiftUI interface design",
    "Xcode development tools mastery",
    "Industry-recognized certification",
  ],
  careerPaths: [
    "iOS Developer",
    "Mobile App Developer",
    "Swift Programmer",
    "SwiftUI Developer",
    "App Designer",
    "Software Engineer",
  ],
}

export default function ApplePage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={appleData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-cNntDW2HhPAYBGReMD8B1E0r6oxR6z.jpg"
        />
        <CertificationDetailContent data={appleData} />
        <Footer />
      </div>
    </div>
  )
}
