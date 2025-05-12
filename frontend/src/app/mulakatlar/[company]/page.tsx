import { Star, ThumbsUp, ThumbsDown, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InterviewQuestions from "@/components/mulakatlar-page/interview-questions"
import InterviewExperiences from "@/components/mulakatlar-page/interview-experiences"
import CompanySidebar from "@/components/mulakatlar-page/company-sidebar"
import Link from "next/link"

// Bu fonksiyon gerçek bir uygulamada dinamik olarak şirket verilerini getirecektir
function getCompanyData(companySlug: string) {
  // Örnek veri
  const companies = {
    google: {
      name: "Google",
      logo: "G",
      rating: 4.2,
      difficulty: 3.8,
      totalReviews: 12453,
      positiveExperience: 78,
      negativeExperience: 12,
      neutralExperience: 10,
      description:
        "Google LLC, internet araması, çevrimiçi reklamcılık, bulut bilişim, yazılım ve donanım alanlarında uzmanlaşmış Amerikan çok uluslu bir teknoloji şirketidir.",
      headquarters: "Mountain View, California, ABD",
      founded: "4 Eylül 1998",
      employees: "156,500+",
      industry: "Teknoloji, Yazılım, İnternet",
    },
    microsoft: {
      name: "Microsoft",
      logo: "M",
      rating: 4.0,
      difficulty: 3.5,
      totalReviews: 9876,
      positiveExperience: 72,
      negativeExperience: 15,
      neutralExperience: 13,
      description:
        "Microsoft Corporation, bilgisayar yazılımı, tüketici elektroniği, kişisel bilgisayarlar ve ilgili hizmetler geliştiren, üreten, lisanslayan ve satan Amerikan çok uluslu bir teknoloji şirketidir.",
      headquarters: "Redmond, Washington, ABD",
      founded: "4 Nisan 1975",
      employees: "181,000+",
      industry: "Teknoloji, Yazılım",
    },
    amazon: {
      name: "Amazon",
      logo: "A",
      rating: 3.9,
      difficulty: 3.7,
      totalReviews: 8765,
      positiveExperience: 68,
      negativeExperience: 18,
      neutralExperience: 14,
      description:
        "Amazon.com, Inc., e-ticaret, bulut bilişim, dijital akış ve yapay zeka odaklı Amerikan çok uluslu bir teknoloji şirketidir.",
      headquarters: "Seattle, Washington, ABD",
      founded: "5 Temmuz 1994",
      employees: "1,541,000+",
      industry: "E-ticaret, Bulut Bilişim, Yapay Zeka",
    },
  }

  return (
    companies[companySlug as keyof typeof companies] || {
      name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
      logo: companySlug.charAt(0).toUpperCase(),
      rating: 0,
      difficulty: 0,
      totalReviews: 0,
      positiveExperience: 0,
      negativeExperience: 0,
      neutralExperience: 0,
      description: "Şirket bilgisi bulunamadı.",
      headquarters: "Bilinmiyor",
      founded: "Bilinmiyor",
      employees: "Bilinmiyor",
      industry: "Bilinmiyor",
    }
  )
}

export default function CompanyInterviewPage({ params }: { params: { company: string } }) {
  const company = getCompanyData(params.company)

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href="/mulakatlar" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Tüm Şirketlere Dön</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 flex-shrink-0">
                  {company.logo}
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">{company.name} Mülakat Deneyimleri</h1>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 font-medium">{company.rating}</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-600">{company.totalReviews.toLocaleString()} değerlendirme</span>
                  </div>
                  <p className="text-gray-600">{company.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Mülakat Zorluğu</h3>
                  <div className="flex items-end gap-2">
                    <div className="text-3xl font-bold">{company.difficulty}</div>
                    <div className="text-sm text-gray-600 mb-1">/5</div>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${(company.difficulty / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Mülakat Deneyimi</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 text-green-500 mr-2" />
                        <span>Pozitif</span>
                      </div>
                      <div className="text-sm font-medium">{company.positiveExperience}%</div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${company.positiveExperience}%` }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <ThumbsDown className="h-4 w-4 text-red-500 mr-2" />
                        <span>Negatif</span>
                      </div>
                      <div className="text-sm font-medium">{company.negativeExperience}%</div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${company.negativeExperience}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-gray-50">
                  Yazılım Mühendisi (1245)
                </Badge>
                <Badge variant="outline" className="bg-gray-50">
                  Ürün Yöneticisi (876)
                </Badge>
                <Badge variant="outline" className="bg-gray-50">
                  Veri Bilimci (543)
                </Badge>
                <Badge variant="outline" className="bg-gray-50">
                  UX Tasarımcı (321)
                </Badge>
                <Badge variant="outline" className="bg-gray-50">
                  Stajyer (298)
                </Badge>
              </div>
            </div>

            <Tabs defaultValue="experiences" className="mb-6">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="experiences">Mülakat Deneyimleri</TabsTrigger>
                <TabsTrigger value="questions">Mülakat Soruları</TabsTrigger>
              </TabsList>
              <TabsContent value="experiences" className="mt-4">
                <InterviewExperiences company={company.name} />
              </TabsContent>
              <TabsContent value="questions" className="mt-4">
                <InterviewQuestions company={company.name} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4">
            <CompanySidebar company={company} />
          </div>
        </div>
      </div>
    </main>
  )
}
