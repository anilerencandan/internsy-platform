import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, FileText, Star } from "lucide-react"

export function InterviewComplaintsPage() {
  // Örnek veri
  const interviewComplaints = [
    {
      id: 1,
      title: "Google Yazılım Mühendisi Mülakatı",
      content:
        "Mülakat çok kötüydü, sorular anlamsızdı. Mülakatçılar hiç profesyonel değildi ve sürekli kesiyorlardı. Kesinlikle tavsiye etmem, zaman kaybı.",
      type: "Mülakat",
      company: "Google",
      position: "Yazılım Mühendisi",
      rating: 1,
      userId: "user_123",
      reportDate: "2024-01-15",
      reportReason: "Yanıltıcı bilgi",
    },
    {
      id: 2,
      title: "Microsoft Staj Deneyimi",
      content:
        "Staj sürecinde hiçbir şey öğrenemedim, mentorlar ilgisizdi. Şirket kültürü berbat, kimse yardım etmiyor. Para için bile gitmem.",
      type: "Görüş",
      company: "Microsoft",
      position: "Stajyer",
      rating: 2,
      userId: "user_456",
      reportDate: "2024-01-14",
      reportReason: "Hakaret içeriyor",
    },
    {
      id: 3,
      title: "Amazon SDE Mülakat Süreci",
      content:
        "Mülakat soruları çok kolaydı, herkes geçebilir. Şirket standartları düşük, kaliteli çalışan aramıyorlar. Boş yere heyecanlanmayın.",
      type: "Mülakat",
      company: "Amazon",
      position: "Software Development Engineer",
      rating: 2,
      userId: "user_789",
      reportDate: "2024-01-13",
      reportReason: "Yanıltıcı değerlendirme",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Şikayet Edilen Mülakatlar ve Görüşler</h2>
        <p className="text-gray-600 mt-1">Şikayet edilen mülakat deneyimlerini ve şirket görüşlerini yönetin</p>
      </div>

      <div className="space-y-4">
        {interviewComplaints.map((complaint) => (
          <Card key={complaint.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{complaint.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={complaint.type === "Mülakat" ? "default" : "secondary"}>{complaint.type}</Badge>
                      <Badge variant="outline">{complaint.company}</Badge>
                      <div className="flex items-center gap-1">{renderStars(complaint.rating)}</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-red-600 font-medium">Şikayet Sebebi:</p>
                  <p className="text-sm text-red-600">{complaint.reportReason}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <p className="text-gray-800">{complaint.content}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Şirket:</span> {complaint.company}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Pozisyon:</span> {complaint.position}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Kullanıcı ID:</span> {complaint.userId}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Şikayet Tarihi:</span> {complaint.reportDate}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Değerlendirme:</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(complaint.rating)}
                      <span className="text-sm text-gray-500 ml-1">({complaint.rating}/5)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    İçeriği Kaldır
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
