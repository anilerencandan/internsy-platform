'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SocialSection from "@/components/profil-page/SocialSection"
import TabsSection from "@/components/profil-page/TabsSection"
import { Separator } from "@/components/ui/separator"
import SubMenu from "@/components/profil-page/SubMenu"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"

// Verileri doğrudan sayfa içinde tanımlıyoruz
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
  },{
    slug: "finans-cozumleri",
    title: "Finans Çözümleri",
    description:
      "Finansal teknolojiler ve bankacılık çözümleri sunan şirket. Güvenli ödeme sistemleri ve finansal danışmanlık hizmetleri vermektedir.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 9200,
    location: "İstanbul, Türkiye",
    industry: "Finans",
    website: "www.finanscozumleri.com",
  },{
    slug: "finans-cozumleri",
    title: "Finans Çözümleri",
    description:
      "Finansal teknolojiler ve bankacılık çözümleri sunan şirket. Güvenli ödeme sistemleri ve finansal danışmanlık hizmetleri vermektedir.",
    image: "/placeholder.svg?height=400&width=600",
    followers: 9200,
    location: "İstanbul, Türkiye",
    industry: "Finans",
    website: "www.finanscozumleri.com",
  },{
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
  },{
    slug: "tasarim-ux",
    title: "Tasarım ve UX Topluluğu",
    description:
      "Kullanıcı deneyimi, arayüz tasarımı ve grafik tasarım konularında çalışan profesyonellerin oluşturduğu topluluk.",
    image: "/placeholder.svg?height=400&width=600",
    members: 2100,
    founded: "2017",
    meetupFrequency: "Aylık",
    topics: ["UI Tasarımı", "UX Araştırması", "Grafik Tasarım", "Kullanılabilirlik"],
  },{
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

export default function SocialPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <div className='mb-6 border border-gray-300 rounded-lg'>
      
      <div className="flex flex-col gap-y-4 pt-6">
        <div className="flex items-center sm:justify-start justify-center relative px-4">
          <ChevronLeft
            size={24}
            className="absolute left-4 cursor-pointer sm:hidden block text-primary"
            onClick={() => setIsSidebarOpen(true)}
          />
          <h1 className="text-2xl font-bold text-center text-primary w-full">Takip Edilenler</h1>
        </div>

        {/* Mobil görünüm için Tabs */}
        <div className="md:hidden px-4">
          <Tabs defaultValue="companies" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="companies">Şirketler</TabsTrigger>
              <TabsTrigger value="communities">Topluluklar</TabsTrigger>
              <TabsTrigger value="saved">Kaydedilenler</TabsTrigger>
            </TabsList>
            <TabsContent value="companies">
              <SocialSection title="Takip Ettiğim Şirketler" items={companies} type="company" />
            </TabsContent>
            <TabsContent value="communities">
              <SocialSection title="Katıldığım Topluluklar" items={communities} type="community" />
            </TabsContent>
            <TabsContent value="saved">
              <SocialSection title="Kaydettiğim Gönderiler" items={savedPosts} type="post" />
            </TabsContent>
          </Tabs>
        </div>

        {/* Masaüstü görünüm için alt alta bölümler */}
        <div className="hidden md:block  ">
          <h2 className="text-xl font-bold text-left  rounded-lg p-2 sm:px-4 w-fit">Takip Edilen Şirketler</h2>
          <SocialSection title="Takip Ettiğim Şirketler" items={companies} type="company" />
            <Separator className="my-4"/>


          <h2 className="text-xl font-bold text-left  rounded-lg p-2 sm:px-4 w-fit">Takip Edilen Topluluklar</h2>
          <SocialSection title="Katıldığım Topluluklar" items={communities} type="community" />
            <Separator className="my-4"/>

          <h2 className="text-xl font-bold text-left  rounded-lg p-2 sm:px-4 w-fit">Kaydedilen Yazılar</h2>
          <SocialSection title="Kaydettiğim Gönderiler" items={savedPosts} type="post" />
        </div>
      </div>
          <SubMenu
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              title="Profil Menüsü"
              widthClass="w-64"
            />
      
    </div>
  )
}
