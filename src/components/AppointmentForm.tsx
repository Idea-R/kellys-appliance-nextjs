'use client'

import React, { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { pushEvent, pushAdsConversion } from '@/lib/track-event'
import { APPLIANCE_OPTIONS } from '@/lib/appliance-options'

const MAX_FILES = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

const inputClass =
  'w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base'

export default function AppointmentForm() {
  const router = useRouter()
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [dragOver, setDragOver] = useState(false)
  const [isPropertyManager, setIsPropertyManager] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  /* ---- photo helpers ---- */
  const addFiles = useCallback((files: FileList | File[]) => {
    const incoming = Array.from(files)
    const errors: string[] = []

    const valid = incoming.filter((f) => {
      if (!ACCEPTED_TYPES.includes(f.type)) {
        errors.push(`${f.name}: not a supported image type.`)
        return false
      }
      if (f.size > MAX_FILE_SIZE) {
        errors.push(`${f.name}: over 5 MB limit.`)
        return false
      }
      return true
    })

    setPhotos((prev) => {
      const room = MAX_FILES - prev.length
      if (room <= 0) {
        errors.push(`Max ${MAX_FILES} photos. Remove one first.`)
        if (errors.length) setErrorMessage(errors.join(' '))
        return prev
      }
      const toAdd = valid.slice(0, room)
      if (valid.length > room) errors.push(`Only added ${room} of ${valid.length} (max ${MAX_FILES}).`)
      if (errors.length) setErrorMessage(errors.join(' '))
      else setErrorMessage('')

      // build previews
      toAdd.forEach((f) => {
        const url = URL.createObjectURL(f)
        setPreviews((p) => [...p, url])
      })
      return [...prev, ...toAdd]
    })
  }, [])

  const removePhoto = (idx: number) => {
    setPreviews((p) => {
      URL.revokeObjectURL(p[idx])
      return p.filter((_, i) => i !== idx)
    })
    setPhotos((p) => p.filter((_, i) => i !== idx))
    setErrorMessage('')
  }

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files)
    },
    [addFiles],
  )

  /* ---- form submit ---- */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Build a clean FormData for the API (text + files)
    const body = new FormData()
    body.append('name', (fd.get('name') as string) || '')
    body.append('phone', (fd.get('phone') as string) || '')
    const email = (fd.get('email') as string) || ''
    if (email) body.append('email', email)
    body.append('appliance', (fd.get('appliance') as string) || '')
    const brand = (fd.get('brand') as string) || ''
    if (brand) body.append('brand', brand)
    body.append('issue', (fd.get('issue') as string) || '')

    // New optional fields
    const modelNumber = (fd.get('modelNumber') as string) || ''
    const serialNumber = (fd.get('serialNumber') as string) || ''
    const address = (fd.get('address') as string) || ''
    const city = (fd.get('city') as string) || ''
    const zip = (fd.get('zip') as string) || ''
    if (modelNumber) body.append('modelNumber', modelNumber)
    if (serialNumber) body.append('serialNumber', serialNumber)
    if (address) body.append('address', address)
    if (city) body.append('city', city)
    if (zip) body.append('zip', zip)

    // Attach photos
    photos.forEach((f) => body.append('photos', f, f.name))

    try {
      setStatus('sending')
      setErrorMessage('')
      const res = await fetch('/api/appointment', {
        method: 'POST',
        body,
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
        appliance: (fd.get('appliance') as string) || '',
        ref_number: ref,
        has_photos: photos.length > 0 ? 'yes' : 'no',
        has_model: modelNumber ? 'yes' : 'no',
        has_address: address ? 'yes' : 'no',
        page_path: window.location.pathname,
      })
      pushAdsConversion('AW-10866866733/1L-TCPmLzY8cEK303L0o', 200.0, 'USD')

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
      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-name" className="block text-sm font-semibold text-gray-900 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input id="appt-name" name="name" type="text" required autoComplete="name" className={inputClass} placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="appt-phone" className="block text-sm font-semibold text-gray-900 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input id="appt-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="(707) 555-1234" />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="appt-email" className="block text-sm font-semibold text-gray-900 mb-1">
          Email <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input id="appt-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
      </div>

      {/* Owner/PM Toggle */}
      <div className="flex items-center gap-3 py-1">
        <button
          type="button"
          role="switch"
          aria-checked={isPropertyManager}
          aria-label="I am an owner or property manager booking for a tenant"
          onClick={() => setIsPropertyManager(!isPropertyManager)}
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 ${
            isPropertyManager ? 'bg-green-600' : 'bg-gray-200'
          }`}
        >
          <span className={`inline-block h-4 w-4 transform rounded-full bg-white border border-gray-300 transition-transform ${
            isPropertyManager ? 'translate-x-4' : 'translate-x-0.5'
          }`} />
        </button>
        <span className="text-sm text-gray-600">
          I&apos;m an owner or property manager booking for a tenant
        </span>
      </div>

      {/* Tenant Info — revealed when PM toggle is on */}
      {isPropertyManager && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
          <p className="text-xs font-semibold text-green-800 uppercase tracking-wide">Tenant / On-Site Contact</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="appt-tenant-name" className="block text-sm text-gray-700 mb-1">Tenant Name</label>
              <input id="appt-tenant-name" name="tenantName" type="text" className={inputClass} placeholder="Tenant or on-site contact" />
            </div>
            <div>
              <label htmlFor="appt-tenant-phone" className="block text-sm text-gray-700 mb-1">Tenant Phone</label>
              <input id="appt-tenant-phone" name="tenantPhone" type="tel" className={inputClass} placeholder="(707) 555-0000" />
            </div>
          </div>
          <div>
            <label htmlFor="appt-pm-notes" className="block text-sm text-gray-700 mb-1">Notes for our team</label>
            <input id="appt-pm-notes" name="pmNotes" type="text" className={inputClass} placeholder="e.g. Tenant available after 2pm, gate code 1234" />
          </div>
          <input type="hidden" name="submittedBy" value="property_manager" />
        </div>
      )}

      {/* Appliance & Brand */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="appt-appliance" className="block text-sm font-semibold text-gray-900 mb-1">
            Appliance Type <span className="text-red-500">*</span>
          </label>
          <select id="appt-appliance" name="appliance" required className={`${inputClass} bg-white`} defaultValue="">
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
          <input id="appt-brand" name="brand" type="text" className={inputClass} placeholder="e.g. Samsung, Sub-Zero, GE" />
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
          className={`${inputClass} resize-none`}
          placeholder="Describe the issue in a few words: noises, leaks, error codes, not cooling, etc."
        />
      </div>

      {/* ---- About Your Appliance ---- */}
      <fieldset className="border-t border-gray-200 pt-4">
        <legend className="text-sm font-semibold text-gray-700 mb-1">About Your Appliance <span className="text-gray-400 font-normal">(optional, but helps us prep)</span></legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label htmlFor="appt-model" className="block text-sm text-gray-700 mb-1">Model Number</label>
            <input id="appt-model" name="modelNumber" type="text" className={inputClass} placeholder="e.g. WRF535SWHZ" />
          </div>
          <div>
            <label htmlFor="appt-serial" className="block text-sm text-gray-700 mb-1">Serial Number</label>
            <input id="appt-serial" name="serialNumber" type="text" className={inputClass} placeholder="e.g. FX4507291" />
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1.5">Usually on a label inside the door or on the back of the unit.</p>
      </fieldset>

      {/* ---- Service Address ---- */}
      <fieldset className="border-t border-gray-200 pt-4">
        <legend className="text-sm font-semibold text-gray-700 mb-1">Service Address <span className="text-gray-400 font-normal">(optional)</span></legend>
        <div className="space-y-3 mt-2">
          <div>
            <label htmlFor="appt-address" className="block text-sm text-gray-700 mb-1">Street Address</label>
            <input id="appt-address" name="address" type="text" autoComplete="street-address" className={inputClass} placeholder="123 Main St" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="appt-city" className="block text-sm text-gray-700 mb-1">City</label>
              <input id="appt-city" name="city" type="text" autoComplete="address-level2" className={inputClass} placeholder="Santa Rosa" />
            </div>
            <div>
              <label htmlFor="appt-zip" className="block text-sm text-gray-700 mb-1">Zip Code</label>
              <input id="appt-zip" name="zip" type="text" autoComplete="postal-code" className={inputClass} placeholder="95404" />
            </div>
          </div>
        </div>
      </fieldset>

      {/* ---- Photos ---- */}
      <fieldset className="border-t border-gray-200 pt-4">
        <legend className="text-sm font-semibold text-gray-700 mb-1">Photos <span className="text-gray-400 font-normal">(optional, max 3)</span></legend>
        <p className="text-xs text-gray-400 mb-2">Rating plate, error codes, or visible damage. JPG, PNG, or WebP up to 5 MB each.</p>

        {/* Drop zone */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') fileInputRef.current?.click() }}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            dragOver ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400 hover:bg-gray-50'
          } ${photos.length >= MAX_FILES ? 'opacity-50 pointer-events-none' : ''}`}
        >
          <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
          </svg>
          <p className="text-sm text-gray-600">Tap to add photos or drag and drop</p>
          <p className="text-xs text-gray-400 mt-1">{photos.length} of {MAX_FILES} added</p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
          multiple
          className="hidden"
          onChange={(e) => { if (e.target.files?.length) { addFiles(e.target.files); e.target.value = '' } }}
        />

        {/* Thumbnail previews */}
        {previews.length > 0 && (
          <div className="flex gap-3 mt-3 flex-wrap">
            {previews.map((src, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Upload ${i + 1}`} className="w-20 h-20 object-cover rounded-lg border" />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs leading-none shadow hover:bg-red-600"
                  aria-label={`Remove photo ${i + 1}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </fieldset>

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

    </form>
  )
}
