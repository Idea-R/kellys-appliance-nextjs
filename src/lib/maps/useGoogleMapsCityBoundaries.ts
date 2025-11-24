'use client'

import { useEffect, useRef, useState, RefObject } from 'react'
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

/**
 * Load Google Maps JavaScript API script with singleton pattern
 */
function loadGoogleMapsScript(apiKey: string): Promise<void> {
  // If already loaded, resolve immediately
  if (mapsLoaded && typeof window !== 'undefined' && window.google?.maps) {
    return Promise.resolve()
  }

  // If already loading, return existing promise
  if (mapsLoadingPromise) {
    return mapsLoadingPromise
  }

  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window object not available'))
  }

  if (!apiKey || apiKey.trim() === '') {
    return Promise.reject(new Error('Google Maps API key is required'))
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')
  if (existingScript) {
    // Script exists but may not be loaded yet, wait for it
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

  // Create new loading promise - load script directly with API key in URL
  mapsLoadingPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey.trim()}&libraries=places,geometry&loading=async`
    script.async = true
    script.defer = true
    script.onload = () => {
      mapsLoaded = true
      resolve()
    }
    script.onerror = () => {
      mapsLoadingPromise = null
      reject(new Error('Failed to load Google Maps API'))
    }
    document.head.appendChild(script)
  })

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
    if (!apiKey || apiKey.trim() === '') {
      const errorMsg = 'Google Maps API key is missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.'
      console.error(errorMsg)
      setError(errorMsg)
      return
    }

    if (mapLoaded || !mapRef.current) return

    // Use singleton loader to prevent multiple script loads
    loadGoogleMapsScript(apiKey)
      .then(() => {
        if (mapRef.current && !mapLoaded) {
          initializeMap()
        }
      })
      .catch((err) => {
        console.error('Failed to load Google Maps:', err)
        setError('Failed to load map. Please check your API key configuration and refresh the page.')
      })

    function initializeMap() {
      if (!mapRef.current || typeof window === 'undefined') return

      // Wait for Map constructor to be available
      if (!window.google?.maps?.Map) {
        // Retry after a short delay
        setTimeout(() => {
          if (mapRef.current && !mapLoaded) {
            initializeMap()
          }
        }, 100)
        return
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: config.mapOptions.defaultCenter,
        zoom: config.mapOptions.defaultZoom,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'water',
            stylers: [{ color: '#d1fae5' }], // Light green-tinted water (green-100)
          },
          {
            featureType: 'landscape',
            stylers: [{ color: '#f0fdf4' }], // Very light green-tinted landscape (green-50)
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
        // Use AdvancedMarkerElement if available, fallback to Marker
        if (window.google.maps.marker && window.google.maps.marker.AdvancedMarkerElement) {
          // Use new AdvancedMarkerElement API (if available)
          new window.google.maps.marker.AdvancedMarkerElement({
            position: {
              lat: config.officeLocation.lat,
              lng: config.officeLocation.lng,
            },
            map: map,
            title: config.officeLocation.address,
            content: (() => {
              const div = document.createElement('div')
              div.innerHTML = 'HQ'
              div.style.cssText = 'background-color: #16a34a; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);'
              return div
            })(),
          })
        } else {
          // Fallback to deprecated Marker API
          new window.google.maps.Marker({
            position: {
              lat: config.officeLocation.lat,
              lng: config.officeLocation.lng,
            },
            map: map,
            title: config.officeLocation.address,
            icon: {
              url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
              scaledSize: new window.google.maps.Size(40, 40),
            },
          })
        }
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

