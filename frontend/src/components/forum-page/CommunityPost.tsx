import { Ellipsis, Heart, MessageCircle, User2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaShare } from 'react-icons/fa'
import { Button } from '../ui/button'
import { CommunityPostType } from '@/models/CommunityPost'
import UserAvatar from '../UserAvatar'
import { AnonimAvatar } from '../AnonimAvatar'

export default function CommunityPost({ post }: { post: CommunityPostType }) {
  return (
    <div className='flex flex-col justify-center border-b-[1px] border-b-gray-300 hover:bg-gray-50 '>
      <div className='flex flex-col gap-y-4 p-4 w-full'>
        <div className='flex items-center justify-between'>
          <a className='text-xs text-gray-400'>Diğer Toplulukları Keşfet</a>
          <Button className='bg-[#f2f4f5] rounded-[8px] text-xs font-semibold py-1 px-2 text-black hover:text-white'>
            Topluluğu Takip Et
          </Button>
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex items-center gap-x-2'>
            <span className='relative w-10 h-10 rounded-full  shrink-0'>
              <AnonimAvatar icon={<User2/>}/>
            </span>
            <div className='flex w-full flex-col'>
              <h3 className='text-sm font-semibold'>{post.communityName}</h3>
              <h4 className='text-xs truncate whitespace-nowrap overflow-hidden text-gray-700'>{post.userTitle}</h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 h-full'>
            <p className='text-xs flex'>{post.timeAgo}</p>
            <span className='hover:bg-gray-100 p-2 rounded-full'>
              <Ellipsis size={20} />
            </span>
          </div>
        </div>

        <p className='text-sm'>
          {post.content} <a href="" className='underline hover:text-primary'>Devamını gör</a>
        </p>

        <div className='flex justify-between items-center text-xs font-semibold'>
          <div className='flex items-center gap-x-4 w-full  text-gray-700'>
            <div className='flex items-center justify-center'>
              <span className='flex justify-center w-fit py-2 gap-x-2 items-center rounded-lg '>
                <Heart fill='white' className='text-primary hover:fill-primary duration-200' size={20} />
                {/* {post.likes}  */}
                1.3K
              </span>
            </div>
            <div className='flex items-center justify-center'>
              <span className='flex justify-center gap-x-2 items-center group rounded-lg py-2 w-fit '>
                <MessageCircle className='hover:fill-primary duration-200  hover:text-primary' size={20} /> {post.comments} 
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
  )
}
