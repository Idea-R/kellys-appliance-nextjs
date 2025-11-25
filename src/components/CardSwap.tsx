'use client'

import React, { useState, useEffect, ReactNode, useMemo } from 'react'

export interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <div className="w-full h-full">{children}</div>
}

interface CardSwapProps {
  children: ReactNode | ReactNode[]
  cardDistance?: number
  verticalDistance?: number
  mobileCardDistance?: number
  mobileVerticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
}

// Custom hook to detect mobile viewport
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Check for reduced motion preference
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  mobileCardDistance = 20,
  mobileVerticalDistance = 30,
  delay = 5000,
  pauseOnHover = true,
}: CardSwapProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotion()

  // Responsive distances
  const effectiveCardDistance = isMobile ? mobileCardDistance : cardDistance
  const effectiveVerticalDistance = isMobile ? mobileVerticalDistance : verticalDistance

  const childrenArray = useMemo(() => React.Children.toArray(children), [children])
  const childrenCount = childrenArray.length

  useEffect(() => {
    if (isPaused || childrenCount <= 1 || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % childrenCount)
    }, delay)

    return () => clearInterval(interval)
  }, [isPaused, delay, childrenCount, prefersReducedMotion])

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

  // Navigation dots for manual control
  const goToCard = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Main card container with 3D perspective */}
      <div
        ref={containerRef}
        className="relative flex-1 w-full"
        style={{ perspective: '1200px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {childrenArray.map((child, index) => {
            const offset = index - currentIndex
            const absOffset = Math.abs(offset)
            const isActive = offset === 0
            const isNext = offset === 1 || (offset === -(childrenCount - 1))
            const isPrev = offset === -1 || (offset === childrenCount - 1)

            // Calculate z-index: active card on top
            let zIndex = 10
            if (isActive) zIndex = 50
            else if (isNext) zIndex = 40
            else if (isPrev) zIndex = 30
            else zIndex = 20 - absOffset

            // Calculate transforms with 3D depth
            const translateX = offset * effectiveCardDistance
            const translateY = absOffset * effectiveVerticalDistance
            const translateZ = isActive ? 0 : -absOffset * 50
            const rotate = offset * 3 // Rotation for stacking effect
            const rotateY = offset * 2 // Subtle Y rotation for 3D
            const scale = isActive ? 1 : Math.max(0.9, 1 - absOffset * 0.05)
            const opacity = isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.25)

            // Shadow depth based on position
            const shadowBlur = isActive ? 30 : 15 - absOffset * 3
            const shadowOpacity = isActive ? 0.3 : 0.15 - absOffset * 0.03

            const transitionDuration = prefersReducedMotion ? '0ms' : '600ms'
            const transitionTiming = 'cubic-bezier(0.34, 1.56, 0.64, 1)' // ease-out-back

            return (
              <div
                key={index}
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: `
                    translateX(${translateX}px) 
                    translateY(${translateY}px) 
                    translateZ(${translateZ}px)
                    rotateZ(${rotate}deg)
                    rotateY(${rotateY}deg)
                    scale(${scale})
                  `,
                  opacity,
                  zIndex,
                  pointerEvents: isActive ? 'auto' : 'none',
                  transition: `all ${transitionDuration} ${transitionTiming}`,
                  boxShadow: `0 ${shadowBlur}px ${shadowBlur * 2}px rgba(0, 0, 0, ${shadowOpacity})`,
                  transformOrigin: 'center center',
                }}
              >
                {child}
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation dots */}
      {childrenCount > 1 && (
        <div className="flex justify-center gap-2 mt-4 pb-2">
          {childrenArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-green-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

