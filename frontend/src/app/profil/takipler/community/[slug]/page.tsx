import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function CommunityDetailPage({ params }: { params: { slug: string } }) {
  const community = communities.find((c) => c.slug === params.slug)

  if (!community) {
    return <div className="container mx-auto p-8 text-center">Topluluk bulunamadı</div>
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Link href="/" className="mb-4 inline-block">
        <Button variant="outline" size="sm">
          ← Geri Dön
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <div className="relative h-64 w-full">
              <Image
                src={community.image || "/placeholder.svg"}
                alt={community.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4">{community.title}</h1>
              <p className="text-lg mb-6">{community.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>Üye Sayısı: {community.members.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <span>Kuruluş: {community.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span>Buluşma Sıklığı: {community.meetupFrequency}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">İlgi Alanları:</h3>
                <div className="flex flex-wrap gap-2">
                  {community.topics.map((topic, index) => (
                    <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button>Katıl</Button>
                <Button variant="outline">Etkinlikleri Gör</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Yaklaşan Etkinlikler</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <h3 className="font-medium">
                      {i === 1
                        ? `${community.topics[0]} Workshop`
                        : i === 2
                          ? `${community.topics[1]} Webinar`
                          : `Networking Etkinliği`}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(Date.now() + i * 7 * 86400000).toLocaleDateString("tr-TR")} - 19:00
                    </p>
                    <p className="line-clamp-2">
                      {i === 1
                        ? `${community.topics[0]} konusunda uzmanlarla interaktif bir workshop.`
                        : i === 2
                          ? `${community.topics[1]} alanında son gelişmeleri öğrenmek için webinar.`
                          : `Topluluk üyeleriyle tanışma ve networking fırsatı.`}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
