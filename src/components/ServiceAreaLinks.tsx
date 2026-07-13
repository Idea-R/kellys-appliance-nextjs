import Link from 'next/link'
import { counties } from '@/lib/locations'

/**
 * Internal-linking block for service pages. Links to every county and city
 * location page, grouped by county. This passes topical and local authority
 * from the service pages down to the location pages (helping them rank) and
 * gives visitors a fast path to the details for their own town.
 */
export default function ServiceAreaLinks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Areas We Serve</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Factory-authorized appliance repair across Sonoma, Marin, and Napa counties. Find your city for local service details.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(counties).map((county) => (
            <div key={county.slug}>
              <h3 className="font-semibold text-gray-900 mb-3">
                <Link href={`/service-locations/${county.slug}`} className="text-green-700 hover:underline">
                  {county.name}
                </Link>
              </h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {county.cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-locations/${city.slug}`}
                      className="text-sm text-green-700 hover:underline"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
