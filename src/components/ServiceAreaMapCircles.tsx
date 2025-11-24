'use client'

import React, { useRef } from 'react'
import { useGoogleMapsCityBoundaries } from '@/lib/maps/useGoogleMapsCityBoundaries'
import { cityBoundariesConfig } from '@/lib/maps/cityBoundaries'

type Props = {
  apiKey?: string
  className?: string
  showOfficeMarker?: boolean
}

export default function ServiceAreaMapCircles({ 
  apiKey, 
  className = '', 
  showOfficeMarker = true 
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  // Check both variable names for compatibility
  const apiKeyValue = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.NEXT_GOOGLE_MAPS_API_KEY
  
  const { error } = useGoogleMapsCityBoundaries(
    mapRef,
    apiKeyValue,
    cityBoundariesConfig,
    {
      showOfficeMarker,
      showCityBoundaries: true,
    }
  )

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '400px' }}>
        <p className="text-red-600 font-medium">{error}</p>
      </div>
    )
  }

  if (!apiKeyValue || apiKeyValue.trim() === '') {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '400px', width: '100%' }}>
        <div className="text-center p-4">
          <p className="text-red-600 font-medium mb-2">Google Maps API key is required</p>
          <p className="text-sm text-gray-600">Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable in Cloudflare Pages</p>
        </div>
      </div>
    )
  }

  // Ensure container has fixed dimensions to prevent CLS (Cumulative Layout Shift)
  // Extract height from className if present (e.g., "h-[400px]"), otherwise use default
  const defaultHeight = '400px'
  const heightMatch = className.match(/h-\[(\d+)px\]/)
  const containerHeight = heightMatch ? `${heightMatch[1]}px` : defaultHeight
  
  return (
    <div 
      ref={mapRef} 
      className={`rounded-lg shadow-lg ${className}`} 
      style={{ 
        minHeight: containerHeight, 
        width: '100%',
        backgroundColor: '#f3f4f6' // Light gray background while loading to prevent flash
      }} 
    />
  )
}

