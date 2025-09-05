"use client"

import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import { Dancing_Script } from 'next/font/google'
import { WrenchScrewdriverIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { Crown } from 'lucide-react'

export type TeamMember = {
  name: string
  role: string
  image: string
  bio: string
}

const dancing = Dancing_Script({ subsets: ['latin'], weight: ['700'] })

function getVariant(role: string) {
  const r = role.toLowerCase()
  if (r.includes('owner')) return { bg: 'bg-amber-600/95', accent: 'bg-amber-700', Icon: Crown }
  if (r.includes('technician')) return { bg: 'bg-emerald-700/95', accent: 'bg-emerald-800', Icon: WrenchScrewdriverIcon }
  return { bg: 'bg-sky-700/95', accent: 'bg-sky-800', Icon: SparklesIcon }
}

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group">
            <div className="relative w-full h-80">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top rounded-none transform group-hover:scale-[1.02] transition-transform"
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
                        <span className={`${dancing.className} text-2xl leading-none`}>{member.name.split(' ')[0]}</span>
                      </div>
                      <span aria-hidden className={`h-[34px] w-3 ${v.accent}`} style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                    </>
                  )
                })()}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-green-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
              <div className="mt-4">
                <button
                  onClick={() => setSelected(member)}
                  className="inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition-colors"
                >
                  About the Tech
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Transition show={!!selected} as={Fragment}>
        <Dialog onClose={() => setSelected(null)} className="relative z-50">
          <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    {selected && (
                      <div className="relative h-28 w-28 shrink-0 rounded-lg overflow-hidden">
                        <Image src={selected.image} alt={selected.name} fill className="object-cover object-top" />
                      </div>
                    )}
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-gray-900">{selected?.name}</Dialog.Title>
                      <p className="text-green-700 font-semibold mt-1">{selected?.role}</p>
                      <p className="mt-3 text-gray-700">{selected?.bio}</p>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button onClick={() => setSelected(null)} className="inline-flex items-center justify-center bg-gray-100 text-gray-800 px-4 py-2 rounded font-semibold hover:bg-gray-200 transition-colors">
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


