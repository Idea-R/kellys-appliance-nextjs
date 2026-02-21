import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'How Often Should You Service Your Home Appliances?',
  description: 'A complete maintenance schedule for refrigerators, ovens, washers, dryers, and dishwashers to extend their lifespan and avoid costly breakdowns.',
  alternates: {
    canonical: '/blog/how-often-should-you-service-your-home-appliances',
  },
};

export default function ApplianceMaintenancePage() {
  const breadcrumbs = generateBreadcrumbs('/blog/how-often-should-you-service-your-home-appliances', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "How Often Should You Service Your Home Appliances?",
            "description": "A complete maintenance schedule for refrigerators, ovens, washers, dryers, and dishwashers to extend their lifespan and avoid costly breakdowns.",
            "datePublished": "2026-02-15",
            "dateModified": "2026-02-15",
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
              "@id": "https://kellysappliancerepair.com/blog/how-often-should-you-service-your-home-appliances"
            },
            "image": "https://kellysappliancerepair.com/images/modern-kitchen.webp",
            "articleSection": "Maintenance",
            "wordCount": 1000
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
                "name": "How often should I have my appliances professionally serviced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recommend having your major home appliances professionally serviced at least once a year. Annual inspections allow a qualified technician to catch worn parts, clean internal components, and verify that everything is operating safely and efficiently. Some appliances, like dryers, may benefit from more frequent attention if they see heavy use."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most important appliance maintenance task?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dryer vent cleaning is the single most important appliance maintenance task because of the fire safety risk. Clogged dryer vents are one of the leading causes of house fires in the United States. You should clean the lint trap after every load and have the full vent system professionally cleaned at least once a year."
                }
              },
              {
                "@type": "Question",
                "name": "Can regular maintenance extend my appliance's lifespan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, regular preventive maintenance can extend your appliance's lifespan by 2 to 5 years beyond its expected service life. Routine tasks like cleaning condenser coils, replacing worn seals, inspecting hoses, and clearing drain lines prevent small issues from becoming major failures that shorten the life of the appliance."
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
              How Often Should You Service Your Home Appliances?
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>February 15, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>6 min read</span>
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
              Your home appliances work hard every single day. The refrigerator runs around the clock, the dishwasher tackles meal after meal, and the washer and dryer power through load after load of laundry. With all that use, it&apos;s easy to take these machines for granted, at least until something breaks down and you&apos;re faced with an expensive repair bill or a premature replacement.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The good news? Most major appliance failures are preventable. A consistent maintenance routine can extend the life of your appliances by two to five years, reduce energy costs, and help you avoid inconvenient breakdowns. At <Link href="/" className="text-green-600 hover:text-green-700">Kelly&apos;s Appliance Center</Link>, we&apos;ve been servicing homes across Sonoma, Marin, and Napa counties for over 50 years, and the most common problems we see could have been caught early with routine care. Here&apos;s your complete guide to how often each major appliance should be serviced.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/modern-kitchen.webp"
                alt="Modern kitchen with well-maintained appliances"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refrigerator Maintenance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Your refrigerator is the hardest-working appliance in your home. It never shuts off, and neglecting its maintenance can lead to higher energy bills, food spoilage, and compressor failure. Here are the key tasks and how often to perform them:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Clean the condenser coils every 6 to 12 months.</strong> Dust and pet hair accumulate on the coils, usually located behind or beneath the unit. Dirty coils force the compressor to work harder, driving up energy use and shortening the refrigerator&apos;s lifespan.</li>
              <li><strong>Check door seals (gaskets) every 3 to 6 months.</strong> A loose or cracked gasket lets cold air escape, causing the refrigerator to run longer cycles and increasing your electricity bill. Close the door on a dollar bill. If you can pull it out easily, the seal needs attention.</li>
              <li><strong>Clean the drain pan and drain hole twice a year.</strong> A clogged drain can cause water to pool inside the unit or leak onto your floor, potentially leading to mold growth or water damage.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your refrigerator is making unusual noises, not keeping food cold enough, or cycling too frequently, don&apos;t wait for a complete failure. Our factory-authorized technicians can diagnose and resolve the issue quickly. Learn more about our <Link href="/services/refrigerator-repair" className="text-green-600 hover:text-green-700">refrigerator repair services</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Oven and Range Maintenance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Whether you have a gas range or an electric oven, regular maintenance keeps your cooking appliance safe and accurate. Neglected ovens can develop uneven heating, inaccurate temperatures, and even gas leaks.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Clean the interior regularly.</strong> Baked-on food and grease buildup can cause smoke, odors, and even fire. Use the self-cleaning cycle sparingly (every 3 to 4 months) as it puts stress on the oven&apos;s components. For routine cleanups, a baking soda and vinegar solution works well.</li>
              <li><strong>Inspect heating elements and burners annually.</strong> On electric models, look for visible damage, hot spots, or elements that don&apos;t glow evenly. For gas ranges, make sure burner flames are blue and steady. Yellow or uneven flames indicate a problem with the gas-to-air ratio.</li>
              <li><strong>Check the door seal annually.</strong> A damaged oven door gasket lets heat escape, resulting in longer cooking times and wasted energy.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your oven isn&apos;t heating evenly, takes too long to preheat, or your gas range has an unusual smell, schedule an inspection right away. Visit our <Link href="/services/oven-repair" className="text-green-600 hover:text-green-700">oven and range repair page</Link> for details on how we can help.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dishwasher Maintenance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A well-maintained dishwasher cleans better, uses less water, and lasts years longer than one that&apos;s neglected. Hard water deposits, food debris, and soap scum are the primary enemies of dishwasher performance.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Clean the filter monthly.</strong> Most modern dishwashers have a removable filter at the bottom of the tub. Food particles trapped here reduce cleaning performance and can cause unpleasant odors.</li>
              <li><strong>Check the spray arms every 2 to 3 months.</strong> Mineral deposits and food debris can clog the small holes in the spray arms. Remove them and clear any blockages with a toothpick or small brush.</li>
              <li><strong>Run a cleaning cycle monthly.</strong> Place a cup of white vinegar on the top rack and run a hot cycle with the dishwasher empty. This dissolves grease, removes odors, and clears mineral buildup from internal components.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Standing water, dishes that aren&apos;t getting clean, or a dishwasher that won&apos;t drain properly are signs of a deeper issue. Our experienced team handles all makes and models. Check out our <Link href="/services/dishwasher-repair" className="text-green-600 hover:text-green-700">dishwasher repair services</Link> for more information.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/appliance-repair-technician.webp"
                alt="Professional appliance technician performing maintenance"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Washing Machine Maintenance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Washing machines handle heavy loads and constant exposure to water and detergent. Without regular upkeep, they&apos;re prone to mold, leaks, and mechanical failures that can damage your laundry room.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Run a clean cycle monthly.</strong> Use a washing machine cleaner or a cup of baking soda on a hot cycle to remove detergent residue, mold, and odor-causing bacteria. This is especially important for front-loading models.</li>
              <li><strong>Inspect water supply hoses every 6 months.</strong> Check for bulges, cracks, or signs of wear. Rubber hoses deteriorate over time and a burst hose can cause serious flooding. Consider upgrading to braided stainless steel hoses for added durability.</li>
              <li><strong>Check for leaks regularly.</strong> Look under and behind the machine for signs of moisture. Even small leaks can lead to mold growth and floor damage if left unaddressed.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your washer isn&apos;t spinning properly, vibrates excessively, or leaves clothes soaking wet, a professional diagnosis can prevent further damage to the machine and your clothing. Learn about our <Link href="/services/washer-dryer-repair" className="text-green-600 hover:text-green-700">washing machine repair services</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dryer Maintenance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Dryer maintenance isn&apos;t just about performance. It&apos;s a matter of safety. Clogged dryer vents are one of the leading causes of house fires in the United States. A proper maintenance routine protects your family and your home.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
              <li><strong>Clean the lint trap after every single load.</strong> This is the simplest and most important thing you can do. A clogged lint screen restricts airflow, increases drying time, and creates a fire hazard.</li>
              <li><strong>Schedule professional vent cleaning annually.</strong> Even if you clean the lint trap faithfully, lint still accumulates inside the vent duct over time. A professional cleaning removes this buildup and ensures safe, efficient operation.</li>
              <li><strong>Inspect the drum and interior every 6 months.</strong> Look for foreign objects, damaged baffles, or signs of wear on the drum seal. Catching small problems early prevents more costly repairs down the road.</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your dryer is taking multiple cycles to dry a single load, feels unusually hot, or produces a burning smell, stop using it and call a professional immediately. Visit our <Link href="/services/dryer-repair" className="text-green-600 hover:text-green-700">dryer repair page</Link> to schedule service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottom Line</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Preventive maintenance is the single best investment you can make in your home appliances. A few minutes of routine care each month, combined with an annual professional inspection, can save you hundreds or even thousands of dollars in repair and replacement costs. Appliances that receive regular service run more efficiently, consume less energy, and last significantly longer than those that are neglected until something goes wrong.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              At Kelly&apos;s Appliance Center, we&apos;ve earned our Diamond Certified rating by delivering expert, honest service to homeowners across Sonoma, Marin, and Napa counties for over 50 years. Our factory-authorized technicians are trained to work on all major brands and can spot potential problems before they become expensive emergencies. Whether you need a routine maintenance visit or a specific repair, we&apos;re here to help you get the most out of every appliance in your home.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Don&apos;t wait for a breakdown to take action.{' '}
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700"
                data-analytics-label="book_appointment"
              >
                Schedule your professional appliance maintenance today
              </a>{' '}
              and rest easy knowing your home is running at its best.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/why-is-my-dryer-taking-so-long-to-dry-clothes" className="group block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                Why Is My Dryer Taking So Long to Dry Clothes?
              </h3>
              <p className="text-gray-600 text-sm">
                Learn the top causes and solutions for slow-drying dryers, from clogged vents to worn heating elements.
              </p>
            </Link>
            <Link href="/blog/common-dishwasher-problems-and-how-to-prevent-them" className="group block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                Common Dishwasher Problems and How to Prevent Them
              </h3>
              <p className="text-gray-600 text-sm">
                Discover the most frequent dishwasher issues and simple preventive steps to keep yours running smoothly.
              </p>
            </Link>
            <Link href="/blog/how-to-tell-if-your-refrigerator-needs-professional-repair" className="group block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                How to Tell If Your Refrigerator Needs Professional Repair
              </h3>
              <p className="text-gray-600 text-sm">
                Warning signs that your fridge needs expert attention before a small problem becomes a costly breakdown.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Schedule Professional Appliance Maintenance
          </h2>
          <p className="text-gray-600 mb-8">
            Kelly&apos;s Appliance Center: Diamond Certified, factory authorized, and trusted by homeowners since 1975.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              data-analytics-label="book_appointment"
            >
              Request Appointment Online
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
