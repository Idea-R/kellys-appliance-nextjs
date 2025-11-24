'use client'

import React, { useState, useEffect, ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="w-full h-full">{children}</div>
}

interface CardSwapProps {
  children: ReactNode[]
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const childrenArray = React.Children.toArray(children)
  const childrenCount = childrenArray.length

  useEffect(() => {
    if (isPaused || childrenCount <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % childrenCount)
    }, delay)

    return () => clearInterval(interval)
  }, [isPaused, delay, childrenCount])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    if (childrenCount <= 1) return
    
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1 : -1
    setCurrentIndex((prev) => {
      const next = prev + delta
      if (next < 0) return childrenCount - 1
      if (next >= childrenCount) return 0
      return next
    })
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
    >
      {childrenArray.map((child, index) => {
        const offset = index - currentIndex
        const absOffset = Math.abs(offset)
        const isActive = offset === 0
        const isNext = offset === 1 || (offset === -(childrenCount - 1))
        const isPrev = offset === -1 || (offset === childrenCount - 1)

        // Calculate z-index: active card on top, then next, then prev, then others
        let zIndex = 10
        if (isActive) zIndex = 50
        else if (isNext) zIndex = 40
        else if (isPrev) zIndex = 30
        else zIndex = 20 - absOffset

        // Calculate transform: stack cards with rotation and offset
        const translateX = offset * cardDistance
        const translateY = absOffset * verticalDistance
        const rotate = offset * 2 // Slight rotation for depth
        const scale = isActive ? 1 : 1 - absOffset * 0.05
        const opacity = isActive ? 1 : Math.max(0.3, 1 - absOffset * 0.2)

        return (
          <div
            key={index}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
              opacity,
              zIndex,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}

