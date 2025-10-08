import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Why Is My Dryer Taking So Long to Dry Clothes? - Kelly\'s Appliance Center',
  description: 'Learn the top causes and solutions for slow-drying dryers from our expert technicians. Common issues include clogged lint traps and blocked vents.',
};

export default function DryerPostPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/blog" className="text-green-200 hover:text-white mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Is My Dryer Taking So Long to Dry Clothes?
            </h1>
            <div className="flex items-center justify-center gap-6 text-green-200">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>June 26, 2025</span>
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
              Wondering why your dryer is taking so long to dry a simple load of laundry? You&apos;re not alone. This is one of the most common issues homeowners face – and it&apos;s more than just a minor inconvenience. Long drying times can lead to higher energy bills, increased wear on your clothes, and may signal a more serious problem with your appliance.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Let&apos;s take a closer look at the top reasons your dryer might be underperforming and what you can do to fix it.
            </p>
            
            <div className="text-center my-8">
              <Image
                src="/images/dryer1.webp"
                alt="Woman carrying basket of clothes fresh out of the dryer"
                width={1000}
                height={667}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Clogged Dryer Vent</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              One of the most common – and potentially dangerous—reasons for long drying times is a clogged dryer vent. Over time, lint and debris build up in the vent duct, restricting airflow. Without proper ventilation, hot air gets trapped, preventing your clothes from drying efficiently.
            </p>
            <p className="mb-4 text-gray-700 font-semibold">Warning signs include:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Dryer feels hot to the touch</li>
              <li>Clothes are still damp after a full cycle</li>
              <li>Burning smell during operation</li>
            </ul>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Clean your dryer vent at least once a year. If it&apos;s been a while, consider hiring a professional to inspect and clean the entire venting system.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Dirty Lint Filter</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A full or clogged lint filter can reduce airflow, even if your vent is clear. This slows down the drying process and can be a fire hazard.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Clean the lint screen after every load. For a deeper clean, wash it occasionally with soap and water to remove residue from dryer sheets or fabric softeners.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Overloaded Dryer</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Packing your dryer too full is tempting, especially on laundry day—but it can backfire. Overloading prevents warm air from circulating evenly around your clothes.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Try drying smaller loads. This allows for better airflow and shorter drying times, and it puts less strain on the appliance.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Worn-Out Heating Element</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your dryer runs but doesn&apos;t produce enough heat, a faulty heating element could be the culprit. This is more common in electric dryers, but gas models can experience burner or igniter issues as well.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              If your dryer is spinning but not getting hot, it&apos;s time to <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">book a technician</a> to inspect and potentially replace the heating element or gas components.
            </p>
            
            <div className="text-center my-8">
              <Image
                src="/images/dryer2.webp"
                alt="Row of dryers in a laundromat"
                width={1000}
                height={664}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Moisture Sensor Malfunction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Many modern dryers use moisture sensors to determine when clothes are dry. If the sensor is dirty or defective, the dryer might stop too early – or run too long, thinking your clothes are still damp.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Clean the moisture sensor with a soft cloth and mild soap. If the problem continues, a technician may need to replace the sensor.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Improper Vent Duct Installation</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If your dryer is connected to a long or twisted duct, or if the vent material is flexible plastic or foil instead of rigid metal, airflow can be restricted even without a clog.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Ensure your vent system is short, straight, and made of approved materials. Consider rerouting the vent for better efficiency.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Washer Issues Causing Excess Moisture</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Sometimes, the dryer isn&apos;t the problem at all. If your washing machine isn&apos;t spinning clothes properly, they&apos;ll come out wetter than usual, making the dryer work harder.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              <strong>Solution:</strong><br />
              Check your washer&apos;s spin cycle. If clothes feel unusually soaked, your washer may need maintenance or <Link href="/services/washer-dryer-repair" className="text-green-600 hover:text-green-700">repair</Link>.
            </p>
            
            <div className="text-center my-8">
              <Image
                src="/images/dryer3.webp"
                alt="Appliance technician working on a dryer circuit board"
                width={1000}
                height={750}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Final Thoughts</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Long drying times are more than just a nuisance—they&apos;re a signal that something isn&apos;t working right. Whether it&apos;s a simple maintenance issue like a clogged lint trap or a more complex problem like a failing heating element, addressing the cause promptly can save you time, energy, and money.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              If you&apos;ve tried the tips above and your dryer is still underperforming, it&apos;s time to <a href="https://booking.rossware.com/schedule/4588" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">book a professional appliance technician</a>. A fast diagnosis and repair can get your laundry routine back on track in no time.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional Dryer Repair?
          </h2>
          <p className="text-gray-600 mb-8">
            Kelly&apos;s Appliance Center has been serving the Bay Area since 1975
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Request Appointment Online
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-green-600 text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Request Appointment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
