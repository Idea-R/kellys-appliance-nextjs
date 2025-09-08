import React from 'react'
import { getCompanyInfo } from '@/lib/content'

type Props = { city: string; slug: string }

export default function CityJsonLd({ city, slug }: Props) {
  const company = getCompanyInfo()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Appliance repair',
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
      },
    },
    areaServed: [`${city}, CA`],
    url: `https://kellysappliancerepair.com/service-locations/${slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}


