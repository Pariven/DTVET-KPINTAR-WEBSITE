"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Shield, Briefcase, Palette, Cog, ArrowRight } from "lucide-react"

export default function CertificationCategories() {
  const categories = [
    {
      id: 1,
      title: "Information Technology (IT) & Cybersecurity",
      description:
        "Build foundational IT knowledge or specialize in high-demand areas like cybersecurity, networking, and cloud computing.",
      icon: Shield,
      certifications: [
        "Microsoft Certified Fundamentals (Azure, Security, AI)",
        "CompTIA IT Fundamentals & Security+",
        "Cisco Certified Support Technician",
        "EC-Council Associate Certifications (Ethical Hacking & Cybersecurity)",
      ],
      careerPaths: "IT Support Specialist, Network Administrator, Cybersecurity Analyst, Cloud Engineer",
      logos: [
        { name: "Microsoft", src: "/logos/microsoft-logo.webp", href: "/certifications/microsoft" },
        { name: "CompTIA", src: "/logos/comptia-logo.png", href: "/certifications/comptia" },
        { name: "Cisco", src: "/logos/cisco-logo.png", href: "/certifications/cisco" },
      ],
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 2,
      title: "Business & Productivity",
      description:
        "Enhance business efficiency with skills in productivity tools, financial management, and entrepreneurship.",
      icon: Briefcase,
      certifications: [
        "Microsoft Office Specialist (MOS) – Word, Excel, PowerPoint, Outlook",
        "Microsoft Certified Fundamentals – Business Applications",
        "Intuit QuickBooks Certified User (Accounting & Finance)",
        "Entrepreneurship & Small Business (ESB) Certification",
      ],
      careerPaths: "Business Analyst, Project Manager, Financial Analyst, Entrepreneur",
      logos: [
        { name: "Microsoft", src: "/logos/microsoft-logo.webp", href: "/certifications/microsoft" },
        { name: "Intuit", src: "/logos/intuit-logo.png", href: "/certifications/intuit" },
        { name: "ESB", src: "/logos/esb-logo.png", href: "/certifications/entrepreneurship" },
      ],
      gradient: "from-green-600 to-teal-600",
    },
    {
      id: 3,
      title: "Creative & Design",
      description:
        "Master creative tools and design principles for digital media, graphic design, and multimedia production.",
      icon: Palette,
      certifications: [
        "Adobe Certified Professional (Photoshop, Illustrator, InDesign)",
        "Autodesk Certified User (AutoCAD, Maya, 3ds Max)",
        "Unity Certified User (Game Development)",
        "Apple Certified Pro (Final Cut Pro, Logic Pro)",
      ],
      careerPaths: "Graphic Designer, Web Designer, Game Developer, Video Editor",
      logos: [
        { name: "Adobe", src: "/logos/adobe-logo.png", href: "/certifications/adobe" },
        { name: "Autodesk", src: "/logos/autodesk-logo.png", href: "/certifications/autodesk" },
        { name: "Unity", src: "/logos/unity-logo.png", href: "/certifications/unity" },
        { name: "Apple", src: "/logos/apple-logo.png", href: "/certifications/apple" },
      ],
      gradient: "from-pink-600 to-rose-600",
    },
    {
      id: 4,
      title: "Technical & Engineering",
      description:
        "Develop technical skills in engineering software, manufacturing, and advanced technology applications.",
      icon: Cog,
      certifications: [
        "SolidWorks Certified Associate (CSWA)",
        "Autodesk Inventor Certified User",
        "Unity Certified Programmer",
        "AI and Machine Learning Fundamentals",
      ],
      careerPaths: "CAD Designer, Manufacturing Engineer, Software Developer, AI Specialist",
      logos: [
        { name: "Autodesk", src: "/logos/autodesk-logo.png", href: "/certifications/autodesk" },
        { name: "Unity", src: "/logos/unity-logo.png", href: "/certifications/unity" },
        { name: "Meta", src: "/logos/meta-logo.png", href: "/certifications/meta" },
      ],
      gradient: "from-orange-600 to-red-600",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg relative z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-barlow drop-shadow-2xl">
            Certification <span className="text-[#F4BB44] font-edu-nsw">Categories</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-barlow">
            Choose from our comprehensive range of certification programs designed to advance your career in today's
            digital economy.
          </p>
        </motion.div>

        {/* Categories Grid - Unified Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)",
              }}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-[#F4BB44]/50 transition-all duration-75 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient}`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white font-barlow group-hover:text-[#F4BB44] transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-[#F4BB44] group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed font-barlow">{category.description}</p>

              {/* Certifications List */}
              <div className="mb-6">
                <h4 className="text-[#F4BB44] font-semibold mb-3 font-barlow">Available Certifications:</h4>
                <ul className="space-y-2">
                  {category.certifications.map((cert, certIndex) => (
                    <li key={certIndex} className="text-gray-300 text-sm font-barlow flex items-start">
                      <span className="text-[#F4BB44] mr-2">🔹</span>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partner Logos */}
              <div className="mb-6">
                <h4 className="text-[#F4BB44] font-semibold mb-3 font-barlow">Certification Partners:</h4>
                <div className="flex flex-wrap gap-3">
                  {category.logos.map((logo, logoIndex) => (
                    <Link key={logoIndex} href={logo.href || "#"} passHref scroll={true}>
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 hover:scale-110 transition-transform duration-200">
                        <Image
                          src={logo.src || "/placeholder.svg"}
                          alt={`${logo.name} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div className="border-t border-white/20 pt-4">
                <h4 className="text-[#F4BB44] font-semibold mb-2 font-barlow">💡 Career Pathways:</h4>
                <p className="text-gray-300 text-sm font-barlow">{category.careerPaths}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}