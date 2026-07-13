import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import PartnerCard from '@/components/PartnerCard';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Power Outage Appliance Checklist for Sonoma County',
  description: 'A PSPS and power outage checklist for North Bay homeowners: what to do before, during, and after to protect your refrigerator, freezer, and electronics, plus food safety rules.',
  alternates: {
    canonical: '/blog/power-outage-appliance-checklist-sonoma-county',
  },
  openGraph: {
    title: 'Power Outage Appliance Checklist for Sonoma County',
    description: 'What to do before, during, and after a PSPS or outage to protect your appliances and food.',
    url: 'https://kellysappliancerepair.com/blog/power-outage-appliance-checklist-sonoma-county',
    type: 'article' as const,
  },
};

export default function PowerOutageChecklistPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/power-outage-appliance-checklist-sonoma-county', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Power Outage Appliance Checklist for Sonoma County",
            "description": "What to do before, during, and after a PSPS or outage to protect your appliances and food.",
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
              "@id": "https://kellysappliancerepair.com/blog/power-outage-appliance-checklist-sonoma-county"
            },
            "image": "https://kellysappliancerepair.com/images/refrigerator.webp",
            "articleSection": "Maintenance",
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
                "name": "How long will food stay cold in the fridge during a power outage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An unopened refrigerator keeps food safe for about 4 hours. A full freezer holds for about 48 hours, and a half-full freezer for about 24 hours, as long as you keep the doors closed. The golden rule: if perishable food has been above 40°F for more than 2 hours, throw it out. When in doubt, throw it out."
                }
              },
              {
                "@type": "Question",
                "name": "Should I unplug my appliances during a power outage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Unplug sensitive electronics and appliances with control boards (ovens, microwaves, anything with a screen) to protect them from the surge when power returns. You can leave the refrigerator and freezer plugged in so they restart automatically, ideally on a surge protector. The surge at restoration is what damages appliances, not the outage itself."
                }
              },
              {
                "@type": "Question",
                "name": "Can a power surge from a PSPS damage my appliances?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The most common appliance damage from a Public Safety Power Shutoff happens when power comes back, not when it goes out. The surge can fry control boards on refrigerators, ovens, and dishwashers. Surge protection and unplugging board-driven appliances during the outage are the best prevention. If an appliance fails right after power returns, a board issue is the likely cause."
                }
              },
              {
                "@type": "Question",
                "name": "How do I keep my refrigerator running during a long PSPS?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For shorter outages, keeping the doors closed is enough. For multi-day shutoffs, a portable solar generator or battery backup can keep a refrigerator running. A standard fridge draws relatively little power once it's cold, so a mid-size portable solar generator can carry it through an extended outage and recharge from a foldable solar panel during the day."
                }
              },
              {
                "@type": "Question",
                "name": "My appliance stopped working after a power outage. What should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "First, check the breaker, since outages sometimes trip them. If the breaker is fine and the appliance still won't run or shows an error, it's likely a control board affected by the surge. Don't keep cycling power to it. Call a technician. We repair surge-damaged boards regularly and can often rebuild them at the component level rather than replace the whole board."
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
              Power Outage Appliance Checklist for Sonoma County
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 16, 2026</span>
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
              If you live in Sonoma, Napa, or Marin, you know the drill. Fire season rolls in, PG&amp;E announces a Public Safety Power Shutoff, and you&apos;ve got a few hours to get ready. A little prep protects your food, your appliances, and your wallet.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here&apos;s the short version: before the outage, get your fridge and freezer as cold as possible and plan your backup. During it, keep the doors closed and unplug anything with a control board. After it, follow the food-safety clock and watch for surge damage. The details are below.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/refrigerator.webp"
                alt="A refrigerator, the appliance most at risk during a Sonoma County power outage or PSPS"
                width={800}
                height={531}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before the Outage</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Turn the fridge and freezer to their coldest settings</strong> a few hours ahead. The colder they start, the longer they hold.</li>
              <li><strong>Fill empty freezer space</strong> with jugs of water or bags of ice. A full freezer stays cold far longer than an empty one, and the frozen water becomes drinking water later.</li>
              <li><strong>Group perishables together</strong> in the fridge so they hold cold as a mass, and keep a cooler with ice ready for the must-save items.</li>
              <li><strong>Know where your breaker panel is</strong> and have a flashlight nearby.</li>
              <li><strong>Plan your backup power</strong> if outages in your area tend to run long (more on that below).</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">During the Outage</h2>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>Keep the refrigerator and freezer doors closed.</strong> An unopened fridge holds for about 4 hours. A full freezer holds about 48 hours, half-full about 24.</li>
              <li><strong>Unplug board-driven appliances</strong> (ovens, microwaves, dishwashers, anything with a screen) to protect them from the surge when power returns.</li>
              <li><strong>Leave the fridge and freezer plugged in</strong> on a surge protector so they restart on their own, or unplug and plan to power them back up manually when the grid is stable.</li>
              <li><strong>Don&apos;t run a gas oven for heat.</strong> It&apos;s not designed for it and it&apos;s a safety risk.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Keeping the Fridge Running on Backup Power</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For a short outage, a closed door is enough. But our PSPS events can stretch into multiple days, and that&apos;s long enough to lose a freezer full of food. A refrigerator actually draws fairly little power once it&apos;s cold, so a mid-size portable solar generator can carry it through an extended outage and recharge from a foldable solar panel during daylight.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A local option we like is California Sunlight Corporation, a Sacramento company that builds portable solar generators (1,000W to 3,000W) and foldable solar panels sized for exactly this kind of fire-season backup. If you&apos;re tired of losing a fridge full of groceries every time the power goes out, a portable solar setup is worth a look.
            </p>

            <div className="not-prose my-8">
              <PartnerCard
                name="Dr. Bing Gu"
                subtitle="Founder, California Sunlight Corporation"
                imageSrc="/images/Referral/BingHeadshot.jpg"
                imageAlt="Dr. Bing Gu, Founder of California Sunlight Corporation"
                blurb="A Sacramento maker of portable solar generators and battery backup systems, sized to keep a refrigerator running through a multi-day PSPS. A trusted partner of Kelly's."
                website="https://california-sunlight.com/"
                linkedin="https://www.linkedin.com/in/bing-gu-3784aaa/"
              />
            </div>

            <div className="text-center my-8">
              <Image
                src="/images/modern-kitchen.webp"
                alt="A Sonoma County kitchen with the appliances a power outage puts at risk"
                width={800}
                height={533}
                className="rounded-lg shadow-lg mx-auto w-full h-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">After Power Returns</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The food-safety rule is simple and worth memorizing: <strong>if perishable food has been above 40°F for more than 2 hours, throw it out.</strong> When in doubt, throw it out. Don&apos;t taste-test questionable food, and don&apos;t rely on smell. A lot of dangerous bacteria leave no odor.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For the freezer, food that still has ice crystals or is at 40°F or below can be safely refrozen. If it&apos;s fully thawed and warm, it goes.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Then check your appliances. Plug the board-driven ones back in one at a time. If something won&apos;t turn on or throws an error code, first check the breaker, since outages sometimes trip them. If the breaker is fine and the appliance is still down, it&apos;s most likely a surge-damaged control board.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When an Appliance Doesn&apos;t Survive the Surge</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The most common appliance damage from a PSPS happens at restoration, not during the outage. The surge when power snaps back can take out a control board on a refrigerator, oven, or dishwasher. If that happens, stop cycling power to the appliance and give us a call.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Here&apos;s the good news: a fried board doesn&apos;t always mean a new appliance, or even a pricey new board. We often <Link href="/blog/right-to-repair-why-kellys-rebuilds-control-boards" className="text-green-600 hover:text-green-700">rebuild boards at the component level</Link>, which can save you hundreds over a full replacement. And if it&apos;s your refrigerator that took the hit, our <Link href="/services/refrigerator-repair" className="text-green-600 hover:text-green-700">refrigerator repair</Link> team carries common parts on the truck.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has helped North Bay families through fire seasons since 1975. If a power event left an appliance down, <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">book a repair online</a> or call <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>. Not sure if it&apos;s worth fixing? Our <Link href="/blog/appliance-repair-or-replace-sonoma-county-cost-guide" className="text-green-600 hover:text-green-700">repair or replace guide</Link> helps you decide.
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
              href="/blog/sonoma-county-heat-wave-refrigerator-survival"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sonoma County Heat Wave Survival: Why Your Fridge Works Twice as Hard in July
              </h3>
              <p className="text-gray-600 text-sm">
                Outages and heat waves both stress your refrigerator. Here&apos;s how to help it cope through summer.
              </p>
            </Link>
            <Link
              href="/blog/refrigerator-making-loud-noises-8-sounds-explained"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why Is My Refrigerator Making Loud Noises? 8 Sounds Explained
              </h3>
              <p className="text-gray-600 text-sm">
                If your fridge sounds different after a power event, this guide tells you which noises need a repair call.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Appliance Down After an Outage?
          </h2>
          <p className="text-gray-600 mb-8">
            We repair surge-damaged appliances across Sonoma, Marin, and Napa. Diamond Certified, factory authorized, family-owned since 1975.
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
              href="/services/refrigerator-repair"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Refrigerator Repair Service
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
