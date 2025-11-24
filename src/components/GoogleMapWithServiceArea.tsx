'use client'

import React, { useEffect, useRef, useState } from 'react'

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
    if (!mapRef.current || !apiKey || apiKey.trim() === '') {
      setError('Google Maps API key is required')
      return
    }

    // Load Google Maps script directly (matching K2 implementation)
    const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
    
    const loadScript = () => {
      if (window.google?.maps && mapRef.current) {
        initializeMap()
        return
      }

      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey.trim()}&libraries=places,geometry&loading=async`
      script.async = true
      script.defer = true
      script.onload = () => {
        if (mapRef.current) {
          initializeMap()
        }
      }
      script.onerror = () => {
        setError('Failed to load Google Maps API')
      }
      document.head.appendChild(script)
    }

    if (existingScript) {
      // Script exists, wait for it to load
      const checkLoaded = setInterval(() => {
        if (window.google?.maps && mapRef.current) {
          clearInterval(checkLoaded)
          initializeMap()
        }
      }, 100)
      
      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkLoaded)
        if (!window.google?.maps) {
          setError('Google Maps API failed to load')
        }
      }, 10000)
    } else {
      loadScript()
    }

    function initializeMap() {
      if (!mapRef.current || typeof window === 'undefined') return

      // Wait for Map constructor to be available
      if (!window.google?.maps?.Map) {
        // Retry after a short delay
        setTimeout(() => {
          if (mapRef.current) {
            initializeMap()
          }
        }, 100)
        return
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: businessLocation,
        zoom: 9,
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
      })

      // Add business location marker
      new window.google.maps.Marker({
        position: businessLocation,
        map,
        title: "Kelly's Appliance Center",
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
        },
      })

      // Add service area polygons
      const polygonOptions: google.maps.PolygonOptions = {
        fillColor: '#4285F4',
        fillOpacity: 0.15,
        strokeColor: '#4285F4',
        strokeOpacity: 0.6,
        strokeWeight: 2,
      }

      new window.google.maps.Polygon({
        paths: serviceAreas.sonomaCounty,
        ...polygonOptions,
        map,
      })

      new window.google.maps.Polygon({
        paths: serviceAreas.marinCounty,
        ...polygonOptions,
        map,
      })

      new window.google.maps.Polygon({
        paths: serviceAreas.napaCity,
        ...polygonOptions,
        map,
      })
    }

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
