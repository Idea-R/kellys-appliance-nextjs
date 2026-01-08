'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type Brand = { image: string; name: string }

type EmblaBrandCarouselProps = { brands: Brand[]; direction?: 'left' | 'right' }

export default function EmblaBrandCarousel({ brands, direction = 'left' }: EmblaBrandCarouselProps) {
  const autoScroll = useRef(
    AutoScroll({
      // Slightly faster + more consistent feel, especially on mobile
      speed: 0.8,
      playOnInit: true,
      stopOnInteraction: false,
      // Keep motion continuous (hover-pause can feel "broken")
      stopOnMouseEnter: false,
      direction: direction === 'left' ? 'forward' : 'backward',
    })
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      // Avoid subtle snapping/jitter with dragFree + auto-scroll
      containScroll: false,
      watchDrag: true,
      inViewThreshold: 0,
    },
    [autoScroll.current]
  )

  const slides = [...brands, ...brands]

  return (
    <div className="relative mask-fade-x">
      <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel" aria-label="Brand logos" role="region">
        {/* Avoid flex gap (can cause odd spacing/jumps); use per-slide padding and fixed widths instead */}
        <div className="flex items-center will-change-transform" role="list">
          {slides.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center justify-center flex-shrink-0 px-6 py-2 w-[160px] sm:w-[180px] md:w-[200px]"
              role="listitem"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={220}
                height={120}
                draggable={false}
                className="mx-auto h-10 sm:h-12 md:h-14 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


