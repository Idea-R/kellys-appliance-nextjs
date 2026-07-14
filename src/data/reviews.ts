/**
 * Single source of truth for Google review aggregate numbers used in
 * structured data (JSON-LD) across the site.
 *
 * These feed AggregateRating schema on the LocalBusiness entity and the
 * homepage ReviewJsonLd. They are baked at build time (static export), so
 * they need a periodic refresh as the real Google count grows.
 *
 * TO REFRESH: fetch the live production endpoint, which reads the real
 * numbers from the Google Places API, and update the two values below:
 *   GET https://kellysappliancerepair.com/api/reviews  ->  { rating, count }
 * Last verified against that endpoint on the date in `lastUpdated`.
 *
 * Keep these honest and current. Structured-data ratings must match the
 * real, publicly verifiable Google rating, or the rich result can be lost.
 */
export const reviewSummary = {
  /** Average star rating from Google (1 to 5). */
  rating: 4.9,
  /** Total Google review count. */
  count: 155,
  /** ISO date these numbers were last verified against the live endpoint. */
  lastUpdated: '2026-07-12',
} as const;

/** AggregateRating JSON-LD object, ready to spread into any schema node. */
export const aggregateRatingJsonLd = {
  '@type': 'AggregateRating',
  ratingValue: reviewSummary.rating.toFixed(1),
  reviewCount: String(reviewSummary.count),
  bestRating: '5',
  worstRating: '1',
} as const;

export interface FeaturedReview {
  author: string
  rating: number
  relativeTime: string
  text: string
}

/**
 * Real, verbatim 5-star Google reviews used for the visible on-page reviews
 * block and the Review structured data that backs the star rating. These are
 * genuine customer reviews (lightly whitespace-normalized only), so the
 * AggregateRating is honestly supported by content shown on the page.
 */
export const featuredReviews: FeaturedReview[] = [
  {
    author: 'Chris Backer',
    rating: 5,
    relativeTime: '3 months ago',
    text: `I had heard many great things about Kelly's and they lived up to the expectations. Their technician James was super helpful with his recommendations on replacing some parts on my Whirlpool Dryer (~10 years old) that hopefully keeps it going for years on end. I was educated on many parts too. I would highly recommend them. I am located in Marin County.`,
  },
  {
    author: 'pjs3456',
    rating: 5,
    relativeTime: 'a month ago',
    text: `Our dryer belt broke. We got Kelly's Appliance from the Diamond Certified Directory. The woman on the phone was very helpful and scheduled an appointment immediately. James came out and replaced the belt in minutes. We're very happy with the service. He explained everything and was very courteous. We will definitely use Kelly's Appliance again.`,
  },
  {
    author: 'Javier Prescott',
    rating: 5,
    relativeTime: '6 months ago',
    text: `Bianca from Kelly's Appliance did a warranty claim service for me today. As far as a warranty claim goes for a washing machine, if I could leave more than five stars, I would. Bianca showed up within her service window, was able to diagnose the issue, had the replacement part on hand, installed the new part, tested the unit, and it ran flawlessly all within an hour. She was thoroughly knowledgeable about the unit and completed the repair of the cracked hub drive effortlessly.`,
  },
]
