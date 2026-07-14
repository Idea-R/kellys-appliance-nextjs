import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'How Long Do Major Appliances Last? A Lifespan Guide by Type',
  description: 'How long does a refrigerator, washer, dryer, dishwasher, or oven really last? Average lifespans by appliance, what shortens them, and how to get more years out of yours.',
  alternates: {
    canonical: '/blog/how-long-do-major-appliances-last',
  },
  openGraph: {
    title: 'How Long Do Major Appliances Last? A Lifespan Guide by Type',
    description: 'Average lifespans by appliance, what shortens them, and how to get more years out of yours.',
    url: 'https://kellysappliancerepair.com/blog/how-long-do-major-appliances-last',
    type: 'article' as const,
  },
};

export default function ApplianceLifespanPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/how-long-do-major-appliances-last', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How Long Do Major Appliances Last? A Lifespan Guide by Type",
            "description": "Average lifespans by appliance, what shortens them, and how to get more years out of yours.",
            "datePublished": "2026-06-16",
            "dateModified": "2026-06-16",
            "author": {
              "@type": "Person",
              "@id": "https://kellysappliancerepair.com/about-us/our-team#mark-kelly",
              "name": "Mark Kelly",
              "jobTitle": "Owner",
              "url": "https://kellysappliancerepair.com/about-us/our-team"
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
              "@id": "https://kellysappliancerepair.com/blog/how-long-do-major-appliances-last"
            },
            "image": "https://kellysappliancerepair.com/images/fridge-stacked-oven.webp",
            "articleSection": "Consumer Tips",
            "wordCount": 1400
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does a refrigerator last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most refrigerators last 10 to 15 years. Top and bottom freezer models tend to run longer than side-by-side and built-in units with more electronics. Keeping the condenser coils clean and the door seals tight is the single biggest thing you can do to reach the high end of that range."
                }
              },
              {
                "@type": "Question",
                "name": "How many years should a washer and dryer last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Washing machines and dryers both average 10 to 13 years. Overloading is the most common thing that cuts that short on washers, and a clogged vent does it on dryers. A dryer that takes two cycles to dry a load is usually a vent or airflow problem, not the end of the machine's life."
                }
              },
              {
                "@type": "Question",
                "name": "Is a 12-year-old appliance too old to repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Not automatically. A 12-year-old appliance is near the end of its average range, so it depends on the repair. A single common part on an otherwise healthy unit is usually worth fixing. Multiple major failures at once, or a repair that costs more than half the price of a new one, is the point where replacement starts to make more sense."
                }
              },
              {
                "@type": "Question",
                "name": "What shortens the lifespan of home appliances the most?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Three things: hard or well water (scale buildup in dishwashers, washers, and water systems), overloading and overuse, and skipped maintenance like dirty coils, clogged vents, and ignored filters. Power surges during outages are a fourth factor that's common in our area. All four are largely preventable."
                }
              },
              {
                "@type": "Question",
                "name": "Does regular maintenance actually extend appliance life?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, measurably. Cleaning refrigerator coils, descaling a dishwasher, clearing a dryer vent, and not overloading the washer can add years to each appliance and prevent the most common breakdowns. A little upkeep is far cheaper than an early replacement."
                }
              }
            ]
          })
        }}
      />
      <Breadcrumbs items={breadcrumbs} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/blog" className="text-green-200 hover:text-white mb-4 inline-block">
              &larr; Back to Blog
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              How Long Do Major Appliances Last? A Lifespan Guide by Type
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 16, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>7 min read</span>
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
              When an appliance starts acting up, the first question is usually &quot;how old is this thing, and is it near the end?&quot; Knowing the average lifespan helps you decide whether you&apos;re dealing with a normal repair or an appliance that&apos;s genuinely worn out.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here are the averages we see hold up after 50 years of repairing appliances in Sonoma, Marin, and Napa counties, plus what pushes an appliance to the short end of the range and how to get it to the long end.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/fridge-stacked-oven.webp"
                alt="A built-in refrigerator and wall oven, two of the longest-lasting major appliances in a home"
                width={800}
                height={620}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Average Lifespans at a Glance</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Refrigerator:</strong> 10 to 15 years</li>
              <li><strong>Oven / range:</strong> 13 to 15 years (often longer)</li>
              <li><strong>Washing machine:</strong> 10 to 13 years</li>
              <li><strong>Dryer:</strong> 10 to 13 years</li>
              <li><strong>Dishwasher:</strong> 9 to 12 years</li>
              <li><strong>Microwave:</strong> 8 to 10 years</li>
              <li><strong>Garbage disposal:</strong> 10 to 12 years</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Premium and built-in units (Sub-Zero, Wolf, Thermador, Viking) routinely outlast these averages because they&apos;re built to be serviced. A 20-year-old Sub-Zero that needs a part is normal and worth fixing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refrigerators: 10 to 15 Years</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Simpler designs last longer. A basic top-freezer fridge often runs 15-plus years, while a feature-heavy side-by-side or a built-in with ice, water, and a screen has more parts that can fail. The killers are dirty condenser coils (the compressor runs hot and works harder) and worn door seals. Both are cheap to address and both, ignored, take years off the appliance.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ovens and Ranges: 13 to 15 Years</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Ovens are some of the longest-lived appliances because the core heating components are simple and replaceable. What ages them is the electronics: control boards and touch panels. The other quiet killer is the self-clean cycle, which runs the cavity past 900°F and stresses every component. We see more ovens come in right after a self-clean than at any other time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Washers and Dryers: 10 to 13 Years</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Washers are most often shortened by overloading, which strains the bearings, suspension, and motor. Front-loaders also need their door gaskets kept dry and clean or they grow mold and fail early.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Dryers usually outlast their reputation if the vent is kept clear. A dryer that takes two cycles to dry a load is almost never worn out. It&apos;s a clogged vent or airflow problem. If that sounds familiar, our guide on <Link href="/blog/why-is-my-dryer-taking-so-long-to-dry-clothes" className="text-green-600 hover:text-green-700">why a dryer takes so long</Link> walks through it.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/appliance-repair-technician.webp"
                alt="A Kelly's Appliance Center technician servicing an appliance to extend its lifespan"
                width={800}
                height={534}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dishwashers: 9 to 12 Years</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Dishwashers have the shortest average life of the major appliances, and hard water is the main reason here in wine country. Scale builds up on the spray arms, the heating element, and the valves. Bosch and a few others tend to run on the longer end. Cleaning the filter regularly and running an occasional descaling cycle makes a real difference.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Shortens Appliance Life (And How to Stop It)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Four things take years off appliances, and all four are largely in your control:
            </p>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Hard or well water:</strong> common in Sonoma and Napa. Scale wears out dishwashers, washers, and water systems. A softener and simple descaling help.</li>
              <li><strong>Overloading and overuse:</strong> strains motors, bearings, and suspensions. Run full but not stuffed loads.</li>
              <li><strong>Skipped maintenance:</strong> dirty coils, clogged vents, ignored filters. The cheapest years you can buy.</li>
              <li><strong>Power surges:</strong> outages and fire-season surges are hard on control boards. Surge protection is cheap insurance.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The simplest way to hit the long end of every range above is a light maintenance routine. We laid one out in <Link href="/blog/how-often-should-you-service-your-home-appliances" className="text-green-600 hover:text-green-700">how often to service your appliances</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When Age Means It&apos;s Time</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Lifespan is only half the decision. The other half is cost. An appliance near the end of its range that needs one common part is usually worth fixing. One that needs multiple major components, or a repair worth more than half the price of a new unit, is where replacement makes sense. We broke the full math down in our <Link href="/blog/appliance-repair-or-replace-sonoma-county-cost-guide" className="text-green-600 hover:text-green-700">repair or replace cost guide</Link>.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Not sure how old yours is? The model and serial tags tell you, and we have a <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700">quick guide to finding them</Link>.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you want a straight answer on whether an aging appliance is worth keeping, that&apos;s what we&apos;re here for. Kelly&apos;s Appliance Center has been keeping appliances running across the North Bay since 1975. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a diagnostic</a> or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/blog/appliance-repair-or-replace-sonoma-county-cost-guide"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Appliance Repair or Replace? A 2026 Sonoma County Cost Guide
              </h3>
              <p className="text-gray-600 text-sm">
                Once you know the age, this is how to decide whether to fix it or replace it. The 50% rule and real costs.
              </p>
            </Link>
            <Link
              href="/blog/how-often-should-you-service-your-home-appliances"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How Often Should You Service Your Appliances?
              </h3>
              <p className="text-gray-600 text-sm">
                The maintenance schedule that gets every appliance to the long end of its lifespan.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wondering If Your Appliance Has Years Left?
          </h2>
          <p className="text-gray-600 mb-8">
            Get an honest read from a Diamond Certified, factory-authorized team. Family-owned in the North Bay since 1975.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule-prep"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              data-analytics-label="book_appointment"
            >
              Request Appointment Online
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
