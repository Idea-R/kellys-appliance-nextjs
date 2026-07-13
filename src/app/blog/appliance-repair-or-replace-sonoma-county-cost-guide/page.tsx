import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Appliance Repair or Replace? A 2026 Sonoma County Cost Guide',
  description: 'Should you repair or replace a broken appliance? The 50% rule, real 2026 repair vs. replacement costs by appliance, and an age guide for Sonoma, Marin, and Napa homeowners.',
  alternates: {
    canonical: '/blog/appliance-repair-or-replace-sonoma-county-cost-guide',
  },
  openGraph: {
    title: 'Appliance Repair or Replace? A 2026 Sonoma County Cost Guide',
    description: 'The 50% rule, real 2026 repair vs. replacement costs by appliance, and an age guide for North Bay homeowners.',
    url: 'https://kellysappliancerepair.com/blog/appliance-repair-or-replace-sonoma-county-cost-guide',
    type: 'article' as const,
  },
};

export default function RepairOrReplacePostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/appliance-repair-or-replace-sonoma-county-cost-guide', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Appliance Repair or Replace? A 2026 Sonoma County Cost Guide",
            "description": "The 50% rule, real 2026 repair vs. replacement costs by appliance, and an age guide for Sonoma, Marin, and Napa homeowners.",
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
              "@id": "https://kellysappliancerepair.com/blog/appliance-repair-or-replace-sonoma-county-cost-guide"
            },
            "image": "https://kellysappliancerepair.com/images/fridge-stacked-oven.webp",
            "articleSection": "Consumer Tips",
            "wordCount": 1500
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
                "name": "What is the 50% rule for appliance repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The 50% rule says that if a repair costs more than half the price of a comparable new appliance, and the appliance is already past the midpoint of its expected lifespan, replacement is usually the smarter call. If the repair is less than half the replacement cost, or the appliance is still relatively young, repair almost always wins. It's a starting point, not a hard law, because it doesn't account for built-in or premium appliances where replacement is far more expensive than the rule assumes."
                }
              },
              {
                "@type": "Question",
                "name": "How much does appliance repair cost in Sonoma County in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most repairs run between $200 and $500 depending on the appliance and the parts. Our diagnostic fee is $149, which includes a full inspection and is applied toward the repair if you proceed. Common fixes like a dryer heating element, a washer pump, an oven igniter, or a dishwasher drain pump land in the $200 to $400 range. Sealed refrigeration work and control boards cost more. You get an upfront estimate before any work starts."
                }
              },
              {
                "@type": "Question",
                "name": "Is it worth repairing a 10-year-old appliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Often yes. A 10-year-old refrigerator, oven, or washer is usually in the middle of its expected life, and a single repair can add five or more years. The exception is when multiple major components are failing at once, or when the repair cost climbs past half the replacement price. Age alone doesn't mean replace. A well-maintained appliance with one bad part is almost always worth fixing."
                }
              },
              {
                "@type": "Question",
                "name": "Should I always replace a built-in or premium appliance instead of repairing it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Almost never. Built-in and premium units like Sub-Zero, Wolf, Thermador, and Viking cost several thousand dollars to replace, and replacement often means cabinet and countertop modifications too. For these, repair wins in nearly every case short of catastrophic damage. They were built to be serviced and to last decades. We are factory authorized for these brands and stock or source genuine parts for them."
                }
              },
              {
                "@type": "Question",
                "name": "Does hard water in Sonoma and Napa affect appliance lifespan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. A lot of North Bay homes run on well water or hard municipal water, and the mineral content shortens the life of dishwashers, washing machines, water heaters, and refrigerator water systems through scale buildup. It also makes some repairs (valves, pumps, dispensers) more common. Softening the water and doing simple descaling maintenance extends the life of these appliances noticeably."
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
              Appliance Repair or Replace? A 2026 Sonoma County Cost Guide
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 16, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>8 min read</span>
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
              Your refrigerator quit overnight, or the washer is leaking onto the laundry room floor, and now you&apos;re standing in the kitchen doing math. Fix it, or put that money toward a new one?
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here&apos;s the short answer: if the repair costs less than half of what a comparable new appliance would, and the unit is still within its expected lifespan, repair almost always wins. If you&apos;re past both of those lines, replacement starts to make sense. The longer answer, with real 2026 numbers for Sonoma, Marin, and Napa, is below.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/fridge-stacked-oven.webp"
                alt="A built-in refrigerator and wall oven in a Sonoma County kitchen, the kind of appliances homeowners weigh repairing versus replacing"
                width={800}
                height={620}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The 50% Rule (And Its One Big Exception)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The rule of thumb most technicians use is simple. Add up the repair cost. If it&apos;s more than half the price of a comparable new appliance, lean toward replacing. If it&apos;s less than half, repair. Then factor in age: an appliance in the first half of its expected life almost always deserves the repair, while one near the end of its life is a closer call.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The big exception is built-in and premium appliances. A new Sub-Zero or Wolf can run five figures once you count installation, so a $600 repair on one isn&apos;t even close to 50% of replacement. For those, repair wins in nearly every case. More on that below.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Repairs Actually Cost in 2026</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Most standard appliance repairs in the North Bay land between $200 and $500, parts and labor included. Our diagnostic fee is $149, which covers a full inspection and is applied toward the repair if you go ahead with it. Here&apos;s the rough range by appliance for the common stuff:
            </p>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Refrigerator:</strong> $200 to $500 for most parts (fans, valves, defrost, dispensers). Sealed-system or compressor work runs higher.</li>
              <li><strong>Washing machine:</strong> $150 to $450 (pumps, valves, door locks, drive belts).</li>
              <li><strong>Dryer:</strong> $150 to $400 (heating elements, igniters, rollers, thermal fuses).</li>
              <li><strong>Dishwasher:</strong> $160 to $400 (drain pumps, valves, control issues, leaks).</li>
              <li><strong>Oven or range:</strong> $200 to $500 (bake elements, igniters, sensors). Control boards cost more, which is why we <Link href="/blog/right-to-repair-why-kellys-rebuilds-control-boards" className="text-green-600 hover:text-green-700">rebuild boards at the component level</Link> when it makes sense.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Replacement Actually Costs (Including the Hidden Parts)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The sticker price is only part of replacement. A new mid-range refrigerator is $900 to $2,500, a washer or dryer is $600 to $1,500 each, a dishwasher is $500 to $1,500, and a freestanding range is $700 to $3,000. Built-in and pro-style units climb well past that.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Then there&apos;s what the price tag doesn&apos;t show: delivery, haul-away of the old unit, installation, and the two to three week wait that&apos;s still common on a lot of models. If your fridge dies on a Friday, a repair can often have you running again days before a replacement would even arrive. For a family, that gap matters.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/appliance-repair-technician.webp"
                alt="A Kelly's Appliance Center technician inspecting an appliance to give an honest repair-or-replace assessment"
                width={800}
                height={534}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">An Age Guide by Appliance</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Expected lifespans give you the other half of the decision. These are the averages we see hold up in the field:
            </p>
            <ul className="mb-4 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Refrigerator:</strong> 10 to 15 years</li>
              <li><strong>Washing machine:</strong> 10 to 13 years</li>
              <li><strong>Dryer:</strong> 10 to 13 years</li>
              <li><strong>Dishwasher:</strong> 9 to 12 years</li>
              <li><strong>Oven or range:</strong> 13 to 15 years (often longer for a well-built one)</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Put it together: a 6-year-old dishwasher with a bad pump is an easy repair. A 13-year-old dishwasher that needs a control board and a pump is a closer call, and that&apos;s where the 50% math decides it. If you&apos;re not sure how old yours is, the model and serial tags tell you. We have a <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700">quick guide to finding them</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Wine Country Factors That Change the Math</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Living in Sonoma, Napa, or west Marin adds a few local wrinkles. A lot of homes here run on well water or hard municipal water, and the mineral content scales up dishwashers, washing machines, and refrigerator water systems faster than the national averages assume. That shortens lifespans and makes valve, pump, and dispenser repairs more common. Softening the water and doing simple descaling pushes those numbers back in your favor.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The other factor is power. PSPS shutoffs and the occasional surge during fire season are hard on control boards and compressors. If an appliance failed right after a power event, that&apos;s worth telling your technician, because a board repair on an otherwise healthy unit is a very different decision than a worn-out appliance at the end of its life.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Premium and Built-In Exception</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you have a Sub-Zero, Wolf, Thermador, Viking, or a built-in column refrigerator, throw the 50% rule out. These were engineered to be serviced and to run for 20-plus years, and replacing one means not just the appliance but often cabinet and countertop work to fit the new dimensions. A repair that would be borderline on a $900 fridge is an obvious yes on a built-in. We&apos;re factory authorized for these brands and carry or source genuine parts, so repair is almost always the right answer. If you&apos;re shopping for the next one, our guide to the <Link href="/blog/best-appliance-brands-wine-country-living" className="text-green-600 hover:text-green-700">best appliance brands for wine country living</Link> covers what holds up here.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When Repair Is Not Worth It</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              To be straight with you, there are times we&apos;ll tell you to replace. When a unit is past its lifespan and needs more than one major part. When the compressor on a basic fridge fails and the rest of the appliance is worn. When rust or a cracked tub has compromised the structure. We&apos;d rather tell you that up front than sell you a repair that won&apos;t hold.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              That honesty is the whole point of a real diagnosis. Our <Link href="/services/parts" className="text-green-600 hover:text-green-700">parts counter in Cotati</Link> and our trucks let us fix most things in one visit, but we&apos;ll always tell you when the smarter move is a new one.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Help You Decide</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You don&apos;t have to make this call alone. Our $149 diagnostic gets you a full inspection and a clear estimate, and that fee comes off the repair if you proceed. We&apos;ll tell you what&apos;s wrong, what it costs to fix, and our honest read on whether it&apos;s worth it given the age and condition.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has been doing exactly this in Sonoma, Marin, and Napa counties since 1975. We&apos;re Diamond Certified, factory authorized for every major brand, and family-owned, which means we have no reason to push a replacement you don&apos;t need.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a diagnostic online</a> or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>. Not ready for a visit? A <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual service call</Link> is 15 minutes with a technician for $40, and we can often tell you which way to lean before anyone comes out. You can also see typical costs on our <Link href="/pricing" className="text-green-600 hover:text-green-700">pricing page</Link>.
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
              href="/blog/best-appliance-brands-wine-country-living"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Best Appliance Brands for Wine Country Living
              </h3>
              <p className="text-gray-600 text-sm">
                Which brands actually hold up to well water, power events, and a North Bay kitchen, from premium built-ins to reliable mid-range.
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
                A simple maintenance schedule that extends lifespan and keeps you on the repair side of the repair-or-replace line.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Whether to Repair or Replace?
          </h2>
          <p className="text-gray-600 mb-8">
            Get an honest assessment from a Diamond Certified, factory-authorized team. Family-owned in the North Bay since 1975.
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
              href="/pricing"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              See Our Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
