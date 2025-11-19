"use client"

import React, { useState, Fragment, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { Crown } from 'lucide-react'
import YearsOfServiceBadge from '@/components/YearsOfServiceBadge'

export type TeamMember = {
  name: string
  role: string
  image: string
  bio: string                     // Short bio for card
  bioFull?: string                // Full bio for modal (optional, falls back to bio)
  yearsExperience?: number
  yearsOfService?: number        // Years with Kelly's Appliance
  specialties?: string[]
  certifications?: string[]
  favoriteAppliance?: string
  funFact?: string
  quote?: string                  // Single quote (deprecated, use quotes array)
  quotes?: string[]               // Array of quotes/philosophies
}


function getVariant(role: string) {
  const r = role.toLowerCase()
  if (r.includes('owner')) return { bg: 'bg-amber-600/95', accent: 'bg-amber-700', Icon: Crown }
  if (r.includes('technician')) return { bg: 'bg-emerald-700/95', accent: 'bg-emerald-800', Icon: WrenchScrewdriverIcon }
  return { bg: 'bg-sky-700/95', accent: 'bg-sky-800', Icon: SparklesIcon }
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group flex flex-col">
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center rounded-none transform group-hover:scale-[1.02] transition-transform"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Ribbon nameplate bottom-left */}
              <div className="absolute bottom-3 left-3 z-10 flex items-stretch">
                {(() => {
                  const v = getVariant(member.role)
                  const Icon = v.Icon
                  return (
                    <>
                      <div className="self-center mr-1 rounded-full bg-black/45 backdrop-blur p-1 ring-1 ring-white/30">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className={`${v.bg} text-white shadow-lg ring-1 ring-black/20 rounded-r-md px-4 py-1`}>
                        <span className="text-2xl leading-none font-bold">{member.name.split(' ')[0]}</span>
                      </div>
                      <span aria-hidden className={`h-[34px] w-3 ${v.accent}`} style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                    </>
                  )
                })()}
              </div>
              
              {/* Years of Service badge - bottom right */}
              {member.yearsOfService && member.yearsOfService >= 1 && (
                <YearsOfServiceBadge years={member.yearsOfService} position="corner" />
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm flex-grow">{member.bio}</p>
              <div className="mt-4 pt-4">
                <button
                  onClick={() => setSelected(member)}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Transition show={!!selected} as={Fragment}>
        <Dialog onClose={() => setSelected(null)} className="relative z-50" static>
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div 
            className="fixed inset-0 flex items-center justify-center p-4"
            onWheel={(e) => {
              // Prevent background scroll when mouse is over modal area
              const modalContent = document.querySelector('.modal-scroll-area')
              if (modalContent) {
                e.preventDefault()
                e.stopPropagation()
                // Manually scroll the modal content
                modalContent.scrollTop += e.deltaY
              }
            }}
          >
            <div className="w-full max-w-2xl">
              <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-2xl max-h-[90vh] transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all flex flex-col">
                  {selected && (
                    <>
                      {/* Header with gradient background */}
                      <div className={`relative ${getVariant(selected.role).bg} text-white px-8 py-6`}>
                        <div className="flex items-start gap-6">
                          <div className="relative h-32 w-32 shrink-0 rounded-xl overflow-hidden ring-4 ring-white/30">
                            <Image src={selected.image} alt={selected.name} fill className="object-cover object-top" />
                          </div>
                          <div className="flex-1">
                            <Dialog.Title className="text-3xl font-bold mb-2">{selected.name}</Dialog.Title>
                            <p className="text-white/90 font-semibold text-lg mb-2">{selected.role}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {selected.yearsExperience && (
                                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                                  {selected.yearsExperience}+ Years Experience
                                </div>
                              )}
                              {selected.yearsOfService && selected.yearsOfService >= 1 && (
                                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                                  {selected.yearsOfService} Years with Kelly's
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content - Scrollable */}
                      <div className="modal-scroll-area px-8 py-6 space-y-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                        {/* Bio */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">About</h3>
                          <p className="text-gray-700 leading-relaxed">{selected.bioFull || selected.bio}</p>
                        </div>

                        {/* Quotes - Support both single and array */}
                        {(selected.quotes || selected.quote) && (
                          <div className="space-y-3">
                            <h3 className="text-lg font-bold text-gray-900">Philosophy & Quotes</h3>
                            {selected.quotes ? (
                              // Multiple quotes
                              selected.quotes.map((quoteText, idx) => (
                                <div key={idx} className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                                  <p className="text-gray-700">{quoteText}</p>
                                </div>
                              ))
                            ) : (
                              // Single quote (legacy support)
                              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
                                <p className="text-gray-700">{selected.quote}</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Two-column layout for details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Specialties */}
                          {selected.specialties && selected.specialties.length > 0 && (
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Specialties</h3>
                              <ul className="space-y-2">
                                {selected.specialties.map((specialty, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    <span className="text-gray-700 text-sm">{specialty}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Certifications */}
                          {selected.certifications && selected.certifications.length > 0 && (
                            <div>
                              <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Certifications</h3>
                              <ul className="space-y-2">
                                {selected.certifications.map((cert, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span className="text-gray-700 text-sm">{cert}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Fun details */}
                        {(selected.favoriteAppliance || selected.funFact) && (
                          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                            {selected.favoriteAppliance && (
                              <div>
                                <span className="text-sm font-bold text-gray-900">Favorite Appliance: </span>
                                <span className="text-gray-700 text-sm">{selected.favoriteAppliance}</span>
                              </div>
                            )}
                            {selected.funFact && (
                              <div>
                                <span className="text-sm font-bold text-gray-900">Fun Fact: </span>
                                <span className="text-gray-700 text-sm">{selected.funFact}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Coming Soon placeholder for empty data */}
                        {!selected.specialties && !selected.certifications && !selected.quote && !selected.quotes && (
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                            <p className="text-blue-800 font-medium">More details coming soon!</p>
                            <p className="text-blue-600 text-sm mt-1">We&apos;re gathering more information about {selected.name.split(' ')[0]}.</p>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                        <button 
                          onClick={() => setSelected(null)} 
                          className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


