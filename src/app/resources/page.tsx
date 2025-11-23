import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo, getAllPosts } from '@/lib/content';
import { WordPressPost } from '@/types/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Resources - Appliance Repair Tips & Blog | Kelly\'s Appliance Center',
  description: 'Expert appliance repair tips, maintenance guides, and helpful resources from Kelly\'s Appliance Center. Learn how to keep your appliances running efficiently.',
};

export default async function ResourcesPage() {
  const posts = await getAllPosts();
  const breadcrumbs = generateBreadcrumbs('/resources', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Appliance Repair Resources
              </h1>
              <p className="text-xl mb-8">
                Expert tips, maintenance guides, and helpful resources to keep your appliances running efficiently. Learn from our 50+ years of experience in appliance repair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call {companyInfo.phone}
                </a>
                <a
                  href="https://booking.rossware.com/schedule/4588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Appointment
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/resources-opt.webp"
                alt="Appliance Repair Resources"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Diamond Certified CTA */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-10 flex items-center justify-between gap-6 flex-col sm:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Diamond Certified</h2>
              <p className="text-gray-700">See our Diamond Certified profile, videos, and highlights.</p>
            </div>
            <Link href="/diamond-certified" className="inline-flex items-center justify-center bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">View Diamond Certified →</Link>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Repair Tips & Guides
            </h2>
            <p className="text-xl text-gray-600">
              Learn from our expert technicians with practical appliance repair advice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post: WordPressPost) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* In The News */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">In The News</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <Link href="https://babizmag.com/post/214472" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-800 underline">
                Bay Area Business Magazine feature
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Professional Appliance Repair?
          </h2>
          <p className="text-xl mb-8">
            Our certified technicians are ready to help with any appliance repair needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Appointment Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
