import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Is Your Oven Not Heating Properly? Common Causes and Fixes',
  description: 'Discover why your oven might not be heating correctly and when you need a professional repair. Covers electric and gas oven troubleshooting.',
  alternates: {
    canonical: '/blog/is-your-oven-not-heating-properly-common-causes-and-fixes',
  },
};

export default function OvenHeatingPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/is-your-oven-not-heating-properly-common-causes-and-fixes', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Is Your Oven Not Heating Properly? Common Causes and Fixes",
            "description": "Discover why your oven might not be heating correctly and when you need a professional repair. Covers electric and gas oven troubleshooting.",
            "datePublished": "2026-02-18",
            "dateModified": "2026-02-18",
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
              "@id": "https://kellysappliancerepair.com/blog/is-your-oven-not-heating-properly-common-causes-and-fixes"
            },
            "image": "https://kellysappliancerepair.com/images/oven-repair.webp",
            "articleSection": "Oven Repair",
            "wordCount": 900
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
                "name": "Why is my oven not heating up?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The most common causes of an oven not heating up include a faulty heating element (electric ovens), a worn-out igniter (gas ovens), a broken temperature sensor, thermostat calibration issues, or a malfunctioning control board. In some cases, damage from the self-cleaning cycle can also prevent proper heating."
                }
              },
              {
                "@type": "Question",
                "name": "Can I replace an oven heating element myself?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While some homeowners attempt DIY heating element replacement, it is generally recommended to hire a professional technician. Ovens involve high-voltage electrical connections and, in the case of gas models, natural gas lines. Improper installation can create serious safety hazards including electrical shock, gas leaks, or fire. A factory-authorized technician can ensure the correct part is installed safely."
                }
              },
              {
                "@type": "Question",
                "name": "How long do ovens typically last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most ovens last between 10 and 15 years with proper care. Regular maintenance, including keeping the interior clean, replacing worn seals, and addressing minor issues promptly, can extend the lifespan of your oven significantly. Scheduling annual professional inspections is one of the best ways to maximize your oven's longevity."
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
              Is Your Oven Not Heating Properly? Common Causes and Fixes
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>February 18, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>5 min read</span>
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
              Your oven is the heart of your kitchen. Whether you&apos;re baking a birthday cake, roasting vegetables for a weeknight dinner, or preparing a holiday feast, a properly functioning oven is essential. So when you preheat your oven only to find that it&apos;s not reaching the right temperature, it can throw your entire routine off track. Oven heating problems are among the most common appliance issues homeowners encounter, and the good news is that most of them are diagnosable and repairable.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              At <Link href="/" className="text-green-600 hover:text-green-700">Kelly&apos;s Appliance Center</Link>, our factory-authorized technicians have been diagnosing and repairing ovens across Sonoma, Marin, and Napa counties for over 50 years. Below, we&apos;ll walk you through the most common reasons your oven might not be heating properly and what you can do about each one.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/oven-repair.webp"
                alt="Technician repairing an oven"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Faulty Heating Element</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              In electric ovens, the bake element at the bottom and the broil element at the top are responsible for generating heat. Over time, these elements can burn out, develop cracks, or show visible blistering. When a heating element fails, you may notice that your oven takes much longer to preheat, heats unevenly, or doesn&apos;t heat at all. A clear sign of a failed element is visible damage: look for breaks, holes, or spots where the element appears to have bubbled or separated.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> Turn on your oven and visually inspect the bake and broil elements. A functioning element should glow red evenly across its entire surface. If you see dark spots, breaks, or no glow at all, the element needs to be replaced. This is one of the most common <Link href="/services/oven-repair" className="text-green-600 hover:text-green-700">oven repairs</Link> our technicians perform, and it typically takes less than an hour when you have the correct replacement part.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Igniter Problems</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you have a gas oven, the igniter is the component that lights the gas to produce heat. Gas oven igniters weaken over time and eventually fail to draw enough electrical current to open the safety gas valve. You might hear the familiar clicking sound when you turn the oven on, but the gas never actually lights. In other cases, the igniter may produce a weak, inconsistent flame that doesn&apos;t heat the oven cavity evenly. A weak igniter can also cause a noticeable gas smell before the oven finally lights, which is both unpleasant and potentially dangerous.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> Watch the igniter when you turn on the oven. It should glow bright orange or white and ignite the gas within 90 seconds. If it glows dimly or takes significantly longer, the igniter is weakening and should be replaced by a qualified technician. Because this repair involves working with gas lines, we strongly recommend professional service to ensure safe installation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Broken Temperature Sensor</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The temperature sensor, also known as the oven temperature probe, monitors the internal temperature and communicates with the control board to regulate heat. When this sensor malfunctions, your oven may overheat and burn food, significantly undercook dishes, or fluctuate wildly between temperatures. You might set your oven to 350 degrees only to find that cookies are scorching in eight minutes or a casserole is still cold after an hour.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> Check that the sensor probe inside the oven cavity isn&apos;t touching the interior wall, as direct contact can cause inaccurate readings. You can test the sensor with a multimeter to verify its resistance matches the manufacturer&apos;s specifications. If the readings are off, the sensor needs to be replaced. Our team stocks <Link href="/services/parts" className="text-green-600 hover:text-green-700">genuine replacement parts</Link> for all major oven brands, so repairs can often be completed in a single visit.
            </p>

            <div className="text-center my-8">
              <Image
                src="/images/modern-kitchen.webp"
                alt="Modern kitchen with oven and appliances"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Thermostat Calibration Issues</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The thermostat controls the temperature setting in your oven, and over years of use it can drift out of calibration. When the thermostat is miscalibrated, the temperature inside the oven doesn&apos;t match the number on the dial or digital display. You might set the oven to 400 degrees, but an oven thermometer reveals it&apos;s only reaching 350. This discrepancy may seem minor, but it can dramatically affect baking results, especially for recipes that require precise temperatures.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> Place a standalone oven thermometer inside and compare it to the set temperature after the oven has fully preheated. Some ovens allow you to recalibrate the thermostat through the settings menu. If the offset is significant or the thermostat is faulty, a professional calibration or replacement is the most reliable fix. Our Diamond Certified technicians can diagnose the exact offset and make precise adjustments.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Control Board Malfunction</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Modern ovens rely on an electronic control board to manage heating cycles, temperature regulation, and cooking programs. When the control board fails, you may see error codes on the digital display, experience unresponsive buttons, or find that the oven shuts off unexpectedly mid-cycle. Electrical surges, moisture exposure, and general wear can all cause control board failures. In some cases, the oven may appear completely dead even though it&apos;s receiving power.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> Start by resetting the oven: turn off the circuit breaker for one minute, then turn it back on. If error codes persist or the oven remains unresponsive, the control board likely needs professional diagnosis. Control board replacement requires specialized knowledge and precise wiring, so this is a repair best left to an experienced technician. <a href="/schedule-prep" data-analytics-label="book_appointment" className="text-green-600 hover:text-green-700">Schedule a service call</a> to get an accurate diagnosis.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Self-Cleaning Cycle Damage</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The self-cleaning cycle heats your oven to extremely high temperatures, often exceeding 800 degrees Fahrenheit, to burn off grease and food residue. While convenient, this intense heat can take a toll on sensitive components. Door lock mechanisms, thermal fuses, heating elements, and even control boards can be damaged during a self-cleaning cycle. Many homeowners discover that their oven stops working properly immediately after running a self-clean, which often comes as an unwelcome surprise.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong> If your oven stopped heating after a self-cleaning cycle, check the thermal fuse first. A blown thermal fuse will prevent the oven from heating entirely and is a relatively simple replacement. To prevent future damage, consider running shorter self-cleaning cycles or manually cleaning your oven with approved cleaners instead. If the problem goes beyond a blown fuse, contact our <Link href="/services/oven-repair" className="text-green-600 hover:text-green-700">oven repair team</Link> for a thorough inspection.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Professional</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Some basic troubleshooting, like checking for a tripped breaker, inspecting heating elements visually, or testing with an oven thermometer, can be done safely at home. However, any repair that involves electrical wiring, gas connections, or component replacement should be handled by a trained professional. Attempting these repairs without the right tools and expertise can void your warranty, damage the appliance further, or create serious safety hazards.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At Kelly&apos;s Appliance Center in Cotati, California, we&apos;ve been the trusted appliance repair choice for families across Sonoma, Marin, and Napa counties for more than 50 years. As a Diamond Certified company with factory-authorized technician status for all major brands, we have the training, tools, and genuine parts to get your oven back to peak performance quickly.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Don&apos;t let a malfunctioning oven disrupt your kitchen. <a href="/schedule-prep" data-analytics-label="book_appointment" className="text-green-600 hover:text-green-700">Book an appointment online</a> or give us a call to schedule a convenient service visit. Our experienced technicians will diagnose the issue, explain your options, and complete the repair right the first time.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/how-often-should-you-service-your-home-appliances" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  How Often Should You Service Your Home Appliances?
                </h4>
                <p className="text-gray-600 text-sm">
                  Learn the recommended maintenance schedules for all your major home appliances.
                </p>
              </div>
            </Link>
            <Link href="/blog/top-5-tips-for-buying-a-home-appliance" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Top 5 Tips for Buying a Home Appliance
                </h4>
                <p className="text-gray-600 text-sm">
                  Expert advice on choosing the right appliance for your home and budget.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional Oven Repair?
          </h2>
          <p className="text-gray-600 mb-8">
            Kelly&apos;s Appliance Center has been serving Sonoma, Marin, and Napa counties for over 50 years. Diamond Certified and factory authorized for all major brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule-prep"
              data-analytics-label="book_appointment"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
