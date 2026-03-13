'use client'

import React, { useEffect, useState } from 'react'
import { Star, MessageSquare, ExternalLink } from 'lucide-react'
import { ReactGoogleReviews } from 'react-google-reviews'
import 'react-google-reviews/dist/index.css'
import type { ReviewsData, Review } from '@/types/reviews'

// Map our API data to the GoogleReview format expected by react-google-reviews
function mapToGoogleReviews(reviews: Review[]) {
  return reviews.map((r, i) => ({
    reviewId: String(i),
    reviewer: {
      profilePhotoUrl: r.photoUrl || '',
      displayName: r.author,
      isAnonymous: false,
    },
    starRating: r.rating,
    comment: r.text,
    createTime: r.publishTime || null,
    updateTime: null,
  }))
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const googleReviewUrl = 'https://maps.app.goo.gl/x9Uop8o7DNMfSufj9'
  const googleBusinessProfileUrl =
    'https://www.google.com/search?q=Kelly%27s+Appliance+Center+Cotati'

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch reviews')
        return res.json()
      })
      .then((json) => {
        if (json.error) {
          setError(json.error)
        } else {
          setData(json as ReviewsData)
        }
      })
      .catch((err) => {
        console.error('Error fetching reviews:', err)
        setError('Unable to load reviews at this time')
      })
      .finally(() => setLoading(false))
  }, [])

  // Gold stars helper for header
  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 fill-current ${i < rating ? 'text-amber-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>

          {loading ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              {renderStars(5)}
              <span className="text-xl md:text-2xl font-bold text-gray-900">Loading...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              {renderStars(5)}
              <span className="text-xl md:text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 text-sm md:text-base">
                Based on 100+ Google Reviews
              </span>
            </div>
          ) : data ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              {renderStars(Math.round(data.rating))}
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                {data.rating.toFixed(1)}/5
              </span>
              <span className="text-gray-600 text-sm md:text-base">
                Based on {data.count} Google Reviews
              </span>
            </div>
          ) : null}
        </div>

        {/* Reviews Display */}
        {loading ? (
          <div className="max-w-5xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                    <div className="h-3 bg-gray-200 rounded w-4/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <p className="text-sm text-gray-600 mb-4">
              Visit our Google Business Profile to see all reviews
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              Read All Reviews on Google
            </a>
          </div>
        ) : data && data.reviews && data.reviews.length > 0 ? (
          <>
            {/* React Google Reviews Carousel */}
            <div className="max-w-5xl mx-auto mb-12">
              <ReactGoogleReviews
                layout="carousel"
                reviews={mapToGoogleReviews(data.reviews)}
                maxItems={3}
                carouselSpeed={5000}
                carouselAutoplay={true}
                nameDisplay="fullNames"
                logoVariant="icon"
                dateDisplay="relative"
                reviewVariant="card"
                theme="light"
                maxCharacters={250}
                showDots={true}
              />
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Write a Review Card */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4 p-4 bg-green-600 rounded-full inline-flex">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Google Reviews</h3>
                <p className="text-gray-700 mb-6">
                  Share your experience and help others find quality service
                </p>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Write a Review
                </a>
              </div>

              {/* View Business Profile Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className="mb-4 p-4 bg-blue-600 rounded-full inline-flex">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Google Business Profile
                </h3>
                <p className="text-gray-700 mb-6">
                  View our hours, location, and verified business information
                </p>
                <a
                  href={googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View on Google
                </a>
              </div>
            </div>

            {/* Link to all reviews */}
            <div className="text-center">
              <a
                href={googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Star className="w-5 h-5 mr-2" />
                Read All {data.count} Reviews on Google
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No reviews available at this time</p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <Star className="w-5 h-5 mr-2" />
              Visit Google Business Profile
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
