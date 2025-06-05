'use client'
import Company from "@/models/Company"
import { Loader, Star } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

interface CompanyListProps {
  initialCompanies: Company[]
}

export default function CompanyList({initialCompanies}: CompanyListProps) {
  const [limit] = useState<number>(24)
  const [offset, setOffset] = useState<number>(10)
  const [companiesList, setCompaniesList] = useState<Company[]>(initialCompanies)
  const [fetchMore, setFetchMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [refIsVisible, setRefIsVisible] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)
  const searchParams = useSearchParams()
  const q = searchParams.get("q")

  const fetchCompanies = async () => {
    if (isLoading) return
    setIsLoading(true)

    try {
      // Arama durumu
      if (q && q?.length > 0 ) {
        const res = await fetch(`/api/companies?q=${encodeURIComponent(q)}`)
        if (!res.ok) throw new Error("Şirket verisi alınamadı")
        const newCompanies: Company[] = await res.json()
        setCompaniesList(newCompanies)
        setHasMore(false)
        setRefIsVisible(false)
      } else {
        const res = await fetch(`/api/companies?limit=${limit}&offset=${offset}`)
        if (!res.ok) throw new Error("Şirket verisi alınamadı")
        const newCompanies: Company[] = await res.json()
        setCompaniesList((prev) => [...prev, ...newCompanies])
        setOffset((prev) => prev + limit)
        setHasMore(newCompanies.length === limit)
      }
    } catch (err) {
      console.error(err)
    }

    setIsLoading(false)
  }

  // Arama parametresi değişince
  useEffect(() => {
    if (q && q?.length > 0) {
      setOffset(0)
      setCompaniesList([])
      fetchCompanies()
    }
  }, [q])

  // "Daha fazla göster" veya scroll ile
  useEffect(() => {
    if (!fetchMore || isLoading || q) return
    fetchCompanies()
    setFetchMore(false)
  }, [fetchMore, isLoading, q])

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoading && hasMore && !q) {
          setFetchMore(true)
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) observer.observe(loaderRef.current)

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current)
    }
  }, [isLoading, hasMore, q])

  return (
    <>
      {/* Masaüstü görünüm (table) */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto hidden sm:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Şirket</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Değerlendirme</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mülakat Zorluğu</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companiesList.map((company) => (
              <tr key={company.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={`/sirket/${company.id}`} className="flex items-center">
                    <div className={`w-10 h-10  rounded-lg flex items-center justify-center text-lg font-bold mr-3`}> {/* ${company.color} */}
                      {company.name[0]}
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
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${(3.8 / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span>3.8/5</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobil görünüm (kart) */}
      <div className="sm:hidden flex flex-col gap-y-4">
        {companiesList.map((company) => (
          <Link
            href={`/sirket/${company.id}`}
            key={company.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="flex items-center gap-x-4 mb-2">
              <div className={`w-10 h-10  rounded-lg flex items-center justify-center text-lg font-bold`}>
                {company.name[0]}
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
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${(3.8 / 5) * 100}%` }}
                ></div>
              </div>
              <span className="ml-2">{3.8}/5</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Daha Fazla Göster Butonu (ortak) */}
      <div className="flex justify-center items-center my-4">
        {!refIsVisible && (
          <button onClick={() => {setFetchMore(true); setRefIsVisible(true); setHasMore(true)}}>
          <div className="w-fit px-4 py-2 rounded-md text-primary hover:text-primary-light font-medium">
            Daha Fazla Göster
          </div>
        </button>
        )}
        {refIsVisible && hasMore && !q && (
          <>
          <Loader className="w-6 h-6 animate-spin-slow text-primary"/>
          <div ref={loaderRef} className="h-4"/>
          </>
        )}
      </div>
    </>
  )
}