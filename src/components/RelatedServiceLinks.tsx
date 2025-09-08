import Link from 'next/link'

const services = [
  { name: 'Refrigerator Repair', slug: 'refrigerator-repair' },
  { name: 'Oven / Range Repair', slug: 'oven-repair' },
  { name: 'Washer & Dryer Repair', slug: 'washer-dryer-repair' },
  { name: 'Dishwasher Repair', slug: 'dishwasher-repair' },
]

export default function RelatedServiceLinks() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-3">Related Services</h3>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {services.map((s) => (
          <li key={s.slug}>
            <Link href={`/services/${s.slug}`} className="text-green-700 underline">
              {s.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}


