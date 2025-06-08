'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, EyeOff } from 'lucide-react'
import Image from 'next/image'

export default function AnonimDropdown() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-full">
      <div
        className="flex items-center gap-x-3 text-sm bg-gray-100 rounded-lg px-4 py-3 w-full"
      >
        {/* Avatar */}
        <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full shrink-0">
          <EyeOff className="w-5 h-5 text-gray-700" />
        </div>

        {/* Text */}
        <div className="text-left">
          <p className="text-sm">Anonim Olarak Paylaş</p>
          <strong className="text-xs text-gray-600">Stajyer</strong>
        </div>

      </div>

    </div>
  )
}