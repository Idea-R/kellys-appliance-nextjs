/**
 * Google Maps City Boundaries Configuration
 * Kelly's Appliance Center - Service Area Circles
 */

import { counties } from '@/lib/locations'

export interface CityCoordinates {
  name: string
  county: string
  lat: number
  lng: number
}

export interface CityBoundariesConfig {
  officeLocation: {
    address: string
    lat: number
    lng: number
  }
  cities: CityCoordinates[]
  mapOptions: {
    defaultZoom: number
    defaultCenter: { lat: number; lng: number }
    fillColor: string
    fillOpacity: number
    strokeColor: string
    strokeOpacity: number
    strokeWeight: number
  }
}

// City coordinates mapping (from CityJsonLd.tsx)
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

// Build cities array from counties data
const buildCitiesArray = (): CityCoordinates[] => {
  const cities: CityCoordinates[] = []
  
  Object.values(counties).forEach((county) => {
    county.cities.forEach((city) => {
      const coords = cityCoordinates[city.slug]
      if (coords) {
        cities.push({
          name: city.name,
          county: county.name,
          lat: coords.lat,
          lng: coords.lng,
        })
      }
    })
  })
  
  return cities
}

// Office location: 466 Primero Ct. Suite H, Cotati, CA 94931
export const cityBoundariesConfig: CityBoundariesConfig = {
  officeLocation: {
    address: "466 Primero Ct. Suite H, Cotati, CA 94931",
    lat: 38.327, // Cotati coordinates
    lng: -122.707,
  },
  cities: buildCitiesArray(),
  mapOptions: {
    defaultZoom: 9,
    defaultCenter: { lat: 38.327, lng: -122.707 }, // Centered on Cotati office
    fillColor: '#86EFAC', // Light green (matching Kelly's brand)
    fillOpacity: 0.3,
    strokeColor: '#16A34A', // Green (matching Kelly's brand)
    strokeOpacity: 0.8,
    strokeWeight: 2,
  },
}

/**
 * Get approximate radius for a city in meters
 * Larger cities get larger radii
 */
export function getCityRadius(cityName: string): number {
  const largeCities = ['Santa Rosa', 'Petaluma', 'San Rafael', 'Novato']
  const mediumCities = ['Rohnert Park', 'Sonoma', 'Sebastopol', 'Windsor', 'Napa', 'Mill Valley']
  
  if (largeCities.includes(cityName)) {
    return 12000 // ~7.5 miles radius
  } else if (mediumCities.includes(cityName)) {
    return 8000 // ~5 miles radius
  } else {
    return 5000 // ~3 miles radius for smaller cities
  }
}

/**
 * Load city boundaries using circles with radius based on city size
 */
export async function loadCityBoundaries(
  cities: CityCoordinates[],
  map: google.maps.Map,
  google: typeof window.google
): Promise<void> {
  if (!map || !google?.maps) return

  cities.forEach((city) => {
    // Get radius based on city size
    const radius = getCityRadius(city.name)
    
    // Create circle for each city
    const cityCircle = new google.maps.Circle({
      center: { lat: city.lat, lng: city.lng },
      radius: radius, // meters
      fillColor: cityBoundariesConfig.mapOptions.fillColor,
      fillOpacity: cityBoundariesConfig.mapOptions.fillOpacity,
      strokeColor: cityBoundariesConfig.mapOptions.strokeColor,
      strokeOpacity: cityBoundariesConfig.mapOptions.strokeOpacity,
      strokeWeight: cityBoundariesConfig.mapOptions.strokeWeight,
      map: map,
    })

    // Add hover effect
    cityCircle.addListener('mouseover', () => {
      cityCircle.setOptions({ 
        fillOpacity: cityBoundariesConfig.mapOptions.fillOpacity + 0.1 
      })
    })

    cityCircle.addListener('mouseout', () => {
      cityCircle.setOptions({ 
        fillOpacity: cityBoundariesConfig.mapOptions.fillOpacity 
      })
    })
  })
}

