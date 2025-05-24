import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bookmark, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function BlogPostPage() {
  return (
    <div className="page-content mx-auto bg-white sm:px-4">

      {/* Back Navigation */}
      <div className="p-4 border-b">
        <Link href="/kariyer-rehberi/blog" className="flex items-center gap-2 text-blue-600 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Geri dön</span>
        </Link>
      </div>

      {/* Article Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">Teknoloji</Badge>
          <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">Yapay Zeka</Badge>
          <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-200">Kişisel Gelişim</Badge>
        </div>

        <h1 className="text-3xl font-bold mb-4">Teknolojinin Gelişmesi Ersin Korkutu Etkileyecek mi?</h1>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
              <AvatarFallback>OE</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Onur Er</div>
              <div className="text-sm text-gray-500">May 15, 2025 • 8 dakika okuma süresi</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="p-6">
        <div className="prose prose-blue max-w-none">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="AI Technology"
            width={800}
            height={400}
            className="w-full rounded-lg mb-6 object-cover"
          />

          <p className="text-lg font-medium mb-6">
            Artificial Intelligence is rapidly transforming every aspect of the technology industry, creating new
            opportunities for innovation and growth while also presenting unique challenges.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Current State of AI</h2>

          <p>
            The technology industry is experiencing a significant transformation driven by advancements in artificial
            intelligence. From machine learning algorithms that power recommendation systems to natural language
            processing that enables conversational interfaces, AI is becoming increasingly integrated into our digital
            experiences.
          </p>

          <p>
            Companies across various sectors are investing heavily in AI research and development, recognizing its
            potential to drive efficiency, create new products, and solve complex problems. This investment is not
            limited to tech giants; startups and traditional businesses alike are exploring ways to leverage AI
            capabilities.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Trends Shaping the Future</h2>

          <p>
            Several trends are emerging that will likely define the future relationship between AI and the tech
            industry:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              <strong>Democratization of AI:</strong> Tools and platforms that make AI capabilities accessible to
              non-experts are proliferating, enabling more developers and businesses to incorporate AI into their
              products.
            </li>
            <li className="mb-2">
              <strong>Specialized AI Hardware:</strong> The development of chips and other hardware specifically
              designed for AI workloads is accelerating, improving performance and energy efficiency.
            </li>
            <li className="mb-2">
              <strong>Ethical AI Development:</strong> As AI systems become more powerful and pervasive, there is
              growing emphasis on ensuring they are developed and deployed responsibly.
            </li>
            <li className="mb-2">
              <strong>AI-Human Collaboration:</strong> Rather than replacing humans, many AI applications are being
              designed to augment human capabilities and enable new forms of collaboration.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Challenges and Considerations</h2>

          <p>
            Despite the promising outlook, the integration of AI into the tech industry is not without challenges. Data
            privacy concerns, algorithmic bias, and the potential for job displacement are all issues that must be
            addressed as AI continues to evolve.
          </p>

          <p>
            Furthermore, the rapid pace of AI development raises questions about governance and regulation. Finding the
            right balance between innovation and oversight will be crucial for ensuring that AI benefits society as a
            whole.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

          <p>
            The future of AI in the tech industry is both exciting and complex. As these technologies continue to
            advance, they will undoubtedly reshape how we interact with technology and with each other. By staying
            informed about emerging trends and engaging with the ethical dimensions of AI, we can help ensure that this
            future is one that aligns with our values and aspirations.
          </p>
        </div>
      </article>

      {/* Engagement Section */}
      <div className="p-6 border-t border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2 px-4 py-2 ">
              <ThumbsUp className="w-4 h-4" />
              <span>Yardımcı Oldu (87)</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="p-6 border-b bg-gray-50">
        <div className="flex items-start gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Author" />
            <AvatarFallback>OE</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg">Onur Er</h3>
            <p className="text-sm text-gray-600 mb-2">mal • 128 paylaşım</p>
            <p className="text-sm mb-3">
              yalandan kurucu
            </p>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span>Yorumlar (24)</span>
        </h3>

        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Yorum yaz..."
              className="w-full p-3 pr-24 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1">
              Paylaş
            </Button>
          </div>
        </div>

        {/* Comment List */}
        <div className="space-y-6">
          {[1, 2, 3].map((comment) => (
            <CommentCard key={comment} />
          ))}

          <Button variant="outline" className="w-full px-4 py-3">
            Daha Fazla Yorum Görüntüle
          </Button>
        </div>
      </div>

      {/* Related Articles */}
      <div className="p-6 border-t">
        <h3 className="text-xl font-bold mb-4">Diğer Yazıları Keşfet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((article) => (
            <RelatedArticleCard key={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CommentCard() {
  return (
    <div className="flex gap-3">
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Commenter" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <div className="font-medium">Andıç</div>
            <div className="text-xs text-gray-500">2 Gün önce</div>
          </div>
          <p className="text-sm">
          Daha kötüsünü görmedim.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
          <button className="hover:text-blue-600">Beğen (12)</button>
          <button className="hover:text-blue-600">Yanıtla</button>
        </div>
      </div>
    </div>
  )
}

function RelatedArticleCard() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src="/placeholder.svg?height=150&width=300"
          alt="Related Article"
          width={300}
          height={150}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h4 className="font-bold mb-1 line-clamp-2">Teknolojinin Gelişmesi Ersin Korkutu Etkileyecek mi?</h4>
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span>10 Mayıs, 2025</span>
            <Separator orientation="vertical" className="mx-2 h-3" />
            <span>6 dakika okuma süresi</span>
          </div>
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Author" />
              <AvatarFallback>OE</AvatarFallback>
            </Avatar>
            <span className="text-xs">Onur Er</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}