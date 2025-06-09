'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { MessageCircle, ThumbsUp } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import CommentCard from './CommentCard'
import RelatedArticleCard from './RelatedArticleCard'
import { BlogCommentsDTO } from '@/models/Blogs'

interface Props {
  guide_id: string
}

export default function ArticleCommentSection({ guide_id }: Props) {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState<BlogCommentsDTO[]>([]);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [showReplyForCommentId, setShowReplyForCommentId] = useState<string | null>(null);

  // ✅ İlk yüklemede yorumlar ve beğeni bilgilerini çek
  useEffect(() => {
    const fetchInitialData = async () => {
      const [likeRes, commentRes] = await Promise.all([
        fetch(`/api/career-guides/like?guide_id=${guide_id}`),
        fetch(`/api/career-guides/comments?guide_id=${guide_id}`),
      ]);

      const likeData = await likeRes.json();
      const commentData = await commentRes.json();

      if (likeRes.ok) {
        setLiked(likeData.liked);
        setLikeCount(likeData.count ?? 0); // opsiyonel: like count da geliyorsa
      }

      if (commentRes.ok) {
        setComments(commentData);
        setCommentCount(commentData.length);
      }
    };

    fetchInitialData();
  }, [guide_id]);

  // ✅ Yorum gönderme
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    const res = await fetch("/api/career-guides/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ guide_id, comment: newComment }),
    });

    const result = await res.json();

    if (res.ok) {
      setComments((prev) => [...prev, result]);
      setCommentCount((prev) => prev + 1);
      setNewComment("");
    } else {
      alert(result.error || "Yorum eklenirken hata oluştu.");
    }
  };

  // ✅ Beğeni toggle
  const handleLikeToggle = async () => {
    if (loading) return;
    setLoading(true);

    const res = await fetch(`/api/career-guides/like?guide_id=${guide_id}`, {
      method: "POST",
    });

    const result = await res.json();

    if (res.ok) {
      setLiked(result.liked);
      setLikeCount((prev) => result.liked ? prev + 1 : Math.max(prev - 1, 0));
    } else {
      alert(result.error || "Hata oluştu.");
    }

    setLoading(false);
  };

  // POST /api/career-guides/comment/like?comment_id=...

  // comment card icin 
  const handleCommentLike = async (commentId: string) => {
    const res = await fetch(`/api/career-guides/comments/like?comment_id=${commentId}`, {
      method: "POST",
    });

    const result = await res.json();

    if (res.ok) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                liked: result.liked,
                like_count: (comment.like_count || 0) + (result.liked ? 1 : -1),
              }
            : comment
        )
      );
    } else {
      alert(result.error || "Beğeni işlemi başarısız");
    }
  };

const handleReplySubmit = async (commentId: string, content: string) => {
  const res = await fetch(`/api/career-guides/comments/reply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ comment_id: commentId, content: content }),
  });

  const result = await res.json();

  if (res.ok) {
    // 🎯 Yeni yanıtı ilgili yorumun "responses" dizisine ekle
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              responses: comment.responses
                ? [...comment.responses, result]
                : [result],
            }
          : comment
      )
    );

    setShowReplyForCommentId(null);
    setNewComment(""); // veya yanıt inputunu da sıfırlayabilirsin
  } else {
    alert(result.error || "Yanıt eklenemedi");
  }
};
  

  return (
    <>
      {/* Beğeni Butonu */}
      <div className="p-6 border-t border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant={liked ? "default" : "outline"}
              className="flex items-center gap-2 px-4 py-2"
              onClick={handleLikeToggle}
              disabled={loading}
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Yardımcı Oldu ({likeCount})</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Yorum Alanı */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span>Yorumlar ({commentCount})</span>
        </h3>

        <div className="flex items-center gap-3 mb-6">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1 relative">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Yorum yaz..."
              className="w-full p-3 pr-24 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              onClick={handleCommentSubmit}
              disabled={!newComment.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white"
            >
              Paylaş
            </Button>
          </div>
        </div>

        {/* Yorumlar Listesi */}
        <div className="space-y-6">
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            onLike={handleCommentLike}
            onReplyToggle={setShowReplyForCommentId}
            showReplyInput={showReplyForCommentId === comment.id}
            onReplySubmit={handleReplySubmit} liked={liked}          />
        ))}
        </div>
      </div>

      {/* Diğer Yazılar */}
      <div className="p-6 border-t">
        <h3 className="text-xl font-bold mb-4">Diğer Yazıları Keşfet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((article) => (
            <RelatedArticleCard key={article} />
          ))}
        </div>
      </div>
    </>
  );
}
