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
    <div className="flex flex-col gap-y-4">
        <button onClick={onToggleEditMode} className="text-lg text-primary font-semibold flex items-center gap-x-2 "><ChevronLeft size={24}/> Profil Ekranına Dön</button>
        <h1 className="text-2xl font-bold ">Profili Düzenle</h1>


      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <Label>Ad Soyad</Label>
          <Input placeholder="Ad Soyad" />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Profil Başlığı (Title)</Label>
          <Input placeholder="Örn: Frontend Developer" />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Üniversite</Label>
          <SelectPopover
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Şehir</Label>
          <SelectPopover
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Bölüm</Label>
          <SelectPopover
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>CV Yükle</Label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setCvFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90"
          />
          {cvFile && <p className="text-sm mt-1">Seçilen dosya: {cvFile.name}</p>}
        </div>

        <div className="pt-4">
          <Button type="submit" className="px-4 py-2 text-sm ">Profili Kaydet</Button>
        </div>
      </div>
    </div>
  )
}

