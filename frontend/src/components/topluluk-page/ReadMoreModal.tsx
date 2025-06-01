// components/topluluk-page/CommentModal.tsx
'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { CommunityPostType } from "@/models/CommunityPost"
import { useState, useEffect } from "react"

interface Props {
  open: boolean
  onClose: () => void
  post: CommunityPostType
}

export default function CommentModal({ open, onClose, post }: Props) {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<CommunityPostComment[]>([])

  useEffect(() => {
    if (open) {
      fetch(`/api/forum/comments?post_id=${post.id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }
  }, [open, post.id])

  const handleSubmit = async () => {
    if (!comment.trim()) return
    const res = await fetch('/api/forum/comments', {
      method: 'POST',
      body: JSON.stringify({ post_id: post.id, content: comment }),
    })

    if (res.ok) {
      const newComment = await res.json()
      setComments(prev => [...prev, newComment])
      setComment('')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{post.title}</DialogTitle>
        </DialogHeader>

        <div className="text-sm text-gray-700 mb-4">{post.content}</div>

        <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
          {comments.map((c: any) => (
            <div key={c.id} className="border p-2 rounded text-sm">
              {c.content}
            </div>
          ))}
        </div>

        <textarea
          className="w-full mt-4 border rounded p-2 text-sm"
          rows={3}
          placeholder="Yorumunuzu yazın..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <DialogFooter>
          <button
            className="bg-primary text-white py-1 px-4 rounded"
            onClick={handleSubmit}
          >
            Gönder
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
