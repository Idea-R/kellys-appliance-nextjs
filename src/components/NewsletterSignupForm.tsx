'use client'

import React, { useState } from 'react'
import { pushEvent } from '@/lib/track-event'

export default function NewsletterSignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address')
      setStatus('error')
      return
    }

    try {
      setStatus('submitting')
      setErrorMessage('')

      // Attribution data captured by Analytics.tsx in sessionStorage
      const attribution: Record<string, string> = {}
      try {
        const utmRaw = sessionStorage.getItem('kellys_utm')
        if (utmRaw) {
          const utm = JSON.parse(utmRaw) as Record<string, string>
          for (const key of ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
            if (utm[key]) attribution[key] = utm[key]
          }
        }
        attribution.landing_url = window.location.href
      } catch { /* noop */ }

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), ...attribution }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      pushEvent('newsletter_signup', {
        method: 'footer_form',
        page_path: window.location.pathname,
      })
      setEmail('')
    } catch (error) {
      setStatus('error')
      pushEvent('form_error', {
        form_name: 'newsletter',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        page_path: window.location.pathname,
      })
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg ring-1 ring-white/15">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 border border-transparent focus:outline-none focus:border-green-300 focus:ring-2 focus:ring-green-300/60 shadow-sm"
          required
          disabled={status === 'submitting' || status === 'success'}
          aria-label="Email address for newsletter subscription"
        />
        <button
          type="submit"
          data-analytics-label="newsletter_subscribe"
          className="bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={status === 'submitting' || status === 'success'}
          aria-live="polite"
        >
          {status === 'submitting' 
            ? 'Subscribing...' 
            : status === 'success' 
            ? 'Subscribed!' 
            : 'Subscribe'}
        </button>
      </div>
      
      {status === 'success' && (
        <p className="mt-3 text-sm text-green-100" role="alert">
          Thank you! Check your email for a confirmation message.
        </p>
      )}
      
      {status === 'error' && errorMessage && (
        <p className="mt-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  )
}
