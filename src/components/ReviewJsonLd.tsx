import React from 'react'

interface ReviewItem {
  author: string
  text: string
  rating: number
}

interface ReviewJsonLdProps {
  rating: number
  count: number
  reviews: ReviewItem[]
}

/**
 * Server component that injects review structured data (JSON-LD).
 * Only use on pages where reviews are visibly displayed (e.g. homepage).
 * References the main business entity via @id so Google links them.
 */
export default function ReviewJsonLd({ rating, count, reviews }: ReviewJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kellysappliancerepair.com/#business',
    'name': "Kelly's Appliance Center",
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': rating.toFixed(1),
      'reviewCount': String(count),
      'bestRating': '5',
      'worstRating': '1',
    },
    'review': reviews.slice(0, 5).map((r) => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': r.author,
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': String(r.rating),
        'bestRating': '5',
        'worstRating': '1',
      },
      'reviewBody': r.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
