import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import InterviewExperiencePost from "./InterviewExperience"

// Örnek mülakat deneyimleri
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

export default function InterviewExperiences({ company }: { company: string }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-4">{company} Mülakat Deneyimleri</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Tümü
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Software Engineer
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Product Manager
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Data Scientist
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            UX Designer
          </Badge>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <div>Toplam 876 deneyim</div>
          <div className="flex items-center gap-2">
            <span>Filtrele:</span>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>Tüm Sonuçlar</option>
              <option>Teklif Alanlar</option>
              <option>Teklif Almayanlar</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {interviewExperiences.map((experience,index) => (
                <InterviewExperiencePost key={index} experience={experience} />
        ))}

        <div className="flex justify-center">
          <Button variant="outline">Daha Fazla Deneyim Göster</Button>
        </div>
      </div>
    </div>
  )
}
