'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, EyeOff } from 'lucide-react'
import Image from 'next/image'

export default function AnonimDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Dışarı tıklayınca dropdown'u kapat
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-x-2 text-sm bg-gray-100 rounded-md p-4 w-full"
      >
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <Image
            src="/images/avatar.jpg"
            alt="avatar"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-sm">Anonim Olarak Paylaş</p>
          <strong className="text-xs text-gray-600">Stajyer</strong>
        </div>

        <ChevronDown
          size={20}
          className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 mt-1 w-64 bg-white border border-gray-300 rounded-md shadow-lg p-2 z-50">
          <p className="text-xs font-medium text-gray-500 mb-1">Anonim olarak gönder</p>

          <button
            onClick={() => {
              /* seçeneği işle */
              setOpen(false)
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 w-full text-left"
          >
            <EyeOff size={18} className="text-gray-600" />
            <span className="text-sm">Anonim Kullanıcı</span>
          </button>

          <p className="text-xs font-medium text-gray-500 mt-3 mb-1">Adınla gönder</p>

          <button
            onClick={() => {
              /* seçeneği işle */
              setOpen(false)
            }}
            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 w-full text-left"
          >
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs text-gray-700">
              AE
            </div>
            <span className="text-sm">Anıl Eren Candan</span>
          </button>
        </div>
      )}
    </div>
  )
}