import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Analytics from '@/components/Analytics'
import FloatingDiamondBadge from '@/components/FloatingDiamondBadge'
import MobileNavDrawer from '@/components/MobileNavDrawer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "Kelly's Appliance Center - Appliance Repair Since 1975",
    template: "%s | Kelly's Appliance Center"
  },
  description: "Professional appliance repair services in the Bay Area since 1975. 90 Day Money Back Guarantee. Factory Authorized Service. Call (707) 664-9702",
  keywords: ["appliance repair", "refrigerator repair", "oven repair", "washer repair", "dryer repair", "dishwasher repair", "Santa Rosa", "Petaluma", "Bay Area"],
  authors: [{ name: "Kelly's Appliance Center" }],
  creator: "Kelly's Appliance Center",
  metadataBase: new URL('https://kellysappliancerepair.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kelly's Appliance Center - Appliance Repair Since 1975",
    description: "Professional appliance repair services in the Bay Area since 1975. 90 Day Money Back Guarantee. Factory Authorized Service.",
    url: 'https://kellysappliancerepair.com',
    siteName: "Kelly's Appliance Center",
    images: [
      {
        url: '/images/kelly-appliance-team.webp',
        width: 1200,
        height: 630,
        alt: "Kelly's Appliance Center Team"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kelly's Appliance Center - Appliance Repair Since 1975",
    description: "Professional appliance repair services in the Bay Area since 1975. 90 Day Money Back Guarantee.",
    images: ['/images/kelly-appliance-team.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/favicon-152.png', sizes: '152x152', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/favicon-152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/* Preload hero background for LCP */}
        <link rel="preload" as="image" href="/images/47805405_ml.jpg" fetchPriority="high" />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-white text-green-800 px-3 py-2 rounded shadow">Skip to content</a>
        <ClientProviders>
        <Suspense>
          <Analytics />
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kelly's Appliance Center",
              "telephone": "(707) 664-9702",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "466 Primero Ct. Suite H",
                "addressLocality": "Cotati",
                "addressRegion": "CA",
                "postalCode": "94931"
              },
              "url": "https://kellysappliancerepair.com",
              "description": "Professional appliance repair services in the Bay Area since 1975",
              "serviceArea": [
                "Santa Rosa, CA",
                "Petaluma, CA", 
                "Rohnert Park, CA",
                "Sonoma, CA",
                "Sebastopol, CA",
                "Windsor, CA",
                "Marin County, CA",
                "San Rafael, CA",
                "Novato, CA",
                "Napa, CA"
              ],
              "priceRange": "$",
              "image": "https://kellysappliancerepair.com/images/kelly-appliance-team.webp"
            })
          }}
        />
        <main id="main-content">
          {children}
        </main>
        <MobileNavDrawer />
        <FloatingDiamondBadge />
        </ClientProviders>
      </body>
    </html>
  )
}