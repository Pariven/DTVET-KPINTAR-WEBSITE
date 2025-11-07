"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const agriscienceData = {
  title: "Agriscience and Technology Careers",
  subtitle: "Cultivate the Future of Agriculture & Food Technology",
  description:
    "Explore career opportunities in modern agriculture, food science, and agricultural technology. Learn about sustainable farming practices, biotechnology, and agricultural innovation.",
  logo: "/logos/agriscience-logo.png",
  certifications: [
    {
      name: "Agriscience Foundations",
      description:
        "This exam certifies essential knowledge and skills necessary to work professionally in an entry-level position in the agriculture industry. Demonstrates skills in plant, animal, and soil science; food safety; agricultural safety and regulatory practices; record keeping/documentation; and efficient resource use.",
      duration: "150+ hours",
      level: "Foundations",
  price: 810,
      image: "/logos/agriscience-logo.png",
      pdfPath: "/pdfs/Agriscience and Technology - Agriscience Foundations - Objective Domains (9.5.24).pdf",
      objectives: [
        {
          title: "1. Health of Agricultural Systems",
          items: [
            "Differentiate between healthy and unhealthy agricultural systems and habitats",
            "Summarize basic Integrated Pest Management (IPM) practices",
            "Describe properties of healthy soil",
            "Explain how water moves between the land, ocean, and atmosphere",
          ],
        },
        {
          title: "2. Using and Maintaining Industry Documents",
          items: [
            "Maintain complete and accurate records",
            "Interpret information on labels (pesticides, feed, medicine, nutrition facts, seed tags, fertilizer)",
            "Use weights and measures to complete simple calculations",
            "Interpret information on Safety Data Sheets (SDS)",
          ],
        },
        {
          title: "3. Workplace Safety and Procedures",
          items: [
            "Select and use appropriate tools and equipment for job-related tasks",
            "Implement sanitation and cleanliness to adhere to biosecurity standards",
            "Summarize the contents of the Worker Protection Standard (WPS)",
          ],
        },
        {
          title: "4. Animal Science",
          items: [
            "Identify different uses of animals",
            "Identify species-specific terminology based on gender and age",
            "Explain the role of flight zones in the safe handling of animals",
            "Identify principles of quality care in animal agriculture",
          ],
        },
        {
          title: "5. Plant Science",
          items: [
            "Explain principles of plant biology and photosynthesis",
            "Summarize plant nutrients and their delivery",
            "Explain what seeds need to germinate and grow",
          ],
        },
        {
          title: "6. Food Safety",
          items: [
            "Describe how temperature affects microbial growth",
            "Determine which allergens are present in a food product",
            "Distinguish between sources of food contamination",
          ],
        },
      ],
    },
  ],
  benefits: [
    "Career opportunities in growing agricultural sector",
    "Understanding of modern farming technologies",
    "Knowledge of sustainable practices",
    "Food industry expertise",
  ],
  careerPaths: [
    "Agricultural Technician",
    "Food Safety Inspector",
    "Farm Manager",
    "Agricultural Sales Representative",
    "Food Scientist",
    "Agricultural Extension Agent",
  ],
}

export default function AgrisciencePage() {
  return (
    <div className="w-full min-h-screen relative bg-black">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={agriscienceData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Agriscience%20and%20Technology%20Careers-O12QUumfPzPW1XGGHa9uomwAupAkxL.jpg"
        />
        <CertificationDetailContent data={agriscienceData} />
        <Footer />
      </div>
    </div>
  )
}
