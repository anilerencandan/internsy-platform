import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import PopularCompanies from "@/components/staj-ilanlari/populer-companies"
import CompanyJobsCard from "@/components/staj-ilanlari/CompanyJobsCard"
import CompanyList from "@/components/staj-ilanlari/company-list"
import Company from "@/models/Company"
import CompaanySearchBar from '@/components/CompanySearchBar'



export default async function StajIlanlariPage() {

  const companiesData = await fetch('http://localhost:3000/api/companies?limit=10')
  const companies: Company[] = await companiesData.json()
  
  return (
    <main className="page-content xl:px-0 px-4  sm:pt-4">
      <div className=" mx-auto py-6">
        <div className="flex items-center justify-between flex-wrap gap-y-6">
          {/* Sol Görsel */}
          <div className="hidden md:block w-full md:w-1/3 px-2">
            <img
              src="/images/staj1.svg"
              alt="Staj öğrenci"
              className="w-full h-auto"
            />
          </div>

          {/* Orta İçerik */}
          <div className="w-full md:w-1/3 text-center">
            <h1 className="text-3xl font-bold mb-4 text-primary">Staj İlanları</h1>
            <p className="text-gray-600 mb-6">
            Şirketlerin sunduğu güncel staj fırsatlarını keşfet, başvuru koşullarını ve detaylarını kolayca öğren.            </p>
            <CompaanySearchBar basePath="/staj-ilanlari" />          
            </div>

          {/* Sağ Görsel */}
          <div className="hidden md:block w-full md:w-1/3 px-2">
            <img
              src="/images/staj2.svg"
              alt="Ofiste çalışan öğrenci"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Staj İlanları */}
        <div className="flex flex-col gap-y-6 p-4 ">
          <h2 className="text-2xl font-bold text-primary">Öne Çıkan Şirketler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PopularCompanies/>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tüm Şirketler</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sırala:</span>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Popülerlik</option>
              <option>Puan (Yüksek-Düşük)</option>
              <option>Puan (Düşük-Yüksek)</option>
              <option>A-Z</option>
            </select>
          </div>
        </div>
        <CompanyList initialCompanies={companies} />
      </div>
    </main>
  )
}