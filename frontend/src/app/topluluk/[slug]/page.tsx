"use client"

// Slugify utility for Turkish-friendly URLs
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Users,
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  UserPlus,
  UserCheck,
  Send,
  ImageIcon,
  LinkIcon,
} from "lucide-react"

// Mock data for communities (same as before)
const allCommunities = [
  {
    id: 1,
    name: "Design Systems",
    description: "A community for designers and developers working on design systems and component libraries.",
    memberCount: 2847,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-blue-50 border-blue-200",
    category: "Design",
    type: "regular",
  },
  {
    id: 2,
    name: "Frontend Developers",
    description: "Share knowledge, tips, and best practices for modern frontend development.",
    memberCount: 5632,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-green-50 border-green-200",
    category: "Development",
    type: "regular",
  },
  {
    id: 9,
    name: "ODTÜ Yazılım",
    description: "Orta Doğu Teknik Üniversitesi yazılım geliştirme ve teknoloji topluluğu.",
    memberCount: 2156,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-green-50 border-green-200",
    university: "ODTÜ",
  },
  {
    id: 11,
    name: "Hacettepe AI",
    description: "Hacettepe Üniversitesi yapay zeka ve makine öğrenmesi araştırma topluluğu.",
    memberCount: 934,
    thumbnail: "/placeholder.svg?height=80&width=80",
    color: "bg-purple-50 border-purple-200",
    university: "Hacettepe",
  },
  // Add more communities as needed
]

// Mock data for posts
const mockPosts = [
  {
    id: 1,
    author: {
      name: "Ahmet Yılmaz",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Senior Frontend Developer",
    },
    content:
      "React 18'in yeni özelliklerini deneyimleyen var mı? Concurrent Features gerçekten performansı artırıyor mu?",
    timestamp: "2 saat önce",
    likes: 24,
    comments: 8,
    isLiked: false,
    images: [],
  },
  {
    id: 2,
    author: {
      name: "Zeynep Kaya",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "UX Designer",
    },
    content: "Design system oluştururken hangi araçları kullanıyorsunuz? Figma + Storybook kombinasyonu nasıl?",
    timestamp: "4 saat önce",
    likes: 31,
    comments: 12,
    isLiked: true,
    images: ["/placeholder.svg?height=200&width=300"],
  },
  {
    id: 3,
    author: {
      name: "Mehmet Demir",
      avatar: "/placeholder.svg?height=40&width=40",
      title: "Full Stack Developer",
    },
    content: "Next.js 14'ün App Router'ı ile ilgili detaylı bir tutorial hazırladım. İlgilenenlere DM'den ulaşabilir.",
    timestamp: "1 gün önce",
    likes: 45,
    comments: 15,
    isLiked: false,
    images: [],
  },
]

// Post Component
function PostCard({ post }: { post: any }) {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likesCount, setLikesCount] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
  }

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.title}</p>
              <p className="text-xs text-gray-400">{post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm mb-4 leading-relaxed">{post.content}</p>

        {post.images.length > 0 && (
          <div className="mb-4">
            <img
              src={post.images[0] || "/placeholder.svg"}
              alt="Post image"
              className="rounded-lg w-full max-h-64 object-cover"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`gap-2 ${isLiked ? "text-red-500" : "text-gray-500"}`}
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
              {likesCount}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2 text-gray-500">
              <MessageCircle className="h-4 w-4" />
              {post.comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Create Post Component
function CreatePost({ onPost }: { onPost: (content: string) => void }) {
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    if (content.trim()) {
      onPost(content)
      setContent("")
    }
  }

  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="You" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="Topluluğa bir şeyler paylaş..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[80px] resize-none border-0 p-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <ImageIcon className="h-4 w-4 mr-1" />
              Fotoğraf
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <LinkIcon className="h-4 w-4 mr-1" />
              Link
            </Button>
          </div>
          <Button onClick={handleSubmit} disabled={!content.trim()} className="gap-2">
            <Send className="h-4 w-4" />
            Paylaş
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CommunityDetailPage() {
  const params = useParams()
  const router = useRouter()
  const communitySlug = params.slug as string

  const [community, setCommunity] = useState<any>(null)
  const [isFollowing, setIsFollowing] = useState(false)
  const [posts, setPosts] = useState(mockPosts)

  useEffect(() => {
    const foundCommunity = allCommunities.find((c) =>
      slugify(c.name) === communitySlug
  )
  if (foundCommunity) {
    setCommunity(foundCommunity)
  }
}, [communitySlug])

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    if (community) {
      setCommunity({
        ...community,
        memberCount: isFollowing ? community.memberCount - 1 : community.memberCount + 1,
      })
    }
  }

  const handleNewPost = (content: string) => {
    const newPost = {
      id: posts.length + 1,
      author: {
        name: "Sen",
        avatar: "/placeholder.svg?height=40&width=40",
        title: "Topluluk Üyesi",
      },
      content,
      timestamp: "Şimdi",
      likes: 0,
      comments: 0,
      isLiked: false,
      images: [],
    }
    setPosts([newPost, ...posts])
  }

  if (!community) {
    return (
      <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Topluluk bulunamadı</h2>
          <Button onClick={() => router.back()} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <Button onClick={() => router.back()} variant="ghost" className="mb-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Topluluklar
          </Button>
        </div>

        {/* Community Info */}
        <Card className={`mb-8 ${community.color}`}>
          <CardHeader>
            <div className="flex items-start gap-4">
              <Avatar className="h-20 w-20 rounded-xl">
                <AvatarImage src={community.thumbnail || "/placeholder.svg"} alt={community.name} />
                <AvatarFallback className="rounded-xl bg-white text-gray-600 font-semibold text-lg">
                  {community.name
                    .split(" ")
                    .map((word: string) => word[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{community.name}</CardTitle>
                    <div className="flex gap-2 mb-2">
                      {community.category && (
                        <Badge variant="outline" className="text-xs">
                          {community.category}
                        </Badge>
                      )}
                      {community.university && (
                        <Badge variant="outline" className="text-xs">
                          {community.university}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button onClick={handleFollow} variant={isFollowing ? "outline" : "default"} className="gap-2">
                    {isFollowing ? (
                      <>
                        <UserCheck className="w-4 h-4" />
                        Takip Ediliyor
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-4 h-4" />
                        Takip Et
                      </>
                    )}
                  </Button>
                </div>

                <CardDescription className="text-gray-700 mb-4 leading-relaxed">
                  {community.description}
                </CardDescription>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{community.memberCount.toLocaleString()}</span>
                    <span>üye</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Aktif topluluk</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <CreatePost onPost={handleNewPost} />

            {/* Posts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Son Paylaşımlar</h3>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Topluluk Bilgileri</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Üye Sayısı</h4>
                  <p className="text-2xl font-bold text-gray-900">{community.memberCount.toLocaleString()}</p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Kategori</h4>
                  <Badge variant="secondary">{community.category || community.university}</Badge>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Topluluk Kuralları</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Saygılı ve yapıcı olun</li>
                    <li>• Spam yapmayın</li>
                    <li>• Konuyla ilgili paylaşım yapın</li>
                    <li>• Diğer üyelere yardımcı olun</li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-sm text-gray-900 mb-2">Moderatörler</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Moderator" />
                        <AvatarFallback className="text-xs">AY</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">Ahmet Yılmaz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Moderator" />
                        <AvatarFallback className="text-xs">ZK</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">Zeynep Kaya</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
