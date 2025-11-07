"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const pmiData = {
  title: "Project Management Institute",
  subtitle: "Professional Project Management Excellence",
  description:
    "Master project management methodologies and best practices with PMI certifications. Learn to lead projects successfully from initiation to completion.",
  logo: "/logos/pmi-logo.png",
  certifications: [
    {
      name: "PMI Project Management Ready®",
      description:
        "The PMI Project Management Ready® certification familiarizes students with the concepts of project management and introduces the tools to apply this knowledge to a wide range of career paths. It fills the need for an industry-recognized certification that allows career and technical education institutions to add value to their programs across career clusters.",
      duration: "150+ hours",
      level: "Ready",
  price: 810,
      image: "/logos/pmi-logo.png",
      pdfPath: "/pdfs/pmi-project-management-ready-objectives.pdf",
      objectives: [
        {
          title: "1. Project Management Fundamentals",
          items: [
            "Describe common project management approaches (predictive, adaptive, hybrid)",
            "Describe the role of ethics in project management",
            "Identify basic leadership skills (motivation, listening, conflict management)",
            "Describe project communications and status updates",
          ],
        },
        {
          title: "2. Starting the Project",
          items: [
            "Describe a project charter (purpose, objectives, milestones)",
            "Differentiate between various stakeholder roles and responsibilities",
            "Explain the concept of authority, responsibility, and decision making",
          ],
        },
        {
          title: "3. Planning the Work",
          items: [
            "Describe the purpose of the project management plan",
            "Describe the concept of project scope and work breakdown structure (WBS)",
            "Describe the concept of project scheduling (deliverables, tasks, dependencies)",
            "Describe the concept of project budget (procurement, vendor, contracts)",
          ],
        },
        {
          title: "4. Completing the Work",
          items: [
            "Monitor project scope, schedule, and budget",
            "Describe the concept of quality in project work",
            "Describe the change management process",
          ],
        },
        {
          title: "5. Ending the Project",
          items: [
            "Verify project completion (closing contracts, sponsor signoff)",
            "Describe project closing activities related to documentation",
            "Explain the purpose of archiving project documents and documenting lessons learned",
          ],
        },
      ],
    },
  ],
  benefits: [
    "Project management expertise",
    "Leadership and team management skills",
    "Process improvement capabilities",
    "Global project management recognition",
  ],
  careerPaths: [
    "Project Manager",
    "Program Manager",
    "Project Coordinator",
    "Scrum Master",
    "Business Analyst",
    "Operations Manager",
  ],
}

export default function PMIPage() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={pmiData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pmi-md5CeZ26Buqu4CRIMdNBSFJ13PGsXP.jpeg"
        />
        <CertificationDetailContent data={pmiData} />
        <Footer />
      </div>
    </div>
  )
}
