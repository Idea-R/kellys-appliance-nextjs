import { reviewSummary, featuredReviews } from '@/data/reviews'

/**
 * Server-rendered block of real Google reviews plus the rating summary.
 * The reviews are in the static HTML, so they visibly back the AggregateRating
 * and Review structured data emitted alongside them (policy-compliant stars).
 */
export default function FeaturedReviews({
  heading = 'What Your Neighbors Say',
}: {
  heading?: string
}) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{heading}</h2>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{reviewSummary.rating.toFixed(1)}</span>
            {' '}average from{' '}
            <span className="font-semibold text-gray-900">{reviewSummary.count}</span>
            {' '}Google reviews
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredReviews.map((r) => (
            <figure
              key={r.author}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col"
            >
              <div className="text-amber-400 text-lg" aria-label={`${r.rating} out of 5 stars`}>
                {'★'.repeat(r.rating)}
              </div>
              <blockquote className="text-gray-700 mt-3 flex-1">{r.text}</blockquote>
              <figcaption className="mt-4">
                <span className="text-sm font-semibold text-gray-900">{r.author}</span>
                <span className="block text-xs text-gray-500">via Google &middot; {r.relativeTime}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
