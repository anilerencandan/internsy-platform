import NotificationCards from '@/components/profil-page/NotificationCard'
import TabsSection from '@/components/profil-page/TabsSection'
import React from 'react'


export default function Page() {
    
  return (
    <div className='page-content '>
            <TabsSection />
        

                
            <div className='flex flex-col bg-white rounded-[8px] overflow-hidden  text-sm gap-y-4  p-4'>
              <NotificationCards />
            </div>

    </div>
  )
}
