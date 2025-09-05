import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Layout from '@/components/Layout';
import { getCompanyInfo } from '@/lib/content';

const companyInfo = getCompanyInfo();

export const metadata = {
  title: 'Privacy Policy - Kelly\'s Appliance Center',
  description: 'View Kelly\'s Appliance Repair privacy policy to learn how we protect your personal information and ensure your data stays safe and secure.',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              How we protect your personal information and ensure your data stays safe and secure
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 italic mb-8">
              <em>Effective Date: June 26, 2025</em>
            </p>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Kelly&apos;s Appliance Repair is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with us through our website, over the phone, or during service appointments.
            </p>
            
            <hr className="my-8 border-gray-300" />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
            <p className="mb-4 text-gray-700">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li><strong>Personal Information</strong>: Name, phone number, email address, and physical address</li>
              <li><strong>Service Information</strong>: Appliance type, model/serial numbers, service history, and details related to repairs</li>
              <li><strong>Payment Information</strong>: Credit/debit card details (used only for transactions)</li>
              <li><strong>Website Information</strong>: IP address, browser type, pages visited</li>
            </ul>
            
            <hr className="my-8 border-gray-300" />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
            <p className="mb-4 text-gray-700">Your information helps us:</p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
              <li>Schedule and perform appliance repair services</li>
              <li>Communicate appointment updates and confirmations</li>
              <li>Provide estimates and process payments</li>
              <li>Improve our services and customer experience</li>
              <li>Send occasional updates or promotions (if opted in)</li>
            </ul>
            
            <hr className="my-8 border-gray-300" />
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Contact Us</h3>
            <p className="mb-4 text-gray-700">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold">Kelly&apos;s Appliance Repair</p>
              <p className="text-gray-700">466 Primero Ct. Suite H</p>
              <p className="text-gray-700">Cotati, CA 94931</p>
              <p className="text-gray-700">Phone: (707) 664-9702</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Appliance Repair Service?
          </h2>
          <p className="text-xl mb-8">
            Contact Kelly&apos;s Appliance Center for professional, reliable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-green-800 transition-colors"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
            <a
              href="https://booking.rossware.com/schedule/4588"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Appointment Online
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
