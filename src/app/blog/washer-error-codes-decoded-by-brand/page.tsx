import React from 'react';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import Breadcrumbs from '@/components/Breadcrumbs';
import { generateBreadcrumbs } from '@/lib/breadcrumbs';

export const metadata = {
  title: 'Washer Error Codes Decoded: LG, Samsung, Whirlpool, Maytag & GE',
  description: 'Your washer is flashing an error code. Look it up here by brand. We cover the most common codes for LG, Samsung, Whirlpool, Maytag, and GE. What each means and what to do about it.',
  alternates: {
    canonical: '/blog/washer-error-codes-decoded-by-brand',
  },
  openGraph: {
    title: 'Washer Error Codes Decoded: LG, Samsung, Whirlpool, Maytag & GE',
    description: 'Your washer is flashing an error code. Look it up here by brand. Common codes for all major brands.',
    url: 'https://kellysappliancerepair.com/blog/washer-error-codes-decoded-by-brand',
    type: 'article' as const,
  },
};

export default function WasherCodesPostPage() {
  const breadcrumbs = generateBreadcrumbs('/blog/washer-error-codes-decoded-by-brand', metadata.title);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Washer Error Codes Decoded: LG, Samsung, Whirlpool, Maytag & GE",
            "description": "Your washer is flashing an error code. Look it up here by brand. We cover the most common codes for LG, Samsung, Whirlpool, Maytag, and GE.",
            "datePublished": "2026-06-05",
            "dateModified": "2026-06-05",
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
              "@id": "https://kellysappliancerepair.com/blog/washer-error-codes-decoded-by-brand"
            },
            "articleSection": "Washer Repair",
            "wordCount": 2800
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
                "name": "Why does my washer show an error code?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Modern washers monitor every cycle with sensors that detect water level, water temperature, drum balance, door lock, motor RPM, and drain status. When a sensor reading is outside the expected range, the control board halts the cycle and displays a code instead of risking damage. Codes are diagnostic shortcuts. They tell you which part of the system reported a problem, not necessarily which part is broken. A drain error could mean a clogged hose, a failed pump, or a faulty pressure sensor."
                }
              },
              {
                "@type": "Question",
                "name": "Can I reset a washer error code without calling a repair tech?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most washers will reset if you unplug them for 1-2 minutes and plug them back in. This clears transient errors caused by power glitches or one-off sensor hiccups. If the code returns when you start a new cycle, you have a real problem and a reset won't fix it. Don't keep resetting and running cycles repeatedly. You can sometimes damage components by forcing a system that has already detected a fault."
                }
              },
              {
                "@type": "Question",
                "name": "What's the most common washer error code we see?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Drain errors are by far the most common across every brand. LG OE, Samsung 5C/SC, Whirlpool F9E1, Maytag F9E1, GE drain error. They all indicate the washer can't pump water out in the expected time. About 70% of drain errors are caused by something in the drain pump filter (a sock, a hair tie, a coin), 20% by a kinked or clogged drain hose, and 10% by an actual failed drain pump. Always check the filter first."
                }
              },
              {
                "@type": "Question",
                "name": "Are washer error codes the same across brands?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, and this trips people up constantly. An F2 error means completely different things on a Whirlpool vs. a GE. LG uses a letter-letter code system (OE, LE, UE), Samsung uses combinations like 4C and 5C, Whirlpool uses F-codes with sub-numbers (F8E1), and Maytag uses similar F-codes but with different meanings. Always look up your specific brand and model. Don't trust a generic code lookup."
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
              Washer Error Codes Decoded
            </h1>
            <p className="text-xl text-green-200 mb-6">LG, Samsung, Whirlpool, Maytag &amp; GE. What each code actually means.</p>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 5, 2026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>12 min read</span>
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
              Your washer stops mid-cycle and the display shows OE. Or F9E1. Or 5C. You google it and get a hundred different answers depending on which forum thread you land on. Half of them are wrong because they&apos;re about a different brand or a different model year.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              This is a reference guide we put together from the codes we see most often in the field. Look up your brand, find your code, see what it means, and find out which ones you can fix yourself in 10 minutes versus which need a service call.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              One important note before you start: <strong>your model matters more than your brand.</strong> A Whirlpool top-loader from 2015 uses different codes than a Whirlpool front-loader from 2023. Make sure your code matches your specific model. The codes below cover the most common shared codes within each brand line, but for an exact lookup, check your owner&apos;s manual or the data plate inside the door.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">LG Washer Error Codes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              LG uses two-letter codes. Here are the most common ones we see on calls:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Thing to Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">OE</td><td className="border border-gray-300 px-4 py-2">Drain error: water won&apos;t pump out</td><td className="border border-gray-300 px-4 py-2">Clean the drain pump filter (front-loaders)</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">IE</td><td className="border border-gray-300 px-4 py-2">Inlet error: water won&apos;t fill</td><td className="border border-gray-300 px-4 py-2">Check water supply valves, inspect inlet hoses for kinks</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">UE</td><td className="border border-gray-300 px-4 py-2">Unbalanced load</td><td className="border border-gray-300 px-4 py-2">Redistribute laundry, check for level</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">LE</td><td className="border border-gray-300 px-4 py-2">Motor lock: usually a Hall sensor issue</td><td className="border border-gray-300 px-4 py-2">Unplug 30 min and retry. If recurs, call</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">dE</td><td className="border border-gray-300 px-4 py-2">Door not closed properly</td><td className="border border-gray-300 px-4 py-2">Push door firmly, check the door latch</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">FE</td><td className="border border-gray-300 px-4 py-2">Overfill: water level too high</td><td className="border border-gray-300 px-4 py-2">Usually a stuck water inlet valve. Service call.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">tE</td><td className="border border-gray-300 px-4 py-2">Heating temperature error</td><td className="border border-gray-300 px-4 py-2">Heater element or temp sensor. Service call.</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">PE</td><td className="border border-gray-300 px-4 py-2">Water level pressure sensor error</td><td className="border border-gray-300 px-4 py-2">Air tube to sensor often loose or clogged. Service call.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">CE</td><td className="border border-gray-300 px-4 py-2">Motor circuit / overcurrent</td><td className="border border-gray-300 px-4 py-2">Service call. Motor or inverter board issue.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Most common LG repair we see:</strong> OE drain errors. Almost always a clog in the drain pump filter behind the small access door at the front-bottom of the washer. Unscrew the cap, drain into a shallow pan, remove debris. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Need help</a>?
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Samsung Washer Error Codes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Samsung uses combinations of letters and numbers. Common codes:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Thing to Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">4C / 4E</td><td className="border border-gray-300 px-4 py-2">Water supply error</td><td className="border border-gray-300 px-4 py-2">Check inlet hoses and supply valves</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">5C / SC / 5E</td><td className="border border-gray-300 px-4 py-2">Drain error</td><td className="border border-gray-300 px-4 py-2">Clean drain filter and pump area</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">UB / Ub / U6</td><td className="border border-gray-300 px-4 py-2">Unbalanced load</td><td className="border border-gray-300 px-4 py-2">Redistribute laundry</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">dC / dE</td><td className="border border-gray-300 px-4 py-2">Door lock error</td><td className="border border-gray-300 px-4 py-2">Push door firmly, inspect latch</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">3C / 3E</td><td className="border border-gray-300 px-4 py-2">Motor / Hall sensor error</td><td className="border border-gray-300 px-4 py-2">Service call. Drive belt or motor issue.</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">tE / tC</td><td className="border border-gray-300 px-4 py-2">Temperature sensor</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">LC / LE</td><td className="border border-gray-300 px-4 py-2">Leakage detected</td><td className="border border-gray-300 px-4 py-2">Stop using. Service call.</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">9C / 9E</td><td className="border border-gray-300 px-4 py-2">Power source error / line voltage</td><td className="border border-gray-300 px-4 py-2">Unplug 5 min. If recurs, electrical issue.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">HE / H1</td><td className="border border-gray-300 px-4 py-2">Heater error</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Samsung-specific note:</strong> Many Samsung washers were part of a 2016-2017 recall related to top-loader explosion risk. If you have a top-loader from those years and you&apos;re seeing repeated errors, check that your unit isn&apos;t still under the recall remediation program.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Whirlpool Washer Error Codes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Whirlpool uses F-codes with sub-numbers (FxEx format). Most common:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Thing to Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">F9E1</td><td className="border border-gray-300 px-4 py-2">Drain error: long drain</td><td className="border border-gray-300 px-4 py-2">Drain hose, filter, drain pump</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">F8E1 / F8E2</td><td className="border border-gray-300 px-4 py-2">Water supply / detergent dispenser</td><td className="border border-gray-300 px-4 py-2">Inlet valves and dispenser assembly</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">F5E2 / F5E3</td><td className="border border-gray-300 px-4 py-2">Door lock failure</td><td className="border border-gray-300 px-4 py-2">Door latch assembly. Often replaceable.</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">F7E1 / F7E5</td><td className="border border-gray-300 px-4 py-2">Motor / drive failure</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">F0E1</td><td className="border border-gray-300 px-4 py-2">Suds detected: too much detergent</td><td className="border border-gray-300 px-4 py-2">Reduce detergent, use HE-rated</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">F0E2</td><td className="border border-gray-300 px-4 py-2">Excessive suds during drain</td><td className="border border-gray-300 px-4 py-2">Run a clean cycle, switch detergent</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">Sud or Sd</td><td className="border border-gray-300 px-4 py-2">Suds lock: too much detergent</td><td className="border border-gray-300 px-4 py-2">Same as F0E1/F0E2</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">F2E3</td><td className="border border-gray-300 px-4 py-2">Stuck key on control panel</td><td className="border border-gray-300 px-4 py-2">Unplug, wait 5 min. If recurs, control panel.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">F1E1 / F1E2</td><td className="border border-gray-300 px-4 py-2">Main control board failure</td><td className="border border-gray-300 px-4 py-2">Service call. Often board-rebuildable.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Whirlpool tip:</strong> The Sud / Suds code is widely underdiagnosed. Modern HE washers use very little water and even slightly over-dosed detergent creates a suds blanket that the drain pump can&apos;t move. If you see Sud / Sd, run an empty washer through a Clean Washer cycle (or a hot cycle with no detergent) before assuming there&apos;s a hardware problem.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maytag Washer Error Codes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Maytag is owned by Whirlpool and uses the same code structure on modern units. The codes overlap heavily. Most common Maytag-specific calls:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Thing to Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">F9E1</td><td className="border border-gray-300 px-4 py-2">Drain too long (same as Whirlpool)</td><td className="border border-gray-300 px-4 py-2">Drain pump filter, hose</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">F5E2</td><td className="border border-gray-300 px-4 py-2">Door lock fault</td><td className="border border-gray-300 px-4 py-2">Door latch</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">LF / LO FL</td><td className="border border-gray-300 px-4 py-2">Long fill: water taking too long to fill</td><td className="border border-gray-300 px-4 py-2">Check supply valves and inlet screens</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">Lid / Ld</td><td className="border border-gray-300 px-4 py-2">Lid lock (top-loaders)</td><td className="border border-gray-300 px-4 py-2">Lid lock assembly. Often the magnetic switch.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">uL / UL</td><td className="border border-gray-300 px-4 py-2">Unbalanced load</td><td className="border border-gray-300 px-4 py-2">Redistribute laundry</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">PF</td><td className="border border-gray-300 px-4 py-2">Power failure: cycle interrupted</td><td className="border border-gray-300 px-4 py-2">Press start. If recurs, electrical.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">GE Washer Error Codes</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              GE uses E-codes with sub-numbers, plus some single-character codes:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-green-700 text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Code</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Meaning</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">First Thing to Check</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">E20 / E22</td><td className="border border-gray-300 px-4 py-2">Drain error</td><td className="border border-gray-300 px-4 py-2">Filter, drain hose, pump</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">E10 / E11</td><td className="border border-gray-300 px-4 py-2">Water inlet / fill error</td><td className="border border-gray-300 px-4 py-2">Supply valves and hoses</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">E40 / E41</td><td className="border border-gray-300 px-4 py-2">Door / lid problem</td><td className="border border-gray-300 px-4 py-2">Door latch</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">E50</td><td className="border border-gray-300 px-4 py-2">Motor / drive issue</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                  <tr><td className="border border-gray-300 px-4 py-2 font-semibold">E60 / E61</td><td className="border border-gray-300 px-4 py-2">Heating issue</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-2 font-semibold">E70 / E71</td><td className="border border-gray-300 px-4 py-2">Temperature sensor</td><td className="border border-gray-300 px-4 py-2">Service call.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Universal First Steps for Any Error Code</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Regardless of brand, do these three things before anything else:
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>1. Power-cycle the washer.</strong> Unplug for 2 minutes. Plug back in. About 25% of error codes are transient and clear with a reset. If it returns, you have a real problem.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              <strong>2. Note the cycle phase when the error appeared.</strong> Was it during fill? Wash? Drain? Spin? This narrows the cause significantly even before you look up the specific code.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>3. Check the drain pump filter (front-loaders).</strong> If your error is anything drain-related, this is the first place to look. The filter is behind a small access door at the front-bottom. Put a shallow towel-lined pan under it, unscrew the cap, let the water drain, and pull out whatever&apos;s in there. Lost socks, coins, hair ties, bra wires, and toy parts are the usual suspects.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">When the Code Comes Back</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you&apos;ve reset, cleaned the filter, and the same code returns within a cycle or two, it&apos;s time to call us. Continuing to run cycles on a washer that&apos;s reporting a fault can cause additional damage. Drain errors can leave water in places it shouldn&apos;t be. Motor errors can stress the inverter board. Heating errors can damage adjacent components.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              When you call, have your <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700">model number</Link> ready and the exact code. That lets us bring the right parts on the first visit, which most of the time means a single-visit repair.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Center has been repairing washers in Sonoma, Marin, and Napa counties since 1975. Factory authorized for every major brand. <a href="/schedule-prep" className="text-green-600 hover:text-green-700 font-semibold" data-analytics-label="book_appointment">Book online here</a> or call <a href="tel:7076649702" className="text-green-600 hover:text-green-700 font-semibold">(707) 664-9702</a>.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Note About Control Boards</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Many of the codes in this guide (especially the motor, control, and heater faults) can ultimately trace back to a failing control board. Manufacturer-replacement boards on premium washers can run $400-600. We rebuild boards at the component level when it makes sense. Usually a $50-100 fix instead of $500+. <Link href="/blog/right-to-repair-why-kellys-rebuilds-control-boards" className="text-green-600 hover:text-green-700">More on that here</Link>.
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
              href="/blog/signs-your-washing-machine-needs-repair-before-it-breaks-down"
              className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Signs Your Washing Machine Needs Repair Before It Breaks Down
              </h3>
              <p className="text-gray-600 text-sm">
                Catch washer problems early. 7 warning signs to watch for.
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
                When the error code points at the board, repair beats replacement.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Error Code Won&apos;t Clear?
          </h2>
          <p className="text-gray-600 mb-8">
            Bring your model number and the code. We&apos;ll bring the right part.
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
              About Washer Repair
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
