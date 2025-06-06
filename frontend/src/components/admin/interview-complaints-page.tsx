import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Trash2, FileText } from "lucide-react"

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
      reporterId: "user_132",
      reportDate: "2024-01-15",
      reportReason: "Yanıltıcı bilgi",
      postLink: "https://example.com/post/123",

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
      reporterId: "user_132",
      reportDate: "2024-01-14",
      reportReason: "Hakaret içeriyor",
      postLink: "https://example.com/post/123",

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
      reporterId: "user_132",
      reportDate: "2024-01-13",
      reportReason: "Yanıltıcı değerlendirme",
      postLink: "https://example.com/post/123",

    },
  ]

  const [statuses, setStatuses] = useState<Record<number, string>>(
    () =>
      interviewComplaints.reduce((acc, c) => {
        acc[c.id] = "Beklemede"
        return acc
      }, {} as Record<number, string>)
  )


  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Şikayet Edilen Mülakatlar ve Görüşler</h2>
        <p className="text-gray-600 mt-1">Şikayet edilen mülakat deneyimlerini ve şirket görüşlerini yönetin</p>
      </div>

      <div className="space-y-4">
        {interviewComplaints.map((complaint) => (
          <Card key={complaint.id} className="relative border-gray-200 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  
                  <FileText className="w-5 h-5 text-gray-500 mt-1" />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{complaint.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={complaint.type === "Mülakat" ? "default" : "secondary"}>{complaint.type}</Badge>
                      <Badge variant="outline">{complaint.company}</Badge>
                    </div>
                    <div className="flex-1">
                  <p className="text-sm text-red-600 mt-4">
                    Sebep: <span className="font-bold text-red-600">{complaint.reportReason}</span>
                  </p>
                </div>
                  </div>
                </div>
                <div className="text-center items-center">
                  
                  <div
                    className={`mt-2 text-center text-sm font-semibold border border-gray-300 p-2 rounded-lg ${
                      statuses[complaint.id] === "Beklemede"
                        ? "bg-gray-200 text-gray-800"
                        : statuses[complaint.id] === "Silindi"
                        ? "bg-red-200 text-red-800"
                        : statuses[complaint.id] === "Yok sayıldı"
                        ? "bg-green-200 text-green-800"
                        : ""
                    }`}
                  >
                    {statuses[complaint.id]}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
                  <p className="text-gray-800"><span className="text-gray-800 font-bold">{complaint.content}</span></p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Şirket:</span> <span className="text-black font-bold">{complaint.company}</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Pozisyon:</span> <span className="text-black font-bold">{complaint.position}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Kullanıcı ID:</span> <span className="text-black font-bold">{complaint.userId}</span>
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Şikayet Tarihi:</span><span className="text-black font-bold"> {complaint.reportDate}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-gray-600">
                      <span className="font-medium">Şikayet Eden Kullanıcı:</span> <span className="text-black font-bold">{complaint.reporterId}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Post Linki:</span>
                  <a
                    href={complaint.postLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 font-semibold"
                  >
                    Postu Görüntüle
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-400"
                      onClick={() =>
                        setStatuses((prev) => ({
                          ...prev,
                          [complaint.id]: "Silindi",
                        }))
                      }
                    >
                      <Trash2 className="w-4 h-4" />
                      İçeriği Kaldır
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white"
                      onClick={() =>
                        setStatuses((prev) => ({
                          ...prev,
                          [complaint.id]: "Yok sayıldı",
                        }))
                      }
                    >
                      Yoksay
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
