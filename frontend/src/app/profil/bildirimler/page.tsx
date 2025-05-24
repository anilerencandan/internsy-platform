import NotificationCards from '@/components/profil-page/NotificationCard'
import TabsSection from '@/components/profil-page/TabsSection'
import React from 'react'


export default function Page() {
    
  return (
    <div className='w-full mb-6'>
      <div className='flex flex-col bg-white overflow-hidden  text-sm gap-y-4  sm:border border-gray-300 py-6 px-4 rounded-lg '>
        <NotificationCards />
      </div>
    </div>
  )
}
