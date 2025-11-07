"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import SocialMedia from "./social-media"
import Image from "next/image"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Certifications", href: "#certifications" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const certifications = [
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

  const support = [
    { name: "Help Center", href: "#help" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#F4BB44] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Image src="/dtvet-logo.png" alt="DTVET Logo" width={200} height={100} className="object-contain" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed font-barlow">
                Bridging ASEAN's digital skills gap through world-class Digital TVET programs. Elevate your expertise
                with certifications from leading global technology providers.
              </p>
              <SocialMedia />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#F4BB44] font-barlow">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#F4BB44] transition-colors duration-200 font-barlow relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4BB44] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Popular Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#F4BB44] font-barlow">Popular Certifications</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={cert.href}
                      className="text-gray-300 hover:text-[#F4BB44] transition-colors duration-200 font-barlow relative group"
                    >
                      {cert.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4BB44] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#F4BB44] font-barlow">Support</h3>
              <ul className="space-y-3 mb-6">
                {support.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-[#F4BB44] transition-colors duration-200 font-barlow relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4BB44] transition-all duration-200 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-300 font-barlow"
                >
                  <span className="text-[#F4BB44]">Email:</span> enquiry@digitaltvetmalaysia.com
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-300 font-barlow"
                >
                  <span className="text-[#F4BB44]">Phone:</span> 03 2284 4148 / +60 12 212 6956
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <div className="flex items-center space-x-2">
                  <Image src="/dtvet-logo.png" alt="DTVET Logo" width={32} height={32} className="object-contain" />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-sm font-barlow"
                  >
                    © 2025 DTVET. All rights reserved.
                  </motion.p>
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-sm font-barlow"
                >
                  Digital transformation across ASEAN. |{" "}
                  <a
                    href="https://www.digitaltvetmalaysia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4BB44] hover:text-[#E5A63D] transition-colors duration-200"
                  >
                    www.digitaltvetmalaysia.com
                  </a>
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                <Link
                  href="#privacy"
                  className="text-gray-400 hover:text-[#F4BB44] text-sm transition-colors duration-200 font-barlow"
                >
                  Privacy
                </Link>
                <Link
                  href="#terms"
                  className="text-gray-400 hover:text-[#F4BB44] text-sm transition-colors duration-200 font-barlow"
                >
                  Terms
                </Link>
                <Link
                  href="#sitemap"
                  className="text-gray-400 hover:text-[#F4BB44] text-sm transition-colors duration-200 font-barlow"
                >
                  Sitemap
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center mt-4 pt-4 border-t border-gray-800"
            >
              <div className="flex items-center justify-center gap-2">
                <p className="text-gray-500 text-sm font-barlow">Powered by</p>
                <Image 
                  src="/kpintar-full-logo.png" 
                  alt="KPINTAR Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
