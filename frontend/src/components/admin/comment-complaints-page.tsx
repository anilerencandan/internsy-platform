import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Trash2, MessageCircle } from "lucide-react"

export function CommentComplaintsPage() {
  // Örnek veri
  const commentComplaints = [
    {
      id: 1,
      commentContent: "Bu post tamamen saçma, kim yazmış bunu? Hiç mantıklı değil.",
      userId: "user_789",
      postTitle: "Üniversite kantinindeki fiyatlar",
      postLink: "https://example.com/post/123",
      reportDate: "2024-01-15",
      reportReason: "Hakaret içeriyor",
    },
    {
      id: 2,
      commentContent: "Kesinlikle katılmıyorum, bu konuda hiçbir şey bilmiyorsun.",
      userId: "user_456",
      postTitle: "Kütüphane çalışma saatleri",
      postLink: "https://example.com/post/456",
      reportDate: "2024-01-14",
      reportReason: "Kaba dil kullanımı",
    },
    {
      id: 3,
      commentContent: "Bu üniversitedeki herkes aptal, kimse bir şey bilmiyor.",
      userId: "user_321",
      postTitle: "Sınav programı açıklandı",
      postLink: "https://example.com/post/789",
      reportDate: "2024-01-13",
      reportReason: "Genel hakaret",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Şikayet Edilen Yorumlar</h2>
        <p className="text-gray-600 mt-1">Şikayet edilen yorumları inceleyin ve yönetin</p>
      </div>

      <div className="space-y-4">
        {commentComplaints.map((complaint) => (
          <Card key={complaint.id}>
            <CardHeader>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-gray-500 mt-1" />
                <div className="flex-1">
                  <CardTitle className="text-lg">Şikayet Edilen Yorum</CardTitle>
                  <p className="text-sm text-red-600 mt-1">Sebep: {complaint.reportReason}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <p className="text-gray-800 italic">"{complaint.commentContent}"</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="text-gray-600">
                      <span className="font-medium">Kullanıcı ID:</span> {complaint.userId}
                    </div>
                    <div className="text-gray-600">
                      <span className="font-medium">Şikayet Tarihi:</span> {complaint.reportDate}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-gray-600">
                      <span className="font-medium">İlgili Post:</span> {complaint.postTitle}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-600">Post Linki:</span>
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
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Yorumu Kaldır
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
