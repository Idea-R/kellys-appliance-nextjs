'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

type ClientProvidersProps = {
  children: React.ReactNode
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  useEffect(() => {
    // Respect user preference for reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 0.85,
      smoothWheel: true,
    })

    let rafId: number | undefined
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId !== undefined) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}


