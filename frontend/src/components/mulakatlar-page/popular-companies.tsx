import { Star } from "lucide-react"
import Link from "next/link"

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

export default function PopularCompanies() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {popularCompanies.map((company) => (
        <Link
          key={company.id}
          href={`/sirket`}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 ${company.color} rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0`}
            >
              {company.logo}
            </div>
            <div>
              <h3 className="font-medium">{company.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1">{company.rating}</span>
                </div>
                <span className="mx-1">•</span>
                <span>{company.reviews.toLocaleString()} değerlendirme</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
