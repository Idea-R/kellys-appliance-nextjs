'use client'

import { useState } from 'react'

export default function AnimatedExclamation() {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative inline-block select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-hidden="true"
    >
      {/* Glow pulse behind */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-24 h-24 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(250,204,21,0.8) 0%, transparent 70%)',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />
      </div>

      {/* The exclamation mark */}
      <div
        className="relative text-[5.5rem] leading-none font-black cursor-pointer transition-transform duration-300"
        style={{
          fontFamily: "'Arial Black', 'Impact', sans-serif",
          color: '#facc15',
          textShadow: `
            0 2px 0 #eab308,
            0 4px 0 #ca8a04,
            0 6px 0 #a16207,
            0 8px 0 #854d0e,
            0 10px 20px rgba(0,0,0,0.3),
            0 0 40px rgba(250,204,21,0.2)
          `,
          animation: hovered ? 'none' : 'slowSpin 12s linear infinite',
          transform: hovered ? 'scale(1.15) rotateY(0deg)' : undefined,
        }}
      >
        !
      </div>

      <style>{`
        @keyframes slowSpin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.3); opacity: 0.45; }
        }
      `}</style>
    </div>
  )
}
