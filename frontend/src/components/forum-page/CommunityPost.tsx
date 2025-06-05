'use client'

import { Heart, MessageCircle, User2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaShare } from 'react-icons/fa'
import { Button } from '../ui/button'
import { CommunityPostType } from '@/models/CommunityPost'
import { AnonimAvatar } from '../AnonimAvatar'
import ReadMoreModal from '../topluluk-page/ReadMoreModal'
import { getShortTimeAgo, stringToPastelColor } from '@/utils/formatters'
import PostOptions from './PostOptions'
import Link from 'next/link'


export default function CommunityPost({ post }: { post: CommunityPostType }) {
  const [open, setOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.like_count || 0)
  const [commentCount, setCommentCount] = useState(post.comment_count || 0)
  const kelimeler = post.content.trim().split(/\s+/)
  const fazlaKelime = kelimeler.length > 10
  const zaman = getShortTimeAgo(new Date(post.created_at));
  const [following, setFollowing] = useState(false)

  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = `https://internsy.co/forum/${post.id}`;


  const handleOpen = () => setOpen(true)

  const toggleLike = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const res = await fetch('/api/forum/like', {
      method: "POST",
      body: JSON.stringify({post_id: post.id})
    })

    const result = await res.json()
    if(result.liked){
      setLiked(true)
      setLikeCount((prev) => prev + 1)
    }else {
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
      const res = await fetch(`/api/forum/is-liked?post_id=${post.id}`);
      const result = await res.json();
      if (result.liked !== undefined) {
        setLiked(result.liked);
      }
    };

    fetchLikedStatus();
  }, [post.id]);

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
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShowPopup(false); // isteğe bağlı otomatik kapansın
    }, 2000);
  };

  const handleShareClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowPopup(!showPopup);
  };


  const handleReport = () => {
    alert(`Şikayet edildi: ${post.id}`) // Buraya modal, API isteği, vs. eklersin
  }


  return (
    <>
      <div
        onClick={handleOpen}
        className='flex flex-col justify-center border-b-[1px] border-b-gray-300 hover:bg-gray-50 cursor-pointer'
      >
        <div className='flex flex-col gap-y-4 p-4 w-full'>
          <div className='flex items-center justify-between'>
            <a className='text-xs text-gray-400'>Diğer Toplulukları Keşfet</a>
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleFollow()
                }}
                className={`${following ? `bg-[#f2f4f5] text-black` : 'bg-primary text-white'}  rounded-[8px] text-xs font-semibold py-1 px-2  hover:text-white`}
              >
                {following ? "Takip Ediliyor" : "Topluluğu Takip Et"}
              </Button>
          </div>
          <div className='flex items-center justify-between '>
            <div className='flex items-center gap-x-2'>
              <span className='relative w-10 h-10 rounded-full  shrink-0'>
                <AnonimAvatar color={stringToPastelColor(post.user_id)} icon={<User2/>} />
              </span>
              <div className='flex w-full flex-col'>
                <Link onClick={(e) => {e.stopPropagation()}} href={'http://localhost:3000/topluluk/design-systems'}>
                  <h3 className='text-sm font-semibold hover:text-primary'>{post.communities?.name}</h3>
                </Link>
                <h4 className='text-xs truncate whitespace-nowrap overflow-hidden text-gray-700'>{post.title}</h4>
              </div>
            </div>
            <div className='flex items-center gap-x-2 h-full'>
              <p className='text-xs flex'>{zaman}</p>
              <span className='hover:bg-gray-100 p-2 rounded-full'>
                <button onClick={(e) => e.stopPropagation()}>
                  <PostOptions onReport={() => handleReport}/>
                </button>
              </span>
            </div>
          </div>

          <p className='text-sm'>
            {kelimeler.slice(0, 10).join(" ")}
            {fazlaKelime && (
              <>
              ...
              <span
                onClick={(e) => {
                  e.stopPropagation()
                  setOpen(true)
                }}
                className='underline text-blue-600 ml-1 cursor-pointer'
                >
                Devamını gör
              </span>
                </>
            )}
          </p>

          <div className='flex justify-between items-center text-xs font-semibold'>
            <div className='flex items-center gap-x-4 w-full  text-gray-700'>
              <div className='flex items-center justify-center'>
                <button onClick={toggleLike} className='flex justify-center w-fit py-2 gap-x-2 items-center rounded-lg '>
                    <Heart className={`text-primary ${liked ? 'fill-primary' : 'fill-white'} hover:fill-primary duration-200`} size={20} />
                  {likeCount}
                </button>
              </div>
              <div className='flex items-center justify-center'>
                <span className='flex justify-center gap-x-2 items-center group rounded-lg py-2 w-fit '>
                  <MessageCircle className='hover:fill-primary duration-200  hover:text-primary' size={20} /> {commentCount}
                </span>
              </div>
              <div className='flex items-center w-full  justify-end'>
                <button onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(true)}
                } className='flex justify-center gap-x-2 items-center group rounded-lg py-2 w-fit '>
                    <FaShare className='hover:fill-primary duration-200  hover:text-primary' size={20} /> Paylaş
                </button>
                {isOpen && (
                  <div onClick={(e) => e.stopPropagation()} className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-auto text-center relative">
                      <h2 className="text-lg font-semibold text-gray-800 mb-4">Bağlantıyı Paylaş</h2>

                      <p className="text-sm text-gray-600 break-all border px-4 py-2 rounded bg-gray-50">
                        {shareUrl}
                      </p>

                      <button
                        onClick={handleCopy}
                        className="mt-4 text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
                      >
                        {copied ? "Kopyalandı ✅" : "Linki Kopyala"}
                      </button>

                      {/* Kapat Butonu */}
                      <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-bold"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ReadMoreModal open={open} onClose={() => setOpen(false)} commented={() => setCommentCount(prev => prev + 1)} post={post} />
    </>
  )
}
