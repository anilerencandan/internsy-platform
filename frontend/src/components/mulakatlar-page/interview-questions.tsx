import { ThumbsUp, MessageSquare, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Örnek mülakat soruları
const interviewQuestions = [
  {
    id: 1,
    position: "Software Engineer",
    question: "Bir dizi içindeki en büyük iki sayının toplamını bulan bir algoritma yazınız.",
    difficulty: "Orta",
    likes: 245,
    answers: 32,
    date: "2 ay önce",
  },
  {
    id: 2,
    position: "Product Manager",
    question: "Kullanıcı sayısı düşen bir ürün için nasıl bir strateji izlersiniz?",
    difficulty: "Kolay",
    likes: 189,
    answers: 27,
    date: "3 ay önce",
  },
  {
    id: 3,
    position: "Data Scientist",
    question: "Bir e-ticaret sitesinde ürün önerilerini geliştirmek için nasıl bir model tasarlarsınız?",
    difficulty: "Zor",
    likes: 312,
    answers: 41,
    date: "1 ay önce",
  },
  {
    id: 4,
    position: "Software Engineer",
    question: "Bir binary tree'nin dengeli olup olmadığını kontrol eden bir fonksiyon yazınız.",
    difficulty: "Zor",
    likes: 278,
    answers: 36,
    date: "2 hafta önce",
  },
  {
    id: 5,
    position: "UX Designer",
    question: "Bir mobil uygulamanın kullanıcı deneyimini değerlendirmek için hangi metrikleri kullanırsınız?",
    difficulty: "Orta",
    likes: 156,
    answers: 19,
    date: "1 ay önce",
  },
]

export default function InterviewQuestions({ company }: { company: string }) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-lg font-semibold mb-4">{company} Mülakat Soruları</h3>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input placeholder="Mülakat sorusu ara..." className="pl-10" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Tümü
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Software Engineer
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Product Manager
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            Data Scientist
          </Badge>
          <Badge variant="outline" className="bg-gray-50 cursor-pointer hover:bg-gray-100">
            UX Designer
          </Badge>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <div>Toplam 1,245 soru</div>
          <div className="flex items-center gap-2">
            <span>Sırala:</span>
            <select className="border rounded-md px-2 py-1 text-sm">
              <option>En Popüler</option>
              <option>En Yeni</option>
              <option>En Çok Cevaplanan</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {interviewQuestions.map((question) => (
          <div key={question.id} className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-100">
                {question.position}
              </Badge>
              <div className="text-sm text-gray-500">{question.date}</div>
            </div>

            <h4 className="text-lg font-medium mb-2">{question.question}</h4>

            <div className="flex items-center gap-4 mb-3">
              <Badge
                variant={
                  question.difficulty === "Kolay"
                    ? "outline"
                    : question.difficulty === "Orta"
                      ? "secondary"
                      : "destructive"
                }
                className={
                  question.difficulty === "Kolay"
                    ? "bg-green-50 text-green-600 border-green-100"
                    : question.difficulty === "Orta"
                      ? "bg-yellow-50 text-yellow-600 border-yellow-100"
                      : "bg-red-50 text-red-600 border-red-100"
                }
              >
                {question.difficulty}
              </Badge>
            </div>

            <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
              <Button variant="ghost" size="sm" className="text-gray-600">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{question.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{question.answers} Cevap</span>
              </Button>
              <Button variant="outline" size="sm" className="ml-auto">
                Cevapla
              </Button>
            </div>
          </div>
        ))}

        <div className="flex justify-center">
          <Button variant="outline">Daha Fazla Soru Göster</Button>
        </div>
      </div>
    </div>
  )
}
