import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BookmarkPlus, Clock, Tag, User } from "lucide-react"
import Image from "next/image"

// Gönderi verilerini doğrudan sayfa içinde tanımlıyoruz
const savedPosts = [
  {
    slug: "yapay-zeka-teknolojileri",
    title: "Yapay Zeka Teknolojilerindeki Son Gelişmeler",
    description:
      "Yapay zeka alanında yaşanan son gelişmeler ve bu teknolojilerin iş dünyasına etkileri hakkında detaylı bir analiz. Makine öğrenmesi algoritmaları ve derin öğrenme modellerinin kullanım alanları.",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 Nisan 2023",
    author: "Ahmet Yılmaz",
    readTime: "8 dakika",
    category: "Teknoloji",
  },
  {
    slug: "sosyal-medya-stratejileri",
    title: "Etkili Sosyal Medya Stratejileri",
    description:
      "Markaların sosyal medyada başarılı olması için uygulamaları gereken stratejiler ve dikkat edilmesi gereken noktalar. İçerik planlaması ve topluluk yönetimi hakkında ipuçları.",
    image: "/placeholder.svg?height=400&width=600",
    date: "3 Mayıs 2023",
    author: "Zeynep Kaya",
    readTime: "6 dakika",
    category: "Dijital Pazarlama",
  },
  {
    slug: "uzaktan-calisma",
    title: "Uzaktan Çalışma Kültürü ve Verimlilik",
    description:
      "Uzaktan çalışmanın şirket kültürüne etkileri ve verimli bir uzaktan çalışma ortamı oluşturmak için öneriler. Takım iletişimi ve proje yönetimi araçları hakkında bilgiler.",
    image: "/placeholder.svg?height=400&width=600",
    date: "22 Haziran 2023",
    author: "Mehmet Demir",
    readTime: "7 dakika",
    category: "İş Dünyası",
  },
  {
    slug: "web3-blockchain",
    title: "Web 3.0 ve Blockchain Teknolojisinin Geleceği",
    description:
      "Web 3.0 kavramı, blockchain teknolojisi ve kripto para birimlerinin internet dünyasını nasıl değiştireceğine dair öngörüler ve analizler.",
    image: "/placeholder.svg?height=400&width=600",
    date: "10 Temmuz 2023",
    author: "Elif Yıldız",
    readTime: "10 dakika",
    category: "Teknoloji",
  },
]

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Kaydettiğim Gönderiler</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Ana Sayfa
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="flex gap-2 mb-2">
                <span className="bg-muted px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Tag className="h-3 w-3" /> {post.category}
                </span>
                <span className="bg-muted px-2 py-1 rounded-full text-xs flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-muted-foreground line-clamp-2 mb-2">{post.description}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex gap-2 w-full">
                <Link href={`/post/${post.slug}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Oku
                  </Button>
                </Link>
                <Button variant="ghost" size="icon">
                  <BookmarkPlus className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
