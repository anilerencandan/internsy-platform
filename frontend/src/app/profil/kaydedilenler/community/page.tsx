import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"

// Topluluk verilerini doğrudan sayfa içinde tanımlıyoruz
const communities = [
  {
    slug: "yazilim-gelistiricileri",
    title: "Yazılım Geliştiricileri Topluluğu",
    description:
      "Yazılım geliştirme, programlama dilleri ve teknoloji trendleri hakkında bilgi paylaşımı yapan topluluk. Düzenli etkinlikler ve webinarlar düzenlenmektedir.",
    image: "/placeholder.svg?height=400&width=600",
    members: 3500,
    founded: "2018",
    meetupFrequency: "Aylık",
    topics: ["JavaScript", "Python", "Web Geliştirme", "Mobil Uygulama"],
  },
  {
    slug: "veri-bilimi",
    title: "Veri Bilimi Meraklıları",
    description:
      "Veri bilimi, yapay zeka ve makine öğrenmesi konularında çalışan profesyonellerin ve öğrencilerin bir araya geldiği topluluk.",
    image: "/placeholder.svg?height=400&width=600",
    members: 2800,
    founded: "2019",
    meetupFrequency: "İki haftada bir",
    topics: ["Veri Analizi", "Yapay Zeka", "Makine Öğrenmesi", "Büyük Veri"],
  },
  {
    slug: "dijital-pazarlama",
    title: "Dijital Pazarlama Ağı",
    description:
      "Dijital pazarlama stratejileri, SEO, içerik pazarlaması ve sosyal medya yönetimi konularında bilgi paylaşımı yapan topluluk.",
    image: "/placeholder.svg?height=400&width=600",
    members: 1950,
    founded: "2020",
    meetupFrequency: "Aylık",
    topics: ["SEO", "İçerik Pazarlaması", "Sosyal Medya", "E-posta Pazarlaması"],
  },
  {
    slug: "tasarim-ux",
    title: "Tasarım ve UX Topluluğu",
    description:
      "Kullanıcı deneyimi, arayüz tasarımı ve grafik tasarım konularında çalışan profesyonellerin oluşturduğu topluluk.",
    image: "/placeholder.svg?height=400&width=600",
    members: 2100,
    founded: "2017",
    meetupFrequency: "Aylık",
    topics: ["UI Tasarımı", "UX Araştırması", "Grafik Tasarım", "Kullanılabilirlik"],
  },
]

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Katıldığım Topluluklar</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Ana Sayfa
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community) => (
          <Card key={community.slug} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={community.image || "/placeholder.svg"} alt={community.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{community.title}</h2>
              <p className="text-muted-foreground line-clamp-2 mb-4">{community.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{community.members.toLocaleString()} üye</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Kuruluş: {community.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Buluşma: {community.meetupFrequency}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {community.topics.slice(0, 2).map((topic, index) => (
                  <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs">
                    {topic}
                  </span>
                ))}
                {community.topics.length > 2 && (
                  <span className="bg-muted px-2 py-1 rounded-full text-xs">+{community.topics.length - 2}</span>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/community/${community.slug}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Detayları Gör
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
