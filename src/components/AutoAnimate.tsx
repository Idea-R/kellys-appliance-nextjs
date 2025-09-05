'use client'

import React, { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'

type AutoAnimateProps = {
  children: React.ReactNode
  className?: string
}

export default function AutoAnimate({ children, className }: AutoAnimateProps) {
  const parent = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (parent.current) autoAnimate(parent.current)
  }, [])

  return (
    <div ref={parent} className={className}>
      {children}
    </div>
  )
}


