'use client'

import React, { useState } from 'react'

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

      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          required
          disabled={status === 'submitting' || status === 'success'}
          aria-label="Email address for newsletter subscription"
        />
        <button 
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow-sm whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
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
