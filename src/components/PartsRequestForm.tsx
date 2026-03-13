'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { pushEvent } from '@/lib/track-event'
import { APPLIANCE_OPTIONS } from '@/lib/appliance-options'

const inputClass =
  'w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base'

type Status = 'idle' | 'sending' | 'error'

export default function PartsRequestForm() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const fd = new FormData(form)

    const payload = {
      name: fd.get('name') as string,
      phone: fd.get('phone') as string,
      email: fd.get('email') as string,
      appliance: fd.get('appliance') as string,
      brand: fd.get('brand') as string,
      modelNumber: fd.get('modelNumber') as string,
      partDescription: fd.get('partDescription') as string,
    }

    try {
      const res = await fetch('/api/parts-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong')
      }

      // Analytics
      pushEvent('generate_lead', {
        method: 'parts_request_form',
        form_name: 'parts_request',
        ref_number: json.refNumber,
      })

      // Redirect to confirmation
      router.push(`/parts-confirmation?ref=${encodeURIComponent(json.refNumber)}`)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Failed to submit'
      setErrorMsg(msg)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pr-name" className="block text-sm font-semibold text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pr-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="pr-phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="pr-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="(707) 555-1234"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="pr-email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="pr-email"
          name="email"
          type="email"
          autoComplete="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      {/* Appliance + Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="pr-appliance" className="block text-sm font-semibold text-gray-700 mb-1">
            Appliance Type <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select id="pr-appliance" name="appliance" className={inputClass} defaultValue="">
            <option value="">Select appliance...</option>
            {APPLIANCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pr-brand" className="block text-sm font-semibold text-gray-700 mb-1">
            Brand <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="pr-brand"
            name="brand"
            type="text"
            className={inputClass}
            placeholder="e.g. Samsung, Sub-Zero, GE"
          />
        </div>
      </div>

      {/* Model Number */}
      <div>
        <label htmlFor="pr-model" className="block text-sm font-semibold text-gray-700 mb-1">
          Model Number <span className="text-gray-400 font-normal">(helps us find the exact part)</span>
        </label>
        <input
          id="pr-model"
          name="modelNumber"
          type="text"
          className={inputClass}
          placeholder="Usually on a label inside the door or on the back"
        />
        <p className="text-xs text-gray-500 mt-1">
          Not sure where to look?{' '}
          <Link href="/resources/where-is-my-model-number" className="text-green-600 hover:text-green-700 underline">
            Find your model number
          </Link>
        </p>
      </div>

      {/* Part Description */}
      <div>
        <label htmlFor="pr-desc" className="block text-sm font-semibold text-gray-700 mb-1">
          What Part Do You Need? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="pr-desc"
          name="partDescription"
          required
          rows={4}
          className={inputClass}
          placeholder="Describe the part you need: water filter, dryer belt, ice maker kit, etc. Include any part numbers if you have them."
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          <p className="font-semibold">Unable to submit your request</p>
          <p>{errorMsg || 'Please try again or call us at (707) 664-9702.'}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Submitting...' : 'Submit Parts Request'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll call you back within 1 business day with pricing and availability.
      </p>
    </form>
  )
}
