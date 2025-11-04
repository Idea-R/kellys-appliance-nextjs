import React from 'react'
import { getCompanyInfo } from '@/lib/content'

// City coordinates for geo-targeting (critical for "near me" searches)
const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  'santa-rosa': { lat: 38.440, lng: -122.714 },
  'petaluma': { lat: 38.232, lng: -122.636 },
  'rohnert-park': { lat: 38.339, lng: -122.701 },
  'cotati': { lat: 38.327, lng: -122.707 },
  'sebastopol': { lat: 38.402, lng: -122.823 },
  'sonoma': { lat: 38.291, lng: -122.458 },
  'windsor': { lat: 38.547, lng: -122.816 },
  'healdsburg': { lat: 38.610, lng: -122.869 },
  'forestville': { lat: 38.473, lng: -122.891 },
  'guerneville': { lat: 38.501, lng: -123.006 },
  'glen-ellen': { lat: 38.364, lng: -122.524 },
  'bodega-bay': { lat: 38.333, lng: -123.048 },
  'dillon-beach': { lat: 38.246, lng: -122.963 },
  'san-rafael': { lat: 37.973, lng: -122.531 },
  'novato': { lat: 38.106, lng: -122.569 },
  'mill-valley': { lat: 37.906, lng: -122.545 },
  'sausalito': { lat: 37.859, lng: -122.485 },
  'tiburon': { lat: 37.873, lng: -122.456 },
  'corte-madera': { lat: 37.925, lng: -122.516 },
  'larkspur': { lat: 37.936, lng: -122.535 },
  'napa': { lat: 38.297, lng: -122.286 },
}

type Props = { city: string; slug: string }

export default function CityJsonLd({ city, slug }: Props) {
  const company = getCompanyInfo()
  const coords = cityCoordinates[slug] || { lat: 38.327, lng: -122.707 } // Fallback to Cotati
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Appliance repair',
    description: `Professional appliance repair services in ${city}, CA. Find local appliance repair near you with factory authorized service.`,
    keywords: [
      `appliance repair ${city}`,
      `appliance repair ${city} near me`,
      `appliance repair near me ${city}`,
      `appliance repair near me`,
      `local appliance repair ${city}`,
      `appliance repair ${city} CA`,
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: coords.lat.toString(),
        longitude: coords.lng.toString(),
      },
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: coords.lat.toString(),
          longitude: coords.lng.toString(),
        },
        geoRadius: {
          '@type': 'Distance',
          value: '25',
          unitCode: 'MI',
        },
      },
    },
    areaServed: {
      '@type': 'City',
      name: `${city}, CA`,
    },
    url: `https://kellysappliancerepair.com/service-locations/${slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}


