'use client'

import { useRef, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const springConfig = { damping: 25, stiffness: 150, mass: 1.5 }

export default function AnimatedExclamation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  /* Motion values for mouse-tracked 3D tilt */
  const rotateX = useSpring(useMotionValue(0), springConfig)
  const rotateY = useSpring(useMotionValue(0), springConfig)
  const scale = useSpring(1, springConfig)
  const glareOpacity = useSpring(0, { damping: 30, stiffness: 200 })

  /* Idle floating animation */
  const idleY = useMotionValue(0)
  const idleRotate = useMotionValue(0)
  const idleRef = useRef<number>(0)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    let t = 0
    const animate = () => {
      t += 0.02
      if (!isHoveredRef.current) {
        idleY.set(Math.sin(t) * 6)
        idleRotate.set(Math.sin(t * 0.7) * 3)
      }
      idleRef.current = requestAnimationFrame(animate)
    }
    idleRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(idleRef.current)
  }, [idleY, idleRotate])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    rotateX.set((offsetY / (rect.height / 2)) * -20)
    rotateY.set((offsetX / (rect.width / 2)) * 20)

    /* Move glare highlight to follow cursor */
    if (glareRef.current) {
      const gx = ((e.clientX - rect.left) / rect.width) * 100
      const gy = ((e.clientY - rect.top) / rect.height) * 100
      glareRef.current.style.background =
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.4) 0%, transparent 55%)`
    }
  }, [rotateX, rotateY])

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true
    scale.set(1.12)
    glareOpacity.set(1)
    idleY.set(0)
    idleRotate.set(0)
  }, [scale, glareOpacity, idleY, idleRotate])

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    glareOpacity.set(0)
  }, [scale, rotateX, rotateY, glareOpacity])

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center justify-center select-none cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
      style={{ width: 140, height: 180, perspective: 800 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          y: idleY,
          rotateZ: idleRotate,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className="relative"
      >
        {/* SVG exclamation mark — larger, with depth layers */}
        <svg
          width="120"
          height="170"
          viewBox="0 0 100 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.25))' }}
        >
          <defs>
            <linearGradient id="excl-body" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#facc15" />
              <stop offset="70%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>

            <linearGradient id="excl-highlight" x1="0.3" y1="0" x2="0.7" y2="0.6">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#fef9c3" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="excl-edge" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#92400e" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>

          {/* ── Bar ── */}
          {/* Depth/edge layer (offset darker copy) */}
          <path
            d="M 40 10 L 64 10 C 65 10 66 11 65.5 16 L 59 97 C 58.5 102 45.5 102 45 97 L 38.5 16 C 38 11 39 10 40 10 Z"
            fill="url(#excl-edge)"
            transform="translate(1.5, 2)"
          />
          {/* Main face */}
          <path
            d="M 38 8 L 62 8 C 63 8 64 9 63.5 14 L 57 95 C 56.5 100 43.5 100 43 95 L 36.5 14 C 36 9 37 8 38 8 Z"
            fill="url(#excl-body)"
          />
          {/* Specular highlight */}
          <path
            d="M 41 12 L 55 12 C 55.5 12 56 12.5 55.5 16 L 52 60 C 51.5 63 48 63 47.5 60 L 44 16 C 43.5 12.5 44 12 41 12 Z"
            fill="url(#excl-highlight)"
          />

          {/* ── Dot ── */}
          {/* Depth/edge layer */}
          <circle cx="51.5" cy="128" r="16" fill="url(#excl-edge)" />
          {/* Main face */}
          <circle cx="50" cy="126" r="16" fill="url(#excl-body)" />
          {/* Specular highlight */}
          <ellipse cx="45" cy="120" rx="7" ry="5.5" fill="url(#excl-highlight)" />
        </svg>

        {/* Glare overlay — follows mouse position */}
        <motion.div
          ref={glareRef}
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            opacity: glareOpacity,
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>
    </div>
  )
}
