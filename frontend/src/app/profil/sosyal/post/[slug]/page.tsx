import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookmarkPlus, Clock, Tag, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = savedPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return <div className="container mx-auto p-8 text-center">Gönderi bulunamadı</div>
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline" size="sm">
          ← Geri Dön
        </Button>
      </Link>

      <Card>
        <div className="relative h-72 md:h-96 w-full">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-t-lg" />
        </div>
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
            <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <User className="h-3 w-3" /> {post.author}
            </span>
          </div>

          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-6">{post.date}</p>

          <div className="prose max-w-none">
            <p className="mb-4">{post.description}</p>

            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>

            <h2 className="text-2xl font-semibold my-4">Konu Başlığı</h2>

            <p className="mb-4">
              Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>

            <p className="mb-4">
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.
            </p>

            <h2 className="text-2xl font-semibold my-4">Sonuç</h2>

            <p className="mb-4">
              Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Cras justo
              odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at
              eros.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <Button className="flex items-center gap-2">
              <BookmarkPlus className="h-4 w-4" /> Kaydet
            </Button>
            <Button variant="outline">Paylaş</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Benzer Gönderiler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {savedPosts
            .filter((p) => p.slug !== post.slug)
            .slice(0, 3)
            .map((relatedPost) => (
              <Card key={relatedPost.slug} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{relatedPost.date}</p>
                  <Link href={`/post/${relatedPost.slug}`}>
                    <Button variant="link" className="p-0">
                      Devamını Oku
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
