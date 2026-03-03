'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { pushEvent } from '@/lib/track-event'

const APPLIANCE_OPTIONS = [
  'Refrigerator',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Oven / Range',
  'Cooktop',
  'Microwave',
  'Ice Maker',
  'Freezer',
  'Trash Compactor',
  'Garbage Disposal',
  'Other',
]

export default function AppointmentForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const payload = {
      name: fd.get('name') as string,
      phone: fd.get('phone') as string,
      email: (fd.get('email') as string) || undefined,
      appliance: fd.get('appliance') as string,
      brand: (fd.get('brand') as string) || undefined,
      issue: fd.get('issue') as string,
    }

    try {
      setStatus('sending')
      setErrorMessage('')
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      type ApiResponse = { ok?: boolean; error?: string; refNumber?: string }
      const data: unknown = await res.json().catch(() => null)
      const api: ApiResponse = typeof data === 'object' && data !== null ? (data as ApiResponse) : {}

      if (!res.ok || api.ok === false) {
        throw new Error(typeof api.error === 'string' && api.error ? api.error : 'Something went wrong. Please try again.')
      }

      const ref = typeof api.refNumber === 'string' ? api.refNumber : ''

      pushEvent('generate_lead', {
        method: 'appointment_form',
        form_name: 'appointment_request',
        appliance: payload.appliance,
        ref_number: ref,
        page_path: window.location.pathname,
      })

      // Redirect to confirmation page with reference number
      router.push(`/scheduler-confirmation${ref ? `?ref=${encodeURIComponent(ref)}` : ''}`)
    } catch (error) {
      setStatus('error')
      pushEvent('form_error', {
        form_name: 'appointment_request',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        page_path: window.location.pathname,
      })
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please call us instead.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name & Phone - always visible, critical */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-name" className="block text-sm font-semibold text-gray-900 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="appt-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="appt-phone" className="block text-sm font-semibold text-gray-900 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="appt-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base"
            placeholder="(707) 555-1234"
          />
        </div>
      </div>

      {/* Email - optional */}
      <div>
        <label htmlFor="appt-email" className="block text-sm font-semibold text-gray-900 mb-1">
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="appt-email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base"
          placeholder="you@example.com"
        />
      </div>

      {/* Appliance & Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-appliance" className="block text-sm font-semibold text-gray-900 mb-1">
            Appliance Type <span className="text-red-500">*</span>
          </label>
          <select
            id="appt-appliance"
            name="appliance"
            required
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select appliance...</option>
            {APPLIANCE_OPTIONS.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="appt-brand" className="block text-sm font-semibold text-gray-900 mb-1">
            Brand <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="appt-brand"
            name="brand"
            type="text"
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base"
            placeholder="e.g. Samsung, Sub-Zero, GE"
          />
        </div>
      </div>

      {/* Issue description */}
      <div>
        <label htmlFor="appt-issue" className="block text-sm font-semibold text-gray-900 mb-1">
          What&apos;s the problem? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="appt-issue"
          name="issue"
          required
          rows={3}
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base resize-none"
          placeholder="Describe the issue in a few words — noises, leaks, error codes, not cooling, etc."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        data-analytics-label="appointment_form_submit"
        className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
      >
        {status === 'sending' ? 'Sending Request...' : 'Request Service Appointment'}
      </button>

      {/* Error state */}
      {status === 'error' && (
        <div role="alert" className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {errorMessage || 'Something went wrong.'} You can also call us at <a href="tel:7076649702" className="font-semibold underline">(707) 664-9702</a>.
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll call you within 4 hours (business hours) to confirm your appointment.
      </p>
    </form>
  )
}
