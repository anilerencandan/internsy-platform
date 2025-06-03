"use client"
import { Ellipsis, MoreVertical } from "lucide-react"
import { useState } from "react"

export default function PostOptions({ onReport }: { onReport: () => void }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <Ellipsis size={20} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
          <button
            onClick={() => {
              onReport()
              setOpen(false)
            }}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Şikayet Et
          </button>
        </div>
      )}
    </div>
  )
}
