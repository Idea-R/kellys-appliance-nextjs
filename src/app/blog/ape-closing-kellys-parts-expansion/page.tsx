import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Layout from '@/components/Layout'
import Breadcrumbs from '@/components/Breadcrumbs'
import { generateBreadcrumbs } from '@/lib/breadcrumbs'

export const metadata = {
  title: "APE Appliance Parts Is Closing. Kelly's Expands Parts Department",
  description:
    "After 50 years on Petaluma Hill Road, APE Appliance Parts Equipment is closing. Kelly's Appliance Center is growing our parts department to help fill the gap for Sonoma County homeowners and DIYers.",
  alternates: {
    canonical: '/blog/ape-closing-kellys-parts-expansion',
  },
  openGraph: {
    title: "APE Appliance Parts Is Closing. Kelly's Expands Parts Department",
    description: "APE Appliance Parts Equipment is closing after 50 years. Kelly's Appliance Center is expanding our parts department for Sonoma County homeowners and DIYers.",
    url: 'https://kellysappliancerepair.com/blog/ape-closing-kellys-parts-expansion',
    type: 'article' as const,
  },
}

export default function ApeClosingBlogPage() {
  const breadcrumbs = generateBreadcrumbs(
    '/blog/ape-closing-kellys-parts-expansion',
    metadata.title,
  )

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline:
              "APE Appliance Parts Is Closing. Kelly's Expands Parts Department",
            description:
              "After 50 years on Petaluma Hill Road, APE Appliance Parts Equipment is closing. Kelly's Appliance Center is growing our parts department to help fill the gap for Sonoma County homeowners and DIYers.",
            datePublished: '2026-03-12',
            dateModified: '2026-03-12',
            author: {
              '@type': 'Organization',
              name: "Kelly's Appliance Center",
              url: 'https://kellysappliancerepair.com',
            },
            publisher: {
              '@type': 'Organization',
              name: "Kelly's Appliance Center",
              logo: {
                '@type': 'ImageObject',
                url: 'https://kellysappliancerepair.com/images/small_logo.jpg',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id':
                'https://kellysappliancerepair.com/blog/ape-closing-kellys-parts-expansion',
            },
            image:
              'https://kellysappliancerepair.com/images/Blogs/APE.jpg',
            articleSection: 'Community',
            wordCount: 900,
          }),
        }}
      />
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              href="/blog"
              className="text-green-200 hover:text-white mb-4 inline-block"
            >
              &larr; Back to Blog
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              APE Appliance Parts Is Closing. Kelly&apos;s Is Stepping Up.
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>March 12, 2026</span>
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
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-green max-w-none">
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you&apos;ve lived in Sonoma County for any amount of time and ever needed an appliance part, you&apos;ve
              probably been to APE, Appliance Parts Equipment on Petaluma Hill Road. After 50 years in business,
              they&apos;re closing their doors. And honestly, it hits hard.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              We stopped by to pay our respects this week. Cecil Perkins started APE back in the mid-&apos;70s and built it
              into the go-to spot for appliance parts in the county. Roger Briggs carried that tradition forward for years.
              And most recently, Dylan kept it going. Same old-school service where you could walk in,
              describe what was broken, and walk out with the right part. No guessing. No ordering the wrong thing off the
              internet. Just people who knew appliances, helping other people fix theirs.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/APE.jpg"
                alt="APE Appliance Parts Equipment storefront on Petaluma Hill Road"
                width={800}
                height={600}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 mt-3 italic">
                APE Appliance Parts Equipment, Petaluma Hill Road. 50 years serving Sonoma County.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What This Means for Sonoma County
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              APE was one of the last local spots where a homeowner, a landlord, or a property manager could
              walk in and get a genuine appliance part the same day. Refrigerator water filters. Dryer belts.
              Range igniters. Washer hoses. The stuff that keeps households running. And the kind of
              stuff that&apos;s getting harder to find locally.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              When we posted about it on Facebook, the response was overwhelming. Hundreds of comments. People
              sharing stories about Cecil, about Roger, about walking in with a broken part in their hand and
              walking out ten minutes later with the replacement. That&apos;s the kind of service you don&apos;t
              get from a website with a search bar and a 5-day shipping window.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kelly&apos;s Is Growing Our Parts Department
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              We&apos;ve been in the appliance business since 1974, the same era Cecil started APE. For decades
              we&apos;ve worked side by side, us on the repair side, them on the parts counter. Now that APE is
              closing, we&apos;re expanding our parts department to help fill the gap.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Here&apos;s what that looks like:
            </p>

            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>
                <strong>OEM parts for every major brand.</strong> We source genuine manufacturer parts,
                not generic knockoffs. Samsung, Sub-Zero, GE, Whirlpool, LG, KitchenAid, and more.
              </li>
              <li>
                <strong>We verify compatibility before you buy.</strong> Give us your model number and
                we&apos;ll cross-reference it to make sure you&apos;re getting the right part the first time.
              </li>
              <li>
                <strong>Call us or use the online form.</strong> You can call{' '}
                <a href="tel:7076649702" className="text-green-600 hover:text-green-700">(707) 664-9702</a>{' '}
                or <Link href="/services/parts" className="text-green-600 hover:text-green-700">submit a parts request online</Link>.
                We&apos;ll call you back within one business day with pricing and availability.
              </li>
              <li>
                <strong>Pick up in Cotati or have it shipped.</strong> Whatever works for you.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure What&apos;s Wrong? We Can Help with That Too.
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              One of the best things about APE was that you could describe a symptom and they&apos;d help you
              figure out the part. We do the same thing, and we&apos;ve added a way to do it remotely.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Our <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual service call</Link> is
              a $40, 15-minute video session where one of our technicians looks at your appliance over video and helps
              diagnose the issue. It&apos;s a smart move before ordering parts, especially if you&apos;re not
              100% sure what&apos;s failing. Know what you need before you spend.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Small Businesses Looking Out for Each Other
            </h2>

            <p className="mb-6 text-gray-700 leading-relaxed">
              APE closing is a loss for this community. There&apos;s no sugarcoating that. Cecil and Roger built
              something that mattered to a lot of people, and the response we&apos;ve seen online proves it.
              Hundreds of folks sharing memories and saying thanks. That&apos;s 50 years of showing up and doing
              right by people.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              We can&apos;t replace APE. But we can make sure Sonoma County still has a local place to get
              genuine appliance parts from people who know what they&apos;re talking about. That&apos;s what
              we&apos;re here for. We&apos;ve been doing this for over 50 years ourselves, and we&apos;re not
              going anywhere.
            </p>

            <p className="mb-6 text-gray-700 leading-relaxed">
              Need a part? <Link href="/services/parts" className="text-green-600 hover:text-green-700">Tell us what you need</Link> or
              call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700">(707) 664-9702</a>.
              We&apos;ve got you covered.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog/how-to-tell-if-your-refrigerator-needs-professional-repair"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    How to Tell If Your Refrigerator Needs Professional Repair
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Warning signs that your fridge needs a technician: unusual noises, temperature swings, and frost buildup.
                  </p>
                </div>
              </Link>
              <Link
                href="/blog/why-you-should-call-a-professional-to-repair-your-appliances"
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                    Why You Should Call a Professional to Repair Your Appliances
                  </h4>
                  <p className="text-gray-600 text-sm">
                    When DIY isn&apos;t enough. The risks of doing it yourself and the benefits of calling a pro.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need an Appliance Part?
          </h2>
          <p className="text-gray-600 mb-8">
            Kelly&apos;s Appliance Center sources genuine OEM parts for every major brand.
            Call us or submit a request online. We&apos;ll get back to you with pricing and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services/parts"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Request a Part Online
            </Link>
            <a
              href="tel:7076649702"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Call (707) 664-9702
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
