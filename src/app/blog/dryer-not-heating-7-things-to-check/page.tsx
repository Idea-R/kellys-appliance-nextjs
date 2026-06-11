import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Dryer Not Heating? 7 Things to Check Before You Call a Repair Tech',
  description: 'Your dryer runs but the clothes come out cold and damp. Here are the 7 things to check first, which you can fix yourself, and when it is time to call a pro. Covers electric and gas dryers.',
  alternates: {
    canonical: '/blog/dryer-not-heating-7-things-to-check',
  },
  openGraph: {
    title: 'Dryer Not Heating? 7 Things to Check Before You Call a Repair Tech',
    description: 'Your dryer runs but clothes come out cold and damp. 7 things to check first, which you can fix yourself, and when to call a pro.',
    url: 'https://kellysappliancerepair.com/blog/dryer-not-heating-7-things-to-check',
    type: 'article' as const,
  },
};

export default function DryerNotHeatingPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/dryer-not-heating-7-things-to-check', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Dryer Not Heating? 7 Things to Check Before You Call a Repair Tech",
            "description": "Your dryer runs but the clothes come out cold and damp. 7 things to check first, which you can fix yourself, and when to call a pro.",
            "datePublished": "2026-06-10",
            "dateModified": "2026-06-10",
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
              "@id": "https://kellysappliancerepair.com/blog/dryer-not-heating-7-things-to-check"
            },
            "image": "https://kellysappliancerepair.com/images/Blogs/dryer-not-heating-hero.webp",
            "articleSection": "Dryer Repair",
            "wordCount": 2200
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Diagnose a Dryer That Won't Heat",
            "description": "Seven checks you can run yourself before calling a repair technician, in order from easiest to most involved.",
            "step": [
              { "@type": "HowToStep", "name": "Check the lint trap and vent", "text": "A clogged lint screen or blocked exhaust vent is the #1 cause of a dryer that runs but won't dry. Clean the lint trap every load and the full vent line at least yearly." },
              { "@type": "HowToStep", "name": "Confirm power (electric dryers need 240V)", "text": "Electric dryers use a double-pole breaker. If half trips, the drum spins on 120V but the heating element gets no power. Reset both halves of the breaker." },
              { "@type": "HowToStep", "name": "Check the gas supply (gas dryers)", "text": "Confirm the gas valve to the dryer is open and other gas appliances work. A closed valve or empty propane tank means no heat." },
              { "@type": "HowToStep", "name": "Test the heating element (electric)", "text": "A burned-out heating element is a common failure. It needs a multimeter test for continuity, or look for visible breaks in the coil." },
              { "@type": "HowToStep", "name": "Check the thermal fuse", "text": "The thermal fuse blows when the dryer overheats, usually from a clogged vent. Once blown it cuts the heat permanently until replaced. Often the real fix after a vent clog." },
              { "@type": "HowToStep", "name": "Inspect the igniter and flame sensor (gas)", "text": "Gas dryers use an igniter that glows then lights the gas. A failed igniter or flame sensor means the drum turns but no heat is produced." },
              { "@type": "HowToStep", "name": "Verify the cycle settings", "text": "Air Fluff or Air Dry settings tumble without heat by design. Make sure you have not accidentally selected a no-heat cycle." }
            ]
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
                "name": "Why is my dryer running but not heating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The most common causes are a clogged lint trap or vent (restricting airflow so the dryer can't shed moisture), a blown thermal fuse (which cuts heat permanently after an overheat event), a burned-out heating element on electric dryers, or a failed igniter on gas dryers. Start by cleaning the lint screen and checking that the exhaust vent isn't blocked. A surprising number of 'not heating' calls are actually airflow problems, not heat problems."
                }
              },
              {
                "@type": "Question",
                "name": "Can a clogged dryer vent stop the dryer from heating?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in two ways. First, a clogged vent traps moist air inside the drum so clothes stay damp even though the dryer is producing heat. Second, the trapped heat can cause the dryer to overheat, which blows the thermal fuse and cuts the heat entirely. A clogged vent is the single most common root cause behind 'my dryer won't heat' and it's also a serious fire hazard. Clean the full vent line, not just the lint screen, at least once a year."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my dryer's thermal fuse is blown?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A blown thermal fuse usually means the dryer runs (drum spins) but produces no heat at all. The thermal fuse is a safety device that permanently cuts the heating circuit when the dryer overheats. It does not reset itself. It must be replaced. Important: a thermal fuse rarely blows on its own. It blows because of a clogged vent or restricted airflow, so if you replace the fuse without clearing the vent, the new fuse will blow again. Always fix the underlying airflow problem."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I clean my dryer vent?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clean the lint screen every single load. Clean the full vent duct (from the dryer to the exterior wall vent) at least once a year, more often if you do a lot of laundry, have a long vent run, or have pets. A clogged dryer vent is responsible for thousands of house fires per year in the US. Beyond the fire risk, a clean vent dries clothes faster, uses less energy, and extends the life of the dryer. It's one of the highest-value home maintenance tasks most people skip."
                }
              },
              {
                "@type": "Question",
                "name": "Is it worth repairing a dryer that won't heat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Almost always, yes. The most common fixes (heating element, thermal fuse, igniter, vent cleaning) are inexpensive and add years of life to the dryer. A heating element or igniter replacement is a fraction of the cost of a new dryer. Replacement only makes sense if the dryer is 12-15+ years old AND has multiple failing components, or if the drum bearings and motor are also going. For a not-heating issue on an otherwise healthy dryer, repair is the clear winner."
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
              Dryer Not Heating? 7 Things to Check Before You Call a Repair Tech
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 10, 2026</span>
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
              You pull a load out of the dryer and it&apos;s still damp. The drum was spinning, you heard it running the whole cycle, but the clothes are cold and wet. So you run it again. Same thing. Now you&apos;ve got a pile of laundry going nowhere and a dryer that seems to be working but isn&apos;t actually doing its one job.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A dryer that runs but won&apos;t heat is one of the most common appliance calls we get. The good news: a large share of these are airflow problems you can fix yourself in under an hour, often for free. The rest are real repairs, but knowing which is which saves you a service call.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here are the seven things to check, in order from easiest to most involved. Work through them top to bottom.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/dryer-not-heating-hero.webp"
                alt="A person pulling damp laundry out of a dryer that ran a full cycle but did not heat"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Clean the Lint Trap and Check the Vent</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We&apos;re starting here because it&apos;s the cause more often than anything else on this list, and it&apos;s free. A dryer dries clothes by pushing hot air through them and carrying the moisture out the vent. If the airflow is restricted, the moist air has nowhere to go. The clothes stay damp even when the heating element is working perfectly.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Start with the lint screen. Pull it out and clean it, even if it looks clean. Then go a step further: if you use dryer sheets, a thin invisible film builds up on the screen over time and chokes airflow. Run the screen under water and scrub it with a little dish soap and a brush. If water pools on top instead of flowing through, that film is your problem.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Then check the vent itself. Pull the dryer out, disconnect the flexible duct, and look for lint buildup. Check the exterior wall vent too, where the dryer exhausts outside. Birds nest in them, lint packs them solid, and the flapper can get stuck shut. A clogged exterior vent is extremely common and easy to miss because it&apos;s out of sight.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> If you can&apos;t reach the full vent run (long ducts through walls or roofs are common), a technician or vent-cleaning service can clear it with proper tools. This isn&apos;t just about drying performance. A clogged dryer vent is one of the leading causes of house fires, which is why our techs clean the full vent line as part of a dryer service visit.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/dryer-vent-before-after.webp"
                alt="Before and after photos of a dryer vent cleaning, showing a duct packed with lint on the left and clean on the right"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">Before and after: a dryer vent our techs cleared on a recent Sonoma County call. The left side was choking off nearly all airflow.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Confirm the Power (Electric Dryers Need 240V)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Here&apos;s a quirk that fools a lot of people. Electric dryers run on a 240-volt circuit with a double-pole breaker. The drum motor and the control panel only need 120 volts (one leg of the circuit), but the heating element needs the full 240 volts (both legs).
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When only one half of the double-pole breaker trips, you get exactly the symptom we&apos;re troubleshooting: the dryer turns on, the drum spins, the light works, but there&apos;s no heat. The motor has its 120V, but the heating element is starved.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>What to do:</strong> Go to your breaker panel and find the dryer breaker. Flip it fully off, then back on. Sometimes a half-tripped breaker doesn&apos;t look tripped, so cycle it completely. If it trips again right away, stop. That&apos;s a sign of a short, which is not a DIY fix. Gas dryers also need 120V power for the igniter and controls, so check the outlet there too.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Check the Gas Supply (Gas Dryers)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you have a gas dryer, no heat could simply mean no gas. Confirm the gas shutoff valve behind the dryer is fully open (handle parallel to the pipe). Check that your other gas appliances, like the stove or water heater, are working. If they&apos;re also out, the issue is your gas supply, not the dryer.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              For homes on propane rather than natural gas, an empty or low tank is an easy thing to overlook. Check the tank gauge before assuming the dryer is broken.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Test the Heating Element (Electric Dryers)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If the power is good and the airflow is clear but an electric dryer still won&apos;t heat, the heating element itself is a prime suspect. The element is a long coil of metal wire that glows hot as electricity passes through it, similar to an oven element. Over years of heating and cooling, the coil eventually breaks. Once it breaks, the circuit is open and no heat is produced.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You can sometimes see the break by removing the element and inspecting the coil for a visible gap or burned spot. The proper test is to check it for electrical continuity with a multimeter. A good element shows continuity; a failed one shows none.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Replacing a heating element involves opening up the dryer cabinet and disconnecting electrical components, with the dryer unplugged. It&apos;s doable for a confident DIYer with the right part for the model, but it&apos;s also exactly the kind of repair our techs finish in 30 minutes with the part already on the truck. We service <Link href="/services/washer-dryer-repair" className="text-green-600 hover:text-green-700">dryers across Sonoma, Marin, and Napa</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Check the Thermal Fuse</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The thermal fuse is a small safety device that permanently cuts the heating circuit if the dryer overheats. It&apos;s a one-time fuse. Once it blows, it does not reset. It must be replaced. When the thermal fuse is blown, the most common symptom is exactly what we&apos;re chasing: the dryer runs but produces zero heat.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Here&apos;s the critical part most people miss. A thermal fuse rarely blows on its own. It blows because the dryer overheated, and the most common reason a dryer overheats is a clogged vent (see item 1). So if you replace the thermal fuse without clearing the vent, the brand-new fuse will blow again, sometimes within a single cycle. This is the single most common mistake we see homeowners make on dryer repairs.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> The fuse itself is inexpensive, but the diagnosis matters. A technician will replace the fuse AND find out why it blew, so it doesn&apos;t happen again. There may also be a failed thermostat or cycling thermostat involved, which a tech checks at the same time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Inspect the Igniter and Flame Sensor (Gas Dryers)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              On a gas dryer, the heat comes from a gas burner that&apos;s lit by an igniter. The igniter glows red-hot, the flame sensor confirms it&apos;s hot enough, and then the gas valve opens and the burner lights. If the igniter fails, or the flame sensor doesn&apos;t signal correctly, the gas never lights and you get a dryer that tumbles with no heat.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A failing gas igniter is one of the most common gas-dryer repairs, similar to the igniter problem we see on gas ovens. The igniter is a fragile ceramic part that weakens over time until it can no longer get hot enough to light the gas.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Anything involving the gas burner assembly should be handled by a technician. It&apos;s not just about the repair, it&apos;s about safely verifying the gas connection afterward. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a visit here</a>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Double-Check the Cycle Settings</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We save the most embarrassing one for last because it happens more than you&apos;d think. Most dryers have an Air Fluff, Air Dry, or No Heat setting that tumbles the drum without turning on the heat. It&apos;s designed for fluffing pillows or freshening clothes without heat. If someone bumped the dial or pressed the wrong button, the dryer will run a full cycle stone cold, exactly as designed.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>What to do:</strong> Before you tear anything apart, make sure you&apos;re on a normal heated cycle like Normal, Cottons, or Timed Dry with a heat level selected. It costs you ten seconds to rule out, and we&apos;ve all done it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The One Thing That Causes Most of These</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you take one thing away from this article, make it this: clean your dryer vent. A clogged vent is the root cause behind the majority of dryer heat complaints. It directly traps moisture so clothes stay damp, and it indirectly causes overheating that blows thermal fuses and shortens the life of heating elements.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              It&apos;s also a genuine safety issue. The US Fire Administration attributes thousands of house fires every year to clothes dryers, and the leading factor is failure to clean them. Lint is highly flammable, and a packed vent plus a hot dryer is a real risk.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Clean the lint screen every load. Clean the full vent line at least once a year. If you have a long or hard-to-reach vent run, or you just want it done right, our techs handle vent cleaning as part of a service visit.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call Kelly&apos;s</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Most dryer heat problems come down to airflow, a heating element, a thermal fuse, or a gas igniter. If you&apos;ve cleaned the vent, confirmed the power, and checked the settings but the dryer still won&apos;t heat, the next steps involve testing electrical components or the gas burner, and that&apos;s where a technician saves you time and guesswork.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has been repairing dryers in Sonoma, Marin, and Napa counties since 1975. We&apos;re Diamond Certified, factory authorized for all major brands, and we carry common dryer parts (heating elements, thermal fuses, igniters) on our trucks, so a lot of these repairs finish in a single visit.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a dryer repair online</a> or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>. Not sure if it&apos;s worth a visit? Try a <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual diagnostic</Link> first. 15 minutes on a video call with a technician for $40, and we can usually tell you whether it&apos;s a quick DIY fix or a real repair.
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
              href="/blog/why-is-my-dryer-taking-so-long-to-dry-clothes"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why Is My Dryer Taking So Long to Dry Clothes?
              </h3>
              <p className="text-gray-600 text-sm">
                When the dryer heats but clothes still take forever. Causes and fixes for slow drying.
              </p>
            </Link>
            <Link
              href="/blog/oven-not-heating-6-things-to-check"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oven Not Heating? 6 Things to Check Before You Call a Repair Tech
              </h3>
              <p className="text-gray-600 text-sm">
                The same diagnostic approach for an oven that won&apos;t heat up.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dryer Not Heating? We Can Help.
          </h2>
          <p className="text-gray-600 mb-8">
            Diamond Certified dryer repair across Sonoma, Marin, and Napa counties. Most repairs done in one visit.
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
              href="/services/washer-dryer-repair"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              About Dryer Repair
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
