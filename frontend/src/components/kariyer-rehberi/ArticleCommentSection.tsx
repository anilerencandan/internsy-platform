import React from 'react'
import { Button } from '../ui/button'
import { MessageCircle, ThumbsUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import CommentCard from './CommentCard'
import RelatedArticleCard from './RelatedArticleCard'
import { Blog } from '@/models/Blogs'

interface Props {
    blog: Blog
}

export default function ArticleCommentSection() {
  return (
    <>
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
    </>

)
}
