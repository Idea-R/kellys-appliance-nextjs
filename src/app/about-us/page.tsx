import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'About Us - Kelly\'s Appliance Center',
  description: 'Kelly\'s Appliance Repair has been serving Sonoma County and Novato since 1975. Our expert technicians are highly-skilled. Contact us today!',
};

export default function AboutUsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About Kelly&apos;s Appliance Center
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Serving the Bay Area with professional appliance repair services since 1975
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Appliance Repair Excellence for Over 40 Years
              </h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  We have been providing appliance services to the North Bay area for over 30 years and with that much experience, you know you can count on us. Kelly&apos;s Appliance Center provides a full range of appliance services on all the most popular brands. Mark Kelly, owner of Kelly&apos;s Appliance Center, takes great pride in making each of his clients a satisfied customer.
                </p>
                <p>
                  Bob Kelly started Kelly&apos;s Appliance in 1975. His son, Mark Kelly joined the company in 1983. The business strategy was simple: provide excellent personal service at a fair price. Kelly&apos;s Appliance moved to Sonoma County in 1987 and continues to provide personal service to every customer. Mark Kelly took over full ownership of the business in 1990 maintaining customer service as the number one priority.
                </p>
                <p>
                  Kelly&apos;s Appliance Center provides services on dishwashers, refrigerators, ovens, stoves, washers, dryers, garbage disposals and any other major household appliance. Kelly&apos;s services all makes and models including Maytag, Kenmore, Whirlpool, Jenn-Air, GE, LG and more!
                </p>
                <p>
                  Give us a call and we&apos;ll show you why we&apos;ve been around for over 30 years! Serving customers throughout Sonoma and Marin counties, Kelly&apos;s Appliance Center is the name you can count on to get the job done right – on time!
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/kelly-appliance-team.webp"
                alt="Kelly&apos;s Appliance Center Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Years in Business</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">90</div>
              <div className="text-gray-700 font-semibold">Day Guarantee</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">10</div>
              <div className="text-gray-700 font-semibold">Service Areas</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Factory Authorized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Kelly&apos;s Appliance Center?
            </h2>
            <p className="text-xl text-gray-600">
              Decades of experience and commitment to customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Factory Authorized</h3>
              <p className="text-gray-600">Certified repair services for all major appliance brands with genuine parts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Experienced Team</h3>
              <p className="text-gray-600">Our skilled technicians have decades of experience with all appliance types</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Family Business</h3>
              <p className="text-gray-600">Family-owned and operated, serving the community for over 40 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Our Service?
          </h2>
          <p className="text-xl mb-8">
            Contact Kelly&apos;s Appliance Center today for reliable, professional appliance repair
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
