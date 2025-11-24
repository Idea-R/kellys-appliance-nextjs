'use client'

import { useEffect, useRef, useState, RefObject } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import { CityBoundariesConfig, loadCityBoundaries } from './cityBoundaries'

interface UseGoogleMapsCityBoundariesOptions {
  showOfficeMarker?: boolean
  showCityBoundaries?: boolean
  onMapReady?: (map: google.maps.Map) => void
  customMapOptions?: Partial<google.maps.MapOptions>
}

// Singleton pattern to prevent multiple script loads
let mapsLoadingPromise: Promise<void> | null = null
let mapsLoaded = false

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (mapsLoaded && typeof window !== 'undefined' && window.google?.maps) {
    return Promise.resolve()
  }

  if (mapsLoadingPromise) {
    return mapsLoadingPromise
  }

  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window object not available'))
  }

  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
  if (existingScript) {
    mapsLoadingPromise = new Promise<void>((resolve) => {
      const checkLoaded = () => {
        if (window.google?.maps) {
          mapsLoaded = true
          resolve()
        } else {
          setTimeout(checkLoaded, 100)
        }
      }
      checkLoaded()
    })
    return mapsLoadingPromise
  }

  const loader = new Loader({
    apiKey,
    version: 'weekly',
    libraries: ['places', 'geometry'],
  })

  // @ts-expect-error - Loader.load() exists but type definition may be outdated
  mapsLoadingPromise = loader.load().then(() => {
    mapsLoaded = true
  }).catch((error: Error) => {
    mapsLoadingPromise = null
    throw error
  }) as Promise<void>

  return mapsLoadingPromise
}

export function useGoogleMapsCityBoundaries(
  mapRef: RefObject<HTMLDivElement | null>,
  apiKey: string | undefined,
  config: CityBoundariesConfig,
  options: UseGoogleMapsCityBoundariesOptions = {}
) {
  const {
    showOfficeMarker = true,
    showCityBoundaries = true,
    onMapReady,
    customMapOptions = {},
  } = options

  const [mapLoaded, setMapLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)

  useEffect(() => {
    if (!apiKey) {
      console.warn('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY not found - map will not load')
      return
    }

    if (mapLoaded || !mapRef.current) return

    loadGoogleMapsScript(apiKey)
      .then(() => {
        if (mapRef.current && !mapLoaded && typeof window !== 'undefined' && window.google?.maps) {
          initializeMap()
        }
      })
      .catch((err) => {
        console.error('Failed to load Google Maps:', err)
        setError('Failed to load map. Please refresh the page.')
      })

    function initializeMap() {
      if (!mapRef.current || !window.google?.maps) return

      const map = new window.google.maps.Map(mapRef.current, {
        center: config.mapOptions.defaultCenter,
        zoom: config.mapOptions.defaultZoom,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'water',
            stylers: [{ color: '#e6f3ff' }],
          },
          {
            featureType: 'landscape',
            stylers: [{ color: '#f5f5f5' }],
          },
          ...(customMapOptions.styles || []),
        ],
        mapTypeControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        ...customMapOptions,
      })

      mapInstanceRef.current = map

      // Add office marker if requested
      if (showOfficeMarker) {
        new window.google.maps.Marker({
          position: {
            lat: config.officeLocation.lat,
            lng: config.officeLocation.lng,
          },
          map: map,
          title: config.officeLocation.address,
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          },
        })
      }

      // Load city boundaries (circles) if requested
      if (showCityBoundaries) {
        loadCityBoundaries(config.cities, map, window.google).catch((err) => {
          console.warn('Failed to load city boundaries:', err)
        })
      }

      if (onMapReady) {
        onMapReady(map)
      }

      setMapLoaded(true)
    }

    return () => {
      // Cleanup if needed
      if (mapInstanceRef.current) {
        // Map cleanup is handled by Google Maps API
        mapInstanceRef.current = null
      }
    }
  }, [apiKey, mapLoaded, config, showOfficeMarker, showCityBoundaries, onMapReady, customMapOptions])

  return {
    mapInstance: mapInstanceRef.current,
    mapLoaded,
    error,
  }
}

