import React from 'react'
import { Search } from "lucide-react"
import CompanyList from "@/components/mulakatlar-page/company-list"
import { Input } from "@/components/ui/input"
import PopularCompanies from "@/components/mulakatlar-page/popular-companies"
import Company from '@/models/Company'
import CompaanySearchBar from '@/components/CompanySearchBar'
import { headers } from 'next/headers'

export default async function sirketlerPage() {
  const companiesData = await fetch('http://localhost:3000/api/companies?limit=10')
  const companies: Company[] = await companiesData.json()

  const headersList = await headers()
  const url = headersList.get("x-url") // Eğer middleware ile geçilirse
  const fullUrl = url ?? "http://localhost:3000" // fallback

  const searchParams = new URL(fullUrl).searchParams
  const q = searchParams.get("q")?.trim() || ""

  const isEmptySearch = q === ""

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
            <CompaanySearchBar/>
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
        {isEmptySearch && (
          <div className="mb-10 mt-10 ">
            <h2 className="text-xl font-semibold mb-4">Popüler Şirketler</h2>
            <PopularCompanies />
          </div>
        )}


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
