import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Getting the Most Out of Your Dishwasher: 10 Things Owners Get Wrong',
  description: 'Cloudy glasses, dishes that come out dirty, a dishwasher that smells. Most of it traces back to 10 simple habits. Here is what owners get wrong and how to fix it.',
  alternates: {
    canonical: '/blog/getting-the-most-out-of-your-dishwasher',
  },
  openGraph: {
    title: 'Getting the Most Out of Your Dishwasher: 10 Things Owners Get Wrong',
    description: 'Cloudy glasses, dirty dishes, a smelly dishwasher. Most of it traces back to 10 simple habits. Here is what to fix.',
    url: 'https://kellysappliancerepair.com/blog/getting-the-most-out-of-your-dishwasher',
    type: 'article' as const,
  },
};

export default function GettingTheMostOutOfYourDishwasherPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/getting-the-most-out-of-your-dishwasher', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Getting the Most Out of Your Dishwasher: 10 Things Owners Get Wrong",
            "description": "Cloudy glasses, dishes that come out dirty, a dishwasher that smells. Most of it traces back to 10 simple habits. Here is what owners get wrong and how to fix it.",
            "datePublished": "2026-06-11",
            "dateModified": "2026-06-11",
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
              "@id": "https://kellysappliancerepair.com/blog/getting-the-most-out-of-your-dishwasher"
            },
            "articleSection": "Dishwasher Repair",
            "wordCount": 2100
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
                "name": "Should I rinse my dishes before putting them in the dishwasher?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Scrape off large food and bones, but don't rinse dishes clean. Modern dishwasher detergents contain enzymes that need some food residue to grab onto. Many dishwashers also have a sensor that reads how dirty the water is and adjusts the cycle. Pre-rinsing until dishes are spotless can actually trick the dishwasher into running a weaker cycle, so the rest of your dishes come out less clean. Scrape, don't rinse."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I clean my dishwasher filter?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "About once a month for most households, more if you run it daily or don't scrape plates first. Almost every dishwasher built in the last 10 to 15 years has a removable filter in the bottom center of the tub, under the lower spray arm. Twist it out, rinse it under the tap, scrub it with a soft brush, and put it back. A clogged filter is the single most common reason dishes start coming out gritty or with a film, and most owners don't know the filter exists."
                }
              },
              {
                "@type": "Question",
                "name": "Why are my glasses cloudy after the dishwasher?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Usually hard water. Sonoma, Marin, and Napa county water tends to be mineral-rich, and those minerals leave a cloudy film on glassware and a scale buildup inside the dishwasher. Rinse aid and a monthly cleaning cycle with white vinegar or a dishwasher cleaner usually clears it up. One thing to rule out: if the cloudiness won't wipe off and doesn't come back clear, it may be etching, which is permanent damage to the glass from too much detergent plus soft water, not a film. Film wipes off; etching doesn't."
                }
              },
              {
                "@type": "Question",
                "name": "Do I really need to use rinse aid?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, especially with hard water and modern dishwashers. Rinse aid breaks the surface tension of water so it sheets off dishes instead of beading up. That does two things: it prevents spots and it helps dishes dry, which matters because newer dishwashers run cooler and use less water than older models. If your dishes come out wet or spotted, an empty rinse aid dispenser is one of the first things to check."
                }
              },
              {
                "@type": "Question",
                "name": "Why isn't my dishwasher cleaning my dishes anymore?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Start with the three free fixes: clean the filter, make sure the spray arms spin freely and their holes aren't clogged, and run a cleaning cycle to clear hard-water scale. If dishes still come out dirty after all that, it points to a repair: a worn wash pump that isn't spraying with enough force, a failing water inlet valve that isn't filling fully, or a heating element that isn't getting the water hot enough. Those need a technician, and they're common, fixable repairs."
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
              Getting the Most Out of Your Dishwasher: 10 Things Owners Get Wrong
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 11, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>10 min read</span>
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
              Most dishwashers don&apos;t fail because they&apos;re broken. They underperform because of small habits that build up over months: a filter that&apos;s never been cleaned, too much detergent, glasses going cloudy from hard water. The machine still runs, it just stops doing a great job, and people assume it&apos;s worn out when it isn&apos;t.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              After 50 years of repairing appliances in Sonoma County, we&apos;ve seen the same handful of mistakes over and over. The good news is that almost all of them are free to fix and take a few minutes. Here are the ten things owners get wrong, and how to get your dishwasher cleaning like new again.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. You Rinse Your Dishes Too Well</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This is the big one, and it feels backwards. Modern dishwasher detergents are built around enzymes that latch onto food particles and break them down. If you scrub every dish spotless before loading, there&apos;s nothing for those enzymes to work on, and on many machines a turbidity sensor reads the water as clean and runs a shorter, gentler cycle. The result: the genuinely dirty dishes in the load come out worse.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Scrape off the big stuff, bones, and anything burnt on. Then load it. You&apos;ll get cleaner dishes and save the water you were using to hand-rinse.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. You&apos;ve Never Cleaned the Filter</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you take one thing from this article, make it this. Almost every dishwasher built in the last 10 to 15 years has a removable filter sitting in the bottom center of the tub, right under the lower spray arm. Older machines used a loud grinder to chop up food; quieter modern dishwashers replaced it with a filter you&apos;re supposed to clean by hand. Most people have no idea it&apos;s there.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When that filter packs with food and grease, dirty water gets recirculated back over your dishes, leaving grit, film, and a smell. Twist the filter out (usually a quarter turn), rinse it under the tap, scrub it with a soft brush and a little dish soap, and drop it back in. Do it once a month.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              This one change fixes more &quot;my dishwasher stopped cleaning&quot; complaints than anything else on this list.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. You Overload It and Block the Spray Arms</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A dishwasher cleans by spraying water through spinning arms above, below, and sometimes in the middle of the racks. If a tall pot, a cutting board, or a dangling utensil handle stops an arm from spinning, whole sections of the load get missed.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Before you start a cycle, give each spray arm a spin with your hand and make sure nothing blocks it. And resist the urge to cram in one more pan. An overpacked dishwasher cleans worse than a sensibly loaded one, every time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. You Use Too Much Detergent (or Old Detergent)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              More soap does not mean cleaner dishes. Excess detergent leaves a film on glassware, builds up inside the machine, and with soft water can actually etch glass permanently. Follow the dose on the package, and with our hard water you rarely need to overdo it.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Detergent also goes stale. Powder and pods lose strength once they&apos;ve been exposed to humidity, which happens fast under a kitchen sink. Keep them sealed and dry, and don&apos;t hang onto an open box for a year.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. You Skip the Rinse Aid</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Rinse aid isn&apos;t a gimmick to sell you another bottle. It breaks the surface tension of the water so it sheets off your dishes instead of beading up and drying into spots. It matters more than it used to, because newer dishwashers run cooler and use less water to save energy, which means they don&apos;t blast everything dry with heat the way old units did.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your dishes, and especially your plastics, come out wet or spotted, fill the rinse aid dispenser and see the difference. With hard water it&apos;s close to essential.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. You Don&apos;t Run the Hot Water First</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A dishwasher does its best work with hot water from the very first fill. But the water sitting in the pipe between your water heater and the kitchen is cold, so the first fill of a cycle can be lukewarm, exactly when the detergent needs heat to dissolve and activate.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Run your kitchen tap until the water turns hot, then start the dishwasher. It&apos;s a five-second habit that gives the wash a hot start. (Most dishwashers do heat the water internally, but giving it a hot first fill still helps, particularly on shorter cycles.)
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. You Load It Wrong</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Loading isn&apos;t just about fitting more in. The water comes from the center, so dishes should face inward and down toward the spray. A few rules that make a real difference:
            </p>
            <ul className="mb-6 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Bowls and cups go face down and angled, so water doesn&apos;t pool in them.</li>
              <li>Plates face the center, not nested against each other where water can&apos;t reach.</li>
              <li>Plastics go on the top rack, away from the heating element at the bottom.</li>
              <li>Big items on the sides and back so they don&apos;t block the detergent door or the spray arms.</li>
              <li>Silverware mixed, not all spooning together, so each piece gets exposed.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. You Ignore Hard-Water Buildup</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Water across Sonoma, Marin, and Napa counties tends to be hard, meaning it&apos;s high in minerals. Over time those minerals leave a chalky scale on the inside of the tub, on the heating element, and on your glassware. Scale on the heating element makes the dishwasher less efficient, and the cloudy film on glasses is the number one dish complaint we hear locally.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The fix is a monthly cleaning cycle. Put a cup of plain white vinegar in a dishwasher-safe bowl on the top rack and run a hot cycle with nothing else inside, or use a dedicated dishwasher cleaner. It dissolves the scale and clears the smell at the same time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. You Put the Wrong Things In</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              &quot;Dishwasher safe&quot; isn&apos;t everything. A few items that should stay out: good chef&apos;s knives (the edge dulls and the heat can warp them), cast iron and carbon steel (it strips the seasoning and rusts), most wooden utensils and boards (they crack and split), and anything thin plastic that can fall onto the heating element and melt.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Insulated mugs, certain glazed ceramics, and some aluminum pans also don&apos;t love the dishwasher. When in doubt, hand-wash the irreplaceable stuff.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. You Never Give It a Cleaning Cycle or Wipe the Door</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The spray arms and filter handle the inside of the tub, but they never touch the door, the gasket, or the bottom edge where it seals. That&apos;s exactly where gunk, grease, and mold collect, and it&apos;s the usual source of a dishwasher that smells even though it &quot;looks clean.&quot;
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Once a month, wipe down the rubber gasket and the inside lip of the door with a damp cloth, and run the cleaning cycle from tip 8. Pull out the bottom rack now and then and check the sump area at the very bottom for anything that washed down there: glass chips, fruit stickers, a stray bottle cap. Keeping that area clear protects the drain pump.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When It&apos;s Not You, It&apos;s the Machine</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Work through this list and most dishwasher complaints clear up on their own, no service call needed. But if you&apos;ve cleaned the filter, freed the spray arms, added rinse aid, and run a cleaning cycle and dishes still come out dirty or wet, the dishwasher is telling you something.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Common repairs behind poor cleaning include a worn wash pump that no longer sprays with enough force, a water inlet valve that isn&apos;t filling the tub fully, a clogged or failing drain pump that leaves standing water, or a heating element that isn&apos;t getting the water hot enough. These are everyday, fixable repairs, and catching them early keeps a small part failure from turning into a dead machine.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has repaired dishwashers across Sonoma, Marin, and Napa counties since 1975. We&apos;re Diamond Certified and factory authorized for all major brands. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a dishwasher repair online</a> or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>. Not sure it&apos;s worth a visit? A <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual diagnostic</Link> is 15 minutes on a video call with a technician for $40, and we can usually tell you whether it&apos;s a quick fix or a real repair.
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
              href="/blog/common-dishwasher-problems-and-how-to-prevent-them"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Common Dishwasher Problems and How to Prevent Them
              </h3>
              <p className="text-gray-600 text-sm">
                The issues we see most often, and the simple maintenance that heads them off.
              </p>
            </Link>
            <Link
              href="/blog/how-often-should-you-service-your-home-appliances"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How Often Should You Service Your Home Appliances?
              </h3>
              <p className="text-gray-600 text-sm">
                A maintenance schedule for every appliance in your kitchen and laundry room.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dishwasher Still Not Cleaning? We Can Help.
          </h2>
          <p className="text-gray-600 mb-8">
            Diamond Certified dishwasher repair across Sonoma, Marin, and Napa counties. Most repairs done in one visit.
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
              href="/services/dishwasher-repair"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              About Dishwasher Repair
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
