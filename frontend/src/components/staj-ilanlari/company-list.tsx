'use client'
import Company from "@/models/Company"
import { Loader, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface CompanyListProps {
  initialCompanies: Company[]
}

export default function CompanyList({ initialCompanies }: CompanyListProps) {
  const [limit] = useState(24)
  const [offset, setOffset] = useState(initialCompanies.length)
  const [companiesList, setCompaniesList] = useState<Company[]>(initialCompanies)
  const [fetchMore, setFetchMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(false)
  const searchParams = useSearchParams()
  const q = searchParams.get("q")?.trim() || ""
  const isSearching = q.length > 0

  const fetchCompanies = async () => {
    if (isLoading) return
    setIsLoading(true)

    try {
      if (isSearching) {
        const res = await fetch(`/api/companies?q=${encodeURIComponent(q)}`)
        const newCompanies: Company[] = await res.json()
        setCompaniesList(newCompanies)
        setHasMore(false)
      } else {
        const res = await fetch(`/api/companies?limit=${limit}&offset=${offset}`)
        const newCompanies: Company[] = await res.json()
        setCompaniesList(prev => [...prev, ...newCompanies])
        setOffset(prev => prev + limit)
        setHasMore(newCompanies.length === limit)
      }
    } catch (error) {
      console.error("Şirket verisi alınamadı", error)
    }

    setIsLoading(false)
  }

  // Arama değişince tetiklenir
  useEffect(() => {
    if (isSearching) {
      setOffset(0)
      setHasMore(false)
      fetchCompanies()
    } else {
      setCompaniesList(initialCompanies)
      setOffset(initialCompanies.length)
      setHasMore(true)
    }
  }, [q])

  // Scroll'da fetch tetikleme
  useEffect(() => {
    if (!fetchMore || isLoading || isSearching) return
    fetchCompanies()
    setFetchMore(false)
  }, [fetchMore, isLoading, isSearching])

  useEffect(() => {
    if(!infiniteScrollEnabled) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isLoading && !isSearching) {
          setFetchMore(true)
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => loaderRef.current && observer.unobserve(loaderRef.current)
  }, [hasMore, isLoading, isSearching, infiniteScrollEnabled])

  return (
    <>
      {/* Masaüstü görünüm */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Şirket</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Değerlendirme</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mülakat Zorluğu</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companiesList.map(company => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/sirket/${company.id}/staj-ilanlari`} className="flex items-center">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold mr-3 relative">
                      <Image src={company.company_image} alt={company.name + " logo"} fill className="object-cover"/>
                    </div>
                    <div className="font-medium">{company.name}</div>
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{company.average_rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden mr-2">
                      <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${(3.8 / 5) * 100}%` }} />
                    </div>
                    <span>3.8/5</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil görünüm */}
      <div className="sm:hidden flex flex-col gap-y-4">
        {companiesList.map(company => (
          <Link key={company.id} href={`/sirket/${company.id}/staj-ilanlari`} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
            <div className="flex items-center gap-x-4 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold relative">
                <Image src={company.company_image} alt={company.name + " logo"} fill className="object-cover"/>
              </div>
              <div className="font-semibold text-lg">{company.name}</div>
            </div>
            <div className="flex items-center text-sm mb-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{company.average_rating} değerlendirme</span>
            </div>
            <div className="flex items-center text-sm p-2">
              <span className="mr-2">Mülakat Zorluğu</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${(3.8 / 5) * 100}%` }} />
              </div>
              <span className="ml-2">3.8/5</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Yükleniyor veya Daha Fazla Butonu */}
      <div className="flex justify-center items-center my-4">
        {!infiniteScrollEnabled && hasMore && !isSearching && (
          <button
            className="text-primary font-medium border px-4 py-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setInfiniteScrollEnabled(true)}
          >
            Daha Fazla Göster
          </button>
        )}

        {infiniteScrollEnabled && (
          <>
            <div ref={loaderRef} className="h-4" />
            {isLoading && <Loader className="w-6 h-6 animate-spin-slow text-primary ml-2" />}
          </>
        )}
      </div>
    </>
  )
}
