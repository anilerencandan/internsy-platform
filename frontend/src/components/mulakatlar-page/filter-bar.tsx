"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function FilterBar() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="font-semibold text-lg mb-4">Aradığın Şirketi Bul</h3>

      <div className="space-y-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Şirket İsmi
          </label>
          <Input id="company" placeholder="Şirket seçin" className="w-full bg-gray-50" />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Lokasyonu
          </label>
          <Input id="location" placeholder="Konum seçin" className="w-full bg-gray-50" />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-1">
            Endüstri
          </label>
          <Select>
            <SelectTrigger className="w-full bg-gray-50">
              <SelectValue placeholder="Endüstri seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Teknoloji</SelectItem>
              <SelectItem value="finance">Finans</SelectItem>
              <SelectItem value="health">Sağlık</SelectItem>
              <SelectItem value="education">Eğitim</SelectItem>
              <SelectItem value="retail">Perakende</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium mb-1">
            Pozisyon
          </label>
          <Select>
            <SelectTrigger className="w-full bg-gray-50">
              <SelectValue placeholder="Pozisyon seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software">Yazılım Geliştirici</SelectItem>
              <SelectItem value="product">Ürün Yöneticisi</SelectItem>
              <SelectItem value="design">Tasarımcı</SelectItem>
              <SelectItem value="marketing">Pazarlama</SelectItem>
              <SelectItem value="sales">Satış</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-1">
            Deneyim Seviyesi
          </label>
          <Select>
            <SelectTrigger className="w-full bg-gray-50">
              <SelectValue placeholder="Deneyim seviyesi seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="intern">Stajyer</SelectItem>
              <SelectItem value="junior">Junior</SelectItem>
              <SelectItem value="mid">Mid-Level</SelectItem>
              <SelectItem value="senior">Senior</SelectItem>
              <SelectItem value="lead">Lead/Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-2">Ara</Button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium mb-3">Şirket puanına göre filtrele</h4>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button key={rating} className="text-2xl text-yellow-400 hover:text-yellow-500">
              ★
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600">ve üstü</span>
        </div>
      </div>
    </div>
  )
}
