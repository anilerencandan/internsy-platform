import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Mail } from "lucide-react"

export function CommunityRequestsPage() {
  // Örnek veri
  const requests = [
    {
      id: 1,
      name: "Yazılım Geliştirme Topluluğu",
      description: "Üniversitemizde yazılım geliştirme alanında çalışan öğrencilerin bir araya geldiği topluluk",
      category: "Teknoloji",
      university: "İstanbul Teknik Üniversitesi",
      reason: "Yazılım alanında çalışan öğrenciler arasında bilgi paylaşımı ve proje geliştirme için gerekli",
      email: "yazilim@itu.edu.tr",
      requestDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Fotoğrafçılık Kulübü",
      description: "Fotoğraf çekmeyi seven öğrencilerin buluşma noktası",
      category: "Sanat",
      university: null,
      reason: "Kampüste fotoğrafçılık etkinlikleri düzenlemek ve deneyim paylaşmak için",
      email: "foto@example.com",
      requestDate: "2024-01-14",
    },
    {
      id: 3,
      name: "Girişimcilik Topluluğu",
      description: "Girişimcilik fikirlerini paylaşan ve startup kurmak isteyen öğrenciler",
      category: "İş Dünyası",
      university: "Boğaziçi Üniversitesi",
      reason: "Öğrenciler arasında girişimcilik kültürünü yaygınlaştırmak için gerekli",
      email: "girisim@boun.edu.tr",
      requestDate: "2024-01-13",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Topluluk Talepleri</h2>
        <p className="text-gray-600 mt-1">Yeni topluluk taleplerini inceleyin ve onaylayın</p>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{request.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{request.category}</Badge>
                    {request.university && <Badge variant="outline">{request.university}</Badge>}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Açıklama</h4>
                  <p className="text-gray-600 text-sm">{request.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Neden Gerekli?</h4>
                  <p className="text-gray-600 text-sm">{request.reason}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="font-medium">İletişim:</span>
                  <a href={`mailto:${request.email}`} className="text-blue-600 hover:text-blue-800">
                    {request.email}
                  </a>
                </div>

                <div className="text-sm text-gray-500">Talep Tarihi: {request.requestDate}</div>

                <div className="flex gap-3 pt-2">
                  <Button variant="default" size="sm" className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Onayla
                  </Button>
                  <Button variant="destructive" size="sm" className="flex items-center gap-2">
                    <X className="w-4 h-4" />
                    Sil
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
