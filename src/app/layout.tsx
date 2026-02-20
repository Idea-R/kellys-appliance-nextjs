import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import Analytics from '@/components/Analytics'
import FloatingDiamondBadge from '@/components/FloatingDiamondBadge'
import MobileNavDrawer from '@/components/MobileNavDrawer'

const inter = Inter({ subsets: ['latin'] })
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

export const metadata: Metadata = {
  title: {
    default: "Appliance Repair Services | Kelly's Appliance Center - Since 1975",
    template: "%s | Kelly's Appliance Center"
  },
  description: "Professional appliance repair services in the Bay Area since 1975. 90 Day Money Back Guarantee. Factory Authorized Service. Call (707) 664-9702",
  keywords: ["appliance repair", "refrigerator repair", "oven repair", "washer repair", "dryer repair", "dishwasher repair", "Santa Rosa", "Petaluma", "Bay Area"],
  authors: [{ name: "Kelly's Appliance Center" }],
  creator: "Kelly's Appliance Center",
  metadataBase: new URL('https://kellysappliancerepair.com'),
  openGraph: {
    title: "Appliance Repair Services | Kelly's Appliance Center - Since 1975",
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
    title: "Appliance Repair Services | Kelly's Appliance Center - Since 1975",
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
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
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
        {/* Preload handled by next/image `priority` (and/or Cloudflare Image Resizing URLs). */}
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
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": "https://kellysappliancerepair.com/#business",
              "name": "Kelly's Appliance Center",
              "alternateName": "Kelly's Appliance",
              "telephone": "(707) 664-9702",
              "email": "kellysappliance@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "466 Primero Ct. Suite H",
                "addressLocality": "Cotati",
                "addressRegion": "CA",
                "postalCode": "94931",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:30",
                  "closes": "16:30"
                }
              ],
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.327",
                "longitude": "-122.707"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Sonoma County, CA" },
                { "@type": "AdministrativeArea", "name": "Marin County, CA" },
                { "@type": "AdministrativeArea", "name": "Napa County, CA" }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "38.327",
                  "longitude": "-122.707"
                },
                "geoRadius": {
                  "@type": "Distance",
                  "value": "50",
                  "unitCode": "MI"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Appliance Repair Services",
                "itemListElement": [
                  { "@type": "OfferCatalog", "name": "Refrigerator Repair", "url": "https://kellysappliancerepair.com/services/refrigerator-repair" },
                  { "@type": "OfferCatalog", "name": "Oven & Range Repair", "url": "https://kellysappliancerepair.com/services/oven-repair" },
                  { "@type": "OfferCatalog", "name": "Dishwasher Repair", "url": "https://kellysappliancerepair.com/services/dishwasher-repair" },
                  { "@type": "OfferCatalog", "name": "Washer & Dryer Repair", "url": "https://kellysappliancerepair.com/services/washer-dryer-repair" },
                  { "@type": "OfferCatalog", "name": "Dryer Repair", "url": "https://kellysappliancerepair.com/services/dryer-repair" }
                ]
              },
              "url": "https://kellysappliancerepair.com",
              "description": "Professional appliance repair services in the Bay Area since 1975. Factory authorized, Diamond Certified, with a 90-day money-back guarantee.",
              "foundingDate": "1975",
              "priceRange": "$",
              "paymentAccepted": "Cash, Credit Card, Check",
              "currenciesAccepted": "USD",
              "logo": "https://kellysappliancerepair.com/images/small_logo.jpg",
              "image": "https://kellysappliancerepair.com/images/kelly-appliance-team.webp",
              "sameAs": [
                "https://www.facebook.com/KellysAppliance",
                "https://www.yelp.com/biz/kellys-appliance-center-cotati-2",
                "https://www.bbb.org/us/ca/cotati/profile/appliance-repair/kellys-appliance-center-1116-34094133",
                "https://www.yellowpages.com/cotati-ca/mip/kellys-appliance-center-8915058",
                "https://www.mapquest.com/us/california/kelly-s-appliance-center-357730975"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.88",
                "reviewCount": "158",
                "bestRating": "5",
                "worstRating": "1"
              },
              "knowsAbout": [
                "appliance repair",
                "refrigerator repair",
                "oven repair",
                "dishwasher repair",
                "washer repair",
                "dryer repair",
                "factory authorized service"
              ]
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