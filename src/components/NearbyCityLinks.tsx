import Link from 'next/link'
import { counties } from '@/lib/locations'

export default function NearbyCityLinks({ currentSlug, limit = 4 }: { currentSlug: string; limit?: number }) {
  const all = Object.values(counties)
  const county = all.find(c => c.cities.some(city => city.slug === currentSlug))
  if (!county) return null
  const sameCounty = county.cities.filter(c => c.slug !== currentSlug)
  // Small counties (Napa has one city) would otherwise render an empty box, so
  // top up with cities from the rest of the service area.
  const toppedUp = sameCounty.length < limit
  const nearby = toppedUp
    ? [...sameCounty, ...all.filter(c => c.slug !== county.slug).flatMap(c => c.cities)].slice(0, limit)
    : sameCounty.slice(0, limit)
  const heading = toppedUp ? 'Nearby Cities We Serve' : `Nearby Cities in ${county.name}`

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-3">{heading}</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {nearby.map((c) => (
          <li key={c.slug}>
            <Link href={`/service-locations/${c.slug}`} className="text-green-700 underline">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


