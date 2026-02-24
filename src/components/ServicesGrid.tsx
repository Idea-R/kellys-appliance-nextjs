import Link from 'next/link'
import { services } from '@/data/services'

type Props = {
  cityName: string
}

export default function ServicesGrid({ cityName }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Services in {cityName}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              data-analytics-label={`service_card_${service.slug}`}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">{service.shortDescription}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
