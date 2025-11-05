"use client"

import { motion } from "framer-motion"

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex justify-center items-center"
    >
      <ul className="flex justify-center items-center gap-4">
        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <a
            data-social="whatsapp"
            aria-label="Whatsapp"
            href="https://api.whatsapp.com/send?phone=+60122126956&text=Hello!%20I'm%20interested%20in%20your%20Digital%20TVET%20certification%20programs."
            className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-400 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-green-500/20"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
            <svg
              className="relative z-10 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            WhatsApp
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <a
            data-social="facebook"
            aria-label="Facebook"
            href="https://www.facebook.com/share/1AqNcwgUg5/?mibextid=wwXIfr"
            className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-400 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
            <svg
              className="relative z-10 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
            </svg>
          </a>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Facebook
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <a
            data-social="instagram"
            aria-label="Instagram"
            href="https://www.instagram.com/digitaltvetmalaysia?igsh=MTd0OHNmNmxrbHBzMA=="
            className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-400 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-pink-500/20"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 ease-in-out group-hover:h-full"></div>
            <svg
              className="relative z-10 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372.444-.445.89-.719 1.416-.923.51-.198 1.09-.333 1.942-.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            Instagram
          </div>
        </motion.li>

        <motion.li
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <a
            data-social="linkedin"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/digital-tvet-malaysia-1ba07b384/"
            className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-full text-gray-400 bg-white transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:shadow-blue-700/20"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-700 transition-all duration-300 ease-in-out group-hover:h-full"></div>
            <svg
              className="relative z-10 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            LinkedIn
          </div>
        </motion.li>
      </ul>
    </motion.div>
  )
}
