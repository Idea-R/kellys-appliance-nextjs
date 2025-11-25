'use client'

import React, { useEffect, useState } from 'react'
import { Star, MessageSquare, ExternalLink, Quote } from 'lucide-react'
import type { ReviewsData, Review } from '@/types/reviews'
import CardSwap from '@/components/CardSwap'
import { Card } from '@/components/CardSwap'

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Google Business Profile review URL
  const googleReviewUrl = "https://maps.app.goo.gl/x9Uop8o7DNMfSufj9"
  const googleBusinessProfileUrl = "https://www.google.com/search?q=Kelly%27s+Appliance+Center+Cotati"

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch reviews')
        }
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
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // Gold stars for dark theme
  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`${sizeClass} fill-current ${i < rating ? 'text-amber-400' : 'text-gray-600'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    )
  }

  // Skeleton loader for reviews
  const ReviewSkeleton = () => (
    <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl border border-green-600/30 p-6 h-full animate-pulse">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-green-700/50 rounded-full" />
        <div className="flex-1">
          <div className="h-5 bg-green-700/50 rounded w-32 mb-2" />
          <div className="h-4 bg-green-700/50 rounded w-24" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-green-700/50 rounded w-full" />
        <div className="h-4 bg-green-700/50 rounded w-5/6" />
        <div className="h-4 bg-green-700/50 rounded w-4/6" />
      </div>
    </div>
  )

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden" style={{ minHeight: '700px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          
          {loading ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              <div className="flex">
                {renderStars(5, 'lg')}
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">Loading...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              <div className="flex">
                {renderStars(5, 'lg')}
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 text-sm md:text-base">Based on 100+ Google Reviews</span>
            </div>
          ) : data ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
              <div className="flex">
                {renderStars(Math.round(data.rating), 'lg')}
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-900">{data.rating.toFixed(1)}/5</span>
              <span className="text-gray-600 text-sm md:text-base">Based on {data.count} Google Reviews</span>
            </div>
          ) : null}
        </div>

        {/* Reviews Display */}
        {loading ? (
          <div className="max-w-4xl mx-auto mb-8" style={{ minHeight: '420px', height: '420px' }}>
            <div className="p-4 md:p-6 h-full">
              <ReviewSkeleton />
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
            {/* CardSwap Reviews Display - Dark Theme */}
            <div 
              className="max-w-4xl mx-auto mb-8 px-2 md:px-0" 
              style={{ minHeight: '420px', height: '420px' }}
            >
              <CardSwap
                cardDistance={50}
                verticalDistance={50}
                mobileCardDistance={15}
                mobileVerticalDistance={25}
                delay={6000}
                pauseOnHover={true}
              >
                {data.reviews.map((review: Review, index: number) => (
                  <Card key={index}>
                    <article 
                      className="bg-gradient-to-br from-green-800 via-green-850 to-green-900 
                        rounded-2xl border border-green-500/20 
                        p-5 md:p-8 h-full flex flex-col
                        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                        relative overflow-hidden"
                    >
                      {/* Decorative top accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400" />
                      
                      {/* Quote icon */}
                      <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-green-600/30" />
                      
                      {/* Header with avatar and info */}
                      <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 relative z-10">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg ring-2 ring-green-400/30">
                            <span className="text-green-900 font-bold text-lg md:text-xl">
                              {review.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-white text-base md:text-lg truncate">{review.author}</h4>
                            {/* Google verified badge */}
                            <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(review.rating, 'sm')}
                            <span className="text-green-300/70 text-xs md:text-sm">Google Review</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Review text */}
                      <div className="flex-1 relative z-10 overflow-hidden">
                        <p className="text-green-50/90 leading-relaxed text-sm md:text-base line-clamp-6 md:line-clamp-5">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </div>
                      
                      {/* Footer with timestamp */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-green-600/30 relative z-10">
                        {review.relativeTime && (
                          <p className="text-green-300/60 text-xs md:text-sm">{review.relativeTime}</p>
                        )}
                        <a 
                          href={googleReviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 text-xs md:text-sm font-medium transition-colors flex items-center gap-1"
                        >
                          View on Google
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </article>
                  </Card>
                ))}
              </CardSwap>
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Google Business Profile</h3>
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


