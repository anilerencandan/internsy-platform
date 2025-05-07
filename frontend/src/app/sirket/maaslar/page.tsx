import Link from "next/link"
import { ChevronLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SalaryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href="#"
        className="inline-flex items-center text-emerald-600 font-medium mb-8 hover:text-emerald-700 transition-colors"
      >
        <ChevronLeft className="mr-2 h-5 w-5" />
        Back to all Google salaries
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-8">özürlü onur arkadaslık maası</h1>

      <div className="mb-8">
        <h2 className="text-xl text-gray-700 mb-2">Staj Ücreti</h2>
        <div className="text-6xl font-bold text-blue-600 ">
          17.000 - 22.500 TL<span className="text-3xl font-normal">/aylık</span>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl text-gray-600 mb-4">Veri Bilgisi</h3>
        <div className="flex items-center gap-3">
          <div className="bg-emerald-600 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="font-medium">Confident</span>
            <span className="text-gray-400">•</span>
            <span>Last updated May 4, 2025</span>
            <span className="text-gray-400">•</span>
            <span>49.3K Salaries submitted</span>
          </div>
        </div>
        <div className="mt-2 ml-11">
          <div className="h-1.5 w-32 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
