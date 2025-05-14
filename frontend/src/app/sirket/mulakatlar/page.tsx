import {
  Search,
  MapPin,
  MoreHorizontal,
  ThumbsUp,
  Share2,
  X,
  Info,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"

export default function Home() {
  return (
        <div className="">
          {/* Company Header */}
          
          {/* Interview Content */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Google Mülakat Soruları</h2>
              <span className="text-sm text-gray-500">Mayıs 6, 2025 tarihinde güncellendi</span>
            </div>

            {/* Difficulty Rating */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">3.1</span>
                <div className="flex items-center">
                  <span className="text-lg text-gray-600">/5 zorluk seviyesi</span>
                  <Info className="h-4 w-4 text-gray-400 ml-1" />
                </div>
              </div>

              {/* Interview Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Mülakat Deneyimi</h4>
                  <div className="flex items-center mb-2">
                    <div className="w-full max-w-xs">
                      <div className="flex h-4 overflow-hidden rounded-full">
                        <div className="bg-green-500 w-[67%]"></div>
                        <div className="bg-gray-500 w-[20%]"></div>
                        <div className="bg-red-500 w-[13%]"></div>
                      </div>
                    </div>
                    <div className="ml-4 flex gap-6">
                      <div className="flex items-center">
                        <span className="text-green-500 font-semibold">67%</span>
                        <span className="ml-1 text-sm">Pozitif</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-red-500 font-semibold">13%</span>
                        <span className="ml-1 text-sm">Negatif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>    

            {/* Top Jobs */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Interviews for top jobs at Microsoft</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software engineer (1830)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software development engineer (1122)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Intern (674)
                </Badge>
                <Badge variant="outline" className="py-2 px-3 rounded-full bg-gray-50 hover:bg-gray-100">
                  Software engineer(internship) (668)
                </Badge>
              </div>
              <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto flex items-center">
                See more interviews for top jobs
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Trust Banner */}
            <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-8 flex items-center justify-between">
              <div className="flex items-center">
                <Info className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-sm">
                  Your trust is our top concern, so companies cant alter or remove interviews.
                </span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Interview Search */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Microsoft interview questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Job title"
                    className="pl-10 pr-4 py-3 rounded-md bg-gray-100 border-none text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="pl-10 pr-4 py-3 rounded-md bg-gray-100 border-none text-sm w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Interview List */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <span className="font-semibold">16,417 interviews</span>
                  <span className="text-gray-500 ml-1">of 16.4K</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Sort</span>
                  <Button variant="outline" className="flex items-center">
                    most popular
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              {/* Interview Item */}
              <div className="border-t border-b py-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">Senior Software Engineer Interview</h3>
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">May 6, 2025</span>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                      <span className="text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </span>
                    </div>
                  </Avatar>
                  <span className="font-medium">Anonymous Interview Candidate</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-red-500">
                    <X className="h-5 w-5 mr-1" />
                    <span>No offer</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <span className="h-1 w-5 bg-gray-400 rounded-full mx-1"></span>
                    <span>Neutral experience</span>
                  </div>
                  <div className="flex items-center text-red-500">
                    <X className="h-5 w-5 mr-1" />
                    <span>Difficult interview</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Application</h4>
                  <p className="text-gray-700">I interviewed at Microsoft</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Interview</h4>
                  <p className="text-gray-700">
                    Microsoft biedt een strak en grondig proces, maar de lat ligt hoog. Niet ideaal als je jaren
                    praktijkervaring hebt maar niet dagelijks met leetcode-achtige problemen werkt. Alleen aan te raden
                    als je bereid bent maandenlang te oefenen.
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-1">Interview questions [1]</h4>
                  <p className="text-gray-700 mb-1">Question 1</p>
                  <p className="text-gray-700 mb-2">Welke teams ik heb geleid en hoe</p>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0 h-auto flex items-center">
                    Answer question
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="ghost" className="text-gray-500 hover:text-gray-700 flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Helpful
                  </Button>
                  <Button variant="ghost" className="text-gray-500 hover:text-gray-700 flex items-center">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
  )
}
