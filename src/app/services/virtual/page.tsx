import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getCompanyInfo } from '@/lib/content'
import { VideoCameraIcon, PhoneIcon, CheckCircleIcon, XCircleIcon, ClockIcon } from '@heroicons/react/24/outline'

const companyInfo = getCompanyInfo()

export const metadata = {
  title: "Virtual Service Call | Kelly's Appliance Center",
  description: '15-minute video diagnostic session with a technician. Quick troubleshooting to identify symptoms and possible causes, potentially saving time and money.',
}

export default function VirtualServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <VideoCameraIcon className="h-16 w-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Virtual Service Call</h1>
            <p className="text-xl opacity-95 max-w-3xl mx-auto mb-8">
              A 15-minute video session to help diagnose your appliance remotely
            </p>
          </div>
        </div>
      </section>

      {/* Before You Begin Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Welcome to Your Kelly&apos;s Appliance Virtual Service Call
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              This is a 15-minute video session to help diagnose your appliance.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Please have the following ready before we begin:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Model and Serial Number</strong> of the appliance
                    <p className="text-sm text-gray-600 mt-1">
                      <Link href="/resources/where-is-my-model-number" className="text-blue-600 hover:underline">
                        Need help finding it? View our guide →
                      </Link>
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">A phone or tablet</strong> with video capability to show the appliance clearly
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong className="text-gray-900">A stable internet connection</strong> for smooth communication
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 italic">
                We&apos;ll guide you through the diagnostic process step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Is / Isn't Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What It Is */}
            <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
              <div className="flex items-center mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What a Virtual Service Call Is</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>A <strong>15-minute video session</strong> where a technician visually reviews your appliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>Designed to <strong>identify symptoms and possible causes</strong> using the model/serial number and live video</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">•</span>
                  <span>A quick way to <strong>confirm the issue and decide if an in-home visit is necessary</strong>, potentially saving time and money</span>
                </li>
              </ul>
            </div>

            {/* What It Isn't */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-300">
              <div className="flex items-center mb-4">
                <XCircleIcon className="h-8 w-8 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What a Virtual Service Call Isn&apos;t</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span><strong>Not a repair tutorial</strong> - We don&apos;t guide customers through taking machines apart</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span><strong>Not DIY help</strong> - We won&apos;t ask you to handle tools or perform technical fixes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">•</span>
                  <span><strong>Not a substitute</strong> for a full service call if the problem requires hands-on repair</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
              <p className="text-gray-600 text-sm">
                Once scheduled, you&apos;ll receive a confirmation email
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reminder</h3>
              <p className="text-gray-600 text-sm">
                Before your appointment, you&apos;ll get a reminder with details
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
              <p className="text-gray-600 text-sm">
                At your chosen time, you&apos;ll receive a video call invite via email or text
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ClockIcon className="h-12 w-12 mx-auto mb-4 text-white/90" />
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Virtual Service Call?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-3xl mx-auto">
            Call our office to set up your appointment. Let them know you want a virtual call, and we&apos;ll send you a video link after your order is set up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center justify-center bg-white text-green-800 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call {companyInfo.phone}
            </a>
          </div>

          {/* Future Payment Integration Note */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80 italic">
              Coming soon: Direct online scheduling with payment integration
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">💡 Pro Tip</h3>
            <p className="text-gray-700">
              Having your model and serial number ready speeds up the diagnostic process. If you can&apos;t locate it,{' '}
              <Link href="/resources/where-is-my-model-number" className="text-blue-600 hover:underline font-semibold">
                check our Model Number Guide
              </Link>
              {' '}or take clear photos of your appliance to share during the call.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}


