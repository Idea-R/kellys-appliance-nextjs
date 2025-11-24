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

  if (!apiKey || apiKey.trim() === '') {
    return Promise.reject(new Error('Google Maps API key is required'))
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

  // Set options FIRST - this must be called before any importLibrary calls
  if (!optionsSet) {
    try {
      // Type assertion needed as setOptions types may not include apiKey in current version
      setOptions({
        apiKey: apiKey.trim(),
        version: 'weekly',
      } as Parameters<typeof setOptions>[0])
      optionsSet = true
    } catch (err) {
      console.error('Failed to set Google Maps options:', err)
      return Promise.reject(err)
    }
  }

  // Load required libraries (marker library needed for AdvancedMarkerElement)
  mapsLoadingPromise = Promise.all([
    importLibrary('maps'),
    importLibrary('marker'),
    importLibrary('places'),
    importLibrary('geometry'),
  ]).then(() => {
    mapsLoaded = true
  }).catch((error: Error) => {
    mapsLoadingPromise = null
    optionsSet = false // Reset on error so we can retry
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

      // Libraries are already loaded by loadGoogleMapsScript, just verify
      if (!window.google?.maps) {
        throw new Error('Google Maps API not loaded')
      }

      const { Map } = window.google.maps
      
      // Get marker library (already loaded, but need to access it)
      const markerLibrary = await importLibrary('marker')
      const { AdvancedMarkerElement, PinElement } = markerLibrary

      const map = new Map(mapRef.current, {
        center: config.mapOptions.defaultCenter,
        zoom: config.mapOptions.defaultZoom,
        mapId: 'KELLYS_APPLIANCE_MAP', // Required for AdvancedMarkerElement
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

      // Add office marker if requested (using AdvancedMarkerElement - recommended)
      if (showOfficeMarker) {
        const pinElement = new PinElement({
          background: '#DC2626', // red-600
          borderColor: '#991B1B', // red-800
          glyphColor: '#FFFFFF',
          scale: 1.2,
        })

        new AdvancedMarkerElement({
          map: map,
          position: {
            lat: config.officeLocation.lat,
            lng: config.officeLocation.lng,
          },
          title: config.officeLocation.address,
          content: pinElement.element,
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

