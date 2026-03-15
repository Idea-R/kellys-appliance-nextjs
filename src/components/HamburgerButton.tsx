"use client"

export default function HamburgerButton() {
  return (
    <button
      type="button"
      className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Open navigation menu"
      onClick={() => document.dispatchEvent(new CustomEvent('toggle-mobile-nav'))}
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  )
}
