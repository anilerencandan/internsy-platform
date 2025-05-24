"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContentFilterProps {
  categories: string[]
  onCategoryChange: (category: string | null) => void
  onSearchChange: (search: string) => void
  onSortChange: (sort: string) => void
  selectedCategory: string | null
  searchQuery: string
}

export function ContentFilter({
  categories,
  onCategoryChange,
  onSearchChange,
  onSortChange,
  selectedCategory,
  searchQuery,
}: ContentFilterProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery)

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearchChange(localSearch)
  }

  const clearSearch = () => {
    setLocalSearch("")
    onSearchChange("")
  }

  const clearCategory = () => {
    onCategoryChange(null)
  }

  return (
    <div className="space-y-4 mb-8 sm:px-0 px-4">
      <div className="flex flex-col md:flex-row gap-4">
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Input
            type="text"
            placeholder="Ara..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="pr-10"
          />
          {localSearch && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <div className="flex gap-2">
          <Select onValueChange={onSortChange} defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sıralama" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">En Yeni</SelectItem>
              <SelectItem value="popular">En Popüler</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <div className="text-sm font-medium py-1">Kategoriler:</div>
        <Button variant={selectedCategory === null ? "secondary" : "outline"} size="sm" onClick={clearCategory}>
          Tümü
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "secondary" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {(selectedCategory || searchQuery) && (
        <div className="flex gap-2 items-center">
          <span className="text-sm text-muted-foreground">Aktif filtreler:</span>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Kategori: {selectedCategory}
                <button onClick={clearCategory}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Arama: {searchQuery}
                <button onClick={clearSearch}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
