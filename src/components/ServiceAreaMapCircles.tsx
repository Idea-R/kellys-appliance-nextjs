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
  const apiKeyValue = apiKey || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
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

  if (!apiKeyValue) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`} style={{ minHeight: '400px' }}>
        <p className="text-gray-600">Map loading... (API key required)</p>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className={`rounded-lg shadow-lg ${className}`} 
      style={{ minHeight: '400px', width: '100%' }} 
    />
  )
}

