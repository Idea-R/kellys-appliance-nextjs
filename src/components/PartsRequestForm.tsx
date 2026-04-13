'use client'

import React, { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { pushEvent, pushAdsConversion } from '@/lib/track-event'
import { APPLIANCE_OPTIONS } from '@/lib/appliance-options'

const MAX_FILES = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

const inputClass =
  'w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors text-base'

type Status = 'idle' | 'sending' | 'error'

export default function PartsRequestForm() {
  const router = useRouter()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [dragOver, setDragOver] = useState(false)
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
        if (errors.length) setErrorMsg(errors.join(' '))
        return prev
      }
      const toAdd = valid.slice(0, room)
      if (valid.length > room) errors.push(`Only added ${room} of ${valid.length} (max ${MAX_FILES}).`)
      if (errors.length) setErrorMsg(errors.join(' '))
      else setErrorMsg('')

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
    setErrorMsg('')
  }

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragOver(false)
      if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files)
    },
    [addFiles],
  )

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const fd = new FormData(form)

    // Build multipart FormData with photos
    const body = new FormData()
    body.append('name', fd.get('name') as string)
    body.append('phone', fd.get('phone') as string)
    body.append('email', fd.get('email') as string)
    body.append('appliance', fd.get('appliance') as string)
    body.append('brand', fd.get('brand') as string)
    body.append('modelNumber', fd.get('modelNumber') as string)
    body.append('partDescription', fd.get('partDescription') as string)
    photos.forEach((f) => body.append('photos', f, f.name))

    try {
      const res = await fetch('/api/parts-request', {
        method: 'POST',
        body,
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
        has_photos: photos.length > 0 ? 'yes' : 'no',
      })
      pushAdsConversion('AW-10866866733/1L-TCPmLzY8cEK303L0o', 75.0, 'USD')

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

      {/* ---- Photos ---- */}
      <fieldset className="border-t border-gray-200 pt-4">
        <legend className="text-sm font-semibold text-gray-700 mb-1">
          Photos <span className="text-gray-400 font-normal">(optional, max 3)</span>
        </legend>
        <p className="text-xs text-gray-500 mb-2">
          Not sure what part you need? Snap a photo of the broken part, model tag, or part number label. JPG, PNG, or WebP up to 5 MB each.
        </p>

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
                  className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm leading-none shadow hover:bg-red-600"
                  aria-label={`Remove photo ${i + 1}`}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}
      </fieldset>

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
