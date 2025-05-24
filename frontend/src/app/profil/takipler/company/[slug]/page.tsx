import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Globe, MapPin, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Şirket verilerini doğrudan sayfa içinde tanımlıyoruz
const companies = [
  {
    slug: "teknoloji-as",
    title: "Teknoloji A.Ş.",
    description:
      "Yazılım ve teknoloji alanında öncü şirket. Bulut çözümleri, yapay zeka ve mobil uygulama geliştirme konularında uzmanlaşmış ekibiyle hizmet vermektedir.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 12500,
    location: "İstanbul, Türkiye",
    industry: "Teknoloji",
    website: "www.teknolojiAS.com",
  },
  {
    slug: "dijital-medya",
    title: "Dijital Medya Ltd.",
    description:
      "Dijital pazarlama ve sosyal medya yönetimi konusunda uzmanlaşmış şirket. Markaların dijital varlıklarını güçlendirmek için stratejik çözümler sunmaktadır.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 8700,
    location: "Ankara, Türkiye",
    industry: "Dijital Pazarlama",
    website: "www.dijitalmedya.com",
  },
  {
    slug: "yenilik-muhendislik",
    title: "Yenilik Mühendislik",
    description:
      "Mühendislik ve inovasyon alanında faaliyet gösteren şirket. Sürdürülebilir çözümler ve yenilikçi projeler geliştirmektedir.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 5300,
    location: "İzmir, Türkiye",
    industry: "Mühendislik",
    website: "www.yenilikmuhendislik.com",
  },
  {
    slug: "finans-cozumleri",
    title: "Finans Çözümleri",
    description:
      "Finansal teknolojiler ve bankacılık çözümleri sunan şirket. Güvenli ödeme sistemleri ve finansal danışmanlık hizmetleri vermektedir.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 9200,
    location: "İstanbul, Türkiye",
    industry: "Finans",
    website: "www.finanscozumleri.com",
  },
]

export default function CompanyDetailPage({ params }: { params: { slug: string } }) {
  const company = companies.find((c) => c.slug === params.slug)

  if (!company) {
    return <div className="container mx-auto p-8 text-center">Şirket bulunamadı</div>
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
                src={company.image || "/placeholder.svg"}
                alt={company.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="p-6">
              <h1 className="text-3xl font-bold mb-4">{company.title}</h1>
              <p className="text-lg mb-6">{company.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <span>Sektör: {company.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Konum: {company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span>Takipçi: {company.followers.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>Web: {company.website}</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button>Takip Et</Button>
                <Button variant="outline">İletişime Geç</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Son Paylaşımlar</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4 last:border-0">
                    <h3 className="font-medium">{company.title} tarafından paylaşıldı</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(Date.now() - i * 86400000).toLocaleDateString("tr-TR")}
                    </p>
                    <p className="line-clamp-2">
                      {i === 1
                        ? `${company.title} olarak yeni projemizi duyurmaktan heyecan duyuyoruz!`
                        : i === 2
                          ? `Ekibimize yeni katılan yetenekli çalışma arkadaşlarımızla büyümeye devam ediyoruz.`
                          : `${company.industry} sektöründeki son gelişmeleri takip etmek için blogumuzu ziyaret edin.`}
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
