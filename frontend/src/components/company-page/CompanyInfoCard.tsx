"use client"
import { SquareArrowOutUpRight } from 'lucide-react'

export default function CompanyInfoCard() {
  return (
    <div className="flex flex-col gap-y-4 h-fit stick top-2 xl:hidden">
    {/* İlk Kart: Şirket Bilgileri */}
    <div className="border border-gray-300 rounded-lg p-2 bg-primary text-white shadow text-sm">
  <div className="flex flex-col text-[11px] mb-2">
    <h3 className="text-lg font-bold">Şirket Bilgileri</h3>
  </div>

  <div className="grid grid-cols-2 gap-x-4 text-xs">
    {/* Sol sütun */}
    <div className="flex flex-col gap-y-1">
      <p><span className="font-bold">Lokasyon:</span> Mountain View, Amerika</p>
      <p><span className="font-bold">Kategori:</span> Teknoloji</p>
    </div>

    {/* Sağ sütun */}
    <div className="flex flex-col gap-y-1">
      <p><span className="font-bold">Çalışan:</span> 10000+</p>
      <p><span className="font-bold">Gelir:</span> $10+ Milyar [USD]</p>
      <p><span className="font-bold">Kuruluş:</span> 1998</p>
    </div>
  </div>
</div>
  </div>
  )
}
