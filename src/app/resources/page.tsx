import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import {
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  NewspaperIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import { blogPosts } from '@/data/blogPosts';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Resources - Appliance Repair Tips, Guides & Tools',
  description:
    'Appliance repair tips, maintenance guides, a model-number finder, pricing, and news from Kelly\'s Appliance Center. 50+ years of expertise serving Sonoma, Marin, and Napa counties.',
  alternates: {
    canonical: '/resources',
  },
};

const tools = [
  {
    title: 'Find Your Model Number',
    description: 'A quick visual guide to locating the model and serial number on any appliance, so your call gets diagnosed faster.',
    href: '/resources/where-is-my-model-number',
    cta: 'Open the guide',
    Icon: MagnifyingGlassIcon,
  },
  {
    title: 'Repair Pricing',
    description: 'How our flat-rate diagnosis and repair pricing works, with no surprise charges and a 90-day money-back guarantee.',
    href: '/pricing',
    cta: 'See pricing',
    Icon: CurrencyDollarIcon,
  },
  {
    title: 'Diamond Certified',
    description: 'Watch our Diamond Certified expert videos and see the independent rating we have earned from hundreds of verified surveys.',
    href: '/diamond-certified',
    cta: 'Watch and verify',
    Icon: CheckBadgeIcon,
  },
];

const appliances = [
  { name: 'Refrigerator', href: '/services/refrigerator-repair' },
  { name: 'Oven & Range', href: '/services/oven-repair' },
  { name: 'Washer & Dryer', href: '/services/washer-dryer-repair' },
  { name: 'Dishwasher', href: '/services/dishwasher-repair' },
  { name: 'Parts', href: '/services/parts' },
];

const press = [
  {
    outlet: 'Bay Area Business Magazine',
    blurb: 'A feature on Kelly\'s Appliance Center, our team, and our approach to honest, factory-authorized repair.',
    href: 'https://babizmag.com/post/214472',
  },
];

export default function ResourcesPage() {
  const breadcrumbs = generateBreadcrumbs('/resources', metadata.title);
  const latest = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 9);
  const fmtDate = (d: string) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Layout>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Appliance Repair Resources</h1>
              <p className="text-xl mb-8 text-green-50">
                Practical guides, repair tips, and tools from our technicians, built on 50+ years of fixing appliances across Sonoma, Marin, and Napa counties.
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
                  href="/schedule-prep"
                  className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Request Appointment
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/resources-opt.webp"
                alt="Kelly's Appliance technician reviewing repair resources"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Helpful Tools</h2>
            <p className="text-lg text-gray-600">Start here. These make your repair faster and your decision easier.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map(({ title, description, href, cta, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-700 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <span className="inline-flex items-center text-green-700 font-medium group-hover:text-green-800">
                  {cta}
                  <ArrowRightIcon className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by appliance */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Appliance</h2>
            <div className="flex flex-wrap gap-3">
              {appliances.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-300 text-gray-800 font-medium hover:border-green-500 hover:text-green-700 transition-colors"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest repair tips & guides */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Repair Tips & Guides</h2>
            <p className="text-lg text-gray-600">Straight from our technicians. Practical fixes, warning signs, and when to call a pro.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latest.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6 flex flex-col flex-1">
                  <span className="inline-flex self-start items-center text-xs font-semibold uppercase tracking-wide text-green-700 bg-green-100 px-2.5 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-green-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100">
                    <span>{fmtDate(post.date)} &middot; {post.readTime}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-green-700 hover:text-green-800 font-medium"
                      aria-label={`Read more: ${post.title}`}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </section>

      {/* In the news */}
      <section className="py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <NewspaperIcon className="h-7 w-7 text-green-700" />
            <h2 className="text-2xl font-bold text-gray-900">In The News</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {press.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition-all"
              >
                <div className="text-sm font-semibold uppercase tracking-wide text-green-700 mb-2">{item.outlet}</div>
                <p className="text-gray-700 mb-4">{item.blurb}</p>
                <span className="inline-flex items-center text-green-700 font-medium group-hover:text-green-800">
                  Read the feature
                  <ArrowRightIcon className="h-4 w-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Appliance Repair?</h2>
          <p className="text-xl mb-8 text-green-50">Our factory-authorized technicians are ready to help across Sonoma, Marin, and Napa counties.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="/schedule-prep"
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
