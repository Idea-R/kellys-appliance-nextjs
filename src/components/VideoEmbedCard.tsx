"use client"
import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'

type Props = {
  title: string
  youtubeId: string
  description?: string
}

export default function VideoEmbedCard({ title, youtubeId, description }: Props) {
  const [open, setOpen] = useState(false)
  const playerHostRef = useRef<HTMLDivElement | null>(null)
  interface YTIframePlayer {
    setVolume: (n: number) => void
    unMute: () => void
    playVideo: () => void
    destroy: () => void
  }
  const playerInstanceRef = useRef<YTIframePlayer | null>(null)

  // When modal opens, load YT Iframe API (once) and autoplay at 50% volume unmuted
  useEffect(() => {
    if (!open) return
    const win = window as unknown as { YT?: { Player?: new (el: HTMLElement | string, opts: Record<string, unknown>) => YTIframePlayer }; onYouTubeIframeAPIReady?: () => void }
    const mountPlayer = () => {
      if (!playerHostRef.current || !win.YT || !win.YT.Player) return
      if (playerInstanceRef.current) return
      const player = new win.YT.Player(playerHostRef.current, {
        videoId: youtubeId,
        playerVars: { autoplay: 1, rel: 0, playsinline: 1 },
        events: {
          onReady: (e: { target: { setVolume: (n: number) => void; unMute: () => void; playVideo: () => void } }) => {
            try {
              e.target.setVolume(50)
              e.target.unMute()
              e.target.playVideo()
            } catch {}
          },
        },
      } as unknown as Record<string, unknown>)
      playerInstanceRef.current = player as unknown as YTIframePlayer
    }
    if (win.YT && win.YT.Player) {
      mountPlayer()
    } else {
      const scriptId = 'yt-iframe-api'
      if (!document.getElementById(scriptId)) {
        const s = document.createElement('script')
        s.id = scriptId
        s.src = 'https://www.youtube.com/iframe_api'
        s.async = true
        document.head.appendChild(s)
      }
      const prev = win.onYouTubeIframeAPIReady
      win.onYouTubeIframeAPIReady = () => {
        prev?.()
        mountPlayer()
      }
    }
    return () => {
      try { playerInstanceRef.current?.destroy?.() } catch {}
      playerInstanceRef.current = null
    }
  }, [open, youtubeId])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-start">
      <div className="lg:col-span-3">
        <button
          type="button"
          className="video-frame cursor-pointer block text-left p-0 bg-transparent"
          onClick={() => setOpen(true)}
          data-analytics-label="video_open_modal"
          aria-label={`Open ${title} video`}
        >
          <div className="aspect-video video-inner relative">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
              title={title}
              className="w-full h-full pointer-events-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </button>
      </div>
      <div className="lg:col-span-2">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4">
          <h4 className="text-base font-semibold text-gray-900 mb-2">{title}</h4>
          {description ? (
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          ) : (
            <p className="text-sm text-gray-500">Description coming soon.</p>
          )}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={title} widthClassName="max-w-5xl md:max-w-6xl">
        <div className="space-y-4">
          <div className="video-frame video-modal">
            <div className="video-inner" ref={playerHostRef} />
          </div>
          {description && (
            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
          )}
        </div>
      </Modal>
    </div>
  )
}


