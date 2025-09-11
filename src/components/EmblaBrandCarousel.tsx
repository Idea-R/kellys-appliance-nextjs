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
      speed: 0.5,
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      direction: direction === 'left' ? 'forward' : 'backward',
    })
  )

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
      containScroll: 'trimSnaps',
      watchDrag: true,
      inViewThreshold: 0,
    },
    [autoScroll.current]
  )

  const slides = [...brands, ...brands]

  return (
    <div className="relative mask-fade-x">
      <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel" aria-label="Brand logos" role="region">
        <div className="flex gap-16 items-center will-change-transform" role="list">
          {slides.map((brand, idx) => (
            <div key={`${brand.name}-${idx}`} className="flex items-center justify-center flex-shrink-0" role="listitem">
              <Image
                src={brand.image}
                alt={brand.name}
                width={150}
                height={80}
                className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


