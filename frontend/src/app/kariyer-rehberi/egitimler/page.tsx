"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge, BookOpen, Calendar, ChevronLeft, Clock } from "lucide-react"
import Image from "next/image"
import { ContentFilter } from "@/components/kariyer-rehberi/ContentFilter"
import { trainings, trainingCategories, filterAndSortContent } from "@/lib/ContentTypes"

export default function EgitimlerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")

  const filteredTrainings = filterAndSortContent(trainings, searchQuery, selectedCategory, sortBy)

  return (
    <div className="page-content mx-auto px-4 py-8">
      <div className="flex items-center mb-4">
        <Link href="/kariyer-rehberi">
          <Button variant="ghost" className="flex items-center gap-2 text-primary">
            <ChevronLeft className="h-4 w-4  "/> Kariyer Rehberine Dön
          </Button>
        </Link>
      </div>
      <h1 className="text-3xl font-bold py-4">Eğitimler</h1>

      <ContentFilter
        categories={trainingCategories}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />

      {filteredTrainings.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">Sonuç Bulunamadı</h3>
          <p className="text-muted-foreground mt-2">
            Arama kriterlerinize uygun içerik bulunamadı. Lütfen farklı anahtar kelimeler deneyin veya filtreleri
            temizleyin.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrainings.map((egitim) => (
            <Link href={`/kariyer-rehberi/egitimler/${egitim.id}`} key={egitim.id}>

            <ContentCard
              key={egitim.id}
              title={egitim.title}
              description={egitim.description}
              image={egitim.image}
              footer={`Süre: ${egitim.duration}`}
              category={egitim.category}
              popularity={egitim.popularity}
              />
              </Link>
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
  type?: "blog" | "training" | "extra"
}

export function ContentCard({ title, description, image, footer, category, type = "blog" }: ContentCardProps) {
  // Different icon based on content type
  const getIcon = () => {
    switch (type) {
      case "blog":
        return <div className="flex items-center gap-x-2 text-xs"><BookOpen className="h-4 w-4 mr-1" /> 5 dk okuma suresi</div>
      case "training":
        return <Clock className="h-4 w-4 mr-1" />
      case "extra":
        return <Calendar className="h-4 w-4 mr-1" />
      default:
        return null
    }
  }

  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 ">
      <div className="relative w-full pt-[60%]">
        <Badge className="absolute top-3 right-3 z-10">{category}</Badge>
        <div className="absolute inset-0 overflow-hidden shadow-md">
      
          <Image
            src={"/kariyer-rehberi-sample.jpg"}
            alt={title}
            width={400}
            height={300}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <CardHeader className="flex-grow p-4">
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-2">{description}</CardDescription>
      </CardHeader>

      <CardFooter className="text-sm text-muted-foreground border-t pt-3 flex items-center p-4">
        {getIcon()}
        {footer}
      </CardFooter>
    </Card>
  )
}