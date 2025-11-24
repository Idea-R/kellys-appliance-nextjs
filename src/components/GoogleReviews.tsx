import React from 'react'

export default function GoogleReviews() {
  // Google Business Profile embed URL - shows business location with reviews
  // Using Google Maps embed with Place ID to display business profile and reviews
  const googleBusinessEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99154.73935582353!2d-122.8697!3d38.5816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808442c56db4e3a5%3A0x3cfe9df7b8bf0eed!2sKelly%27s%20Appliance%20Center!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"

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

        {/* Google Business Profile Embed - Shows business location and reviews */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8" style={{ minHeight: '600px' }}>
          <iframe
            src={googleBusinessEmbedUrl}
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kelly's Appliance Center - Google Business Profile Reviews"
            className="w-full"
          />
        </div>

        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/x9Uop8o7DNMfSufj9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Read All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}


