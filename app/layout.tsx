import type React from "react"
import type { Metadata } from "next"
import { Inter, Barlow, Edu_NSW_ACT_Foundation, Open_Sans } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import AuthProvider from "@/components/auth-provider"
import { Toaster } from "sonner"
import { cn } from "@/lib/utils"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
})
const edu_nsw = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-edu-nsw",
})
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
  description:
    "Empowering ASEAN's Future Workforce with Digital TVET Certifications. Get certified in Adobe, Microsoft, Cisco, Apple & 13+ industry leading partners.",
  keywords: [
    "Digital TVET Malaysia",
    "TVET Certifications",
    "Adobe Certification",
    "Microsoft Certification",
    "Cisco Certification",
    "Apple Certification",
    "Digital Skills Training",
    "ASEAN Workforce",
    "Professional Certifications",
    "Industry Certifications",
  ],
  authors: [{ name: "Digital TVET Malaysia" }],
  creator: "Digital TVET Malaysia",
  publisher: "Digital TVET Malaysia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitaltvetmalaysia.com",
    siteName: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
    title: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
    description:
      "Empowering ASEAN's Future Workforce with Digital TVET Certifications. Get certified in Adobe, Microsoft, Cisco, Apple & 13+ industry leading partners.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
    description:
      "Empowering ASEAN's Future Workforce with Digital TVET Certifications. Get certified in Adobe, Microsoft, Cisco, Apple & 13+ industry leading partners.",
    images: ["/logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://digitaltvetmalaysia.com",
  },
  generator: "v0.app",
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "DTVET - Empowering ASEAN's Future Workforce with Digital TVET Certification",
              description:
                "Empowering ASEAN's Future Workforce with Digital TVET Certifications. Get certified in Adobe, Microsoft, Cisco, Apple & 13+ industry leading partners.",
              url: "https://digitaltvetmalaysia.com",
              logo: "https://digitaltvetmalaysia.com/logo.png",
              sameAs: ["https://digitaltvetmalaysia.com"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["English", "Malay"],
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          barlow.variable,
          edu_nsw.variable,
          open_sans.variable,
        )}
        suppressHydrationWarning={true}
      >
        <CartProvider>
          <AuthProvider>
            {children}
            <Toaster />
            <ScrollToTop />
            <WhatsAppButton />
          </AuthProvider>
        </CartProvider>
      </body>
    </html>
  )
}
