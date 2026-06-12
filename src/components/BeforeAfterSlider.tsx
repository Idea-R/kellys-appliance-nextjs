'use client'

import React, { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

type BeforeAfterSliderProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel?: string
  afterLabel?: string
  /** Tailwind aspect ratio class, e.g. "aspect-[3/4]" or "aspect-video". Default 3:4 portrait. */
  aspectClass?: string
  caption?: string
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = 'Before',
  afterLabel = 'After',
  aspectClass = 'aspect-[3/4]',
  caption,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(50) // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPos(pct)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setFromClientX(e.clientX)
  }, [setFromClientX])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!draggingRef.current) return
    setFromClientX(e.clientX)
  }, [setFromClientX])

  const onPointerUp = useCallback(() => {
    draggingRef.current = false
  }, [])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { setPos((p) => Math.max(0, p - 4)); e.preventDefault() }
    if (e.key === 'ArrowRight') { setPos((p) => Math.min(100, p + 4)); e.preventDefault() }
  }, [])

  return (
    <figure className="my-8">
      <div
        ref={containerRef}
        className={`relative w-full max-w-2xl mx-auto ${aspectClass} overflow-hidden rounded-lg shadow-lg select-none touch-none cursor-ew-resize`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        role="slider"
        aria-label="Drag to compare before and after dryer cleaning"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* AFTER image (bottom layer, fills container) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 672px) 100vw, 672px"
          className="object-cover pointer-events-none"
          draggable={false}
        />
        <span className="absolute top-3 right-3 z-20 bg-green-700/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full pointer-events-none">
          {afterLabel}
        </span>

        {/* BEFORE image (top layer, clipped to reveal AFTER on the right) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 672px) 100vw, 672px"
            className="object-cover"
            draggable={false}
          />
          <span className="absolute top-3 left-3 z-20 bg-gray-900/85 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {beforeLabel}
          </span>
        </div>

        {/* Divider line + handle */}
        <div
          className="absolute top-0 bottom-0 z-30 pointer-events-none"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-0.5 h-full bg-white shadow-[0_0_6px_rgba(0,0,0,0.5)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg className="h-5 w-5 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" transform="translate(12 0)" />
            </svg>
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  )
}
