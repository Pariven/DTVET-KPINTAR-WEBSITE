"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const criticalCareerData = {
  title: "Critical Career Skills",
  subtitle: "Essential Skills for Professional Success",
  description:
    "Develop fundamental workplace skills that are essential for success in any career. Build communication, leadership, problem-solving, and professional development capabilities.",
  logo: "/logos/its-logo.png", // Using ITS logo as placeholder
  certifications: [
    {
      id: 9001,
      name: "Professional Communication Skills",
      description:
        "Master written and verbal communication, presentation skills, and professional correspondence in workplace settings.",
      duration: "25-35 hours",
      level: "Professional",
      price: 810,
    },
    {
      id: 9002,
      name: "Leadership and Team Management",
      description:
        "Develop leadership capabilities, team building skills, and project management fundamentals for career advancement.",
      duration: "30-40 hours",
      level: "Professional",
      price: 810,
    },
    {
      id: 9003,
      name: "Critical Thinking and Problem Solving",
      description:
        "Enhance analytical thinking, decision-making processes, and creative problem-solving techniques for workplace challenges.",
      duration: "25-35 hours",
      level: "Professional",
      price: 810,
    },
  ],
  benefits: [
    "Enhanced workplace effectiveness",
    "Improved communication abilities",
    "Leadership development",
    "Career advancement opportunities",
  ],
  careerPaths: [
    "Team Leader",
    "Project Coordinator",
    "Business Analyst",
    "Operations Manager",
    "Human Resources Specialist",
    "Training Coordinator",
  ],
}

export default function CriticalCareerPage() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero data={criticalCareerData} heroImage="/critical-career-hero-bg.jpg" />
        <CertificationDetailContent data={criticalCareerData} />
        <Footer />
      </div>
    </div>
  )
}
