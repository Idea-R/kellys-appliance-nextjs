import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: '50 Years of Appliance Repair in Sonoma County: What\'s Changed (And What Hasn\'t)',
  description: 'Five decades of repairing appliances in Sonoma County. How the work has changed, what stayed the same, and what we learned along the way.',
  alternates: {
    canonical: '/blog/50-years-appliance-repair-sonoma-county',
  },
  openGraph: {
    title: '50 Years of Appliance Repair in Sonoma County: What\'s Changed (And What Hasn\'t)',
    description: 'Five decades of repairing appliances in Sonoma County. How the work has changed, what stayed the same, and what we learned along the way.',
    url: 'https://kellysappliancerepair.com/blog/50-years-appliance-repair-sonoma-county',
    type: 'article' as const,
  },
};

export default function FiftyYearsPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/50-years-appliance-repair-sonoma-county', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "50 Years of Appliance Repair in Sonoma County: What's Changed (And What Hasn't)",
            "description": "Five decades of repairing appliances in Sonoma County. How the work has changed, what stayed the same, and what we learned along the way.",
            "datePublished": "2026-06-02",
            "dateModified": "2026-06-02",
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
              "@id": "https://kellysappliancerepair.com/blog/50-years-appliance-repair-sonoma-county"
            },
            "image": "https://kellysappliancerepair.com/images/Blogs/50-years-hero.webp",
            "articleSection": "Community",
            "wordCount": 1800
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
              50 Years of Appliance Repair in Sonoma County
            </h1>
            <p className="text-xl text-green-200 mb-6">What&apos;s changed, and what hasn&apos;t.</p>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 2, 2026</span>
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
              In 1975, the average home refrigerator had no electronics in it at all. The oven was controlled by a mechanical thermostat with a bulb full of liquid that expanded with heat. A washing machine timer was a literal clock with metal cams that opened and closed circuits as it ticked. If something broke, you replaced the broken part. That was the whole job.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s opened that year, on the southern edge of Cotati. Mark Kelly joined in 1983 and took over ownership in 1990. He&apos;s still here. He&apos;ll tell you he&apos;s seen more change in the appliance industry in the last fifteen years than in the first thirty-five combined.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We thought it was worth a few minutes to look back at what fifty years in this work has actually looked like. Not in a nostalgic way. More in a &quot;here&apos;s what we&apos;ve had to learn, and here&apos;s why we&apos;re still around&quot; way.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/Blogs/50-years-hero.webp"
                alt="A vintage 1970s mechanical appliance control panel side by side with a modern touchscreen display, showing the evolution of household appliance technology"
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mx-auto"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Brands Have Come and Gone</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              In the late seventies and early eighties, the dominant brands in this area were Westinghouse, Frigidaire, General Electric, and Maytag. People bought them because they were American-made, built to last, and the repair shop down the road could fix them. A typical service call was for a Whirlpool washer drive belt or a Frigidaire fridge defrost timer. Common parts, common problems, manageable cost.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The nineties brought Sub-Zero and Viking into Sonoma County kitchens at a level we hadn&apos;t seen before. Wine country was getting wealthier, kitchens were getting bigger, and the standard for what a refrigerator should look like changed. We started taking calls on $8,000 Sub-Zeros with custom panels and dual compressors. The work got more technical because the appliances got more technical.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The 2000s brought Bosch and Miele to the dishwasher conversation. Then LG and Samsung came in hard on the lower-to-mid tier and changed everything about pricing and electronic complexity. Today our service calls cover everything from a 30-year-old Whirlpool that&apos;s still going to a 6-month-old Samsung with a control board issue. Three generations of appliance technology, all in active use, all needing repair.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The interesting part: the older appliances are often easier to fix. Fewer parts, simpler logic, a problem you can usually see. A 1985 Maytag washer that won&apos;t spin almost always points to one of three things and you can diagnose it in twenty minutes. A 2024 Samsung washer that won&apos;t spin can be a sensor, a board, a motor, a drain pump, a control button, or a software bug, and it&apos;ll take longer to figure out which.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mechanical-to-Electronic Shift</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              For the first twenty-five years Mark was in this business, fixing an appliance meant fixing a machine. Belts, springs, motors, valves, timers, switches. You could open a washer and see exactly what was happening. The hard part was knowing which spring tension was correct or which capacitor value matched the motor, but the diagnostic work was visual and physical.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Starting around 2005, electronics took over. The mechanical timer became a microcontroller. The thermostat became a thermistor reading into a control board. The motor became an inverter-driven brushless DC unit talking to the main board over a serial bus. You can&apos;t see what&apos;s wrong anymore. You have to read it.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This is the part of the job that has changed Kelly&apos;s the most. We had to learn to read schematics for circuit boards we&apos;d never seen before. We had to invest in oscilloscopes and serial bus testers. We had to start training on component-level board repair because manufacturers were quoting customers $600 for a board that had a $0.50 capacitor fail. We wrote about that work in our <Link href="/blog/right-to-repair-why-kellys-rebuilds-control-boards" className="text-green-600 hover:text-green-700">Right to Repair piece</Link> earlier this year.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Some of our newer technicians grew up with this. They&apos;re comfortable with the electronics from the start. Some of our longer-tenured guys (and Mark himself) had to learn it on the job, and it took time. We respect both paths. The mechanical knowledge still matters, because half the time the electronic complaint is actually a mechanical problem the sensors are reporting. Knowing both is what makes a real technician.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Parts Supply Has Gotten Harder, Not Easier</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              You would think the internet would have solved parts sourcing. In some ways it has. In others, it&apos;s gotten worse. Manufacturers used to make their parts available to any service shop. Now many of them restrict parts to authorized servicers only, which means a homeowner can&apos;t buy a replacement gasket for their own fridge without going through a hoop, and an independent shop can&apos;t compete on price for the brands they aren&apos;t authorized on.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              California&apos;s right-to-repair law that came into effect in 2024 helped some. Manufacturers now have to make parts and documentation available for seven years on appliances over $100. But enforcement is uneven and we still hit cases where a part is &quot;available&quot; in theory but actually has a 12-week lead time, which doesn&apos;t help a customer whose refrigerator is currently warm.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The closing of <Link href="/blog/ape-closing-kellys-parts-expansion" className="text-green-600 hover:text-green-700">APE Appliance Parts on Petaluma Hill Road</Link> last year was a real loss. APE had been here as long as Kelly&apos;s. They had walls of parts you could just walk in and buy. When they shuttered, a chunk of local DIY-able appliance repair went with them.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We expanded our <Link href="/services/parts" className="text-green-600 hover:text-green-700">parts counter</Link> in Cotati partly to fill that gap. It is not a complete replacement for what APE was, and we&apos;ll be honest about that. But it gives Sonoma County back a local place to walk in and get a part, and that matters.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Customer Has Changed Too</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              People used to call us when something broke. Now they Google it, watch a YouTube video, try one thing, then call us. Sometimes that goes well. They&apos;ve narrowed down the problem and can tell us exactly what code the oven threw, which saves us time on the call. Sometimes it goes badly. They&apos;ve disassembled half the dryer and lost three screws and now we have to take it further apart to find them.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We don&apos;t mind either way. Honest. The DIY culture is good. It saves people money on the easy stuff and it makes them better informed when something is genuinely above their comfort level. Our job is to be there when they hit the limit of what they can do, not to gate-keep simple repairs.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The biggest customer-side shift in the last five years has been the rise of the property manager and short-term-rental owner. A meaningful fraction of our work now is for landlords coordinating repairs at properties they don&apos;t live in, with tenants they need to schedule around. That changed how we book appointments. Our <Link href="/schedule-prep" className="text-green-600 hover:text-green-700">online appointment form</Link> has a property-manager toggle on it specifically because of how often we book that pattern.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We also serve more vacation homes than we used to. Healdsburg, the Russian River area, parts of Sonoma. Customers who fly in for the weekend and need their fridge working by Friday. Different rhythm, different scheduling. We adjust.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Hasn&apos;t Changed</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The basics. You still need to actually answer the phone when someone calls. You still need to show up when you say you will. You still need to tell a customer the truth about whether something is worth repairing or whether they&apos;d be better off replacing it.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We&apos;ve seen a lot of repair shops come and go in fifty years. The ones that didn&apos;t make it usually didn&apos;t fail on technical skill. They failed on being hard to get hold of, being late to appointments, or being shifty about pricing. The technical work matters, but reliability matters more.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Mark says the single most important thing he&apos;s learned in over four decades doing this is that customers remember how you treated them long after they&apos;ve forgotten what was wrong with their oven. That sounds like a cliché until you&apos;ve serviced three generations of the same family because the grandkids remember their grandparents using Kelly&apos;s.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              We get those calls. Someone whose mom or dad used us in the 1990s, who now owns a home in Petaluma or Santa Rosa or Novato and has a Whirlpool that won&apos;t drain. They remember the name. That&apos;s the long version of why we&apos;re still here.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking Forward</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The next ten years will bring more electronics, more connected appliances, more AI assistance in diagnosis, and more pressure on the right-to-repair fight. We&apos;ll keep training. We&apos;ll keep stocking parts. We&apos;ll keep showing up.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              We&apos;ll also keep being a small, local, family-run shop. We have no plans to expand into a regional chain or get acquired by a private equity firm. The team here knows each other. The customers know us. That&apos;s not a coincidence and it&apos;s not an accident. It&apos;s the choice we keep making.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Thanks for fifty years, Sonoma County. We&apos;ll see you on the next service call.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Repair?</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center serves Sonoma, Marin, and Napa counties from our shop in Cotati. We&apos;re Diamond Certified, factory authorized for every major brand, and family-run since 1975. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book online here</a>, call us at <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>, or stop by the <Link href="/services/parts" className="text-green-600 hover:text-green-700">parts counter</Link> if you&apos;re tackling a repair yourself and need help finding the right component.
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
                After 50 years on Petaluma Hill Road, APE is closing. Here&apos;s how Kelly&apos;s is filling the gap.
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
                Component-level board repair, the right-to-repair fight, and what changes for the customer.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Family-Owned, Diamond Certified, Since 1975
          </h2>
          <p className="text-gray-600 mb-8">
            Sonoma, Marin, and Napa counties. We&apos;ll see you on the next service call.
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
              href="/about-us/our-team"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
