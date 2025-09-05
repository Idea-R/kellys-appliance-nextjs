import React from 'react'
import Image from 'next/image'

type Brand = { src: string; alt: string }

type BrandCarouselProps = {
  brands: Brand[]
  direction?: 'left' | 'right'
}

export default function BrandCarousel({ brands, direction = 'left' }: BrandCarouselProps) {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'

  return (
    <div className="relative overflow-hidden py-4">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className={`flex items-center gap-10 whitespace-nowrap ${animationClass}`} style={{ width: 'max-content' }}>
        {[...brands, ...brands].map((b, idx) => (
          <div key={idx} className="flex items-center justify-center">
            <Image
              src={b.src}
              alt={b.alt}
              width={140}
              height={60}
              className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}


