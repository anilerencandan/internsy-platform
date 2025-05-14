import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import CompanyList from "@/components/mulakatlar-page/company-list"
import PopularCompanies from "@/components/mulakatlar-page/popular-companies"
import InterviewStats from "@/components/mulakatlar-page/interview-stats"

export default function MulakatlarPage() {
  return (
    <main className="page-content  xl:px-0 sm:px-4 px-0 sm:pt-4">

      <div className="container mx-auto px-4 py-6">
        <div className=" mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Şirket Mülakat Deneyimleri</h1>
            <p className="text-gray-600 mb-6">
              Binlerce şirketin mülakat süreçleri, soruları ve çalışan deneyimlerini keşfedin
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Şirket adı ara (örn. Google, Microsoft, Amazon...)"
                className="pl-10 py-6 text-lg rounded-lg shadow-sm"
              />
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Popüler Şirketler</h2>
            <PopularCompanies />
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
        </div>
      </div>
    </main>
  )
}
