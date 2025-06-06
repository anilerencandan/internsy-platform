import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Trash2 } from "lucide-react"

export function ComplaintsPage() {
  // Örnek veri
  const complaints = [
    {
      id: 1,
      postTitle: "Üniversite kantinindeki fiyatlar çok yüksek",
      postLink: "https://example.com/post/123",
      userId: "user_456",
      reporterId: "user_132",
      reportDate: "2024-01-15",
    },
    {
      id: 2,
      postTitle: "Kütüphane çok gürültülü",
      postLink: "https://example.com/post/789",
      userId: "user_321",
      reporterId: "user_132",
      reportDate: "2024-01-14",
    },
    {
      id: 3,
      postTitle: "Yurt koşulları berbat",
      postLink: "https://example.com/post/456",
      userId: "user_789",
      reporterId: "user_132",
      reportDate: "2024-01-13",
    },
  ]

  const [statuses, setStatuses] = useState<Record<number, string>>(
    () =>
      complaints.reduce((acc, c) => {
        acc[c.id] = "Beklemede"
        return acc
      }, {} as Record<number, string>)
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Şikayetler</h2>
        <p className="text-gray-600 mt-1">Şikayet edilen postları yönetin</p>
      </div>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <Card key={complaint.id} className="relative border-gray-200 shadow-lg" >
            <CardHeader>
              <CardTitle className="text-lg">{complaint.postTitle}</CardTitle>
            </CardHeader>
            <div
              className={`absolute top-2 right-2 text-sm font-semibold border border-gray-300 p-2 shadow rounded-lg ${
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
            <CardContent>
              <div className="space-y-3">
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
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Kullanıcı ID:</span> <span className="text-black font-bold">{complaint.userId}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Şikayet Eden Kullanıcı:</span> <span className="text-black font-bold">{complaint.reporterId}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Şikayet Tarihi:</span>  <span className="text-black font-bold">{complaint.reportDate}</span>
                </div>
                <div className="pt-2 flex items-center gap-2">
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
                    Postu Kaldır
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
