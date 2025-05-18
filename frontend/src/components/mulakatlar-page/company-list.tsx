import { Star } from "lucide-react"
import Link from "next/link"

const companies = [
  {
    id: "google",
    name: "Google",
    logo: "G",
    rating: 4.2,
    reviews: 12453,
    difficulty: 3.8,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "M",
    rating: 4.0,
    reviews: 9876,
    difficulty: 3.5,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "A",
    rating: 3.9,
    reviews: 8765,
    difficulty: 3.7,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "apple",
    name: "Apple",
    logo: "A",
    rating: 4.1,
    reviews: 7654,
    difficulty: 3.4,
    color: "bg-gray-100 text-gray-600",
  },
  {
    id: "meta",
    name: "Meta",
    logo: "M",
    rating: 3.8,
    reviews: 6543,
    difficulty: 3.9,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "netflix",
    name: "Netflix",
    logo: "N",
    rating: 4.3,
    reviews: 5432,
    difficulty: 3.6,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "uber",
    name: "Uber",
    logo: "U",
    rating: 3.7,
    reviews: 4321,
    difficulty: 3.5,
    color: "bg-black text-white",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    logo: "A",
    rating: 4.2,
    reviews: 3210,
    difficulty: 3.3,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "twitter",
    name: "Twitter",
    logo: "T",
    rating: 3.9,
    reviews: 2109,
    difficulty: 3.4,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    logo: "L",
    rating: 4.0,
    reviews: 1987,
    difficulty: 3.2,
    color: "bg-blue-100 text-blue-600",
  },
]

export default function CompanyList() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Şirket
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Değerlendirme
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Zorluk
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Değerlendirme Sayısı
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company) => (
            <tr key={company.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <Link href={'sirket/mulakatlar'}  className="flex items-center">
                  <div
                    className={`w-10 h-10 ${company.color} rounded-lg flex items-center justify-center text-lg font-bold flex-shrink-0 mr-3`}
                  >
                    {company.logo}
                  </div>
                  <div className="font-medium">{company.name}</div>
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{company.rating}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(company.difficulty / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span>{company.difficulty}/5</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">{company.reviews.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 border-t border-gray-200 flex justify-center items-center ">
        <button className="text-blue-600 hover:text-blue-800 font-medium">Daha Fazla Göster</button>
      </div>
    </div>
  )
}
