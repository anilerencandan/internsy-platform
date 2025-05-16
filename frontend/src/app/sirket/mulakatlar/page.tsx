import {
  Search,
  X,
  Info,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import InterviewExperiencePost from "@/components/mulakatlar-page/InterviewExperience"


const interviewExperiences = [
  {
    id: 1,
    position: "Senior Software Engineer",
    date: "2 ay önce",
    experience: "Pozitif",
    difficulty: "Orta",
    offer: true,
    content:
      "Mülakat süreci toplam 5 aşamadan oluştu. İlk olarak HR ile bir telefon görüşmesi yaptık, ardından teknik bir kodlama testi verildi. Sonrasında iki teknik mülakat ve bir de kültür uyumu mülakatı gerçekleşti. Tüm süreç yaklaşık 3 hafta sürdü. Teknik mülakatlarda algoritma soruları ve sistem tasarımı üzerine sorular soruldu. Görüşmeciler oldukça yardımcıydı ve süreç boyunca destekleyici davrandılar.",
    likes: 156,
    comments: 23,
    questions: [
      {
        question: "Büyük ölçekli bir web uygulamasını nasıl tasarlarsınız?",
        answer:
          "Mikroservis mimarisi kullanarak, her bir bileşeni ayrı servisler olarak tasarlayacağımı ve bu servislerin birbirleriyle API'lar üzerinden iletişim kurmasını sağlayacağımı anlattım.",
      },
      {
        question: "Bir array içindeki en büyük alt dizinin toplamını bulan bir algoritma yazınız.",
        answer: "Kadane algoritmasını kullanarak O(n) karmaşıklığında bir çözüm sundum.",
      },
    ],
  },
  {
    id: 2,
    position: "Product Manager",
    date: "1 ay önce",
    experience: "Nötr",
    difficulty: "Zor",
    offer: false,
    content:
      "Mülakat süreci 4 aşamadan oluştu. İlk olarak HR ile bir görüşme, ardından bir case study, sonrasında iki ürün yöneticisi ile panel mülakat ve son olarak direktör ile bir görüşme gerçekleşti. Case study'de mevcut bir ürünü nasıl geliştireceğimi ve yeni özellikler için nasıl önceliklendirme yapacağımı sordular. Panel mülakatta ise daha çok geçmiş deneyimlerim ve problem çözme yaklaşımım üzerine sorular geldi. Süreç profesyoneldi ancak geri bildirim süreci biraz yavaştı.",
    likes: 89,
    comments: 15,
    questions: [
      {
        question: "Kullanıcı sayısı düşen bir ürün için nasıl bir strateji izlersiniz?",
        answer:
          "Öncelikle kullanıcı davranışlarını analiz ederek düşüşün nedenlerini tespit edeceğimi, ardından A/B testleri ile farklı çözümleri deneyeceğimi anlattım.",
      },
      {
        question: "Bir özelliğin başarılı olup olmadığını nasıl ölçersiniz?",
        answer:
          "Önceden belirlenen KPI'lar üzerinden ölçüm yapacağımı, kullanıcı etkileşimi, dönüşüm oranları ve kullanıcı memnuniyeti gibi metrikleri takip edeceğimi belirttim.",
      },
    ],
  },
  {
    id: 3,
    position: "Data Scientist",
    date: "3 hafta önce",
    experience: "Pozitif",
    difficulty: "Zor",
    offer: true,
    content:
      "Mülakat süreci oldukça kapsamlıydı. İlk olarak HR görüşmesi, ardından teknik bir değerlendirme testi, sonrasında iki teknik mülakat ve son olarak ekip lideri ile bir görüşme gerçekleşti. Teknik değerlendirmede gerçek bir veri seti üzerinde analiz yapmam ve bulgularımı sunmam istendi. Teknik mülakatlarda ise makine öğrenmesi algoritmaları, istatistiksel yöntemler ve veri manipülasyonu üzerine sorular soruldu. Tüm süreç yaklaşık 1 ay sürdü ve oldukça öğretici bir deneyimdi.",
    likes: 134,
    comments: 19,
    questions: [
      {
        question: "Bir e-ticaret sitesinde ürün önerilerini geliştirmek için nasıl bir model tasarlarsınız?",
        answer:
          "İşbirlikçi filtreleme ve içerik tabanlı filtreleme yöntemlerini birleştiren hibrit bir öneri sistemi tasarlayacağımı anlattım.",
      },
      {
        question: "Overfitting sorununu nasıl tespit eder ve çözersiniz?",
        answer:
          "Cross-validation kullanarak modelin performansını değerlendireceğimi ve regularization, dropout gibi teknikleri uygulayarak overfitting'i azaltacağımı açıkladım.",
      },
    ],
  },
]




export default function Home() {
  
  return (
        <div >
          
          {/* Interview Content */}
          <div >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Google Mülakat Soruları</h2>
              <div className="flex flex-col h-full">
                <span className="text-sm text-gray-500">Mayıs 6, 2025 tarihinde güncellendi</span>
              </div>
            </div>

            {/* Difficulty Rating */}
            <div className="mb-6  ">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">3.1</span>
                <div className="flex items-center">
                  <span className="text-lg text-gray-600">/5 zorluk seviyesi</span>
                  <Info className="h-4 w-4 text-gray-400 ml-1" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Genel Mülakat Memnuniyeti</h4>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Progress Bar */}
                  <div className="w-full max-w-xs">
                    <div className="flex h-4 overflow-hidden rounded-full">
                      <div className="bg-green-500 w-[67%]"></div>
                      <div className="bg-gray-500 w-[20%]"></div>
                      <div className="bg-red-500 w-[13%]"></div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex w-fit flex-row gap-2 sm:gap-4 text-sm">
                    <div className="flex items-center px-2 bg-gray-100 border-gray-300 text-black rounded-lg">
                      <span className="text-green-500 font-semibold">67%</span>
                      <span className="ml-1 text-sm">Pozitif</span>
                    </div>
                    <div className="flex items-center px-2 bg-gray-100 border-gray-300 text-black rounded-lg">
                      <span className="text-gray-500 font-semibold">20%</span>
                      <span className="ml-1 text-sm">Nötr</span>
                    </div>
                    <div className="flex items-center px-2 bg-gray-100 border-gray-300 text-black rounded-lg">
                      <span className="text-red-500 font-semibold">13%</span>
                      <span className="ml-1 text-sm">Negatif</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Jobs */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Staj Mülakatı Yapılan Pozisyonlar</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software engineer (1830)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software development engineer (1122)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Intern (674)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software engineer(internship) (668)
                </Badge>
              </div>
              <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto flex items-center">
              Tüm pozisyonları görüntüle
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Trust Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <Info className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm">
                Şeffaflık önceliğimizdir. Şirketler mülakat içeriklerine müdahale edemez.
                </span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Interview Search */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Google Mülakat Soruları</h2>
              <div className="grid gap-4">
                <div className="relative justify-center">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Mülakat yapılan pozisyonu arayın"
                    className="pl-10 pr-4 py-3 rounded-md bg-gray-100 border-none text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Interview List */}
            <div className="flex flex-col border-t">
              {interviewExperiences.map((experience, index) => (
                <InterviewExperiencePost key={index} experience={experience} />
              ))}
            </div>
          </div>
        </div>
        
  )
}
