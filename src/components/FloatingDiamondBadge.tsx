"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function FloatingDiamondBadge() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <Link
      href="https://www.diamondcertified.org/report/kellys-appliance-center/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Diamond Certified"
      data-analytics-label="badge_diamond_right"
      className={`fixed z-50 bottom-[76px] md:bottom-6 right-4 md:right-6 group select-none`}>
      <div className={`relative w-16 h-16 md:w-20 md:h-20 ${mounted ? 'badge-enter' : 'opacity-0'}`}>
        <Image
          src="/images/diamond-certified-logo.png"
          alt="Diamond Certified"
          fill
          sizes="(max-width: 768px) 64px, 80px"
          className="object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)] group-hover:badge-hover"
        />
        <div className="pointer-events-none absolute -top-24 right-0 w-56 md:w-64 bg-black/80 text-white text-[11px] md:text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <div className="font-semibold mb-1">Verified Diamond Certified</div>
          <div className="opacity-90">Rated Highest in Quality and Helpful Expertise. Click to verify on DiamondCertified.org</div>
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-black/80 rotate-45" />
        </div>
      </div>
    </Link>
  )
}


