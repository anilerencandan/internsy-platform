import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import CompanyList from "@/components/mulakatlar-page/company-list"
import PopularCompanies from "@/components/mulakatlar-page/popular-companies"
import InterviewStats from "@/components/mulakatlar-page/interview-stats"

export default function MulakatlarPage() {
  return (
    <main className="page-content xl:px-0 px-4  sm:pt-4">
      <div className="container mx-auto  py-6">
        <div className="flex items-center justify-between flex-wrap gap-y-6">
          {/* Sol görsel */}
          <div className="hidden md:block w-full md:w-1/3 py-4">
            <img src="/images/mulakatlar1.svg" alt="Sol görsel" className="w-full h-auto" />
          </div>

          {/* Orta içerik */}
          <div className="w-full md:w-1/3 text-center ">
            <h1 className="text-3xl font-bold mb-4">Şirket Mülakat Deneyimleri</h1>
            <p className="text-gray-600 mb-6">
            Gerçek mülakat soruları, aday yorumları ve süreç bilgileriyle mülakatlara daha hazırlıklı gir.
            </p>
            <div className="relative max-w-xl mx-auto ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Şirket adı ara (örn. Google, Microsoft, Amazon...)"
                className="pl-10 py-6 rounded-lg shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Sağ görsel */}
          <div className="hidden md:block w-full md:w-1/3 py-4 ">
            <img src="/images/mulakatlar2.svg" alt="Sağ görsel" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Mülakat İstatistikleri</h2>
        <InterviewStats />
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tüm Şirketler</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sırala:</span>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Popülerlik</option>
              <option>Puan (Yüksek-Düşük)</option>
              <option>Puan (Düşük-Yüksek)</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>
        <CompanyList />
      </div>
    </main>
  )
}