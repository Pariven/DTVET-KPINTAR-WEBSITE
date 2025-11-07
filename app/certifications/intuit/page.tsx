"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const intuitData = {
  title: "Intuit Certifications",
  subtitle: "Master Financial Software & Business Management",
  description:
    "Become proficient in Intuit's financial software including QuickBooks, TurboTax, and other business management tools used by millions of businesses worldwide.",
  logo: "/logos/intuit-logo.png",
  certifications: [
    {
      name: "Intuit QuickBooks Online Certified User",
      description:
        "Master QuickBooks Online Plus software including QuickBooks Online administration, sales and money in, vendors and money out, bank accounts, transaction rules, receipts, and basic reports and views. Requires at least 150 hours of instruction or hands-on experience.",
      image: "/logos/intuit-logo.png",
      duration: "150+ hours",
      level: "User",
  price: 810,
      pdfPath: "/pdfs/intuit-quickbooks-online-certified-user.pdf",
    },
    {
      name: "Intuit Certified Bookkeeping Professional",
      description:
        "Comprehensive certification covering accounting basics, double-entry accounting, the accounting cycle, accounting for assets and sales transactions, liabilities and equity, purchase transactions, reconciliation, and financial statement analysis.",
      image: "/logos/intuit-logo.png",
      duration: "50-70 hours",
      level: "Professional",
  price: 810,
      pdfPath: "/pdfs/intuit-certified-bookkeeping-professional.pdf",
    },
    {
      name: "Intuit QuickBooks Certified User Desktop",
      description:
        "Master QuickBooks Desktop software including setup, utilities, list management, items, sales, purchases, payroll, reports, basic accounting, and customization. Learn to manage customers, vendors, inventory, and complete financial workflows.",
      image: "/logos/intuit-logo.png",
      duration: "40-60 hours",
      level: "User",
  price: 810,
      pdfPath: "/pdfs/intuit-quickbooks-desktop-certified-user.pdf",
    },
    {
      name: "Intuit Personal Finance Certification",
      description:
        "Comprehensive personal finance certification covering earning income, spending, budgeting, saving, investing, managing credit and debt, and managing risk through insurance. Learn about taxes, banking, investment types, credit scores, and consumer protection.",
      image: "/logos/intuit-logo.png",
      duration: "30-40 hours",
      level: "User",
  price: 810,
      pdfPath: "/pdfs/intuit-personal-finance-certification.pdf",
    },
    {
      name: "Intuit Design for Delight Innovator",
      description:
        "Learn the Design for Delight innovation methodology including Deep Customer Empathy, Go Broad to Go Narrow, and Rapid Experiments with Customers. Master customer observation, problem definition, brainstorming, prototyping, and rapid experimentation techniques.",
      image: "/logos/intuit-logo.png",
      duration: "20-30 hours",
      level: "Professional",
  price: 810,
      pdfPath: "/pdfs/intuit-design-for-delight-innovator.pdf",
    },
  ],
  benefits: [
    "Financial software expertise",
    "Small business accounting skills",
    "Professional bookkeeping knowledge",
    "Client service capabilities",
    "Personal finance management",
    "Innovation and design thinking",
  ],
  careerPaths: [
    "Bookkeeper",
    "Accounting Clerk",
    "Financial Analyst",
    "Small Business Consultant",
    "Tax Preparer",
    "QuickBooks ProAdvisor",
    "Financial Advisor",
    "Innovation Specialist",
  ],
}

export default function IntuitPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen">
        <Navbar />
        <CertificationDetailHero
          data={intuitData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-indian-people-office-working-together_926199-2824888.jpg-bvKpRw4wd8pASQj7GxQ3OLYlwWO9ii.avif"
        />
        <CertificationDetailContent data={intuitData} />
        <Footer />
      </div>
    </div>
  )
}
