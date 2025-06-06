"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Send } from "lucide-react"

export function BlogPage() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    slug: "",
    images: [] as File[],
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.target.files!)],
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Blog paylaşılıyor:", formData)
    // Blog paylaşma işlemi burada yapılacak
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Blog Paylaşma</h2>
        <p className="text-gray-600 mt-1">Yeni blog yazısı oluşturun ve paylaşın</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Yeni Blog Yazısı</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Başlığı</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Blog yazınızın başlığını girin"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                placeholder="blog-yazisi-url"
                required
              />
              <p className="text-sm text-gray-500">URL'de görünecek kısım (örn: blog-yazisi-url)</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">İçerik</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                placeholder="Blog yazınızın içeriğini buraya yazın..."
                rows={10}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="images">Resimler</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Resimleri sürükleyip bırakın veya seçin</p>
                <input
                  id="images"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("images")?.click()}>
                  Resim Seç
                </Button>
              </div>
              {formData.images.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{formData.images.length} resim seçildi</p>
                </div>
              )}
            </div>

            <Button type="submit" className="w-full flex items-center gap-2">
              <Send className="w-4 h-4" />
              Blog Yazısını Paylaş
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
