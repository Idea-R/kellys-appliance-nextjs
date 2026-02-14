'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    try {
      setStatus('sending')
      setErrorMessage('')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      type ContactApiResponse = { ok?: boolean; error?: string }
      const data: unknown = await res.json().catch(() => null)
      const api: ContactApiResponse = typeof data === 'object' && data !== null ? (data as ContactApiResponse) : {}

      if (!res.ok || api.ok === false) {
        throw new Error(typeof api.error === 'string' && api.error ? api.error : 'Something went wrong. Please try again.')
      }
      setStatus('sent')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please call us.')
    }
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} aria-labelledby="contact-form-title" aria-describedby="contact-form-desc">
      <h2 id="contact-form-title" className="sr-only">Contact Kelly&apos;s Appliance Center</h2>
      <p id="contact-form-desc" className="sr-only">All fields marked with an asterisk are required.</p>
      <div className="col-span-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">Name *</label>
        <input id="name" name="name" required type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors" placeholder="Your name" />
      </div>
      <div className="col-span-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">Email *</label>
        <input id="email" name="email" required type="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors" placeholder="you@example.com" />
      </div>
      <div className="col-span-1">
        <label htmlFor="zip" className="block text-sm font-medium text-gray-900 mb-1">Zip Code *</label>
        <input id="zip" name="zip" required type="text" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors" placeholder="94931" />
      </div>
      <div className="col-span-1">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">Phone *</label>
        <input id="phone" name="phone" required type="tel" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors" placeholder="(707) 555-1234" />
      </div>
      <div className="col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-1">Message *</label>
        <textarea id="message" name="message" required rows={5} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors resize-none" placeholder="How can we help?" />
      </div>
      <div className="col-span-2 flex items-center gap-3">
        <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold btn-fill" data-analytics-label="contact_form_submit" disabled={status==='sending'} aria-live="polite">
          {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}
        </button>
        {status==='error' && <span role="alert" className="text-sm text-red-600">{errorMessage || 'Something went wrong. Please call us.'}</span>}
      </div>
    </form>
  )
}


