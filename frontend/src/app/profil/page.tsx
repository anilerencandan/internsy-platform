'use client'
import TabsSection from '@/components/profil-page/TabsSection'
import UserInfoEditSection from '@/components/profil-page/UserInfoEditSection'
import UserInformationSection from '@/components/profil-page/UserInformationSection'
import { Edit, User } from 'lucide-react'
import React, { useState } from 'react'

export default function Page() {
    const [editMode, setEditMode] = useState(false)  
  return (
    <div className='page-content '>
        
            <div className='pb-24'>
                
            <TabsSection />
            <div className='flex flex-col bg-white rounded-[8px] text-sm gap-y-4 p-4 '>
            {!editMode ? (<UserInformationSection onToggleEditMode={() => {setEditMode(true)}} />) : (<UserInfoEditSection onToggleEditMode={() => {setEditMode(false)}} />)}
            </div>
        </div>
    </div>
  )
}
