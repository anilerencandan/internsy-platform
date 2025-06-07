"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { CommunityPostType } from "@/models/CommunityPost"
import { useState, useEffect } from "react"
import { MoreHorizontal, Flag, ChevronDown, Send, User, ThumbsUp, MessageSquare, Share2, X } from "lucide-react"

interface CommunityPostComment {
  id: string
  content: string
  created_at: string
  user_name?: string
  likes_count?: number
  is_liked?: boolean
  replies?: CommunityPostComment[]
}

interface Props {
  open: boolean
  onClose: () => void
  post: CommunityPostType
  commented: () => void
}

export default function CommentModal({ open, onClose, post, commented }: Props) {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<CommunityPostComment[]>([])
  const [sortBy, setSortBy] = useState<"newest" | "popular">("newest")
  const [showAllComments, setShowAllComments] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyText, setReplyText] = useState("")

  useEffect(() => {
    if (open) {
      fetch(`/api/forum/comments?post_id=${post.id}`)
        .then((res) => res.json())
        .then((data) => setComments(data))
    }
  }, [open, post.id])

  const handleSubmit = async () => {
    if (!comment.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/forum/comments", {
        method: "POST",
        body: JSON.stringify({ post_id: post.id, content: comment }),
      })

      if (res.ok) {
        const newComment = await res.json()
        setComments((prev) => [...prev, newComment])
        setComment("")
        commented()
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReply = async (commentId: string) => {
    if (!replyText.trim()) return

    try {
      const res = await fetch("/api/forum/comments", {
        method: "POST",
        body: JSON.stringify({
          post_id: post.id,
          content: replyText,
          parent_id: commentId,
        }),
      })

      if (res.ok) {
        const newReply = await res.json()
        setComments((prev) =>
          prev.map((c) => (c.id === commentId ? { ...c, replies: [...(c.replies || []), newReply] } : c)),
        )
        setReplyText("")
        setReplyingTo(null)
      }
    } catch (error) {
      console.error("Reply error:", error)
    }
  }

  const handleLikeComment = async (commentId: string) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === commentId
          ? { ...c, is_liked: !c.is_liked, likes_count: (c.likes_count || 0) + (c.is_liked ? -1 : 1) }
          : c,
      ),
    )
  }

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.likes_count || 0) - (a.likes_count || 0)
    }
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const displayedComments = showAllComments ? sortedComments : sortedComments.slice(0, 5)
  const formattedDate = new Date().toLocaleString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "long",
  })

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden bg-[#18191a] border-0 shadow-2xl text-gray-200">
        {/* Fixed Header with Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#18191a] border-b border-gray-700">
          <h3 className="text-lg font-semibold text-gray-100">BGY : Stonks</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-full hover:bg-gray-700 text-gray-400"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 140px)" }}>
          {/* Post Header */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border border-gray-700">
                <AvatarFallback className="bg-gray-800 text-gray-300">
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-100">{post.title || "BGY : Stonks"}</h2>
                    <p className="text-sm text-gray-400">
                      Anonim · {formattedDate} · <span className="text-gray-500">🌐</span>
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 rounded-full hover:bg-gray-700 text-gray-400"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="mt-3 text-gray-100 whitespace-pre-line">{post.content}</div>
          </div>

          {/* Reactions Summary */}
          <div className="px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-1">
              <div className="flex">
                <div className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center">
                  <ThumbsUp className="h-3 w-3 text-white" />
                </div>
                <div className="bg-red-500 rounded-full h-5 w-5 flex items-center justify-center -ml-1">
                  <span className="text-white text-xs">❤️</span>
                </div>
              </div>
              <span className="text-sm text-gray-400">33</span>
            </div>
            <div className="text-sm text-gray-400">{comments.length} yorum</div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between px-4 py-1 border-b border-gray-700">
            <Button variant="ghost" className="flex-1 h-10 text-gray-300 hover:bg-gray-800 rounded-md">
              <ThumbsUp className="h-5 w-5 mr-2" />
              Beğen
            </Button>
            <Button variant="ghost" className="flex-1 h-10 text-gray-300 hover:bg-gray-800 rounded-md">
              <MessageSquare className="h-5 w-5 mr-2" />
              Yorum Yap
            </Button>
            <Button variant="ghost" className="flex-1 h-10 text-gray-300 hover:bg-gray-800 rounded-md">
              <Share2 className="h-5 w-5 mr-2" />
              Gönder
            </Button>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-300">Yorumlar</span>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortBy("newest")}
                className={`h-8 px-3 text-xs rounded-md ${
                  sortBy === "newest" ? "text-blue-400" : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                En alakalı
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSortBy("popular")}
                className={`h-8 px-3 text-xs rounded-md ${
                  sortBy === "popular" ? "text-blue-400" : "text-gray-400 hover:bg-gray-800"
                }`}
              >
                En yeni
              </Button>
            </div>
          </div>

          {/* Comments List */}
          <div className="px-4 py-2">
            <div className="space-y-4">
              {displayedComments.map((c) => (
                <div key={c.id} className="group">
                  {/* Main Comment */}
                  <div className="flex gap-3">
                    <Avatar className="h-10 w-10 mt-1">
                      <AvatarFallback className="bg-gray-800 text-gray-300">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="bg-gray-800 rounded-lg px-3 py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="font-semibold text-sm text-gray-200">{c.user_name || "Anonim"}</span>
                            {c.user_name && (
                              <span className="ml-2 text-xs px-1 bg-gray-700 text-gray-300 rounded">
                                Yıldız katkıda bulunan
                              </span>
                            )}
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gray-700 rounded-full"
                              >
                                <MoreHorizontal className="h-4 w-4 text-gray-400" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700 text-gray-200">
                              <DropdownMenuItem className="text-red-400 hover:bg-gray-700 focus:bg-gray-700">
                                <Flag className="h-4 w-4 mr-2" />
                                Şikayet Et
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        <p className="text-sm text-gray-200 mt-1">{c.content}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 mt-1 ml-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLikeComment(c.id)}
                          className={`h-6 px-2 text-xs font-medium rounded hover:bg-transparent ${
                            c.is_liked ? "text-blue-400" : "text-gray-400"
                          }`}
                        >
                          Beğen
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setReplyingTo(replyingTo === c.id ? null : c.id)}
                          className="h-6 px-2 text-xs font-medium text-gray-400 hover:bg-transparent"
                        >
                          Yanıtla
                        </Button>

                        <span className="text-xs text-gray-500">23s</span>
                      </div>

                      {/* Reply Input */}
                      {replyingTo === c.id && (
                        <div className="mt-2 flex gap-2">
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarFallback className="bg-gray-800 text-gray-300">
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 flex gap-2">
                            <Textarea
                              placeholder="Yanıtınızı yazın..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              className="min-h-[60px] text-sm resize-none bg-gray-800 border-gray-700 text-gray-200 focus:border-gray-600 rounded-lg"
                            />
                            <div className="flex flex-col gap-1">
                              <Button
                                size="sm"
                                onClick={() => handleReply(c.id)}
                                disabled={!replyText.trim()}
                                className="h-8 w-8 p-0 rounded-full bg-blue-600 hover:bg-blue-700"
                              >
                                <Send className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Replies */}
                      {c.replies && c.replies.length > 0 && (
                        <div className="mt-2 ml-6 space-y-3">
                          {c.replies.map((reply) => (
                            <div key={reply.id} className="flex gap-2 group/reply">
                              <Avatar className="h-8 w-8 mt-1">
                                <AvatarFallback className="bg-gray-800 text-gray-300">
                                  <User className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="bg-gray-800 rounded-lg px-3 py-2">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <span className="font-semibold text-sm text-gray-200">
                                        {reply.user_name || "Anonim"}
                                      </span>
                                      {reply.user_name && (
                                        <span className="ml-2 text-xs px-1 bg-gray-700 text-gray-300 rounded">
                                          En çok katkıda bulunan
                                        </span>
                                      )}
                                    </div>
                                    <DropdownMenu>
                                      <DropdownMenuTrigger asChild>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="h-5 w-5 p-0 opacity-0 group-hover/reply:opacity-100 transition-all duration-200 hover:bg-gray-700 rounded-full"
                                        >
                                          <MoreHorizontal className="h-3 w-3 text-gray-400" />
                                        </Button>
                                      </DropdownMenuTrigger>
                                      <DropdownMenuContent
                                        align="end"
                                        className="bg-gray-800 border-gray-700 text-gray-200"
                                      >
                                        <DropdownMenuItem className="text-red-400 hover:bg-gray-700 focus:bg-gray-700">
                                          <Flag className="h-3 w-3 mr-2" />
                                          Şikayet Et
                                        </DropdownMenuItem>
                                      </DropdownMenuContent>
                                    </DropdownMenu>
                                  </div>
                                  <p className="text-sm text-gray-200 mt-1">{reply.content}</p>
                                </div>

                                {/* Reply Action Buttons */}
                                <div className="flex items-center gap-3 mt-1 ml-1">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 px-2 text-xs font-medium rounded hover:bg-transparent text-gray-400"
                                  >
                                    Beğen
                                  </Button>

                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="h-6 px-2 text-xs font-medium text-gray-400 hover:bg-transparent"
                                  >
                                    Yanıtla
                                  </Button>

                                  <span className="text-xs text-gray-500">13s</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {comments.length > 5 && !showAllComments && (
                <Button
                  variant="ghost"
                  onClick={() => setShowAllComments(true)}
                  className="w-full h-10 text-blue-400 hover:bg-gray-800 rounded-md"
                >
                  <ChevronDown className="h-4 w-4 mr-2" />
                  <span className="font-medium">Daha fazla yorum görüntüle</span>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Fixed Comment Input */}
        <div className="sticky bottom-0 p-4 border-t border-gray-700 bg-[#18191a]">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 mt-1">
              <AvatarFallback className="bg-gray-800 text-gray-300">
                <User className="h-5 w-5" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 relative">
              <Textarea
                placeholder="Wex Flex adıyla cevap ver..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[60px] resize-none bg-gray-800 border-gray-700 text-gray-200 focus:border-gray-600 rounded-lg pr-12"
              />
              <Button
                onClick={handleSubmit}
                disabled={!comment.trim() || isSubmitting}
                className="absolute right-2 bottom-2 h-8 w-8 p-0 rounded-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
