import { Star } from "lucide-react"
import Link from "next/link"
import Company from "@/models/Company"
import Image from "next/image"


export default async function PopularCompanies() {

  const companiesData = await fetch('http://localhost:3000/api/companies?limit=6')
  const companies: Company[] = await companiesData.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {companies.map((company) => (
        <Link
          key={company.id}
          href={`/sirket`}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12  rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0 relative`}
            >
              <Image src={company.company_image} alt={company.name + " resmi"} fill className="object-cover"/>
            </div>
            <div>
              <h3 className="font-medium">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{company.average_rating}</span>
                </div>
                <span className="mx-1">•</span>
                <span>{company.reviews_count} değerlendirme</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
