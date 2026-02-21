import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Why You Should Call a Professional to Repair Your Appliances',
  description: 'Top reasons why you should call a professional for appliance repairs to protect you, your family and your wallet',
  alternates: {
    canonical: '/blog/why-you-should-call-a-professional-to-repair-your-appliances',
  },
};

export default function BlogPost() {
  const breadcrumbs = generateBreadcrumbs('/blog/why-you-should-call-a-professional-to-repair-your-appliances', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Why You Should Call a Professional to Repair Your Appliances",
            "description": "Top reasons why you should call a professional for appliance repairs to protect you, your family and your wallet",
            "datePublished": "2024-11-20",
            "dateModified": "2024-11-20",
            "author": {
              "@type": "Organization",
              "name": "Kelly's Appliance Center",
              "url": "https://kellysappliancerepair.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kelly's Appliance Center",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kellysappliancerepair.com/images/small_logo.jpg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://kellysappliancerepair.com/blog/why-you-should-call-a-professional-to-repair-your-appliances"
            },
            "articleSection": "Professional Service",
            "wordCount": 700
          })
        }}
      />
      <Breadcrumbs items={breadcrumbs} />

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why You Should Call a Professional to Repair Your Appliances
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <div className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              <span>Kelly's Appliance Team</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>November 20, 2024</span>
            </div>
            <span>•</span>
            <span>2 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-8">
            When your appliances break down, it's tempting to tackle the repairs yourself or rely on a friend with a toolbox. However, while DIY repairs may seem like a cost-effective solution, they can lead to bigger problems down the road. Here are the top reasons you should call a professional for appliance repairs:
          </p>

          <h2>1. Expertise and Experience</h2>
          <p>
            Professional <Link href="/about-us/our-team" className="text-green-600 hover:text-green-700">repair technicians</Link> are trained to diagnose and fix a wide range of appliance issues. They have the knowledge to work on all types of appliances and brands, ensuring the job is done right the first time. This expertise can save you from trial-and-error fixes that could worsen the problem.
          </p>

          <h2>2. Proper Tools, Parts and Equipment</h2>
          <p>
            Appliance repair often requires specialized tools that most people don't have in their homes. Professionals come equipped with the right parts and tools to handle complex repairs safely and efficiently, eliminating the need for you to invest in expensive equipment.
          </p>

          <h2>3. Safety First</h2>
          <p>
            Appliance repairs can pose safety risks, especially when dealing with electrical components, gas connections, or heavy machinery. Professionals are trained to handle these hazards and follow strict safety protocols, reducing the risk of injury or damage to your home.
          </p>

          <h2>4. Save Time and Hassle</h2>
          <p>
            Attempting to repair an appliance yourself can be time-consuming, especially if you're unfamiliar with the process. Call a professional who can quickly identify the issue and resolve it, freeing up your time for other priorities.
          </p>

          <h2>5. Warranty Protection</h2>
          <p>
            Many appliances come with warranties that can be voided if repairs are attempted by an unlicensed individual. Calling a professional ensures your warranty remains intact, protecting your investment in the long run.
          </p>

          <h2>6. Long-Term Savings</h2>
          <p>
            While a DIY repair might save money upfront, mistakes can lead to costlier repairs, or even a full replacement, down the road. Professional repairs are designed to last and <Link href="/pricing" className="text-green-600 hover:text-green-700">reasonably priced</Link>, helping you avoid repeated breakdowns and expenses.
          </p>

          <h2>7. Comprehensive Diagnoses</h2>
          <p>
            A professional technician doesn't just fix the immediate problem; they also inspect your appliance for other potential issues. This preventative approach can extend the lifespan of your appliance and save you from future headaches.
          </p>

          <h2>When to Call a Pro</h2>
          <p>
            If your appliance isn't working as it should, resist the urge to grab a wrench. Instead, call a <Link href="/about-us" className="text-green-600 hover:text-green-700">professional repair technician</Link> for expert help. They'll ensure your appliance is back in top shape quickly and safely, so you can count on reliable performance going forward.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="font-semibold text-green-800 mb-2">
              Need help with a broken appliance?
            </p>
            <p className="text-green-700 mb-4">
              Contact us today for fast, professional service you can trust!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call {companyInfo.phone}
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-green-300"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/what-is-the-best-way-to-avoid-appliance-repair-scams" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  What is the Best Way to Avoid Appliance Repair Scams?
                </h4>
                <p className="text-gray-600 text-sm">
                  Learn how to identify trustworthy repair services and avoid getting scammed.
                </p>
              </div>
            </Link>
            <Link href="/blog/common-dishwasher-problems-and-how-to-prevent-them" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Common Dishwasher Problems and How to Prevent Them
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover the most common dishwasher issues and prevention tips.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
