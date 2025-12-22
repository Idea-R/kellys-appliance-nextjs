'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  /** Reserve space to prevent CLS while the component loads */
  minHeight?: number | string
  /** Start loading before the component enters the viewport */
  rootMargin?: string
}

export default function LazyMount({ children, minHeight, rootMargin = '200px' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted) return
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMounted(true)
          obs.disconnect()
        }
      },
      { rootMargin }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [mounted, rootMargin])

  return (
    <div ref={ref} style={minHeight ? { minHeight } : undefined}>
      {mounted ? children : null}
    </div>
  )
}


