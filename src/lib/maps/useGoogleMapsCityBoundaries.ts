'use client'

import { useEffect, useRef, useState, RefObject } from 'react'
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'
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
let optionsSet = false

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

  // Set options if not already set
  if (!optionsSet) {
    // Type assertion needed as setOptions types may not include apiKey in current version
    setOptions({
      apiKey,
      version: 'weekly',
    } as Parameters<typeof setOptions>[0])
    optionsSet = true
  }

  // Load required libraries
  mapsLoadingPromise = Promise.all([
    importLibrary('maps'),
    importLibrary('places'),
    importLibrary('geometry'),
  ]).then(() => {
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
      .then(async () => {
        if (mapRef.current && !mapLoaded) {
          await initializeMap()
        }
      })
      .catch((err) => {
        console.error('Failed to load Google Maps:', err)
        setError('Failed to load map. Please refresh the page.')
      })

    async function initializeMap() {
      if (!mapRef.current || typeof window === 'undefined') return

      // Import maps library - this loads the API and makes window.google.maps available
      await importLibrary('maps')

      if (!window.google?.maps) {
        throw new Error('Google Maps API not loaded')
      }

      const { Map, Marker } = window.google.maps

      const map = new Map(mapRef.current, {
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
        new Marker({
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

