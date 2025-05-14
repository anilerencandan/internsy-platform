'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const cities = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Eskişehir", "Konya"
]

export default function CitySearchBox() {
  const [input, setInput] = useState("")
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = cities.filter((city) =>
    city.toLowerCase().includes(input.toLowerCase())
  )

  const handleSelect = (city: string) => {
    setSelected(city)
    setInput("")
  }

  return (
    <div className="relative w-full">
      {/* <label className="block text-sm font-medium mb-1">Şehir</label> */}
      <Input
        type="text"
        placeholder="Şehir ara..."
        value={selected || input}
        onChange={(e) => {setInput(e.target.value); setSelected(null)}}
        className="w-full"
      />

      {input.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-40 w-full overflow-y-auto rounded-md border bg-white shadow">
          {filtered.length > 0 ? (
            filtered.map((city) => (
              <li
                key={city}
                onClick={() => {handleSelect(city)}}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {city}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-500">Sonuç bulunamadı</li>
          )}
        </ul>
      )}
    </div>
  )
}
