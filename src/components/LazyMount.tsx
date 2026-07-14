'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  /** Reserve space to prevent CLS while the component loads */
  minHeight?: number | string
  /** Start loading before the component enters the viewport */
  rootMargin?: string
  /**
   * Hard safety net: mount no later than this many ms even if the
   * IntersectionObserver never fires (deferred rendering, content-visibility,
   * unusual viewports). Keeps deferred content from ever getting stuck hidden.
   */
  fallbackMs?: number
}

export default function LazyMount({ children, minHeight, rootMargin = '200px', fallbackMs = 2500 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted) return

    // Environments without IntersectionObserver: mount right away.
    if (typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      return
    }

    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setMounted(true)
      },
      { rootMargin }
    )
    obs.observe(el)

    // Safety net: mount even if the observer never fires, so the map and other
    // deferred sections always render for the user.
    const timer = window.setTimeout(() => setMounted(true), fallbackMs)

    return () => {
      obs.disconnect()
      window.clearTimeout(timer)
    }
  }, [mounted, rootMargin, fallbackMs])

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {mounted ? children : null}
    </div>
  )
}
