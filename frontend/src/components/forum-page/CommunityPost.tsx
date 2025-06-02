'use client'

import { Ellipsis, Heart, MessageCircle, User2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FaShare } from 'react-icons/fa'
import { Button } from '../ui/button'
import { CommunityPostType } from '@/models/CommunityPost'
import { AnonimAvatar } from '../AnonimAvatar'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import ReadMoreModal from '../topluluk-page/ReadMoreModal'
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import { getShortTimeAgo, stringToPastelColor } from '@/utils/formatters'


export default function CommunityPost({ post }: { post: CommunityPostType }) {
  const [open, setOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.like_count || 0)
  const [commentCount, setCommentCount] = useState(post.comment_count || 0)
  const kelimeler = post.content.trim().split(/\s+/)
  const fazlaKelime = kelimeler.length > 10
  const zaman = getShortTimeAgo(new Date(post.created_at));
  const [following, setFollowing] = useState(false)

  console.log('ulaaa', post)


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

<Button onClick={toggleFollow}>
  {following ? "Takip Ediliyor" : "Topluluğu Takip Et"}
</Button>



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
                className='bg-[#f2f4f5] rounded-[8px] text-xs font-semibold py-1 px-2 text-black hover:text-white'
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
                <h3 className='text-sm font-semibold'>{post.forum_categories?.name}</h3>
                <h4 className='text-xs truncate whitespace-nowrap overflow-hidden text-gray-700'>{post.title}</h4>
              </div>
            </div>
            <div className='flex items-center gap-x-2 h-full'>
              <p className='text-xs flex'>{zaman}</p>
              <span className='hover:bg-gray-100 p-2 rounded-full'>
                <Ellipsis size={20} />
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
                <span className='flex justify-center w-fit py-2 gap-x-2 items-center rounded-lg '>
                  <button onClick={toggleLike}>
                    <Heart className={`text-primary ${liked ? 'fill-primary' : 'fill-white'} hover:fill-primary duration-200`} size={20} />
                  </button>
                  {likeCount}
                </span>
              </div>
              <div className='flex items-center justify-center'>
                <span className='flex justify-center gap-x-2 items-center group rounded-lg py-2 w-fit '>
                  <MessageCircle className='hover:fill-primary duration-200  hover:text-primary' size={20} /> {commentCount}
                </span>
              </div>
              <div className='flex items-center w-full  justify-end'>
                <span className='flex justify-center gap-x-2 items-center group rounded-lg py-2 w-fit '>
                  <FaShare className='hover:fill-primary duration-200  hover:text-primary' size={20} /> Paylaş
                </span>
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
