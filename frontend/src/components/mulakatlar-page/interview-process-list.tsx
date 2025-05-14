"use client"

import { useState } from "react"
import { MessageSquare, ThumbsUp, Share2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Sample data for interview processes
const interviewProcesses = [
  {
    id: 1,
    company: "Tech Solutions",
    position: "Senior Software Developer",
    date: "1h",
    content:
      "Mülakat süreci toplam 3 aşamadan oluştu. İlk olarak HR ile bir görüşme yaptık, ardından teknik mülakat ve son olarak CTO ile bir görüşme gerçekleştirdik. Teknik mülakatta algoritma soruları ve sistem tasarımı üzerine sorular soruldu. Tüm süreç yaklaşık 2 hafta sürdü ve oldukça profesyoneldi.",
    likes: 1000,
    comments: 7778,
    tags: ["Teknoloji", "Yazılım", "Remote"],
  },
  {
    id: 2,
    company: "Finance Corp",
    position: "Product Manager",
    date: "3h",
    content:
      "Mülakat süreci oldukça yoğundu. İlk aşamada HR görüşmesi, ikinci aşamada case study, üçüncü aşamada ekip liderleriyle panel mülakat ve son olarak CEO ile görüşme yaptık. Tüm süreç 3 hafta sürdü. Case study'de ürün stratejisi ve pazar analizi yapmam istendi. Genel olarak zorlayıcı ama adil bir süreçti.",
    likes: 856,
    comments: 542,
    tags: ["Finans", "Ürün", "Hibrit"],
  },
  {
    id: 3,
    company: "Design Studio",
    position: "UI/UX Designer",
    date: "1d",
    content:
      "Mülakat süreci 4 aşamalıydı: HR görüşmesi, portfolyo sunumu, tasarım challenge'ı ve ekip görüşmesi. Tasarım challenge'ında 3 gün içinde bir mobil uygulama arayüzü tasarlamam istendi. Süreç yaklaşık 2 hafta sürdü ve geri bildirimler çok yapıcıydı. Şirketin tasarım kültürünü yakından tanıma fırsatı buldum.",
    likes: 723,
    comments: 389,
    tags: ["Tasarım", "Yaratıcı", "Ofis"],
  },
]

export default function InterviewProcessList() {
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (id: number) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter((postId) => postId !== id))
    } else {
      setLikedPosts([...likedPosts, id])
    }
  }

  return (
    <div className="space-y-4">
      {interviewProcesses.map((process) => (
        <div key={process.id} className="bg-white border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3">
              <Avatar>
                <AvatarFallback className="bg-gray-200 text-gray-700">{process.company.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{process.company}</h3>
                <p className="text-sm text-gray-600">{process.position}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{process.date}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Rapor Et</DropdownMenuItem>
                  <DropdownMenuItem>Kaydet</DropdownMenuItem>
                  <DropdownMenuItem>Paylaş</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-gray-800">{process.content}</p>
            <button className="text-blue-600 text-sm mt-1">devamını oku</button>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {process.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${likedPosts.includes(process.id) ? "text-blue-600" : ""}`}
              onClick={() => handleLike(process.id)}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{likedPosts.includes(process.id) ? process.likes + 1 : process.likes} Beğen</span>
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{process.comments} Yorum</span>
            </Button>

            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              <span>Paylaş</span>
            </Button>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <Button variant="outline" className="w-full md:w-auto">
          Daha Fazla Göster
        </Button>
      </div>
    </div>
  )
}
