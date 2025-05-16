import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Building, MapPin, Users } from "lucide-react"
import Image from "next/image"

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

export default function CompaniesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Takip Ettiğim Şirketler</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            ← Ana Sayfa
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <Card key={company.slug} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={company.image || "/placeholder.svg"} alt={company.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{company.title}</h2>
              <p className="text-muted-foreground line-clamp-2 mb-4">{company.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{company.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{company.followers.toLocaleString()} takipçi</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link href={`/profil/sosyal/company/${company.slug}`} className="w-full">
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
