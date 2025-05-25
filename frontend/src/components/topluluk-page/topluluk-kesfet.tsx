
"use client"

// Community Type Definitions
type BaseCommunity = {
  id: number
  name: string
  description: string
  memberCount: number
  thumbnail: string
  color: string
}

type RegularCommunity = BaseCommunity & {
  category: string
}

type UniversityCommunity = BaseCommunity & {
  university: string
}

type Community = RegularCommunity | UniversityCommunity

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, Building, Search, Plus, X } from "lucide-react"

// Mock data for regular communities
const regularCommunities = [
  {
    id: 1,
    name: "Design Systems",
    description: "A community for designers and developers working on design systems and component libraries.",
    memberCount: 2847,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-blue-50 border-blue-200",
    category: "Design",
  },
  {
    id: 2,
    name: "Frontend Developers",
    description: "Share knowledge, tips, and best practices for modern frontend development.",
    memberCount: 5632,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-green-50 border-green-200",
    category: "Development",
  },
  {
    id: 3,
    name: "UX Research",
    description: "Discuss user research methodologies, tools, and insights to improve user experiences.",
    memberCount: 1924,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-purple-50 border-purple-200",
    category: "Research",
  },
  {
    id: 4,
    name: "Product Management",
    description: "Connect with product managers to share strategies, frameworks, and industry insights.",
    memberCount: 3156,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-orange-50 border-orange-200",
    category: "Business",
  },
  {
    id: 5,
    name: "Data Science",
    description: "Explore data analysis, machine learning, and statistical modeling techniques.",
    memberCount: 4289,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-pink-50 border-pink-200",
    category: "Data",
  },
  {
    id: 6,
    name: "Mobile Development",
    description: "iOS, Android, and cross-platform mobile development discussions and resources.",
    memberCount: 2673,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-indigo-50 border-indigo-200",
    category: "Development",
  },
]

// Mock data for university communities
const universityCommunities = [
  {
    id: 7,
    name: "İTÜ Bilgisayar Kulübü",
    description: "İstanbul Teknik Üniversitesi öğrencileri için bilgisayar bilimleri ve yazılım geliştirme topluluğu.",
    memberCount: 1245,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-red-50 border-red-200",
    university: "İTÜ",
  },
  {
    id: 8,
    name: "Boğaziçi Robotik",
    description: "Boğaziçi Üniversitesi robotik ve otomasyon sistemleri araştırma topluluğu.",
    memberCount: 892,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-blue-50 border-blue-200",
    university: "Boğaziçi",
  },
  {
    id: 9,
    name: "ODTÜ Yazılım",
    description: "Orta Doğu Teknik Üniversitesi yazılım geliştirme ve teknoloji topluluğu.",
    memberCount: 2156,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-green-50 border-green-200",
    university: "ODTÜ",
  },
  {
    id: 10,
    name: "İÜ Girişimcilik",
    description: "İstanbul Üniversitesi öğrencileri için girişimcilik ve inovasyon topluluğu.",
    memberCount: 1678,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-yellow-50 border-yellow-200",
    university: "İÜ",
  },
  {
    id: 11,
    name: "Hacettepe AI",
    description: "Hacettepe Üniversitesi yapay zeka ve makine öğrenmesi araştırma topluluğu.",
    memberCount: 934,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-purple-50 border-purple-200",
    university: "Hacettepe",
  },
  {
    id: 12,
    name: "Ege Tasarım",
    description: "Ege Üniversitesi grafik tasarım ve dijital sanatlar topluluğu.",
    memberCount: 756,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-pink-50 border-pink-200",
    university: "Ege",
  },
]

// Category Search Filter Component
function CategorySearchFilter({
  selectedCategory,
  onCategoryChange,
}: { selectedCategory: string; onCategoryChange: (category: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["Design", "Development", "Research", "Business", "Data"]

  const filteredCategories = categories.filter((category) => category.toLowerCase().includes(searchTerm.toLowerCase()))

  const selectedCategoryName = selectedCategory === "all" ? "All Categories" : selectedCategory

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left flex items-center justify-between"
      >
        <span className="truncate">{selectedCategoryName}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-7 pr-2 py-1 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-40 overflow-y-auto">
            <button
              onClick={() => {
                onCategoryChange("all")
                setIsOpen(false)
                setSearchTerm("")
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${selectedCategory === "all" ? "bg-blue-50 text-blue-600" : ""}`}
            >
              All Categories
            </button>
            {filteredCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category)
                  setIsOpen(false)
                  setSearchTerm("")
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${selectedCategory === category ? "bg-blue-50 text-blue-600" : ""}`}
              >
                {category}
              </button>
            ))}
            {filteredCategories.length === 0 && searchTerm && (
              <div className="px-3 py-2 text-sm text-gray-500">No categories found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// University Search Filter Component
function UniversitySearchFilter({
  selectedUniversity,
  onUniversityChange,
}: { selectedUniversity: string; onUniversityChange: (university: string) => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const universities = ["İTÜ", "Boğaziçi", "ODTÜ", "İÜ", "Hacettepe", "Ege"]

  const filteredUniversities = universities.filter((university) =>
    university.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedUniversityName = selectedUniversity === "all" ? "All Universities" : selectedUniversity

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left flex items-center justify-between"
      >
        <span className="truncate">{selectedUniversityName}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3" />
              <input
                type="text"
                placeholder="Search universities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-7 pr-2 py-1 text-sm border border-gray-200 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-40 overflow-y-auto">
            <button
              onClick={() => {
                onUniversityChange("all")
                setIsOpen(false)
                setSearchTerm("")
              }}
              className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${selectedUniversity === "all" ? "bg-blue-50 text-blue-600" : ""}`}
            >
              All Universities
            </button>
            {filteredUniversities.map((university) => (
              <button
                key={university}
                onClick={() => {
                  onUniversityChange(university)
                  setIsOpen(false)
                  setSearchTerm("")
                }}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${selectedUniversity === university ? "bg-blue-50 text-blue-600" : ""}`}
              >
                {university}
              </button>
            ))}
            {filteredUniversities.length === 0 && searchTerm && (
              <div className="px-3 py-2 text-sm text-gray-500">No universities found</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// Community Request Modal Component
function CommunityRequestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    university: "",
    reason: "",
    contactEmail: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Topluluk talebiniz başarıyla gönderildi! En kısa sürede değerlendirilerek size dönüş yapılacaktır.")
    setIsSubmitting(false)
    setFormData({
      name: "",
      description: "",
      category: "",
      university: "",
      reason: "",
      contactEmail: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Topluluk Talep Et</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Topluluk Adı *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Örn: React Developers"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Açıklama *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Topluluğun amacı ve hedefleri..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Kategori seçin</option>
                <option value="Design">Design</option>
                <option value="Development">Development</option>
                <option value="Research">Research</option>
                <option value="Business">Business</option>
                <option value="Data">Data</option>
                <option value="Other">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Üniversite (Opsiyonel)</label>
              <select
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Üniversite seçin</option>
                <option value="İTÜ">İTÜ</option>
                <option value="Boğaziçi">Boğaziçi</option>
                <option value="ODTÜ">ODTÜ</option>
                <option value="İÜ">İÜ</option>
                <option value="Hacettepe">Hacettepe</option>
                <option value="Ege">Ege</option>
                <option value="Other">Diğer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Neden bu topluluk gerekli? *</label>
              <textarea
                required
                rows={3}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Bu topluluğun neden oluşturulması gerektiğini açıklayın..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">İletişim E-postası *</label>
              <input
                type="email"
                required
                value={formData.contactEmail}
                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="ornek@email.com"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1" disabled={isSubmitting}>
                İptal
              </Button>
              <Button type="submit" className="flex-1" disabled={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "Talep Et"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"regular" | "university">("regular")
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(regularCommunities[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedUniversity, setSelectedUniversity] = useState("all")
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      // This will be handled by the individual components
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  const currentCommunities = activeTab === "regular" ? regularCommunities : universityCommunities

  const handleTabChange = (tab: "regular" | "university") => {
    setActiveTab(tab)
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedUniversity("all")
    setSelectedCommunity(tab === "regular" ? regularCommunities[0] : universityCommunities[0])
  }

  const filteredCommunities = currentCommunities.filter((community) => {
    const matchesSearch =
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "regular") {
      const matchesCategory =
        selectedCategory === "all" ||
        ("category" in community && community.category === selectedCategory);
      return matchesSearch && matchesCategory;
    } else {
      const matchesUniversity =
        selectedUniversity === "all" ||
        ("university" in community && community.university === selectedUniversity);
      return matchesSearch && matchesUniversity;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Request Button */}
        <div className="text-center mb-8 relative">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Communities</h1>
          <p className="text-gray-600">Discover and join communities that match your interests</p>

          {/* Request Community Button */}
          <Button
            onClick={() => setIsRequestModalOpen(true)}
            className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-600 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Topluluk Talep Et
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 inline-flex">
            <button
              onClick={() => handleTabChange("regular")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "regular"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <Building className="w-4 h-4" />
              Topluluklar
            </button>
            <button
              onClick={() => handleTabChange("university")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === "university"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              Üniversite Toplulukları
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category/University Filter with Search */}
            <div className="lg:w-64">
              {activeTab === "regular" ? (
                <CategorySearchFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
              ) : (
                <UniversitySearchFilter
                  selectedUniversity={selectedUniversity}
                  onUniversityChange={setSelectedUniversity}
                />
              )}
            </div>
          </div>
        </div>

        {/* Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCommunities.map((community) => (
            <Card
              key={community.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 border-2 ${community.color} ${
                selectedCommunity && selectedCommunity.id === community.id ? "ring-2 ring-blue-500 ring-offset-2" : ""
              }`}
              onClick={() => setSelectedCommunity(community as Community)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="h-12 w-12 rounded-xl">
                    <AvatarImage src={community.thumbnail || "/placeholder.svg"} alt={community.name} />
                    <AvatarFallback className="rounded-xl bg-white text-gray-600 font-semibold">
                      {community.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                      {community.name}
                    </CardTitle>
                    <div className="flex gap-2 mt-1">
                      {activeTab === "regular" && "category" in community && (
                        <Badge variant="outline" className="text-xs">
                          {"category" in community && community.category}
                        </Badge>
                      )}
                      {activeTab === "university" && "university" in community && (
                        <Badge variant="outline" className="text-xs">
                          {community.university}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {community.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-white/80 text-gray-700 font-medium">
                    <Users className="w-3 h-3 mr-1" />
                    {community.memberCount.toLocaleString()} members
                  </Badge>
                  <Link
                    href={`/community/${community.id}`}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Building className="w-16 h-16 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No communities found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Community Request Modal */}
        <CommunityRequestModal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} />
      </div>
    </div>
  )
}
