import React from 'react'
import Image from 'next/image'

type ChamberLinkProps = {
  name: string
  url: string
  logoSrc?: string
}

export default function ChamberLink({ name, url, logoSrc }: ChamberLinkProps) {
  const initial = (name || '?').trim().charAt(0).toUpperCase()
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><rect width='100%' height='100%' rx='4' fill='#065f46'/><text x='50%' y='56%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='16' fill='white'>${initial}</text></svg>`
  const dataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-90">
      {logoSrc ? (
        <Image src={logoSrc} alt={`${name} logo`} width={28} height={28} className="rounded" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={dataUrl} alt={`${name} placeholder`} width={28} height={28} />
      )}
      <span className="text-green-700 underline">{name}</span>
    </a>
  )
}


