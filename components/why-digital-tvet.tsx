"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyDigitalTvet() {
  return (
    <section className="py-32 bg-black/90 backdrop-blur-lg relative z-20">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/global-digital-network-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/global-digital-network-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay for better text readability - responsive for mobile */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/70"></div>

      {/* Wrap existing content in relative positioned div */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-barlow drop-shadow-2xl">
                Why <span className="text-[#F4BB44] font-sans">Digital TVET?</span>
              </h2>

              <div className="w-20 h-1 bg-[#F4BB44] rounded-full"></div>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-barlow drop-shadow-lg">
                As ASEAN accelerates its transition into a high-income, technology-driven nation, Digital TVET
                certifications play a crucial role in building a future-ready workforce. Our globally recognized
                certifications empower individuals and organizations to thrive in the rapidly evolving digital
                landscape, with the expertise needed to compete in the fast-growing digital industries and beyond.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#F4BB44]/30 transition-all duration-200"
                >
                  <h3 className="text-[#F4BB44] font-semibold font-barlow mb-2 text-lg">Future-Ready Skills</h3>
                  <p className="text-gray-300 text-base font-barlow">
                    Industry-aligned certifications for tomorrow's workforce
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#F4BB44]/30 transition-all duration-200"
                >
                  <h3 className="text-[#F4BB44] font-semibold font-barlow mb-2 text-lg">Global Recognition</h3>
                  <p className="text-gray-300 text-base font-barlow">
                    Internationally accepted credentials from leading tech companies
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#F4BB44]/30 transition-all duration-200"
                >
                  <h3 className="text-[#F4BB44] font-semibold font-barlow mb-2 text-lg">Career Advancement</h3>
                  <p className="text-gray-300 text-base font-barlow">
                    Accelerate your professional growth in digital industries
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-[#F4BB44]/30 transition-all duration-200"
                >
                  <h3 className="text-[#F4BB44] font-semibold font-barlow mb-2 text-lg">Economic Impact</h3>
                  <p className="text-gray-300 text-base font-barlow">
                    Drive ASEAN's digital transformation and economic growth
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/asean-students.jpg"
                  alt="ASEAN students collaborating with digital technology"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-[#F4BB44]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-barlow font-semibold">
                  ASEAN's Future Workforce
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
