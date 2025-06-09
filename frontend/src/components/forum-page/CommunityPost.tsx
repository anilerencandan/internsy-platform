"use client"

import { Heart, MessageCircle, User2 } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"
import { FaShare } from "react-icons/fa"
import { Button } from "../ui/button"
import type { CommunityPostType } from "@/models/CommunityPost"
import { AnonimAvatar } from "../AnonimAvatar"
import ReadMoreModal from "../topluluk-page/ReadMoreModal"
import { getShortTimeAgo, stringToPastelColor } from "@/utils/formatters"
import PostOptions from "./PostOptions"
import Link from "next/link"

export default function CommunityPost({ post }: { post: CommunityPostType }) {
  const [open, setOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.like_count || 0)
  const [commentCount, setCommentCount] = useState(post.comment_count || 0)
  const kelimeler = post.content.trim().split(/\s+/)
  const fazlaKelime = kelimeler.length > 10
  const zaman = getShortTimeAgo(new Date(post.created_at))
  const [following, setFollowing] = useState(false)

  const [showPopup, setShowPopup] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const shareUrl = `https://internsy.co/forum/${post.id}`

  const handleOpen = () => setOpen(true)

  const toggleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const res = await fetch("/api/forum/like", {
      method: "POST",
      body: JSON.stringify({ post_id: post.id }),
    })

    const result = await res.json()
    if (result.liked) {
      setLiked(true)
      setLikeCount((prev) => prev + 1)
    } else {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
    }
  }

  useEffect(() => {
    const fetchLikeCount = async () => {
      const res = await fetch(`/api/forum/like?post_id=${post.id}`)
      const result = await res.json()

      if (result.like_count !== undefined) {
        setLikeCount(result.like_count)
      }
    }

    fetchLikeCount()
  }, [post.id])

  useEffect(() => {
    const fetchLikedStatus = async () => {
      const res = await fetch(`/api/forum/is-liked?post_id=${post.id}`)
      const result = await res.json()
      if (result.liked !== undefined) {
        setLiked(result.liked)
      }
    }

    fetchLikedStatus()
  }, [post.id])

  useEffect(() => {
    const fetchCommentCount = async () => {
      const res = await fetch(`/api/forum/comments/count?post_id=${post.id}`)
      const data = await res.json()

      console.log(data)
      if (data.comment_count !== undefined) {
        setCommentCount(data.comment_count)
      }
    }

    fetchCommentCount()
  }, [post.id])

  useEffect(() => {
    const checkFollowStatus = async () => {
      const res = await fetch(`/api/forum/is-following?category_id=${post.category_id}`)
      const result = await res.json()
      if (result.following !== undefined) setFollowing(result.following)
    }

    checkFollowStatus()
  }, [post.category_id])

  const toggleFollow = async () => {
    const res = await fetch("/api/forum/follow-category", {
      method: "POST",
      body: JSON.stringify({ category_id: post.category_id }),
    })
    const result = await res.json()
    if (result.following !== undefined) setFollowing(result.following)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      setShowPopup(false)
    }, 2000)
  }

  const handleShareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setShowPopup(!showPopup)
  }

  const handleReport = () => {
    alert(`Şikayet edildi: ${post.id}`)
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className="flex flex-col justify-center border-b-[1px] border-b-gray-300 hover:bg-gray-50 cursor-pointer"
      >
        <div className="flex flex-col gap-y-3 p-3 w-full sm:p-4 sm:gap-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Discover new communities</span>
            <div className="flex items-center gap-x-2">
              <span className="text-sm text-gray-500">{zaman}</span>
              <span className="hover:bg-gray-100 p-2 rounded-full">
                <button onClick={(e) => e.stopPropagation()}>
                  <PostOptions onReport={() => handleReport} />
                </button>
              </span>
            </div>
          </div>

          <div className="flex items-start gap-x-3">
            <span className="relative w-12 h-12 rounded-full shrink-0">
              <AnonimAvatar color={stringToPastelColor(post.user_id)} icon={<User2 />} />
            </span>
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <Link
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                    href={"http://localhost:3000/topluluk/design-systems"}
                  >
                    <h3 className="text-base sm:text-lg font-semibold hover:text-primary text-black">{post.communities?.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500">Account Executive</p>
                </div>
                <Button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFollow()
                  }}
                  className={`${following ? `bg-[#f2f4f5] text-black` : "bg-primary text-white"} rounded-[8px] text-xs font-semibold py-1 px-3 hover:text-white`}
                >
                  {following ? "Following" : "Follow Bowl"}
                </Button>
              </div>

              <p className="text-xs sm:text-sm text-gray-800 mb-3 sm:mb-4">
                {kelimeler.slice(0, 10).join(" ")}
                {fazlaKelime && (
                  <>
                    {" ... "}
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        setOpen(true)
                      }}
                      className="text-blue-600 cursor-pointer hover:underline"
                    >
                      read more
                    </span>
                  </>
                )}
              </p>

              <div className="flex items-center gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-600">
                <button onClick={toggleLike} className="flex items-center gap-x-2 hover:text-primary transition-colors">
                  <Heart
                    className={`${liked ? "fill-primary text-primary" : ""} hover:text-primary transition-colors`}
                    size={18}
                  />
                  <span>Beğen</span>
                </button>

                <div className="flex items-center gap-x-2">
                  <MessageCircle size={18} />
                  <span>{commentCount} Yorum</span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(true)
                  }}
                  className="flex items-center gap-x-2 hover:text-primary transition-colors"
                >
                  <FaShare size={16} />
                  <span>Paylaş</span>
                </button>

                <div className="ml-auto flex items-center gap-x-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px] sm:text-xs">👍</span>
                  </div>
                  <span className="text-sm font-medium">{likeCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto text-center relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Bağlantıyı Paylaş</h2>

            <p className="text-sm text-gray-600 break-all border px-4 py-2 rounded bg-gray-50">{shareUrl}</p>

            <button
              onClick={handleCopy}
              className="mt-4 text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
            >
              {copied ? "Kopyalandı ✅" : "Linki Kopyala"}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <ReadMoreModal
        open={open}
        onClose={() => setOpen(false)}
        commented={() => setCommentCount((prev) => prev + 1)}
        post={post}
      />
    </>
  )
}
