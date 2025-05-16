'use client'

import React from 'react'
import AnonimDropdown from '../forum-page/AnonimDropdown'
import { Button } from '../ui/button'
import { MessagesSquare, Plus } from 'lucide-react'
import { useNav } from '@/context/NavContext'

export default function PostEkleSection() {
  const {show, height} = useNav()

  const stickyTop = show ? height : 0
  return (
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm ' >
      <div className='bg-gray-50 rounded-lg border border-gray-300 p-1 flex flex-col gap-y-4 'style={{top: stickyTop}}>
            <AnonimDropdown />
            <div className='flex flex-col items-center pb-8'>
              <Button className='flex items-center gap-x-1 bg-black text-white px-4 py-2 rounded-full'>
                Post Paylaş <Plus />
              </Button>
            </div>
          </div>
    
            <div className="border-t-[1px] border-gray-300"></div>
    
            <div className='flex flex-col gap-y-4 '>
              <h3 className='text-xl font-bold'>Topluluklarım</h3>
              <Button className='flex items-center gap-x-2 px-4 py-2 border  w-fit rounded-lg bg-white text-black hover:bg-black hover:text-white'><MessagesSquare size={20} /><p className='font-semibold text-sm'>Toplulukları Keşfet</p></Button>
            </div>
    </div>
)
}
