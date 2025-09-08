'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      setStatus('sending')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Network')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-900 mb-1">Name *</label>
        <input name="name" required type="text" className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="Your name" />
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-900 mb-1">Email *</label>
        <input name="email" required type="email" className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="you@example.com" />
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-900 mb-1">Zip Code *</label>
        <input name="zip" required type="text" className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="94931" />
      </div>
      <div className="col-span-1">
        <label className="block text-sm font-medium text-gray-900 mb-1">Phone *</label>
        <input name="phone" required type="tel" className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="(707) 555-1234" />
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-900 mb-1">Message *</label>
        <textarea name="message" required rows={5} className="w-full rounded-md border-gray-300 focus:border-green-600 focus:ring-green-600" placeholder="How can we help?" />
      </div>
      <div className="col-span-2">
        <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold btn-fill" data-analytics-label="contact_form_submit" disabled={status==='sending'}>
          {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}
        </button>
        {status==='error' && <span className="ml-3 text-sm text-red-600">Something went wrong. Please call us.</span>}
      </div>
    </form>
  )
}


