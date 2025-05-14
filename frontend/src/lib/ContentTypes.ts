export interface ContentItem {
    id: number
    title: string
    description: string
    image: string
    category: string
    popularity: number
    date: string
  }
  
  export interface BlogPost extends ContentItem {
    author?: string
  }
  
  export interface Training extends ContentItem {
    duration: string
  }
  
  export interface Extra extends ContentItem {
    type: string
  }
  
  export const blogCategories = [
    "Kariyer Gelişimi",
    "İş Arama",
    "Kişisel Gelişim",
    "Mülakat Teknikleri",
    "Uzaktan Çalışma",
    "Girişimcilik",
  ]
  
  export const trainingCategories = [
    "Liderlik",
    "Dijital Beceriler",
    "Proje Yönetimi",
    "Veri Analizi",
    "İletişim",
    "Yabancı Dil",
  ]
  
  export const extraCategories = ["Testler", "Araçlar", "Kaynaklar", "Danışmanlık", "Etkinlikler", "Programlar"]
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Kariyer Değişimi İçin İlk Adımlar",
      description: "Yeni bir kariyer yoluna adım atmak isteyenler için rehber.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kariyer Gelişimi",
      popularity: 95,
      date: "2025-05-10",
      author: "Ahmet Yılmaz",
    },
    {
      id: 2,
      title: "CV Hazırlama Teknikleri",
      description: "Dikkat çeken bir CV nasıl hazırlanır?",
      image: "/placeholder.svg?height=200&width=300",
      category: "İş Arama",
      popularity: 87,
      date: "2025-05-05",
      author: "Zeynep Kaya",
    },
    {
      id: 3,
      title: "Mülakat Başarısı İçin İpuçları",
      description: "İş görüşmelerinde başarılı olmak için stratejiler.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mülakat Teknikleri",
      popularity: 92,
      date: "2025-05-01",
      author: "Mehmet Demir",
    },
    {
      id: 4,
      title: "Uzaktan Çalışma Rehberi",
      description: "Evden çalışırken verimli olmanın yolları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Uzaktan Çalışma",
      popularity: 88,
      date: "2025-04-25",
      author: "Ayşe Yıldız",
    },
    {
      id: 5,
      title: "Networking'in Önemi",
      description: "Kariyer gelişiminde profesyonel ağ kurmanın faydaları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kariyer Gelişimi",
      popularity: 75,
      date: "2025-04-20",
      author: "Can Özkan",
    },
    {
      id: 6,
      title: "İş-Yaşam Dengesi",
      description: "Kariyerinizde başarılı olurken özel hayatınızı da koruyun.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kişisel Gelişim",
      popularity: 82,
      date: "2025-04-15",
      author: "Elif Şahin",
    },
    {
      id: 7,
      title: "Kariyer Planlaması",
      description: "Uzun vadeli kariyer hedefleri belirleme ve planlama.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kariyer Gelişimi",
      popularity: 90,
      date: "2025-04-10",
      author: "Burak Aydın",
    },
    {
      id: 8,
      title: "Freelance Çalışma Rehberi",
      description: "Bağımsız çalışmaya başlamak için ipuçları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Girişimcilik",
      popularity: 85,
      date: "2025-04-05",
      author: "Deniz Yılmaz",
    },
    {
      id: 9,
      title: "LinkedIn Profili Optimizasyonu",
      description: "İş fırsatlarını artırmak için LinkedIn profilinizi nasıl geliştirebilirsiniz?",
      image: "/placeholder.svg?height=200&width=300",
      category: "İş Arama",
      popularity: 89,
      date: "2025-04-01",
      author: "Selin Kara",
    },
    {
      id: 10,
      title: "Stres Yönetimi",
      description: "İş hayatında stresi yönetmenin etkili yolları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kişisel Gelişim",
      popularity: 78,
      date: "2025-03-25",
      author: "Onur Yıldırım",
    },
    {
      id: 11,
      title: "Dijital Çağda Kariyer Fırsatları",
      description: "Teknoloji odaklı yeni kariyer alanları ve fırsatlar.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kariyer Gelişimi",
      popularity: 93,
      date: "2025-03-20",
      author: "Ceren Aksoy",
    },
    {
      id: 12,
      title: "Startup Kurma Rehberi",
      description: "Kendi işinizi kurmanın adımları ve dikkat edilmesi gerekenler.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Girişimcilik",
      popularity: 86,
      date: "2025-03-15",
      author: "Mert Öztürk",
    },
  ]
  
  export const trainings: Training[] = [
    {
      id: 1,
      title: "Liderlik Becerileri Eğitimi",
      description: "Etkili liderlik için gerekli beceriler ve stratejiler.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Liderlik",
      popularity: 94,
      date: "2025-05-15",
      duration: "8 Hafta",
    },
    {
      id: 2,
      title: "Dijital Pazarlama Kursu",
      description: "Sosyal medya ve SEO stratejileri ile dijital pazarlama.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Dijital Beceriler",
      popularity: 91,
      date: "2025-05-10",
      duration: "6 Hafta",
    },
    {
      id: 3,
      title: "Proje Yönetimi Sertifikası",
      description: "Profesyonel proje yönetimi metodolojileri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Proje Yönetimi",
      popularity: 88,
      date: "2025-05-05",
      duration: "12 Hafta",
    },
    {
      id: 4,
      title: "Veri Analizi Eğitimi",
      description: "İş kararları için veri analizi teknikleri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Veri Analizi",
      popularity: 85,
      date: "2025-04-30",
      duration: "10 Hafta",
    },
    {
      id: 5,
      title: "İnsan Kaynakları Yönetimi",
      description: "Modern İK stratejileri ve uygulamaları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Liderlik",
      popularity: 79,
      date: "2025-04-25",
      duration: "9 Hafta",
    },
    {
      id: 6,
      title: "İş İngilizcesi",
      description: "Profesyonel iş ortamında İngilizce iletişim becerileri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Yabancı Dil",
      popularity: 83,
      date: "2025-04-20",
      duration: "16 Hafta",
    },
    {
      id: 7,
      title: "Finansal Okuryazarlık",
      description: "Kişisel ve kurumsal finans yönetimi temelleri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kişisel Gelişim",
      popularity: 76,
      date: "2025-04-15",
      duration: "6 Hafta",
    },
    {
      id: 8,
      title: "Girişimcilik Eğitimi",
      description: "Kendi işinizi kurma ve geliştirme stratejileri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Girişimcilik",
      popularity: 89,
      date: "2025-04-10",
      duration: "14 Hafta",
    },
    {
      id: 9,
      title: "Etkili İletişim Becerileri",
      description: "İş ve özel hayatta etkili iletişim kurma teknikleri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "İletişim",
      popularity: 92,
      date: "2025-04-05",
      duration: "4 Hafta",
    },
    {
      id: 10,
      title: "Python ile Veri Bilimi",
      description: "Python kullanarak veri analizi ve makine öğrenmesi.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Veri Analizi",
      popularity: 95,
      date: "2025-03-30",
      duration: "12 Hafta",
    },
    {
      id: 11,
      title: "Agile Proje Yönetimi",
      description: "Çevik metodolojiler ile proje yönetimi.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Proje Yönetimi",
      popularity: 87,
      date: "2025-03-25",
      duration: "8 Hafta",
    },
    {
      id: 12,
      title: "Dijital Dönüşüm Liderliği",
      description: "Organizasyonlarda dijital dönüşümü yönetme.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Liderlik",
      popularity: 84,
      date: "2025-03-20",
      duration: "10 Hafta",
    },
  ]
  
  export const extras: Extra[] = [
    {
      id: 1,
      title: "Kariyer Testi",
      description: "Yeteneklerinize ve ilgi alanlarınıza uygun kariyer yolunu keşfedin.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Testler",
      popularity: 96,
      date: "2025-05-15",
      type: "Ücretsiz Test",
    },
    {
      id: 2,
      title: "Kariyer Danışmanlığı",
      description: "Uzman danışmanlarla birebir kariyer planlama seansları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Danışmanlık",
      popularity: 88,
      date: "2025-05-10",
      type: "Ücretli Hizmet",
    },
    {
      id: 3,
      title: "Özgeçmiş Şablonları",
      description: "Farklı sektörler için hazırlanmış profesyonel CV şablonları.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kaynaklar",
      popularity: 92,
      date: "2025-05-05",
      type: "Ücretsiz İndirme",
    },
    {
      id: 4,
      title: "Kariyer Podcast'leri",
      description: "Uzmanlarla kariyer gelişimi üzerine sohbetler.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kaynaklar",
      popularity: 85,
      date: "2025-04-30",
      type: "Haftalık Yayın",
    },
    {
      id: 5,
      title: "Mesleki Yeterlilik Testleri",
      description: "Farklı meslekler için yeterlilik değerlendirmeleri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Testler",
      popularity: 79,
      date: "2025-04-25",
      type: "Ücretsiz Test",
    },
    {
      id: 6,
      title: "Sektör Raporları",
      description: "Farklı sektörlerin güncel durumu ve geleceği hakkında raporlar.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kaynaklar",
      popularity: 83,
      date: "2025-04-20",
      type: "Ücretsiz İndirme",
    },
    {
      id: 7,
      title: "Maaş Hesaplama Aracı",
      description: "Sektör ve pozisyona göre ortalama maaş hesaplama.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Araçlar",
      popularity: 94,
      date: "2025-04-15",
      type: "Ücretsiz Araç",
    },
    {
      id: 8,
      title: "Mentorluk Programı",
      description: "Deneyimli profesyonellerle mentorluk ilişkisi kurma fırsatı.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Programlar",
      popularity: 90,
      date: "2025-04-10",
      type: "Başvuru Gerekli",
    },
    {
      id: 9,
      title: "Kariyer Fuarı Takvimi",
      description: "Yaklaşan kariyer fuarları ve etkinlikleri.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Etkinlikler",
      popularity: 82,
      date: "2025-04-05",
      type: "Ücretsiz Erişim",
    },
    {
      id: 10,
      title: "Kişilik Envanteri",
      description: "İş hayatında güçlü yönlerinizi keşfedin.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Testler",
      popularity: 87,
      date: "2025-03-30",
      type: "Ücretsiz Test",
    },
    {
      id: 11,
      title: "Kariyer Değişimi Rehberi",
      description: "Yeni bir kariyere geçiş yapmak isteyenler için kapsamlı rehber.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Kaynaklar",
      popularity: 86,
      date: "2025-03-25",
      type: "E-Kitap",
    },
    {
      id: 12,
      title: "Networking Etkinlikleri",
      description: "Sektör profesyonelleriyle tanışabileceğiniz etkinlikler.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Etkinlikler",
      popularity: 89,
      date: "2025-03-20",
      type: "Aylık Etkinlik",
    },
  ]
  
  export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  
  export function filterAndSortContent<T extends ContentItem>(
    items: T[],
    searchQuery: string,
    selectedCategory: string | null,
    sortBy: string,
  ): T[] {
    // Filter by search query
    let filtered = items
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (item) => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
      )
    }
  
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((item) => item.category === selectedCategory)
    }
  
    // Sort
    if (sortBy === "newest") {
      return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else if (sortBy === "popular") {
      return [...filtered].sort((a, b) => b.popularity - a.popularity)
    }
  
    return filtered
  }
  