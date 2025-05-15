import CommunityPost from '@/components/forum-page/CommunityPost'
import React from 'react'
import PostEkleSection from '@/components/topluluk-page/PostEkleSection'
import SeninIcinTopluluklarCard from '@/components/topluluk-page/SeninIcinTopluluklarCard'
import Searchbar from '@/components/Searchbar'
import sampleData from '@/sample/CommunityPostSampleData.json'
import { CommunityPostType } from '@/models/CommunityPost'


export default function forumPage() {
  return (
    <div className='page-content sm:grid grid-cols-12  gap-x-12 xl:px-0 sm:px-4 px-0 sm:pt-4 mb-6'>
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm sticky top-20 h-fit'>
      <PostEkleSection />
      </div>
      

      <div className='lg:col-span-6 sm:col-span-8 col-span-1 '>
      <span className='sm:flex hidden'>
      
        <Searchbar />
      </span>
      <div className='flex flex-col overflow-hidden sm:border border-gray-300 sm:rounded-xl'>
        {sampleData.map((sampleData: CommunityPostType, index ) => (
          <CommunityPost key={index}  post={sampleData} />
        ))}
        </div>
      </div>

      <div className='lg:col-span-3 flex flex-col sticky top-20 h-fit'>
        <SeninIcinTopluluklarCard />
      </div>
    </div>
  )
}
