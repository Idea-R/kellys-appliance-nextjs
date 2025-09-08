interface ReferralItem {
  label: string
  href?: string
}

export default function ReferralsGrid({
  title = 'Trusted Local Referrals',
  subtitle = 'County-based recommendations for other trades and services.',
  items,
}: {
  title?: string
  subtitle?: string
  items: ReferralItem[]
}) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-1">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block text-green-700 font-semibold underline">
                  {item.label}
                </a>
              ) : (
                <div className="text-gray-900 font-semibold">{item.label}</div>
              )}
              <div className="text-sm text-gray-600 mt-1">Coming soon</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


