"use client"

import Navbar from "@/components/navbar"
import CertificationDetailHero from "@/components/certification-detail-hero"
import CertificationDetailContent from "@/components/certification-detail-content"
import Footer from "@/components/footer"

const itsData = {
  title: "Information Technology Specialist",
  subtitle: "Specialized IT Skills for Technical Careers",
  description:
    "Develop specialized information technology skills across various domains including software development, database management, networking, and cybersecurity fundamentals.",
  logo: "/logos/its-logo.png",
  certifications: [
    {
      id: 1,
      name: "Device Configuration and Management",
      description:
        "Master Windows installation, configuration, application management, data access, and device security. Learn hardware components, Active Directory, user accounts, and troubleshooting for business environments.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-device-config.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 2,
      name: "Java",
      description:
        "Learn Java fundamentals, data types, flow control, and object-oriented programming. Master arrays, strings, exception handling, and code compilation for application development.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-java.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 3,
      name: "HTML and CSS",
      description:
        "Create well-formed HTML markup and CSS styles. Master document structure, semantic elements, forms, multimedia, responsive layouts, and accessibility best practices.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-html-css.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 4,
      name: "Network Security",
      description:
        "Understand defense-in-depth, operating system security, network devices, and secure computing. Learn authentication, encryption, firewalls, and malware protection.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-network-security.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 5,
      name: "Cybersecurity",
      description:
        "Master security principles, frameworks, and threat detection. Learn network security, endpoint protection, vulnerability assessment, incident handling, and disaster recovery.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-cybersecurity.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 6,
      name: "Data Analytics",
      description:
        "Learn data manipulation, analysis, and visualization using SQL, R, Python, and Excel. Master data cleaning, aggregation, statistical analysis, and responsible analytics practices.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-data-analytics.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 7,
      name: "Cloud Computing",
      description:
        "Understand cloud concepts, architecture, and development lifecycle. Learn IaaS, PaaS, SaaS models, virtual machines, containers, security, and governance for cloud solutions.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-cloud-computing.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 8,
      name: "Python",
      description:
        "Write syntactically correct Python code with proper data types, operators, flow control, and functions. Master file operations, exception handling, and built-in modules.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-python.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 9,
      name: "JavaScript",
      description:
        "Master JavaScript operators, variables, functions, and DOM manipulation. Learn event handling, form validation, arrays, objects, and browser interaction for web development.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-javascript.pdf",
      logo: "/logos/its-logo.png",
    },
    {
      id: 10,
      name: "Databases",
      description:
        "Design and manage relational databases with proper normalization. Master SQL for data retrieval, manipulation, DDL operations, and troubleshooting using ANSI SQL standards.",
      duration: "150+ hours",
      level: "Specialist",
  price: 810,
      pdfPath: "/pdfs/its-databases.pdf",
      logo: "/logos/its-logo.png",
    },
  ],
  benefits: [
    "Specialized IT expertise across 10+ domains",
    "Industry-relevant technical skills",
    "Career advancement in technology",
    "Foundation for advanced certifications",
    "Vendor-neutral certification",
    "Recognized worldwide",
  ],
  careerPaths: [
    "Software Developer",
    "Database Administrator",
    "Network Security Analyst",
    "IT Support Specialist",
    "Systems Analyst",
    "Web Developer",
    "Cybersecurity Technician",
    "Cloud Engineer",
    "Data Analyst",
    "AI/ML Engineer",
  ],
}

export default function ITSPage() {
  return (
    <div className="w-full min-h-screen relative bg-white">
      <div className="w-full min-h-screen relative z-10">
        <Navbar />
        <CertificationDetailHero
          data={itsData}
          heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-indian-people-office-working-together_926199-2824888.jpg-bvKpRw4wd8pASQj7GxQ3OLYlwWO9ii.avif"
        />
        <CertificationDetailContent data={itsData} />
        <Footer />
      </div>
    </div>
  )
}
