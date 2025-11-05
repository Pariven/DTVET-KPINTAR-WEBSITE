"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const metaData = {
  title: "Meta Certifications",
  subtitle: "Digital Marketing & Social Media Excellence",
  description:
    "Master digital marketing, social media advertising, and Meta platform strategies. Learn to create effective campaigns on Facebook, Instagram, and other Meta platforms.",
  logo: "/logos/meta-logo.png",
  certifications: [
    {
      name: "Meta Digital Marketing Associate",
      description:
        "Comprehensive digital marketing certification covering advertising, analytics, and campaign optimization strategies.",
      duration: "40-60 hours",
      level: "Associate",
      logo: "/logos/meta-certification-badge.png",
      largeImage: true,
      pdfPath: "/pdfs/meta-digital-marketing-associate-objectives.pdf",
    },
  ],
  benefits: [
    "Digital marketing expertise",
    "Social media advertising skills",
    "Campaign optimization knowledge",
    "Meta platform proficiency",
  ],
  careerPaths: [
    "Digital Marketing Specialist",
    "Social Media Manager",
    "Advertising Campaign Manager",
    "Marketing Analyst",
    "Content Marketing Specialist",
    "Digital Marketing Consultant",
  ],
}

export default function MetaPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero data={metaData} heroImage="/meta-hero-bg.jpg" />
        <CertificationDetailContent data={metaData} />
        <Footer />
      </div>
    </div>
  )
}
