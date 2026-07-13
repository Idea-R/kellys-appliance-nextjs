import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Oven Not Heating? 6 Things to Check Before You Call a Repair Tech',
  description: 'Your oven won\'t heat up and dinner is in jeopardy. Here are the 6 things to check first, which you can fix yourself, and when it\'s time to call a pro.',
  alternates: {
    canonical: '/blog/oven-not-heating-6-things-to-check',
  },
  openGraph: {
    title: 'Oven Not Heating? 6 Things to Check Before You Call a Repair Tech',
    description: 'Your oven won\'t heat up and dinner is in jeopardy. 6 things to check first, which you can fix yourself, and when to call a pro.',
    url: 'https://kellysappliancerepair.com/blog/oven-not-heating-6-things-to-check',
    type: 'article' as const,
  },
};

export default function OvenNotHeatingPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/oven-not-heating-6-things-to-check', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Oven Not Heating? 6 Things to Check Before You Call a Repair Tech",
            "description": "Your oven won't heat up and dinner is in jeopardy. 6 things to check first, which you can fix yourself, and when to call a pro.",
            "datePublished": "2026-06-01",
            "dateModified": "2026-06-01",
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
              "@id": "https://kellysappliancerepair.com/blog/oven-not-heating-6-things-to-check"
            },
            "image": "https://kellysappliancerepair.com/images/Blogs/oven-not-heating-hero.webp",
            "articleSection": "Oven Repair",
            "wordCount": 2000
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Diagnose an Oven That Won't Heat",
            "description": "Six checks you can run yourself before calling a repair technician, in order from easiest to most involved.",
            "step": [
              { "@type": "HowToStep", "name": "Check the power source", "text": "Confirm the breaker hasn't tripped (electric) or that the gas valve is open and the range still cooks on the stovetop (gas)." },
              { "@type": "HowToStep", "name": "Inspect the bake element", "text": "On an electric oven, pull the racks and look at the bake element on the floor of the oven for cracks, blistering, or bright spots." },
              { "@type": "HowToStep", "name": "Watch the igniter glow", "text": "On a gas oven, set it to bake and watch the igniter through the bottom drawer. A weak orange glow means it's failing." },
              { "@type": "HowToStep", "name": "Test the door seal", "text": "Run your hand around the closed door for hot air leaks, and check the gasket for cracks or compression damage." },
              { "@type": "HowToStep", "name": "Verify temperature accuracy", "text": "Use a separate oven thermometer to check actual vs. set temperature. A 50°F-plus gap usually points to a bad sensor." },
              { "@type": "HowToStep", "name": "Look for error codes", "text": "Note any F-codes or error messages on the display, then look up your model's code list before swapping any parts." }
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
                "name": "Why is my electric oven not heating but the stovetop still works?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Stovetop burners and oven heating elements run on separate circuits inside the range. If the cooktop works but the oven doesn't, the most likely causes are a failed bake element, a tripped breaker on the oven circuit, a faulty temperature sensor, or a control board issue. Start by inspecting the bake element on the floor of the oven for visible damage, then move to the breaker and sensor checks."
                }
              },
              {
                "@type": "Question",
                "name": "How do I know if my oven igniter is bad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Set the oven to bake at 350°F and watch the igniter through the bottom storage drawer. A healthy igniter glows bright orange within 60-90 seconds and then opens the gas valve to ignite the burner. A weak or dim glow, or no glow at all within 2 minutes, means the igniter is failing. Bad igniters are the single most common cause of a gas oven that won't heat. It's a relatively quick repair for a technician."
                }
              },
              {
                "@type": "Question",
                "name": "Can I replace an oven heating element myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "On a standard electric oven, yes. It's two screws and two wire connections, with the oven unplugged and the breaker off. The harder part is making sure you order the correct element for your specific model. Use the model number on the door frame or behind the bottom drawer, not the generic appliance type. If the element looks fine and the oven still doesn't heat, the problem is elsewhere (sensor, control board, or wiring) and a tech is the better call."
                }
              },
              {
                "@type": "Question",
                "name": "Why does my oven take forever to preheat or not reach the set temperature?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Three common causes: a worn door gasket letting heat escape, a failing temperature sensor reporting wrong values to the control board, or a heating element that's degraded but not fully dead. Use an independent oven thermometer to check the actual temperature against the set point. A 25-50°F gap is fixable through calibration on most modern ovens. Larger gaps usually need a part replacement."
                }
              },
              {
                "@type": "Question",
                "name": "Is it worth repairing an oven that won't heat, or should I replace it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most ovens under 12-15 years old, repair is the better call. The two most common fixes (bake element on electric, igniter on gas) run a couple hundred dollars and add 5-10 years to the appliance. Replacing a built-in oven or premium range (Sub-Zero, Wolf, Thermador, Viking) is far more expensive than fixing it. Replacement only makes sense if multiple major components have failed or the oven is older than 20 years."
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
              Oven Not Heating? 6 Things to Check Before You Call a Repair Tech
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 1, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>9 min read</span>
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
              You preheated the oven 20 minutes ago. Dinner&apos;s on the counter. You open the door and it&apos;s barely warm. Or the temperature display says 375 but the food sitting inside disagrees.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              An oven that won&apos;t heat is one of the most stressful appliance problems, especially right before a holiday or a dinner party. The good news: about half the time, the cause is something you can diagnose in 10 minutes with a flashlight. The other half is a real repair, but knowing which is which saves you a service call.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here are the six things to check in order, from easiest to most involved. Each one tells you something useful even if it doesn&apos;t turn out to be the cause.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/oven-not-heating-hero.webp"
                alt="A modern kitchen oven with the door slightly ajar showing dim interior, suggesting it's not heating properly"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Start With the Power Source</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Sounds obvious, but it&apos;s the most common cause we see, and it&apos;s the first thing to rule out. On an electric oven, check your breaker panel. Ovens run on a 240V circuit with a double-pole breaker, and sometimes only <em>half</em> the breaker trips. That&apos;s why you can have lights and the clock display still working but no heat. The clock runs on 120V from one leg; the heating elements need both legs. Flip the breaker fully off, then back on, and try again.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              On a gas oven, the stovetop burners and the oven itself share the same gas line. If your cooktop is cooking fine but the oven isn&apos;t heating, gas supply isn&apos;t the issue. If neither works, check that the main gas valve to the range is fully open and the pilot (on older models) is lit. New ranges don&apos;t have pilot lights, but they still need 120V to power the igniter and control board, so check the outlet behind the range too.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> If you reset the breaker and it trips again immediately, stop. That&apos;s a short somewhere in the oven and not a homeowner fix. Call us before flipping it a third time.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Inspect the Bake Element (Electric Ovens)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The bake element is the loop of metal on the floor of your oven. When it&apos;s working, it glows red-orange like a stovetop coil. When it&apos;s broken, you&apos;ll usually see one of three things: a visible crack, a bright spot or blister, or in worst cases an actual hole where the element burned through.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Pull out the racks, grab a flashlight, and look closely. A healthy element is a smooth, dark, uniform black metal. A failing one looks rough, has discoloration, or has chunks missing. If you see damage, that&apos;s your problem. The element only heats when both 120V legs of the circuit complete through it. Once it&apos;s damaged, the circuit either doesn&apos;t complete (no heat at all) or arcs intermittently (heats some, then quits).
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Some ovens have a separate broil element at the top. If your oven broils fine but won&apos;t bake, the bake element is almost certainly the culprit. If neither one works, it&apos;s usually further upstream (sensor, control board, or relay).
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Replacing a bake element is straightforward (two screws and two wire connectors) but only if you have the correct part. Get the model number from the door frame or behind the bottom drawer, not just the brand. We stock common bake elements at our <Link href="/services/parts" className="text-green-600 hover:text-green-700">parts counter in Cotati</Link>, or we&apos;ll bring one with the tech if you book a <Link href="/services/oven-repair" className="text-green-600 hover:text-green-700">repair visit</Link>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Watch the Igniter Glow (Gas Ovens)</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              On gas ovens, the igniter is the single most common failure point. It&apos;s a small ceramic device that glows red-orange when current passes through it, gets hot enough to ignite the gas, and opens the safety valve. Igniters wear out gradually. They get weaker over years of cycling on and off, until eventually they can&apos;t pull enough current to open the valve, and the oven just sits there warm-ish but never lights.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Here&apos;s how to test it without a multimeter. Set the oven to bake at 350°F. Pull out the bottom storage drawer (most gas ranges store it there) and shine a flashlight up under the oven floor. You should be able to see the igniter glow. Within 60-90 seconds it should be bright orange, then the gas should ignite with a soft whoosh. If the igniter glows weakly, dim red, or takes more than 2 minutes, it&apos;s failing. If it glows at all but never lights, it&apos;s definitely the igniter.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Igniter replacement involves disconnecting and reconnecting a gas line, which we never recommend as a DIY job. The igniter itself is around $50 in parts, but the safety check on the gas connection afterward is what justifies the service call. A tech can replace an igniter and verify the seal in about 30 minutes. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a visit here</a>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Check the Door Seal</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This one surprises people. An oven that heats but can&apos;t hold temperature is often a door problem, not an element problem. If the rubber gasket around the oven door is cracked, compressed, or pulled loose, heat escapes faster than the element can replace it. The oven runs constantly but never quite gets to temperature.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              With the oven warm (not blazing hot), run your hand around the closed door: top, sides, bottom. You should feel essentially no warm air escaping. If there&apos;s a noticeable warm stream coming out at any point along the seal, that&apos;s your leak. Now pull the oven door open and look at the gasket. It should be soft, intact, and lay flat against the front of the oven cavity. Common problems: a piece pulled out at a corner, compression flat from years of slamming, or a crack from heat cycling.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Also check the door hinges. Modern oven doors are heavy, and the spring-loaded hinges weaken over time. A door that doesn&apos;t close fully square (even a quarter-inch gap at one corner) lets out a surprising amount of heat. Open the door fully and let it fall closed under its own weight. It should feel firm and close completely. If it stops short, hinges need attention.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Gaskets are model-specific and you have to feed them into the right channels around the cavity. Hinges are even more particular and require lifting the door off, which on premium brands like Wolf or Thermador can be a two-person job. We <Link href="/services/oven-repair" className="text-green-600 hover:text-green-700">replace door seals and hinges</Link> regularly and stock common parts.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/oven-door-seal-check.webp"
                alt="Close-up of an oven door rubber gasket showing wear and a small gap where heat could escape"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Verify the Temperature Sensor</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The temperature sensor (a thin metal probe that sticks into the upper-back of the oven cavity) tells the control board what temperature the oven is actually at. The board uses that reading to decide when to turn the element on and off. When the sensor drifts, it tells the board the wrong number, and the oven either runs too hot, too cold, or shuts off prematurely thinking it&apos;s at temp when it isn&apos;t.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The easiest at-home test: get a separate, freestanding oven thermometer (around $10 at any hardware store, even Target has them). Set your oven to 350°F, let it preheat for 15 minutes, then check what the freestanding thermometer reads. If your oven is set to 350°F but the thermometer reads 285°F or 410°F, the sensor is suspect.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Most modern ovens have a calibration setting in the menu that lets you compensate for a small drift (up to about 35°F off). If you&apos;re closer to 50°F or more out of spec, the sensor itself needs replacement. The good news is sensors are inexpensive and a quick swap.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> If the sensor reads way off (like the oven thinks it&apos;s at 600°F when it&apos;s actually at room temperature), that&apos;s a wiring or board issue, not the sensor itself. Don&apos;t try to fix that one. The oven could overheat dangerously. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Schedule a service call</a> and stop using it until then.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Check for Error Codes on the Display</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If the oven&apos;s display is showing an F-code (F1, F2, F3, F0E1, etc.) or any blinking error message, write it down. Those codes are diagnostic gold. Each manufacturer has a list of what their codes mean. They&apos;re basically the oven telling you what it thinks is wrong.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Common patterns we see:
            </p>
            <ul className="mb-4 text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li><strong>F1 or F2:</strong> Usually a sensor or thermistor issue (see item 5)</li>
              <li><strong>F3:</strong> Often the control board can&apos;t talk to the sensor, could be wiring</li>
              <li><strong>F5:</strong> Door latch issue, common after a self-clean cycle</li>
              <li><strong>E-codes:</strong> Brand-specific. Look up your make/model online with the exact code</li>
            </ul>
            <p className="mb-4 text-gray-700 leading-relaxed">
              One important tip: do NOT just google &quot;F2 code.&quot; Every manufacturer uses different code numbers for different things. A Whirlpool F2 and a GE F2 mean different things. Look up <em>your specific brand and model</em>. Need to find your model number? We have a <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700">quick guide for finding it</Link>.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>When to call a pro:</strong> Most modern oven failures end at the control board, and on premium brands the boards can be $400-700 to replace. Before you spend that, get a tech to confirm the board is actually the issue. Sometimes the code points at a different component the board can&apos;t reach. We <Link href="/blog/right-to-repair-why-kellys-rebuilds-control-boards" className="text-green-600 hover:text-green-700">rebuild boards at the component level</Link> when it makes sense, which can save you hundreds.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Few Things People Try That Don&apos;t Work</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Before we wrap up, three myths worth busting:
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>Running the self-clean cycle to &quot;reset&quot; the oven.</strong> Self-clean is brutal on ovens. It runs the cavity up to 900°F+ and stresses every component: sensors, gaskets, locks, control boards. We see more ovens come in for repair right after a self-clean than at any other time. If your oven is already not heating, don&apos;t add a self-clean cycle to its list of problems.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>Unplugging the oven for a few minutes to &quot;reboot&quot; it.</strong> This sometimes clears a transient software glitch on modern ovens. Worth trying once. But if it works once and the problem comes right back, you have a real hardware issue and the reboot is just delaying the diagnosis.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Spraying contact cleaner into the control panel.</strong> Don&apos;t. Modern control panels are sealed and contact cleaner can damage the electronics inside. If you suspect a button isn&apos;t responding, that&apos;s a control panel replacement, not a cleaning issue.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When It&apos;s Time to Call Kelly&apos;s</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Most oven repairs are quick when you know what you&apos;re looking at. A bake element swap takes 20 minutes. An igniter is 30. A sensor is 15. The slow part is figuring out which one it actually is, which is what the six checks above help you do.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you ran through them and you have a suspect, great. You can either tackle it yourself if it&apos;s in your comfort zone, or call us and tell us what you found. The diagnosis you did saves us time and saves you money. If you&apos;re not sure, that&apos;s fine too. That&apos;s what we&apos;re here for.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has been repairing ovens in Sonoma, Marin, and Napa counties since 1975. We&apos;re Diamond Certified, factory authorized for Sub-Zero, Wolf, Thermador, Viking, Bosch, KitchenAid, and every major brand, and we carry common oven parts on our trucks so a lot of repairs finish in a single visit.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book an oven repair online</a> or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>. If you&apos;re not sure whether to book yet, try a <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual diagnostic</Link>. It&apos;s 15 minutes on a video call with a technician for $40, and we can usually tell you whether you need a service visit or whether there&apos;s a quick fix you can do yourself.
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
              href="/blog/is-your-oven-not-heating-properly-common-causes-and-fixes"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is Your Oven Not Heating Properly? Common Causes and Fixes
              </h3>
              <p className="text-gray-600 text-sm">
                A deeper dive into oven heating problems by appliance type. Covers electric, gas, and dual-fuel ranges.
              </p>
            </Link>
            <Link
              href="/blog/right-to-repair-why-kellys-rebuilds-control-boards"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Right to Repair: Why Kelly&apos;s Rebuilds Control Boards Instead of Replacing Them
              </h3>
              <p className="text-gray-600 text-sm">
                Most shops swap a $400 board. We rebuild them at the component level. Here&apos;s why and what it saves you.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Oven Repair in Sonoma, Marin, or Napa?
          </h2>
          <p className="text-gray-600 mb-8">
            Diamond Certified, factory authorized, family-owned since 1975. Most oven repairs finish in a single visit.
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
              href="/services/oven-repair"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              About Our Oven Repair Service
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
