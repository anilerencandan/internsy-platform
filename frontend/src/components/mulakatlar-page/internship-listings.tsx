import { ExternalLink } from "lucide-react"

export default function InternshipListings() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Staj İlanları</h2>

      <div className="bg-gray-50 rounded-lg p-3 mb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium">BSH</h3>
            <p className="text-sm text-gray-600">Staj ilanlarını LinkedIn&apos;de gör</p>
          </div>
          <a href="#" className="text-blue-600">
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
