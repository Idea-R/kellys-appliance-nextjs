import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import NewsletterSignupForm from '@/components/NewsletterSignupForm';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Appliance Repair Tips & Guides',
  description: 'Expert appliance repair tips, maintenance guides, and troubleshooting advice from Kelly\'s Appliance Center professionals.',
  alternates: {
    canonical: '/blog',
  },
};

const categories = ['All', 'Refrigerator Repair', 'Oven Repair', 'Dishwasher Repair', 'Washer Repair', 'Dryer Repair', 'Maintenance', 'Consumer Tips', 'Professional Service', 'Buying Guide'];

export default function BlogPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Appliance Repair Tips & Guides
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert advice and troubleshooting tips from Kelly&apos;s Appliance Center professionals
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Appliance Tips
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest appliance maintenance tips and repair advice delivered to your inbox
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignupForm />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Professional Appliance Repair?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kelly&apos;s Appliance Center has been serving the Bay Area since 1975
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Request Appointment
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-50 transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
