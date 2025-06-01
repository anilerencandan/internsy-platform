"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Lock, Send, Users } from "lucide-react"

interface AnonymousPostDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  categories: Array<{ id: string; name: string }>
  postCommunity: (formData: FormData) => void
}

export default function AnonymousPostDialog({ open, setOpen, categories, postCommunity }: AnonymousPostDialogProps) {
  const [selectedCommunity, setSelectedCommunity] = useState("")
  const [content, setContent] = useState("")

  // Örnek kategoriler - sen kendi veritabanından alacaksın
  const exampleCategories = [
    { id: "1", name: "Teknoloji" },
    { id: "2", name: "Yazılım Geliştirme" },
    { id: "3", name: "Genel Tartışma" },
  ]

  // Eğer categories prop'u boşsa örnek kategorileri kullan
  const categoriesToUse = categories.length > 0 ? categories : exampleCategories

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] gap-4">
        <DialogHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Lock className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold">Anonim Post Paylaş</DialogTitle>
              <p className="text-sm text-gray-600">Paylaşımınız anonim olarak yapılacaktır.</p>
            </div>
          </div>
        </DialogHeader>

        <form action={postCommunity} method="POST" className="space-y-4">
          {/* Topluluk Seçimi - Üste alındı */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center border-0 gap-2">
              <Users className="h-4 w-4 text-blue-600" />
              Topluluk Seçin
            </Label>
            <select
              name="category_id"
              value={selectedCommunity}
              onChange={(e) => setSelectedCommunity(e.target.value)}
              className="w-full border-2 p-2 rounded text-sm h-11 hover:border-blue-300 focus:border-blue-500 transition-colors"
              required
            >
              <option value="">Topluluk Seçin</option>
              {categoriesToUse.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Başlık */}
          <div className="space-y-2">
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
          </div>

          {/* İçerik */}
          <div className="space-y-2">
            <Label htmlFor="content" className="text-sm font-medium">
              İçerik
            </Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Ne paylaşmak istersiniz? Düşüncelerinizi, sorularınızı veya deneyimlerinizi yazın..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-2 hover:border-blue-300 focus:border-blue-500 transition-colors resize-none"
              required
            />
          </div>

          {/* Gizlilik Bildirimi */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <Lock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700 leading-relaxed">
                <strong>Gizlilik Garantisi:</strong> Kimliğiniz gizli kalacak ve postunuz tamamen anonim olarak
                yayınlanacaktır.
              </p>
            </div>
          </div>

          <DialogFooter className="gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="px-6">
              İptal
            </Button>
            <Button
              type="submit"
              className="px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Send className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
