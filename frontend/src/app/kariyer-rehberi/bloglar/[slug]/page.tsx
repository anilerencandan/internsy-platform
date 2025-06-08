import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bookmark, MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BlogCommentsDTO, BlogDTO } from "@/models/Blogs"
import { htmlToText } from 'html-to-text';
import CommentCard from "@/components/kariyer-rehberi/CommentCard"
import RelatedArticleCard from "@/components/kariyer-rehberi/RelatedArticleCard"
import ArticleCommentSection from "@/components/kariyer-rehberi/ArticleCommentSection"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const  {slug} = params 

  const blogData = await fetch(`http://localhost:3000/api/career-guides?id=${slug}`)
  const blogRaw: BlogDTO = await blogData.json()
  const blog = blogRaw

  console.log("blog:", blog)

 
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

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Author" />
              <AvatarFallback>OE</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{blog.users?.fullname ?? 'Anonim Kullanici'}</div>
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
          {htmlToText(blog.content)}
        </div>
      </article>

      {/* Engagement Section */}
      <ArticleCommentSection guide_id={slug}/>
          </div>
  )
}


