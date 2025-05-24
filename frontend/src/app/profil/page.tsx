'use client'
import TabsSection from '@/components/profil-page/TabsSection'
import UserInfoEditSection from '@/components/profil-page/UserInfoEditSection'
import UserInformationSection from '@/components/profil-page/UserInformationSection'
import React, { useState } from 'react'

export default function Page() {
    const [editMode, setEditMode] = useState(false)  
  return (
      <div className='w-full flex flex-col bg-white rounded-[8px] text-sm gap-y-4  '>
      {!editMode ? (<UserInformationSection onToggleEditMode={() => {setEditMode(true)}} />) : (<UserInfoEditSection onToggleEditMode={() => {setEditMode(false)}} />)}
      </div>
  )
}
