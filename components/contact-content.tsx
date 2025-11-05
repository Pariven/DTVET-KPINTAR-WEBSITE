"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactContent() {
  return (
    <div
      className="min-h-screen pt-32 pb-20 px-4 relative"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-purple-abstract-background-with-black-hole-middle_608068-12656-e8rPW4JqQnNI01aEXfLBk0n1FtXMdE.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-barlow drop-shadow-2xl">
            Contact <span className="text-[#F4BB44] font-sans">Us</span>
          </h1>
          <div className="w-24 h-1 bg-[#F4BB44] rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-white font-bold max-w-3xl mx-auto leading-relaxed font-barlow drop-shadow-lg">
            Ready to advance your career with Digital TVET certifications? Get in touch with our team to learn more
            about our programs and how we can help you achieve your professional goals.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:border-[#F4BB44]/50 transition-all duration-300 shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#F4BB44] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-barlow mb-2 text-white">Call Us</h3>
              <p className="text-white mb-4 font-barlow">Speak directly with our team</p>
              <div className="space-y-2">
                <a
                  href="tel:0322844148"
                  className="block text-[#F4BB44] hover:text-[#E5A63D] font-semibold font-barlow transition-colors duration-200"
                >
                  03 2284 4148
                </a>
                <a
                  href="tel:0122126956"
                  className="block text-[#F4BB44] hover:text-[#E5A63D] font-semibold font-barlow transition-colors duration-200"
                >
                  012 212 6956
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:border-[#F4BB44]/50 transition-all duration-300 shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#F4BB44] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-barlow mb-2 text-white">Email Us</h3>
              <p className="text-white mb-4 font-barlow">Send us your questions</p>
              <a
                href="mailto:enquiry@digitaltvetmalaysia.com"
                className="text-[#F4BB44] hover:text-[#E5A63D] font-semibold font-barlow transition-colors duration-200"
              >
                enquiry@digitaltvetmalaysia.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:border-[#F4BB44]/50 transition-all duration-300 shadow-2xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-[#F4BB44] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold font-barlow mb-2 text-white">Visit Us</h3>
              <p className="text-white mb-4 font-barlow">Come to our office</p>
              <p className="text-[#F4BB44] font-semibold font-barlow">
                Suite C-4-4, 4th Floor, Wisma Goshen,
                <br />
                Bangsar Trade Centre,
                <br />
                59200 Kuala Lumpur
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-barlow text-white">Send us a Message</CardTitle>
                <p className="text-white font-barlow">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow backdrop-blur-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow backdrop-blur-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow backdrop-blur-sm"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow backdrop-blur-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">Subject</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow appearance-none backdrop-blur-sm">
                      <option value="" className="bg-gray-800">
                        Select a subject
                      </option>
                      <option value="general" className="bg-gray-800">
                        General Inquiry
                      </option>
                      <option value="certification" className="bg-gray-800">
                        Certification Information
                      </option>
                      <option value="enrollment" className="bg-gray-800">
                        Course Enrollment
                      </option>
                      <option value="support" className="bg-gray-800">
                        Technical Support
                      </option>
                      <option value="partnership" className="bg-gray-800">
                        Partnership Opportunities
                      </option>
                      <option value="corporate" className="bg-gray-800">
                        Corporate Training
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#F4BB44] font-semibold mb-2 font-sans">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:border-[#F4BB44] focus:outline-none transition-colors duration-300 font-barlow resize-none backdrop-blur-sm"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full hover:bg-[#E5A63D] text-white px-8 py-4 text-lg font-semibold font-barlow rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-[#F4BB44] flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#F4BB44" }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Office Information */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-barlow flex items-center gap-3 text-white">
                  <MapPin className="w-6 h-6 text-[#F4BB44]" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[#F4BB44] font-semibold mb-2 font-sans">Address</h4>
                    <p className="text-white font-barlow leading-relaxed">
                      Suite C-4-4, 4th Floor, Wisma Goshen
                      <br />
                      Bangsar Trade Centre
                      <br />
                      59200 Kuala Lumpur, Malaysia
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <h4 className="text-[#F4BB44] font-semibold mb-3 font-sans flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-white font-barlow">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday & Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
