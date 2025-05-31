import { Settings2, Star } from 'lucide-react'
import React from 'react'
import { Search } from "lucide-react"
import FilterSection from '@/components/sirketler-page/FilterSection'
import SirketCard from '@/components/sirketler-page/SirketCard'
import CompanyList from "@/components/mulakatlar-page/company-list"
import { Input } from "@/components/ui/input"
import PopularCompanies from "@/components/mulakatlar-page/popular-companies"
import CompanyJobsCard from "@/components/staj-ilanlari/CompanyJobsCard"
import CompaniesStats from '@/components/sirketler-page/CompaniesStats'


const popularCompanies = [
    {
      id: "google",
      name: "Google",
      logo: "G",
      rating: 4.2,
      reviews: 12453,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "M",
      rating: 4.0,
      reviews: 9876,
      color: "bg-green-100 text-green-600",
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "A",
      rating: 3.9,
      reviews: 8765,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      id: "apple",
      name: "Apple",
      logo: "A",
      rating: 4.1,
      reviews: 7654,
      color: "bg-gray-100 text-gray-600",
    },
    {
      id: "meta",
      name: "Meta",
      logo: "M",
      rating: 3.8,
      reviews: 6543,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "netflix",
      name: "Netflix",
      logo: "N",
      rating: 4.3,
      reviews: 5432,
      color: "bg-red-100 text-red-600",
    },
  ]

export default function sirketlerPage() {
  return (
    <main className="page-content xl:px-0 px-4  sm:pt-4">
      <div className=" mx-auto py-6">
        <div className="flex items-center justify-between flex-wrap gap-y-6">
          {/* Sol Görsel */}
          <div className="hidden md:block w-full md:w-1/3 px-2">
            <img
              src="/images/sirketler1.svg"
              alt="Staj öğrenci"
              className="w-full h-auto"
            />
          </div>

          {/* Orta İçerik */}
          <div className="w-full md:w-1/3 text-center">
            <h1 className="text-3xl font-bold mb-4 text-primary">Şirketler</h1>
            <p className="text-gray-600 mb-6">
            Farklı şirketlerin puanlarını ve stajyer görüşlerini inceleyerek sana en uygun staj yerini bul.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Şirket adı ara (örn. Google, Microsoft, Amazon...)"
                className="pl-10 py-6 text-lg rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Sağ Görsel */}
          <div className="hidden md:block w-full md:w-1/3 px-2">
            <img
              src="/images/sirketler2.svg"
              alt="Ofiste çalışan öğrenci"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Popüler Şirketler */}
        <div className="mb-10 mt-10 ">
          <h2 className="text-xl font-semibold mb-4">Popüler Şirketler</h2>
          <PopularCompanies />
        </div>
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
