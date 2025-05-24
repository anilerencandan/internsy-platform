import { MapPin, Calendar, Users, Briefcase, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CompanyProps {
  name: string
  headquarters: string
  founded: string
  employees: string
  industry: string
  description?: string
}

export default function CompanySidebar({ company }: { company: CompanyProps }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-4">Şirket Bilgileri</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-sm">Merkez</div>
              <div className="text-gray-600">{company.headquarters}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-sm">Kuruluş</div>
              <div className="text-gray-600">{company.founded}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Users className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-sm">Çalışan Sayısı</div>
              <div className="text-gray-600">{company.employees}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium text-sm">Sektör</div>
              <div className="text-gray-600">{company.industry}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-4">Mülakat Süreci</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Ortalama Süreç Uzunluğu</span>
            <span className="font-medium">3-4 hafta</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Ortalama Görüşme Sayısı</span>
            <span className="font-medium">4-5 görüşme</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Teklif Alma Oranı</span>
            <span className="font-medium">%24</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-4">Popüler Mülakat Konuları</h3>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-medium">1.</span> Algoritma ve Veri Yapıları
          </div>
          <div className="text-sm">
            <span className="font-medium">2.</span> Sistem Tasarımı
          </div>
          <div className="text-sm">
            <span className="font-medium">3.</span> Davranışsal Sorular
          </div>
          <div className="text-sm">
            <span className="font-medium">4.</span> Problem Çözme
          </div>
          <div className="text-sm">
            <span className="font-medium">5.</span> Teknik Bilgi
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-4">Bağlantılar</h3>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start px-4 py-2 hover:bg-primary hover:text-white duration-0 transition-none">
            <ExternalLink className="h-4 w-4 mr-2" />
            Şirket Web Sitesi
          </Button>
          <Button variant="outline" className="w-full justify-start px-4 py-2 hover:bg-primary hover:text-white duration-0 transition-none">
            <ExternalLink className="h-4 w-4 mr-2" />
            Kariyer Sayfası
          </Button>
          <Button variant="outline" className="w-full justify-start px-4 py-2 hover:bg-primary hover:text-white duration-0 transition-none">
            <ExternalLink className="h-4 w-4 mr-2" />
            LinkedIn Profili
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg border border-blue-100 p-4">
        <h3 className="font-semibold mb-2">Mülakat Deneyimini Paylaş</h3>
        <p className="text-sm text-gray-600 mb-3">
          {company.name} ile mülakat deneyiminizi paylaşarak diğer adaylara yardımcı olun.
        </p>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Deneyim Paylaş</Button>
      </div>
    </div>
  )
}
