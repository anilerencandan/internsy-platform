import { Info, ChevronDown, AlertCircle, MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompanyInterviewDetails() {
  return (
    <div className="space-y-6">
      {/* Company Interview Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Google Mülakat Soruları</h2>
          <p className="text-sm text-gray-500">Mayıs 6, 2025 tarihinde güncellendi</p>
        </div>

        <div className="flex items-end gap-2 mb-2">
          <div className="text-4xl font-bold">3.1</div>
          <div className="text-sm text-gray-600 mb-1">
            /5 zorluk seviyesi <Info className="inline h-4 w-4 text-gray-400" />
          </div>
        </div>

        <h3 className="font-medium mb-2">Mülakat Deneyimi</h3>

        <div className="mb-4">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
              style={{ width: "67%" }}
            ></div>
          </div>
          <div className="flex justify-between mt-1 text-sm">
            <div>
              <span className="text-green-500 font-medium">67%</span> Pozitif
            </div>
            <div>
              <span className="text-red-500 font-medium">13%</span> Negatif
            </div>
          </div>
        </div>
      </div>

      {/* Top Jobs */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-medium mb-3">Interviews for top jobs at Microsoft</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="rounded-full py-1 px-3 bg-gray-50">
            Software engineer (1830)
          </Badge>
          <Badge variant="outline" className="rounded-full py-1 px-3 bg-gray-50">
            Software development engineer (1122)
          </Badge>
          <Badge variant="outline" className="rounded-full py-1 px-3 bg-gray-50">
            Intern (674)
          </Badge>
        </div>

        <div className="mb-2">
          <Badge variant="outline" className="rounded-full py-1 px-3 bg-gray-50">
            Software engineer(internship) (668)
          </Badge>
        </div>

        <Button variant="link" className="text-blue-600 p-0 h-auto flex items-center gap-1">
          <span>See more interviews for top jobs</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      {/* Trust Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm">Your trust is our top concern, so companies can&apos;t alter or remove interviews.</p>
        </div>
        <button className="text-gray-500">
          <span className="sr-only">Kapat</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Interview Questions Search */}
      <div>
        <h2 className="text-xl font-bold mb-4">Microsoft interview questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Job title" className="pl-9" />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Location" className="pl-9" />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">16,417 interviews of 15.4K</div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort:</span>
            <Select defaultValue="popular">
              <SelectTrigger className="w-[180px] h-8 text-sm">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">most popular</SelectItem>
                <SelectItem value="recent">most recent</SelectItem>
                <SelectItem value="relevant">most relevant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Interview Review */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">Senior Software Engineer Interview</h3>
          <div className="text-sm text-gray-500">May 6, 2025</div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <div className="bg-gray-100 rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm font-medium">Anonymous Interview Candidate</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="destructive" className="rounded-full bg-red-50 text-red-600 hover:bg-red-50 border-red-100">
            No offer
          </Badge>
          <Badge variant="secondary" className="rounded-full">
            Neutral experience
          </Badge>
          <Badge variant="destructive" className="rounded-full bg-red-50 text-red-600 hover:bg-red-50 border-red-100">
            Difficult interview
          </Badge>
        </div>


        <div className="mb-4">
          <h4 className="font-medium mb-1">Interview</h4>
          <p className="text-sm mb-2">
            Microsoft biedt een strak en grondig proces, maar de lat ligt hoog. Niet ideaal als je jaren
            praktijkervaring hebt maar niet dagelijks met leetcode-achtige problemen werkt. Alleen aan te raden als je
            bereid bent maandenlang te oefenen.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium mb-1">Interview questions [1]</h4>
          <div className="ml-4">
            <p className="text-sm font-medium mb-1">Question 1</p>
            <p className="text-sm mb-2">Welke teams ik heb geleid en hoe</p>
            <Button variant="link" className="text-blue-600 p-0 h-auto text-sm flex items-center gap-1">
              <span>Answer question</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Helpful
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
            </svg>
            Share
          </Button>
        </div>
      </div>
    </div>
  )
}
