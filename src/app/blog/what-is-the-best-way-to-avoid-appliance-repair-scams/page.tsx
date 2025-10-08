import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'What is the Best Way to Avoid Appliance Repair Scams? | Kelly\'s Appliance Center',
  description: 'Avoid appliance repair scams with expert tips on identifying trustworthy services, avoiding fraud, and ensuring quality repairs!',
};

export default function BlogPost() {
  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/blog" className="ml-4 text-gray-500 hover:text-gray-700">
                    Blog
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-4 text-gray-700 font-medium">
                    What is the Best Way to Avoid Appliance Repair Scams?
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        {/* Header */}
        <header className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What is the Best Way to Avoid Appliance Repair Scams?
          </h1>
          
          <div className="flex items-center text-gray-600 text-sm space-x-4">
            <div className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              <span>Kelly's Appliance Team</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>December 9, 2024</span>
            </div>
            <span>•</span>
            <span>2 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-800 mb-8">
            Appliance repair scams can cost you time, money, and peace of mind. Fortunately, with a little knowledge and awareness, you can protect yourself from unscrupulous repair services. Here are some practical tips to ensure you hire a trustworthy professional and avoid falling victim to scams.
          </p>

          <h3>1. Verify Credentials</h3>
          <p>
            Always check if the repair service is licensed, insured, and certified to work on your appliance brand. <Link href="/authorized-service" className="text-green-600 hover:text-green-700">Factory-authorized repair services</Link> are often your safest choice, as they have been vetted by the manufacturer and use genuine parts.
          </p>

          <h3>2. Do Your Research</h3>
          <p>
            Before hiring, read online reviews and ask for recommendations from friends or family. Look for repair companies with consistent positive feedback and a strong local reputation. Be cautious of companies with limited information or no online presence.
          </p>

          <h3>3. Request a Written Estimate</h3>
          <p>
            Legitimate repair companies will provide a <Link href="/pricing" className="text-green-600 hover:text-green-700">clear, itemized estimate</Link> before starting any work. If a technician refuses to give you an estimate or pressures you to agree without seeing the costs, consider it a red flag.
          </p>

          <h3>4. Avoid Upfront Payments</h3>
          <p>
            Be wary of repair services that demand full payment upfront. Reputable companies usually charge after completing the job or may request a small deposit, especially for ordering parts.
          </p>

          <h3>5. Watch Out for "Too Good to Be True" Deals</h3>
          <p>
            While everyone loves a bargain, unusually low prices can be a sign of substandard service or an outright scam. Balance affordability with <Link href="/why-you-should-call-a-professional-to-repair-your-appliances" className="text-green-600 hover:text-green-700">professionalism and reliability</Link> when making your choice.
          </p>

          <h3>6. Be Wary of Door-to-Door Technicians</h3>
          <p>
            Unsolicited offers for appliance repair, especially from door-to-door technicians, can often be scams. Stick with trusted <Link href="/about-us" className="text-green-600 hover:text-green-700">local companies</Link> you've researched or been referred to.
          </p>

          <h3>7. Trust Your Instincts</h3>
          <p>
            If something feels off—whether it's vague answers to questions, unprofessional behavior, or high-pressure tactics—don't hesitate to walk away. Trustworthy companies value transparency and professionalism.
          </p>

          <h3>8. Use Trusted Resources</h3>
          <p>
            Leverage resources like the Better Business Bureau (BBB), Yelp, Diamond Certified or manufacturer websites to find reliable repair services in your area. These sources often list approved technicians and customer reviews to help guide your decision.
          </p>

          <h3>9. Ask About Warranties</h3>
          <p>
            A reliable repair company stands by its work. Ask if they offer warranties on parts and labor to ensure peace of mind after the job is done.
          </p>

          <h3>10. Document Everything</h3>
          <p>
            Keep records of all communication, estimates, receipts, and warranties. This documentation can protect you in case of disputes or issues down the line.
          </p>

          <p>
            By following these tips, you can safeguard yourself against appliance repair scams and ensure your appliances are in good hands. When in doubt, rely on factory-authorized repair services like those offered by Kelly's Appliance to ensure professional, high-quality repairs every time!
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
            <p className="font-semibold text-green-800 mb-2">
              Need trusted appliance repair?
            </p>
            <p className="text-green-700 mb-4">
              Choose Kelly's Appliance Center - your factory-authorized, Diamond Certified repair service with 50+ years of experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call {companyInfo.phone}
              </a>
              <a
                href="https://booking.rossware.com/schedule/4588"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-green-300"
              >
                Request Appointment
              </a>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/why-you-should-call-a-professional-to-repair-your-appliances" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Why You Should Call a Professional to Repair Your Appliances
                </h4>
                <p className="text-gray-600 text-sm">
                  Discover the top reasons to choose professional appliance repair over DIY fixes.
                </p>
              </div>
            </Link>
            <Link href="/blog/top-5-tips-for-buying-a-home-appliance" className="group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Top 5 Tips for Buying a Home Appliance
                </h4>
                <p className="text-gray-600 text-sm">
                  Expert advice for making smart appliance purchase decisions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
