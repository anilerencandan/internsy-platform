import CommunityPost from '@/components/forum-page/CommunityPost'
import React from 'react'
import Image from 'next/image'  
import { ChevronDown, MessagesSquare, Plus } from 'lucide-react'
import AnonimDropdown from '@/components/forum-page/AnonimDropdown'
import { Button } from '@/components/ui/button'
import PostEkleSection from '@/components/topluluk-page/PostEkleSection'
import SeninIcinTopluluklarCard from '@/components/topluluk-page/SeninIcinTopluluklarCard'

export default function forumPage() {
  return (
    <div className='page-content sm:grid grid-cols-12  gap-x-12 xl:px-0 sm:px-4 px-0 sm:pt-4 '>
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm sticky top-4 h-fit'>
      <PostEkleSection />
      </div>
      
      <div className='lg:col-span-6 sm:col-span-8 col-span-1 sm:border border-gray-300 sm:rounded-xl'>
        {Array.from({ length: 10 }, (_, index) => (
          <CommunityPost />
        ))}
      </div>
      
      <div className='lg:col-span-3 flex flex-col sticky top-4 h-fit'>
        <SeninIcinTopluluklarCard />
      </div>
    </div>
  )
}
