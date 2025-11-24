'use client'

import React from 'react'
import { Star, MessageSquare, ExternalLink } from 'lucide-react'

export default function GoogleReviews() {
  // Google Business Profile review URL
  const googleReviewUrl = "https://maps.app.goo.gl/x9Uop8o7DNMfSufj9"
  const googleBusinessProfileUrl = "https://www.google.com/search?q=Kelly%27s+Appliance+Center+Cotati"

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-2">4.9/5</span>
            <span className="text-gray-600">Based on 100+ Google Reviews</span>
          </div>
        </div>

        {/* Google Business Profile Cards - Similar to K2 implementation */}
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

        {/* Note about reviews */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">
            To see all reviews, visit our Google Business Profile
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
      </div>
    </section>
  )
}


