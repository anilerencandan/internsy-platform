"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {  ChevronLeft } from "lucide-react"
import SelectPopover from "../SelectPopover"

export default function EditProfilePage({onToggleEditMode}: {onToggleEditMode: () => void}) {
  const [cvFile, setCvFile] = useState<File | null>(null)

  return (
    <div className="flex flex-col gap-y-4 sm:border border-gray-300 rounded-lg p-6 ">
      <div className="flex items-center justify-center relative">
        <button onClick={onToggleEditMode} className="text-lg text-primary font-semibold flex items-center gap-x-2 absolute left-0 "><ChevronLeft size={24}/></button>
        <h1 className="text-2xl font-bold text-primary">Profili Düzenle</h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-12">
        <div className="flex flex-col gap-y-2 ">
          <Label>Ad Soyad (Opsiyonel)</Label>
          <Input placeholder="Ad Soyad" />
        </div>

        <div className="flex flex-col gap-y-2 relative">
          <div className="flex items-center gap-x-2">
            <Label>Profil Başlığı (Örn: Frontend Developer)</Label>
            <div className="group relative cursor-pointer">
              <span className="text-blue-500 text-sm">ℹ️</span>
              <div className="absolute left-6 top-0 z-10 w-64 max-w-[80vw] bg-white text-sm text-gray-700 border border-gray-300 rounded-lg shadow-md px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Profil başlığı, diğer kullanıcıların seni tanımasını kolaylaştırır. Örneğin: Frontend Developer, Veri Analisti, UI/UX Designer gibi. Eğer kullanmak istemezsen otomatik olarak okuduğunuz üniversite yazacaktır. Örnek: "Boğaziçi Üniversitesi Öğrencisi" gibi.
              </div>
            </div>
          </div>
          <Input placeholder="Örn: Frontend Developer" />
        </div>

        <div className="flex flex-col gap-y-2 ">
          <Label>Üniversite</Label>
          <SelectPopover
          />
        </div>

{/*         <div className="flex flex-col gap-y-2 ">
          <Label>Şehir</Label>
          <SelectPopover
          />
        </div> */}

        <div className="flex flex-col gap-y-2 ">
          <Label>Bölüm</Label>
          <SelectPopover
          />
        </div>

        {/* <div className="flex flex-col gap-y-2 ">
          <Label>CV Yükle</Label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90"
          />
          {cvFile && <p className="text-sm mt-1">Seçilen dosya: {cvFile.name}</p>}
        </div> */}

        <div className="pt-4">
          <Button type="submit" className="px-4 py-2 text-sm ">Profili Kaydet</Button>
        </div>
      </div>
    </div>
  )
}

