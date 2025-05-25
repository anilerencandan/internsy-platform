'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, EyeOff } from 'lucide-react'
import Image from 'next/image'

export default function AnonimDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

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

      </button>

    </div>
  )
}