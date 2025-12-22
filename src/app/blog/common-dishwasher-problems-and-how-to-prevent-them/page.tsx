import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Common Dishwasher Problems and How to Prevent Them',
  description: 'Discover the most common dishwasher issues and preventive maintenance tips to keep your dishwasher running efficiently.',
};

export default function DishwasherPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/common-dishwasher-problems-and-how-to-prevent-them', metadata.title);

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/blog" className="text-green-200 hover:text-white mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Common Dishwasher Problems and How to Prevent Them
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>May 23, 2025</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>4 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="mb-6 text-gray-800 leading-relaxed">
              Dishwashers are incredibly convenient appliances, but they can develop problems over time. At Kelly&apos;s Appliance Center, we see certain dishwasher issues more frequently than others. Here&apos;s what you need to know about the most common problems and how to prevent them.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Common Dishwasher Problems</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Poor Cleaning Performance</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your dishes aren&apos;t coming out clean, the problem could be clogged spray arms, a dirty filter, or using the wrong detergent. Regular cleaning of spray arms and filters can prevent this issue.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Water Not Draining</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Standing water in your dishwasher is usually caused by a clogged drain hose or garbage disposal. Check these areas first before calling for service.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Dishwasher Won&apos;t Start</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              This could be due to a faulty door latch, control panel issues, or electrical problems. These typically require professional diagnosis and repair.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevention Tips</h2>
            <ul className="list-disc list-inside space-y-3 mb-6 text-gray-800">
              <li>Clean the filter monthly</li>
              <li>Scrape dishes before loading</li>
              <li>Use appropriate detergent amounts</li>
              <li>Run hot water at kitchen sink before starting dishwasher</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call the Professionals</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If these basic maintenance steps don&apos;t solve your dishwasher problems, it&apos;s time to call Kelly&apos;s Appliance Center. Our experienced technicians can diagnose and repair more complex issues with pumps, motors, and control systems.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional Dishwasher Repair?
          </h2>
          <p className="text-gray-600 mb-8">
            Kelly&apos;s Appliance Center provides expert dishwasher repair services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Request Appointment
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
