"use client"

import { motion } from "framer-motion"

const statistics = [
  {
    title: "50%",
    subtitle: "Reskilling Need",
    description:
      "According to the World Economic Forum, 50% of all employees will need reskilling by 2025 as the adoption of technology increases.",
    source: "World Economic Forum",
    color: "from-[#F4BB44] to-[#E5A63D]",
  },
  {
    title: "87%",
    subtitle: "Skills Shortage",
    description:
      "A recent McKinsey study reveals that 87% of executives consider skill shortages a major obstacle to Digital Transformation.",
    source: "McKinsey Study",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "40%",
    subtitle: "Skills Change",
    description:
      "Approximately 40% of workers' core skills are expected to change by 2030, with significant increase in demand for AI, Big Data and Cybersecurity skills.",
    source: "Future of Jobs Report 2025",
    color: "from-red-500 to-red-600",
  },
  {
    title: "22%",
    subtitle: "Malaysia GDP",
    description:
      "By 2030, the digital economy is expected to contribute over 22% of Malaysia's GDP, highlighting the critical need for digital skills.",
    source: "Malaysia Digital Economy Blueprint",
    color: "from-[#008080] to-[#006666]",
  },
]

export default function KeyStatistics() {
  return (
    <section className="py-32 relative z-20 border-t border-b border-gray-800/70 shadow-[inset_0_1px_12px_rgba(0,0,0,0.5)]">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-sm"></div>
      {/* Wrap existing content in relative positioned div */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-barlow drop-shadow-2xl"
            >
              Key{" "}
              <span className="text-[#F4BB44]" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Statistics
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-barlow drop-shadow-lg"
            >
              The digital transformation landscape demands immediate action. Here are the compelling statistics that
              highlight the urgent need for Digital TVET certifications.
            </motion.p>
          </div>

          {/* Statistics Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index} // Added key property
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className={`
    relative w-full h-80 sm:h-72 lg:h-80
    bg-gradient-to-br ${stat.color}
    rounded-2xl shadow-2xl
    transition-all duration-300 ease-in-out
    cursor-pointer overflow-hidden
    border border-white/10
  `}
                >
                  {/* First Content - Visible by default */}
                  <div
                    className="
                  absolute inset-0 flex flex-col items-center justify-center
                  p-6 text-center text-white
                  transition-all duration-500 ease-in-out
                  group-hover:opacity-0 group-hover:scale-75
                "
                  >
                    <div className="text-5xl sm:text-4xl lg:text-5xl font-bold font-barlow mb-3 drop-shadow-lg">
                      {stat.title}
                    </div>
                    <div className="text-lg sm:text-base lg:text-lg font-semibold font-barlow opacity-90">
                      {stat.subtitle}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs opacity-75 font-barlow">Hover for details</div>
                    </div>
                  </div>

                  {/* Second Content - Visible on hover */}
                  <div
                    className="
                  absolute inset-0 flex flex-col justify-center
                  p-6 text-center text-white
                  opacity-0 scale-90
                  transition-all duration-500 ease-in-out
                  group-hover:opacity-100 group-hover:scale-100
                  bg-black/20 backdrop-blur-sm
                "
                  >
                    <div className="text-sm sm:text-xs lg:text-sm leading-relaxed font-barlow mb-4">
                      {stat.description}
                    </div>
                    <div className="text-xs opacity-75 font-barlow italic border-t border-white/20 pt-3">
                      Source: {stat.source}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full opacity-30"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
