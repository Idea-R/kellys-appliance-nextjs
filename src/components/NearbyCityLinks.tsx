import Link from 'next/link'
import { counties } from '@/lib/locations'

export default function NearbyCityLinks({ currentSlug, limit = 4 }: { currentSlug: string; limit?: number }) {
  const all = Object.values(counties)
  const county = all.find(c => c.cities.some(city => city.slug === currentSlug))
  if (!county) return null
  const nearby = county.cities.filter(c => c.slug !== currentSlug).slice(0, limit)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-3">Nearby Cities in {county.name}</h3>
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


