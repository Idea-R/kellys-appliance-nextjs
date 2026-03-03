'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function RefDisplay() {
  const searchParams = useSearchParams()
  const ref = searchParams.get('ref')

  if (!ref) return null

  return (
    <div className="bg-green-50 border-2 border-green-600 rounded-xl p-5 text-center">
      <p className="text-xs font-semibold text-green-800 uppercase tracking-wider mb-1">Your Reference Number</p>
      <p className="text-2xl sm:text-3xl font-extrabold text-green-700 font-mono tracking-widest">{ref}</p>
      <p className="text-sm text-green-800 mt-2">Save this number. Include it when you text us photos or call about this request.</p>
    </div>
  )
}

export default function RefNumberDisplay() {
  return (
    <Suspense fallback={null}>
      <RefDisplay />
    </Suspense>
  )
}
