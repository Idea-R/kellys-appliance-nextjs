import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: "Right to Repair: Why Kelly's Rebuilds Control Boards Instead of Replacing Them",
  description: "Most shops just swap a $400 control board. We rebuild them. Here's why that matters, and what right to repair really means for your appliances.",
  alternates: {
    canonical: '/blog/right-to-repair-why-kellys-rebuilds-control-boards',
  },
  openGraph: {
    title: "Right to Repair: Why Kelly's Rebuilds Control Boards Instead of Replacing Them",
    description: "Most shops swap a $400 control board. We rebuild them. Here's what right to repair really means for your appliances.",
    url: 'https://kellysappliancerepair.com/blog/right-to-repair-why-kellys-rebuilds-control-boards',
    type: 'article' as const,
  },
};

export default function RightToRepairPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/right-to-repair-why-kellys-rebuilds-control-boards', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Right to Repair: Why Kelly's Rebuilds Control Boards Instead of Replacing Them",
            "description": "Most shops just swap a $400 control board. We rebuild them. Here's why that matters, and what right to repair really means for your appliances.",
            "datePublished": "2026-04-16",
            "dateModified": "2026-04-16",
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
              "@id": "https://kellysappliancerepair.com/blog/right-to-repair-why-kellys-rebuilds-control-boards"
            },
            "image": "https://kellysappliancerepair.com/images/Blogs/joe-control-board-van.webp",
            "articleSection": "Professional Service",
            "wordCount": 1800
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
                "name": "What is the right to repair movement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Right to repair is the idea that when you buy something, you should actually be able to fix it. That means access to parts, schematics, diagnostic tools, and the freedom to bring it to whoever you want for service. For appliances, this matters because manufacturers have been quietly making repair harder for decades. Locked diagnostic modes, parts sold only to authorized dealers, control boards designed as throwaway units. California passed a right to repair law that took effect in 2024, requiring manufacturers to make parts and information available for at least seven years on appliances over $100. It is a step in the right direction, but enforcement is still developing."
                }
              },
              {
                "@type": "Question",
                "name": "What is a control board on an appliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The control board is the brain of your appliance. It is a circuit board with a microcontroller, relays, capacitors, and other components that tells the rest of the machine what to do. When you press start on your washer, the control board fires up the motor, opens the water valves, and runs the cycle. When the board fails, the appliance acts erratic or stops working entirely. Manufacturers usually want you to replace the entire board for $300 to $600 or more. In most cases, only one or two components on the board have actually failed."
                }
              },
              {
                "@type": "Question",
                "name": "Can a control board really be repaired?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in many cases. The most common failures are blown capacitors, burned relays, fried voltage regulators, or cracked solder joints. These are all individually replaceable components. With a multimeter, an oscilloscope, schematic access, and proper soldering equipment, a skilled technician can diagnose which component failed and replace just that part. The repair takes more skill and time than a swap, but it costs the customer a fraction of a new board, and the underlying machine is often good for years more."
                }
              },
              {
                "@type": "Question",
                "name": "Why don't most repair shops do component-level board repair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Three reasons. First, it requires real electronics skill, including reading schematics, identifying surface-mount components, and soldering at a fine scale. Second, manufacturers actively make it harder by withholding schematics and burying diagnostic codes. Third, swapping a whole board is faster and more profitable for shops that just want to turn jobs over quickly. Doing it right takes time, training, and a willingness to dig in. Not every shop is set up for it."
                }
              },
              {
                "@type": "Question",
                "name": "Is repairing better than replacing the appliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Almost always, if the underlying appliance is in good shape. A 5-year-old refrigerator with a bad control board does not need to become landfill. Replacing the whole appliance costs thousands, generates waste, and gives you a new machine with its own learning curve and break-in issues. Repairing the component that actually failed costs less, keeps a working appliance in your home, and is the better outcome for everybody except the manufacturer that wanted to sell you a new unit."
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
              Right to Repair: Why Kelly&apos;s Rebuilds Control Boards Instead of Replacing Them
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>April 16, 2026</span>
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
              A few years back, a customer called us about a five-year-old refrigerator that wasn&apos;t cooling. We came out, ran the diagnostics, and traced it back to the main control board. Two parts on it had failed: a relay that controls the compressor, and a capacitor that had bulged. The fridge itself was fine. Compressor good, sealed system good, condenser good. The brain just had a couple of bad cells.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Whirlpool&apos;s fix? Order a new control board. Five hundred bucks plus labor. The relay alone costs about three dollars. The capacitor maybe fifty cents.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We replaced the relay and the capacitor. Total parts cost: under five dollars. The fridge ran fine for another seven years before the customer finally upgraded to a French door. That&apos;s what right to repair looks like in practice. Not a slogan. A relay, a capacitor, and a soldering iron.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/joe-control-board-van.webp"
                alt="Kelly's Appliance technician Joe Denning diagnosing a control board with a multimeter at the workbench in his service van"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
              <p className="text-sm text-gray-500 mt-2">Kelly&apos;s technician <strong>Joe Denning</strong> diagnosing a control board with a multimeter at the bench in his service van.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Right to Repair Actually Means</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Right to repair is the idea that when you buy something, you should actually be able to fix it. That means access to parts. Access to schematics. Access to diagnostic tools. And the freedom to bring it to whoever you want for service, instead of being forced into the manufacturer&apos;s authorized network at whatever price they decide to charge.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For appliances, this matters because manufacturers have been quietly making repair harder for decades. Diagnostic codes hidden behind dealer-only software. Parts that you can&apos;t buy unless you&apos;re an authorized service provider. Control boards potted in epoxy so nobody can get to the components underneath. Whole machines designed around the assumption that if anything goes wrong, you&apos;ll just buy a new one.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              California passed a right to repair law that took effect in 2024. It requires manufacturers to make parts, tools, and documentation available for at least seven years on appliances priced over $100. That&apos;s a real win for consumers and for shops like ours. But the law is still being tested, and a lot of manufacturers are dragging their feet on compliance. The fight isn&apos;t over.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Control Board Is the Modern Repair Story</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Twenty years ago, an appliance was mostly mechanical. Timers were physical. Switches were physical. When something broke, you replaced a part the size of your fist and got back to work.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Today, almost every appliance is run by a circuit board the size of a paperback book, packed with chips, relays, capacitors, voltage regulators, and dozens of other small components. When you press start on your washer, that board decides what happens. It opens water valves, runs the motor, monitors the load, talks to the temperature sensors. It is the brain.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              And brains, like all electronics, eventually fail. A power surge. A leaking water valve that drips onto the board. A capacitor that just wears out from heat cycling. A solder joint that cracks from years of vibration. The failures are usually small, isolated, and very fixable. But the manufacturer&apos;s answer is almost always the same: order a new board.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Manufacturers Want You to Replace</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A new control board for a high-end refrigerator can cost $400 to $700. Sometimes more. The actual components on that board, if you bought them individually from an electronics supplier, would total maybe $20.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              That&apos;s a massive markup, and it exists because the manufacturer knows most consumers and most repair shops don&apos;t have the skill or the equipment to fix the board itself. The board becomes a single throwaway unit, like a printer cartridge. You don&apos;t fix it. You replace it.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Or worse, the manufacturer says the board isn&apos;t available. Lead times of six to twelve weeks. Sometimes the part has been discontinued and you simply can&apos;t buy a replacement. At that point the customer is told their otherwise-perfect appliance is unrepairable, and they need to buy a new one. That&apos;s not a repair model. That&apos;s a sales model dressed up as a repair model.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/burned-control-board-closeup.webp"
                alt="Macro close-up of an appliance control board showing burned solder pads and a damaged component, the kind of failure Kelly's repairs at the component level"
                width={1200}
                height={900}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">A burned relay footprint on a real control board we serviced. The rest of the board was perfectly good. A full-board swap would have cost $400+. The repair cost a few dollars in parts.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Actually Do Differently</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Kelly&apos;s, when we trace a problem back to a control board, the next question isn&apos;t &ldquo;how much does the board cost?&rdquo; It&apos;s &ldquo;what on the board actually failed?&rdquo;
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              That means putting the board on the bench, pulling out a multimeter and an oscilloscope, and going through the circuit one component at a time. We use schematics when we can get them. We use experience when we can&apos;t. The most common failures are predictable: blown capacitors that bulge or leak, burned relays that show physical damage, fried voltage regulators, cracked solder joints from thermal expansion, and the occasional failed microcontroller.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Most of these are individually replaceable for a few dollars in parts. The skill is in the diagnosis and the soldering. Surface-mount components are small. The boards are dense. You need the right iron, the right flux, and a steady hand. It is real electronics work, not just a parts swap.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Several of our technicians have become adept at component-level board work over the years. Joe Denning, pictured above at the bench in his service van, is one of them. Our service manager Shane Spencer is certified through Master Samurai Tech, one of the few real engineering-grade certifications in the appliance industry. Shane built our component-level repair process and trains the rest of the team on it. Between the right tools, the diagnostic equipment, and the people who know how to use them, a board failure gets a real diagnosis instead of a parts-cannon swap.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/control-board-repair-bench.webp"
                alt="Kelly's Appliance workbench with control board on a holder, hot air rework station, soldering iron, and component tools"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
              />
              <p className="text-sm text-gray-500 mt-2">A typical bench setup our technicians use for component-level work: hot air rework station, fine-tip iron, board holder, and the right tools to actually rebuild a board instead of replacing it.</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Matters for You</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The customer impact is straightforward.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>Cost.</strong> A component-level board repair often runs about a third of what a full board replacement costs. You keep your appliance, you keep more of your money, and you don&apos;t pay the manufacturer&apos;s markup on a part that didn&apos;t need replacing.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>Time.</strong> When the manufacturer&apos;s board is back-ordered, you don&apos;t have to wait six weeks. We can usually source individual components within a day or two. In some cases we have them in our parts inventory in Cotati already.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>Longevity.</strong> A repaired board with new components installed where the failed ones were is often more reliable than a brand new replacement board, because we&apos;ve also addressed any underlying issue that caused the failure in the first place. A leaking inlet valve that fried the original board will still fry a new one if you don&apos;t fix the leak too. We catch that.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>The environment.</strong> Throwing away a working refrigerator because of a fifty-cent capacitor is absurd. Multiply that by every appliance in every home in the country and you start to see why landfills look the way they do. Repair keeps machines in service. That&apos;s not just a business philosophy. It&apos;s the only sane way to think about objects that cost thousands of dollars to make.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When Replacement Is the Right Call</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We&apos;re not going to pretend every board can be saved. Some failures are catastrophic. Lightning strikes can cook a board in ways that aren&apos;t economical to trace and rebuild. Boards potted in epoxy are sometimes physically inaccessible. And sometimes the cost of the diagnosis plus the parts plus the labor adds up to more than just buying a new board, especially on lower-end appliances where the boards are simpler and cheaper to begin with.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The honest answer is: it depends on the board, the failure, and the appliance. We&apos;ll tell you straight what makes sense. If a full board swap is the right call, we&apos;ll do that. If a component-level repair will save you hundreds and add years to the appliance, we&apos;ll do that instead. Same with the bigger question of repair versus replace the whole appliance. There&apos;s a real number where buying new makes more sense, and we&apos;ll tell you when you&apos;ve hit it.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              That&apos;s what an honest repair shop looks like. We don&apos;t up-sell, and we don&apos;t under-sell. We tell you what&apos;s actually wrong and what&apos;s actually worth doing about it.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Parts Counter Connection</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When <Link href="/blog/ape-closing-kellys-parts-expansion" className="text-green-600 hover:text-green-700">APE Appliance Parts on Petaluma Hill Road announced their closure</Link>, we expanded our parts department in Cotati partly because of this same philosophy. People should be able to buy the parts to fix their stuff. DIYers should have a counter to walk up to. Local independent shops should have a place to source parts without going through the manufacturer&apos;s authorized network.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We carry genuine OEM parts for Whirlpool, GE, Samsung, LG, KitchenAid, Maytag, Bosch, Sub-Zero, Wolf, Viking, Thermador, and most other major brands. Whether you&apos;re a homeowner who wants to attempt a repair yourself or a tech from another shop who needs a part fast, our <Link href="/services/parts" className="text-green-600 hover:text-green-700">parts counter</Link> is open. That&apos;s right to repair in another form: making sure the parts are actually available to people who want to use them.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call Kelly&apos;s</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If your appliance is acting weird, throwing error codes, refusing to start, or behaving erratically, the control board is one of the first suspects. Especially on premium brands where the boards are complex and the failure modes are subtle. Don&apos;t accept a quote that says &ldquo;new board needed&rdquo; without a real explanation of which component on the board failed. That&apos;s your right as a consumer, and it&apos;s the question every honest tech should be ready to answer.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has been repairing appliances in Sonoma, Marin, and Napa counties since 1975. We&apos;re Diamond Certified, factory-authorized for all major brands, and we believe in fixing things rather than replacing them whenever it makes sense. If you&apos;ve been told your appliance is unrepairable, we&apos;d like to take a look ourselves before you write that check for a new one.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book a service call online</a>, ask about a <Link href="/services/virtual" className="text-green-600 hover:text-green-700">virtual diagnostic</Link> if you want a second opinion before scheduling an in-home visit, or call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>.
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
              href="/blog/ape-closing-kellys-parts-expansion"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                APE Appliance Parts Is Closing. Kelly&apos;s Expands Parts Department
              </h3>
              <p className="text-gray-600 text-sm">
                After 50 years on Petaluma Hill Road, APE is closing. Here&apos;s how Kelly&apos;s is filling the gap for Sonoma County DIYers.
              </p>
            </Link>
            <Link
              href="/blog/why-you-should-call-a-professional-to-repair-your-appliances"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why You Should Call a Professional to Repair Your Appliances
              </h3>
              <p className="text-gray-600 text-sm">
                Some repairs really do belong in expert hands. Here&apos;s when DIY makes sense and when it doesn&apos;t.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t Replace It. Let Us Take a Look First.
          </h2>
          <p className="text-gray-600 mb-8">
            Component-level repair, factory-authorized service, and 50+ years in Sonoma, Marin, and Napa counties.
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
              href="/services/virtual"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Try a Virtual Diagnostic
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
