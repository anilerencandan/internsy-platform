'use client'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'

export default function CompanySearchBar() {
  const [search, setSearch] = useState<string>('')
  const [debouncedSearch, setDebouncedSearch] = useState<string>('')
  const router = useRouter()

  // 500ms debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search.trim())
    }, 500)

    return () => clearTimeout(timeout)
  }, [search])

  // search değiştiğinde router.push
  useEffect(() => {
    const query = debouncedSearch
      ? `/sirketler?q=${encodeURIComponent(debouncedSearch)}`
      : `/sirketler`

    router.push(query)
  }, [debouncedSearch])

  return (
    <div className="relative max-w-xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Şirket adı ara (örn. Google, Microsoft, Amazon...)"
        className="pl-10 py-6 text-lg rounded-lg shadow-sm"
      />
    </div>
  )
}
