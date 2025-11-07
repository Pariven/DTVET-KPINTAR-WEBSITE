"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Users, Globe, Star } from "lucide-react"

export default function AuthorizedProvider() {
  return (
    <section className="py-20 md:py-32 relative z-20 border-t border-gray-800/70">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed md:bg-fixed bg-scroll"
        style={{
          backgroundImage: "url('/robot-library-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-barlow">
              Authorized Provider of <span className="text-[#F4BB44]">Certiport</span> &{" "}
              <span className="text-[#00A3A1]">Pearson</span> Certifications
            </h2>
            <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed font-barlow">
              We offer industry-leading Digital TVET certifications through our partnerships with Certiport and Pearson,
              two of the world's foremost certification and education providers.
            </p>
          </motion.div>

          {/* Provider Cards - Two Card Layout */}
          <div className="max-w-5xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
            {/* Certiport Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image
                    src="/logos/certiport-logo.webp"
                    alt="Certiport Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white font-barlow mb-2">Certiport</h3>
                <div className="flex items-center justify-center gap-2 text-[#F4BB44] text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Global Leader in Performance-Based Testing</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-200 text-sm leading-relaxed font-barlow">
                  Certiport, a Pearson VUE business, delivers credentials that validate digital skills and professional
                  competencies through partnerships with Microsoft, Adobe, Autodesk, and Cisco.
                </p>

                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-[#F4BB44] font-semibold mb-3 text-sm">Key Certifications:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F4BB44] mr-2 flex-shrink-0" />
                      Microsoft Office Specialist
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F4BB44] mr-2 flex-shrink-0" />
                      Adobe Certified Professional
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F4BB44] mr-2 flex-shrink-0" />
                      Autodesk Certified User
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center text-[#F4BB44] text-xs">
                    <Users className="w-4 h-4 mr-1" />
                    3M+ Exams Annually
                  </div>
                  <div className="flex items-center text-[#F4BB44] text-xs">
                    <Globe className="w-4 h-4 mr-1" />
                    180+ Countries
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pearson Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20"
            >
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Image
                    src="/logos/pearson-logo.png"
                    alt="Pearson Logo"
                    width={90}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white font-barlow mb-2">Pearson</h3>
                <div className="flex items-center justify-center gap-2 text-[#00A3A1] text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>World's Learning Company</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-200 text-sm leading-relaxed font-barlow">
                  Pearson is the world's leading learning company, providing educational materials, technologies,
                  assessments, and professional certifications to learners of all ages across the globe.
                </p>

                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-[#00A3A1] font-semibold mb-3 text-sm">Key Offerings:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#00A3A1] mr-2 flex-shrink-0" />
                      Professional Certifications
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#00A3A1] mr-2 flex-shrink-0" />
                      Industry-Recognized Credentials
                    </div>
                    <div className="flex items-center text-gray-200 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#00A3A1] mr-2 flex-shrink-0" />
                      Career Development Programs
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center text-[#00A3A1] text-xs">
                    <Users className="w-4 h-4 mr-1" />
                    Global Leader
                  </div>
                  <div className="flex items-center text-[#00A3A1] text-xs">
                    <Globe className="w-4 h-4 mr-1" />
                    Worldwide Reach
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
