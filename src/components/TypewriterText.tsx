'use client'

import React, { useEffect, useState } from 'react'

type TypewriterTextProps = {
  text: string
  speedMs?: number
  className?: string
}

export default function TypewriterText({ text, speedMs = 24, className }: TypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    setVisibleCount(0)
    const intervalId = window.setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          window.clearInterval(intervalId)
          return prev
        }
        return prev + 1
      })
    }, speedMs)
    return () => window.clearInterval(intervalId)
  }, [text, speedMs])

  return (
    <span className={className} aria-label={text}>
      {text.slice(0, visibleCount)}
      <span className="inline-block w-2 h-5 align-baseline bg-green-600 ml-0.5 animate-pulse" aria-hidden />
    </span>
  )
}


