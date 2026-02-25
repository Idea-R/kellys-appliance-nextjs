'use client'

import { useRef, useEffect, useState } from 'react'

export default function AnimatedExclamation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const angleRef = useRef(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let lastTime = performance.now()

    const animate = (now: number) => {
      const delta = now - lastTime
      lastTime = now

      if (!hovered) {
        angleRef.current = (angleRef.current + delta * 0.03) % 360
      }

      if (containerRef.current) {
        const el = containerRef.current
        const angle = angleRef.current
        /* Map angle to a scaleX that simulates Y-axis rotation */
        const rad = (angle * Math.PI) / 180
        const scaleX = Math.cos(rad)
        const lift = hovered ? 1.08 : 1
        el.style.transform = `scaleX(${scaleX * lift}) scale(${lift})`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [hovered])

  return (
    <div
      className="relative inline-flex items-center justify-center select-none cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden="true"
      style={{ width: 120, height: 160 }}
    >
      <div ref={containerRef} className="transition-none" style={{ willChange: 'transform' }}>
        <svg
          width="100"
          height="150"
          viewBox="0 0 100 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Attention"
        >
          <defs>
            {/* Main body gradient — golden with depth */}
            <linearGradient id="excl-body" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="40%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>

            {/* Highlight edge */}
            <linearGradient id="excl-highlight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef9c3" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>

            {/* Shadow beneath */}
            <filter id="excl-shadow" x="-20%" y="-10%" width="140%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#854d0e" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* Main bar — tapered rectangle */}
          <path
            d="M 38 8 L 62 8 C 63 8 64 9 63.5 14 L 57 95 C 56.5 100 43.5 100 43 95 L 36.5 14 C 36 9 37 8 38 8 Z"
            fill="url(#excl-body)"
            filter="url(#excl-shadow)"
          />
          {/* Highlight on the bar */}
          <path
            d="M 40 12 L 58 12 C 58.5 12 59 12.5 58.5 16 L 54 70 C 53.5 74 46.5 74 46 70 L 41.5 16 C 41 12.5 41.5 12 40 12 Z"
            fill="url(#excl-highlight)"
          />

          {/* Dot — circle */}
          <circle
            cx="50"
            cy="126"
            r="16"
            fill="url(#excl-body)"
            filter="url(#excl-shadow)"
          />
          {/* Dot highlight */}
          <ellipse
            cx="46"
            cy="121"
            rx="8"
            ry="6"
            fill="url(#excl-highlight)"
          />
        </svg>
      </div>
    </div>
  )
}
