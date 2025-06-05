'use client'
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

export default function CompanySearchBar() {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            router.push(`/sirketler?q=${encodeURIComponent(search)}`)
        }
    }

  return (
    <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Şirket adı ara (örn. Google, Microsoft, Amazon...)"
        className="pl-10 py-6 text-lg rounded-lg shadow-sm"
        />
    </div>
  )
}
