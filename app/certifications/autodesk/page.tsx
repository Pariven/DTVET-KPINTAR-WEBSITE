"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const autodeskData = {
  title: "Autodesk Certified User",
  subtitle: "Master 3D Design, Engineering & Architecture",
  description:
    "Become an Autodesk Certified User and validate your skills in industry-leading design, engineering, and 3D modeling software. Demonstrate competency at an industry entry-level with approximately 150 hours of hands-on experience.",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Autodesk-logo-rgb-black-TvBZoe3E557v5k0pHfU1EEXyaRS5u3.png",
  certifications: [
    {
      id: 2001,
      name: "Autodesk Certified User in Maya",
      description:
        "Demonstrate competency in 3D modeling and animation. Master scene management, polygon modeling, texture coordinates, materials/shading, rigging with joints, cameras, animation techniques, lighting, and rendering with Maya. Create professional 3D models, rig characters, and produce animations for film, games, and visual effects.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-maya-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture3-haLaPbdHnETnLVRUXrTWuEiIlURy1s.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture3-n18vuONFLdf63btknl2CLJSbRwENfF.png",
    },
    {
      id: 2002,
      name: "Autodesk Certified User in 3ds Max",
      description:
        "Master 3D modeling and animation with 3ds Max. Learn scene management, polygon surface editing, UVW coordinates, materials/shading, rigging with bones, camera work, animation along paths, lighting techniques, and rendering. Create professional 3D content for games, architecture visualization, and motion graphics.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-3dsmax-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture7-MYgqC1zhiH2aUCbBIXVllQkr4AwdVu.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture7-gU0isCp01HmZjNAw7pqmOsuFdPGM2S.png",
    },
    {
      id: 2003,
      name: "Autodesk Certified User in Revit for Architectural Design",
      description:
        "Demonstrate competency in building information modeling (BIM) for architecture. Master modeling walls, doors, windows, floors, ceilings, roofs, stairs, and rooms. Learn to create and modify views, control display, configure family types, create documentation with text, tags, dimensions, schedules, and sheet composition for professional architectural projects.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-revit-certification.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture5%20%281%29-9fi16M3wYrnf2BuKg6UhIw0yGq0cS5.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture5%20%281%29-RdicbdsKXnFTXMq7qKBCCuuHH2i6EY.png",
    },
    {
      id: 2004,
      name: "Autodesk Certified User in Fusion",
      description:
        "Master cloud-based 3D CAD, CAM, and CAE software. Learn workspace navigation, sketching with constraints, 3D modeling with solids and forms, assembly creation with joints, and technical documentation. Create parametric designs, perform simulations, and generate manufacturing-ready drawings for product design and engineering.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-fusion-certification.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture8%20%281%29-mNpaiurua5WXlNOvEFYiNd7zoZXnSE.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture8%20%281%29-rfxUiKPm92wofZg6BgFBm6llTXEdaN.png",
    },
    {
      id: 2005,
      name: "Autodesk Certified User in Tinkercad 3D Design",
      description:
        "Demonstrate foundational 3D design skills with Tinkercad. Learn workspace navigation, creating and modifying shapes, applying transformations (move, rotate, scale), compound operations (grouping, duplicating), and understanding the design process. Perfect for students and beginners transitioning to advanced tools like Fusion or Revit.",
      duration: "40-50 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-tinkercad-certification.pdf",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t725-removebg-preview-zFtYWbVcY13jRmHVIuV3JgXimJtcVc.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/t725-removebg-preview-c0VNQJ2tUeytmssNmAQI1zVyBv0jqX.png",
    },
    {
      id: 2006,
      name: "Autodesk Certified User in Inventor",
      description:
        "Master 3D mechanical design and product development. Learn workspace navigation, sketching with constraints and dimensions, creating and modifying sketched and placed features, assembly creation with constraints and joints, and technical drawing documentation. Create parametric models for manufacturing and engineering projects.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-inventor-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-2ZCLsOEZ9JBhIcyJOyOnKYaS8bxtfq.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture1-biD72qNUlRgRfPf8E5QcN6kv5Ys78N.png",
    },
    {
      id: 2007,
      name: "Autodesk Certified User in AutoCAD",
      description:
        "Demonstrate competency in computer-aided design (CAD) and basic drafting techniques. Master drawing and modifying objects, working with layers and blocks, drawing with accuracy using object snaps and coordinates, basic editing commands, annotation with text and dimensions, hatching, and layouts with printing. Industry-standard 2D drafting and 3D modeling skills.",
      duration: "150 hours",
      level: "Certified User",
      price: 2,
      pdfPath: "/pdfs/autodesk-autocad-certification.pdf",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture4-KIDwFIE1doBtEZidRhnlbOlLNhbL7B.png",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Picture4-DIeWIlobI8E5ctobCEFGjWP2f1N6kI.png",
    },
  ],
  benefits: [
    "Industry-recognized credentials validated by Autodesk and Certiport",
    "Enhanced career opportunities in design, engineering, and architecture",
    "Validation of 150+ hours of hands-on experience with industry-standard tools",
    "Access to Autodesk Certified User community and resources",
    "Demonstrate proficiency to employers and clients worldwide",
    "Stand out in competitive job markets across multiple industries",
    "Proven competency at industry entry-level, ready for the job market",
  ],
  careerPaths: [
    "CAD Designer",
    "3D Modeler",
    "Mechanical Engineer",
    "Architect",
    "BIM Specialist",
    "Product Designer",
    "Animation Artist",
    "Visual Effects Artist",
    "Game Designer",
    "Civil Engineer",
    "Interior Designer",
    "Industrial Designer",
  ],
  footer:
    "© 2025 Certiport, A Business of NCS Pearson, Inc. Certiport and the Certiport logo are registered trademarks of Certiport, A Business of NCS Pearson, Inc.",
}

export default function AutodeskPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={autodeskData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Adobe_Image1-34ZW6SCVushtJDd7CaRPRRowxingwg.webp"
        />
        <CertificationDetailContent data={autodeskData} />
        <Footer />
      </div>
    </div>
  )
}
