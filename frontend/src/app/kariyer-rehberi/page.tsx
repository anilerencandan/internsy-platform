import { ArticleCard } from "@/components/kariyer-rehberi/ArticleCards"

const articles = [
  {
    category: "Genel",
    title: "Mülakat sonrası başvuru sonucunu nasıl takip edilmeli?",
    excerpt: "İş görüşmelerinin yoğun stresi, her aşamada farklıdır. İlk başvuru yaptığınızda ...",
    date: "07/11/2020",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Person typing on laptop",
    slug: "mulakat-sonrasi-basvuru-sonucunu-nasil-takip-edilmeli",
  },
  {
    category: "Genel",
    title: "Motivasyonu düşük çalışma arkadaşınızla nasıl anlaşabilirsiniz?",
    excerpt: "İş dünyası- hayatın geri kalan gibi- bir takım oyunudur. Şirketler ...",
    date: "26/08/2021",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Two people in a meeting",
    slug: "motivasyonu-dusuk-calisma-arkadasinizla-nasil-anlasabilirsiniz",
  },
  {
    category: "Genel",
    title: "Eksiksiz Ve Etkileyici CV Hazırlamak İçin Hangi Programlardan Destek Alınabilir?",
    excerpt: "Eksiksiz Ve Etkileyici CV Hazırlamak İçin Hangi Programlardan Destek Alınabilir? ...",
    date: "07/11/2020",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "People in a meeting room",
    slug: "eksiksiz-ve-etkileyici-cv-hazirlamak-icin-hangi-programlardan-destek-alinabilir",
  },
  {
    category: "Genel",
    title: "Mülakattan Önce Öz Güven Artırmanın 8 yolu!",
    excerpt: "Öz güvenin, başarılı bir mülakatta kilit nokta olduğunu biliyorsunuzdur. Kariyer ...",
    date: "29/04/2021",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "People in a meeting",
    slug: "mulakattan-once-oz-guven-artirmanin-8-yolu",
  },
  {
    category: "Araçlı Kurye",
    title: "Araçlı Kurye Olarak Çalışılabilecek Şirketler | 2024",
    excerpt: "Hangi Şirketler Araçlı Kurye Alımı Yapıyor? Araçlı kurye günümüz şartlarında ...",
    date: "06/09/2021",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Delivery van",
    slug: "aracli-kurye-olarak-calisilabilecek-sirketler-2024",
  },
  {
    category: "Uçak Bakım Teknisyeni",
    title: "Uçak Bakım Teknisyeni: Mülakat Soruları ve Yanıtları",
    excerpt: "Uçak Bakım Teknisyeni, havacılık araçlarının güvenliği ve güvenilirliğini sağlamak için ...",
    date: "10/12/2022",
    imageSrc: "/placeholder.svg?height=300&width=400",
    imageAlt: "Aircraft maintenance technician",
    slug: "ucak-bakim-teknisyeni-mulakat-sorulari-ve-yanitlari",
  },
]

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            title={article.title}
            excerpt={article.excerpt}
            date={article.date}
            imageSrc={article.imageSrc}
            imageAlt={article.imageAlt}
            slug={article.slug}
          />
        ))}
      </div>
    </main>
  )
}
