import { Ellipsis, Forward, Heart, MessageCircle, MessageCircleHeart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaShare } from 'react-icons/fa'

export default function CommunityPost() {
  return (
    <div className='flex flex-col justify-center w-screen border-b-[1px] border-b-gray-300 '>
      <div className='flex flex-col gap-y-4 p-4 w-full'>
        <div className='flex items-center justify-between'>
          <a className='text-xs'>Diğer Toplulukları Keşfet</a>
          <a className='bg-[#f2f4f5] rounded-[8px] text-xs font-semibold py-1 px-2'>Topluluğu Takip Et</a>
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex items-center  gap-x-2'>
            <span className='relative w-8 h-8 rounded-full overflow-hidden'><Image src={'/images/avatar.jpg'} alt={'avartar'} fill className='object-cover'/></span>
            <div className='flex w-full flex-col'>
              <h3 className='text-sm font-semibold'>Yapay Zeka</h3>
              <h4 className='text-xs truncate whitespace-nowrap overflow-hidden text-gray-700'>Senior Marketing Communications Specials</h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 h-full'>
            <p className='text-xs flex'>1h</p>
            <Ellipsis size={20} />
          </div>
        </div>

        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eius itaque blanditiis nostrum consequuntur exercitationem illum, obcaecati voluptates, totam atque corporis ipsam quaerat aspernatur enim! Corporis, quidem inventore... <a href="" className='underline'>read more</a>
        </p>

        <div className='flex justify-between items-center text-xs font-semibold'>
          <div className='grid grid-cols-3 items-center gap-x-4 w-full  text-gray-700'>
            <div className='flex justify-center w-full gap-x-2 items-center '>
              <Heart fill='white' className='text-primary'  size={20} />
              1000
              Beğen
            </div>
            <div className='flex justify-center w-full gap-x-2 items-center '><MessageCircle size={20} /> 777B Yorum</div> 
            <div className='flex justify-center w-full gap-x-2 items-center '><FaShare  size={20}/> Paylaş</div>
          </div>
        </div>
      </div>
    </div>
  )
}
