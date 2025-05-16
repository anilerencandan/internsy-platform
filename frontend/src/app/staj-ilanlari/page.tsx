import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import PopularCompanies from "@/components/mulakatlar-page/popular-companies"
import CompanyJobsCard from "@/components/staj-ilanlari/CompanyJobsCard"

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


export default function StajIlanlariPage() {
  return (
    <main className="page-content  xl:px-0 sm:px-4 px-0 sm:pt-4">

      <div className="container mx-auto px-4 py-6">
        <div className=" mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Staj İlanları</h1>
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
          
          <div className="felx items-center p-4 border border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold pb-4">Staj İlanları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularCompanies.map((company) => (
                <CompanyJobsCard
                  key={company.id}
                  company={company}
                  jobs={[
                    { title: "Staj İlanı 1", link: "#" },
                    { title: "Staj İlanı 2", link: "#" },
                    { title: "Staj İlanı 3", link: "#" },
                  ]}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}
