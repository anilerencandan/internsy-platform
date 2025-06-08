"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { CommunityPostType } from "@/models/CommunityPost"
import { useState, useEffect } from "react"
import { MoreHorizontal, Flag, ChevronDown, User, Heart, MessageCircle, Share, X, Menu } from "lucide-react"

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
  const [sortBy, setSortBy] = useState<"newest" | "popular">("popular")
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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden bg-white border shadow-lg text-gray-900 rounded-lg">
        {/* Header */}
        <div className="relative p-6">
          <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-primary">
            Frontend Developers
          </h1>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 140px)" }}>
          {/* Post */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start gap-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold text-gray-900">{post.title}</h2>
                    <p className="text-sm text-gray-500">Anonim</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">1d</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded hover:bg-gray-100">
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-900 leading-relaxed whitespace-pre-line">{post.content}</p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                >
                  <Heart className="h-5 w-5" />
                  <span className="text-sm">Beğen</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm">{comments.length} Yorum</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                >
                  <Share className="h-5 w-5" />
                  <span className="text-sm">Paylaş</span>
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center">
                  <span className="text-white text-xs">6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Input */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gray-100 text-gray-600">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  placeholder="Bir yorum yazın..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[80px] resize-none border border-gray-300 rounded-lg p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <div className="flex items-center justify-between mt-3">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-0">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 hover:bg-gray-50">
                      İptal
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={!comment.trim() || isSubmitting}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Yorum"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex items-center justify-end px-6 py-3 border-b border-gray-100">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-700 hover:bg-gray-100">
                  <Menu className="h-4 w-4" />
                  <span className="text-sm font-medium">{sortBy === "popular" ? "Popüler" : "En Yeni"}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => setSortBy("popular")} className="text-sm">
                  Popüler
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("newest")} className="text-sm">
                  En Yeni
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Comments */}
          <div className="px-6 py-4">
            <div className="space-y-6">
              {displayedComments.map((c) => (
                <div key={c.id} className="group">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gray-100 text-gray-600">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">{c.user_name || "Claims Specialist 1"}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">1d</span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity rounded hover:bg-gray-200"
                                >
                                  <MoreHorizontal className="h-4 w-4 text-gray-500" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem className="text-red-600">
                                  <Flag className="h-4 w-4 mr-2" />
                                  Şikayet Et
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <p className="text-gray-900 leading-relaxed">{c.content}</p>
                      </div>

                      {/* Comment Actions */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-6">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLikeComment(c.id)}
                            className={`flex items-center gap-2 p-0 ${
                              c.is_liked ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${c.is_liked ? "fill-current" : ""}`} />
                            <span className="text-sm">Beğen</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setReplyingTo(replyingTo === c.id ? null : c.id)}
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">Yanıtla</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                          >
                            <Share className="h-4 w-4" />
                            <span className="text-sm">Paylaş</span>
                          </Button>
                        </div>
                        {c.likes_count && c.likes_count > 0 && (
                          <div className="flex items-center gap-1">
                            <div className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center">
                              <span className="text-white text-xs">{c.likes_count}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Reply Input */}
                      {replyingTo === c.id && (
                        <div className="mt-4 flex gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-gray-100 text-gray-600">
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Textarea
                              placeholder="Yanıtınızı yazın..."
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                              className="min-h-[60px] resize-none border border-gray-300 rounded-lg p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <div className="flex justify-end gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  setReplyingTo(null)
                                  setReplyText("")
                                }}
                                className="text-gray-600 border-gray-300 hover:bg-gray-50"
                              >
                                İptal
                              </Button>
                              <Button
                                onClick={() => handleReply(c.id)}
                                disabled={!replyText.trim()}
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                              >
                                Yanıtla
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Replies */}
                      {c.replies && c.replies.length > 0 && (
                        <div className="mt-4 space-y-4">
                          {c.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-3 group/reply">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-gray-100 text-gray-600">
                                  <User className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-sm text-gray-900">
                                      {reply.user_name || "Nursing Instructor 1"}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs text-gray-500">1d</span>
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-5 w-5 p-0 opacity-0 group-hover/reply:opacity-100 transition-opacity rounded hover:bg-gray-200"
                                          >
                                            <MoreHorizontal className="h-3 w-3 text-gray-500" />
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuItem className="text-red-600">
                                            <Flag className="h-3 w-3 mr-2" />
                                            Şikayet Et
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-900 leading-relaxed">{reply.content}</p>
                                </div>

                                <div className="flex items-center gap-6 mt-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                                  >
                                    <Heart className="h-3 w-3" />
                                    <span className="text-xs">Beğen</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                                  >
                                    <MessageCircle className="h-3 w-3" />
                                    <span className="text-xs">Yanıtla</span>
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 p-0"
                                  >
                                    <Share className="h-3 w-3" />
                                    <span className="text-xs">Paylaş</span>
                                  </Button>
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
                  className="w-full h-10 text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  Daha fazla yorum görüntüle
                </Button>
              )}
            </div>
          </div>

          {/* Other posts section */}
          <div className="px-6 py-4 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Beğenebileceğiniz diğer gönderiler</h3>
            <div className="flex items-start gap-3 p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  <User className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">DENEME TOPLULUK</h4>
                    <p className="text-sm text-gray-500">LPN</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">3w</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded hover:bg-gray-100">
                      <MoreHorizontal className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                  I'm the only Black woman on my unit, and it's been isolating in ways I didn't...
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
