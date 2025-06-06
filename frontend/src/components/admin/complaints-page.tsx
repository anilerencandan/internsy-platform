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
      reportDate: "2024-01-15",
    },
    {
      id: 2,
      postTitle: "Kütüphane çok gürültülü",
      postLink: "https://example.com/post/789",
      userId: "user_321",
      reportDate: "2024-01-14",
    },
    {
      id: 3,
      postTitle: "Yurt koşulları berbat",
      postLink: "https://example.com/post/456",
      userId: "user_789",
      reportDate: "2024-01-13",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Şikayetler</h2>
        <p className="text-gray-600 mt-1">Şikayet edilen postları yönetin</p>
      </div>

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <Card key={complaint.id}>
            <CardHeader>
              <CardTitle className="text-lg">{complaint.postTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Post Linki:</span>
                  <a
                    href={complaint.postLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    Postu Görüntüle
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Kullanıcı ID:</span> {complaint.userId}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Şikayet Tarihi:</span> {complaint.reportDate}
                </div>
                <div className="pt-2">
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Postu Kaldır
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
