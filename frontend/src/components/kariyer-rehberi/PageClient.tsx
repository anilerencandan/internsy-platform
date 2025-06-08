'use client'

import { useEffect, useState } from "react"
import { ContentFilter } from "@/components/kariyer-rehberi/ContentFilter"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import ContentCard from "./ContentCard"
import { Blog } from "@/models/Blogs"


interface Props {
  initialPosts: Blog[]
}

export default function BlogPage({ initialPosts }: Props) {
  const [posts, setPosts] = useState<Blog[]>(initialPosts)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("newest")

  // Filtreleme ve sıralama
  const filtered = posts
    .filter((post) => {
      const matchesCategory = !selectedCategory || post.content_type === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      if (sortBy === "popular") {
        return (b.like_count ?? 0) - (a.like_count ?? 0)
      } else {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }
    })

  return (
    <div className="page-content mx-auto sm:px-4 py-8">
      <div className="flex items-center mb-4 sm:px-0 px-4">
        <Link href="/kariyer-rehberi">
          <Button variant="ghost" className="flex items-center gap-2 text-primary">
            <ChevronLeft className="h-4 w-4" /> Kariyer Rehberine Dön
          </Button>
        </Link>
      </div>

      <h1 className="text-3xl font-bold py-4 sm:px-0 px-4">Blog Yazıları</h1>

      <ContentFilter
        categories={["blog", "extra", "education"]}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium">Sonuç Bulunamadı</h3>
          <p className="text-muted-foreground mt-2">
            Farklı bir kelime veya kategori ile tekrar deneyin.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {filtered.map((post) => (
            <Link href={`/kariyer-rehberi/bloglar/${post.id}`} key={post.id}>
              <ContentCard
                key={post.id}
                title={post.title}
                description={extractDescription(post.content)}
                image={post.image_url}
                footer={format(new Date(post.created_at), "dd MMMM yyyy")}
                category={post.content_type}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

// HTML içinden ilk <p> tag'ını çıkarır
function extractDescription(html: string): string {
  const match = html.match(/<p>(.*?)<\/p>/)
  return match ? match[1] : "Detayları görmek için tıklayın."
}
