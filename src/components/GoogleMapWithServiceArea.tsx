'use client'

import React, { useEffect, useRef, useState } from 'react'
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

type ServiceAreaConfig = {
  sonomaCounty: google.maps.LatLngLiteral[]
  marinCounty: google.maps.LatLngLiteral[]
  napaCity: google.maps.LatLngLiteral[]
}

type Props = {
  apiKey: string
  businessLocation: google.maps.LatLngLiteral
  className?: string
}

// Service area boundaries (simplified polygons - these should be refined with actual county boundaries)
const serviceAreas: ServiceAreaConfig = {
  // Sonoma County (rough approximation)
  sonomaCounty: [
    { lat: 38.805, lng: -123.375 }, // NW corner
    { lat: 38.805, lng: -122.350 }, // NE corner
    { lat: 38.083, lng: -122.350 }, // SE corner
    { lat: 38.083, lng: -123.100 }, // SW corner
  ],
  // Marin County (rough approximation)
  marinCounty: [
    { lat: 38.083, lng: -122.680 }, // North
    { lat: 38.083, lng: -122.350 }, // NE
    { lat: 37.850, lng: -122.350 }, // SE
    { lat: 37.850, lng: -122.680 }, // SW
  ],
  // Napa City only (not full county)
  napaCity: [
    { lat: 38.330, lng: -122.330 },
    { lat: 38.330, lng: -122.240 },
    { lat: 38.260, lng: -122.240 },
    { lat: 38.260, lng: -122.330 },
  ],
}

export default function GoogleMapWithServiceArea({ apiKey, businessLocation, className = '' }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Set options for Google Maps API (only once)
    // Type assertion needed as setOptions types may not include apiKey in current version
    setOptions({
      apiKey: apiKey,
      version: 'weekly',
    } as Parameters<typeof setOptions>[0])

    // Load required libraries and initialize map
    Promise.all([
      importLibrary('maps'),
      importLibrary('places'),
      importLibrary('geometry'),
    ])
      .then(() => {
        if (!mapRef.current || typeof window === 'undefined' || !window.google?.maps) return

        const { Map, Marker, Polygon } = window.google.maps

        const map = new Map(mapRef.current, {
          center: businessLocation,
          zoom: 9,
          mapTypeControl: true,
          streetViewControl: false,
          fullscreenControl: true,
        })

        // Add business location marker
        new Marker({
          position: businessLocation,
          map,
          title: "Kelly's Appliance Center",
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          },
        })

        // Add service area polygons with light blue overlay
        const polygonOptions: google.maps.PolygonOptions = {
          fillColor: '#4285F4',
          fillOpacity: 0.15,
          strokeColor: '#4285F4',
          strokeOpacity: 0.6,
          strokeWeight: 2,
        }

        // Sonoma County overlay
        new Polygon({
          paths: serviceAreas.sonomaCounty,
          ...polygonOptions,
          map,
        })

        // Marin County overlay
        new Polygon({
          paths: serviceAreas.marinCounty,
          ...polygonOptions,
          map,
        })

        // Napa City overlay
        new Polygon({
          paths: serviceAreas.napaCity,
          ...polygonOptions,
          map,
        })
      })
      .catch((e: Error) => {
        console.error('Error loading Google Maps:', e)
        setError('Failed to load map. Please refresh the page.')
      })
  }, [apiKey, businessLocation])

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}>
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    )
  }

  return <div ref={mapRef} className={`rounded-lg shadow-lg ${className}`} style={{ minHeight: '420px' }} />
}
