"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const unityData = {
  title: "Unity Certifications",
  subtitle: "Game Development & Interactive Content Creation",
  description:
    "Master Unity game engine for creating games, simulations, and interactive experiences. Learn 3D development, scripting, and game design principles.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/U_Logo_Small_Black_RGB_1C%201-TXl0Z3CEF06dAVyH4wsQV8Bo2dhmqe.png",
  certifications: [
    {
      name: "Unity Certified User: Programmer",
      description:
        "Test your knowledge of C# programming within Unity to create interactivity in games, apps, AR/VR, and other experiences. Covers debugging, creating code, evaluating code, and navigating the interface.",
      duration: "150 hours",
      level: "User",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unity%20Certified%20User%20Prog%20Logo-fiw4VVPMe2CIzosWTXFn037dg33PN2.png",
      pdfPath: "/pdfs/unity-certified-user-programmer-objectives.pdf",
    },
    {
      name: "Unity Certified User: Artist",
      description:
        "Master the basics of 2D and 3D digital artistry within Unity. Learn asset management, scene content design, lighting, cameras, and materials implementation for games and interactive experiences.",
      duration: "150 hours",
      level: "User",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unity%20Certified%20User%20Art%20Logo-M4cWJQvJxYWw4O5bLmQfXui3pa6rjH.png",
      pdfPath: "/pdfs/unity-certified-user-artist-objectives.pdf",
    },
    {
      name: "Unity Certified User: VR Developer",
      description:
        "Create VR experiences and programs within Unity. Learn basic Unity concepts for VR, building VR scenes, UX implementation, scripting with Unity, and troubleshooting VR applications.",
      duration: "150 hours",
      level: "User",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unity%20Certified%20User%20VR%20Logo-6CUO7cJnr1FBBJAgBVlmfoigGMrUsp.png",
      pdfPath: "/pdfs/unity-certified-user-vr-developer-objectives.pdf",
    },
  ],
  benefits: [
    "Game development expertise",
    "3D content creation skills",
    "Programming and scripting abilities",
    "Interactive media proficiency",
    "VR/AR development knowledge",
    "Industry-recognized certification",
  ],
  careerPaths: [
    "Game Developer",
    "3D Artist",
    "Game Designer",
    "Unity Developer",
    "Interactive Media Specialist",
    "VR/AR Developer",
  ],
}

export default function UnityPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={unityData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unity-6czEYDcjMIE6iZZ0xHBskVj4EViL1g.jpg"
        />
        <CertificationDetailContent data={unityData} />
        <Footer />
      </div>
    </div>
  )
}
