'use client'
import { BlogCommentsDTO } from "@/models/Blogs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getShortTimeAgo } from "@/utils/formatters";

interface Props {
  comment: BlogCommentsDTO 
  liked: boolean
  onLike?: (commentId: string) => void;
  onReplyToggle?: (commentId: string) => void;
  onReplySubmit?: (commentId: string, content: string) => void;
  showReplyInput?: boolean;
}

import React, { useState } from 'react';

export default function CommentCard({
  comment,
  onLike,
  onReplyToggle,
  onReplySubmit,
  showReplyInput,
  liked
}: Props) {
  const zaman = getShortTimeAgo(new Date(comment.created_at));
  const [replyContent, setReplyContent] = useState("");

  const handleReplySubmit = () => {
    if (replyContent.trim() && onReplySubmit) {
      onReplySubmit(comment.id, replyContent.trim());
      setReplyContent("");
    }
  };

  console.log("baturayin memesi", comment)

  return (
    <div className="flex gap-3">
      <Avatar className="w-10 h-10">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Commenter" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between mb-1">
            <div className="font-medium">{"Anonim Kullanıcı"}</div>
            <div className="text-xs text-gray-500">{zaman}</div>
          </div>
          <p className="text-sm">{comment.comment}</p>
        </div>

        {comment.responses && comment.responses?.length > 0 && (
          <div className="mt-3 ml-4 space-y-2">
            {comment.responses.map((response) => (
              <div key={response.id} className="flex gap-2 items-start">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Yanıtlayan" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 px-3 py-2 rounded-lg text-sm w-full">
                  <div className="font-medium text-gray-700 mb-1">
                    {response.users?.role || "Yanıtlayan"}
                  </div>
                  <div>{response.content}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Beğen ve Yanıtla */}
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
          <button
            className={`hover:text-blue-600 ${liked ? "text-blue-600 font-medium" : ""}`}
            onClick={() => onLike?.(comment.id)}
          >
            Beğen ({comment.like_count ?? 0})
          </button>
          <button
            className="hover:text-blue-600"
            onClick={() => onReplyToggle?.(comment.id)}
          >
            Yanıtla
          </button>
        </div>

        {/* Yanıt inputu */}
        {showReplyInput && (
          <div className="mt-3 ml-4">
            <input
              type="text"
              placeholder="Yanıt yaz..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="w-full border p-2 rounded text-sm mb-2"
            />
            <button
              onClick={handleReplySubmit}
              className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
            >
              Gönder
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
