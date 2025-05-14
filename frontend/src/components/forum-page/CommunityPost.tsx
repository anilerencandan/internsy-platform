import { Ellipsis, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FaShare } from 'react-icons/fa'
import { Button } from '../ui/button'

export default function CommunityPost() {
  return (
    <div className='flex flex-col justify-center border-b-[1px] border-b-gray-300 hover:bg-gray-50 '>
      <div className='flex flex-col gap-y-4 p-4 w-full'>
        <div className='flex items-center justify-between'>
          <a className='text-xs text-gray-400'>Diğer Toplulukları Keşfet</a>
          <Button  className='bg-[#f2f4f5] rounded-[8px] text-xs font-semibold py-1 px-2 text-black hover:text-white'>Topluluğu Takip Et</Button>
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex items-center  gap-x-2'>
            <span className='relative w-8 h-8 rounded-full overflow-hidden shrink-0'><Image src={'/images/avatar.jpg'} alt={'avartar'} fill className='object-cover'/></span>
            <div className='flex w-full flex-col'>
              <h3 className='text-sm font-semibold'>Yapay Zeka</h3>
              <h4 className='text-xs truncate whitespace-nowrap overflow-hidden text-gray-700'>Senior Marketing Communications Specials</h4>
            </div>
          </div>
          <div className='flex items-center gap-x-2 h-full'>
            <p className='text-xs flex'>1h</p>
            <span className='hover:bg-gray-100 p-2 rounded-full'><Ellipsis size={20} /></span>
          </div>
        </div>

        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eius itaque blanditiis nostrum consequuntur exercitationem illum, obcaecati voluptates, totam atque corporis ipsam quaerat aspernatur enim! Corporis, quidem inventore... <a href="" className='underline hover:text-primary'>read more</a>
        </p>

        <div className='flex justify-between items-center text-xs font-semibold'>
          <div className='grid grid-cols-3 items-center gap-x-4 w-full  text-gray-700'>
            <div className='flex items-center w-full justify-center'>
              <span className='flex justify-center w-fit  py-2 gap-x-2 items-center rounded-lg '>
                <Heart fill='white' className='text-primary hover:fill-primary duration-200'  size={20} />
                1000
                Beğen
              </span>

            </div>
            <div className='flex items-center w-full justify-center'>
              <span className='flex justify-center  gap-x-2 items-center group rounded-lg  py-2 w-fit '><MessageCircle className='hover:fill-primary duration-200  hover:text-primary' size={20} /> 777B Yorum</span> 
            </div>
            <div className='flex items-center w-full justify-center'>
                <span className='flex justify-center  gap-x-2 items-center group rounded-lg  py-2 w-fit '><FaShare  className='hover:fill-primary duration-200  hover:text-primary' size={20}/> Paylaş</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
