"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { ContentFilter } from "@/components/kariyer-rehberi/ContentFilter"
import { extras, extraCategories, filterAndSortContent } from "@/lib/ContentTypes"

export default function EkstralarPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")

  const filteredExtras = filterAndSortContent(extras, searchQuery, selectedCategory, sortBy)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <Link href="/kariyer-rehberi">
          <Button variant="ghost" className="flex items-center gap-2 text-primary">
            <ChevronLeft className="h-4 w-4  "/> Kariyer Rehberine Dön
          </Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold py-4">Ekstralar</h1>

      <ContentFilter
        categories={extraCategories}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />

      {filteredExtras.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">Sonuç Bulunamadı</h3>
          <p className="text-muted-foreground mt-2">
            Arama kriterlerinize uygun içerik bulunamadı. Lütfen farklı anahtar kelimeler deneyin veya filtreleri
            temizleyin.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExtras.map((ekstra) => (
            <ContentCard
              key={ekstra.id}
              title={ekstra.title}
              description={ekstra.description}
              image={ekstra.image}
              footer={ekstra.type}
              category={ekstra.category}
              popularity={ekstra.popularity}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface ContentCardProps {
  title: string
  description: string
  image: string
  footer: string
  category: string
  popularity: number
}

function ContentCard({ title, description, image, footer, category, popularity }: ContentCardProps) {
  return (
    <Link href={`/kariyer-rehberi/ekstralar/${title.replace(/\s+/g, "-").toLowerCase()}`} className="w-full">
    <Card className="h-full flex flex-col">
      <div className="relative w-full h-40">
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">{category}</span>
        </div>
        {popularity > 90 && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Popüler</span>
          </div>
        )}
        <Image src={"/images/internsy-logo.svg"} alt={title} fill className="object rounded-t-lg" />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto text-sm text-muted-foreground">{footer}</CardFooter>
    </Card>
        </Link>
  )
}
