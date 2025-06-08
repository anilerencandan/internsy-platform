"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Lock, Users, Send } from "lucide-react"

interface AnonymousPostFormProps {
  categories: Array<{ id: string; name: string }>
  postCommunity: (formData: FormData) => void
  setOpen?: (open: boolean) => void // opsiyonel, modal kullanımı için
}

export default function AnonymousPostForm({ categories, postCommunity, setOpen }: AnonymousPostFormProps) {
  const [selectedCommunity, setSelectedCommunity] = useState("")
  const [content, setContent] = useState("")

  const categoriesToUse = categories.length > 0 ? categories : [
    { id: "1", name: "Teknoloji" },
    { id: "2", name: "Yazılım Geliştirme" },
    { id: "3", name: "Genel Tartışma" },
  ]

  return (
    <form action={postCommunity} method="POST" className="space-y-4 text-sm">
      {/* Topluluk Seçimi */}
      <div className="space-y-2">
        <Label className="text-sm font-medium flex items-center gap-2">
          <Users className="h-4 w-4 text-blue-600" />
          Topluluk Seçin
        </Label>
        <select
          name="category_id"
          value={selectedCommunity}
          onChange={(e) => setSelectedCommunity(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded text-sm h-11 hover:border-blue-400 focus:border-blue-500 transition-colors"
          required
        >
          <option value="">Topluluk Seçin</option>
          {categoriesToUse.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Başlık */}
{/*       <div className="space-y-2">
        <Label htmlFor="title" className="text-sm font-medium">
          Başlık
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="Postunuz için çekici bir başlık yazın..."
          required
          className="h-11 border-2 hover:border-blue-300 focus:border-blue-500 transition-colors"
        />
      </div> */}

      {/* İçerik */}
      <div className="space-y-2">
        <Label htmlFor="content" className="text-sm font-medium">
          İçerik
        </Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Ne paylaşmak istersiniz?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="min-h-[100px] border-2 border-gray-300 hover:border-blue-300 focus:border-blue-500 transition-colors resize-none"
          required
        />
      </div>

      {/* Gizlilik Bilgisi */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Lock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-blue-700 leading-relaxed">
            <strong>Gizlilik Garantisi:</strong> Kimliğiniz gizli kalacak ve postunuz anonim olarak paylaşılacaktır.
          </p>
        </div>
      </div>

      {/* Butonlar */}
      <div className="flex justify-between pt-2">
        {setOpen && (
          <Button type="button" variant="outline" onClick={() => setOpen(false)} className="px-6 border-gray-300">
            İptal
          </Button>
        )}
        <Button
          type="submit"
          className="px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
        >
          <Send className="h-4 w-4 mr-2" />
          Paylaş
        </Button>
      </div>
    </form>
  )
}
