'use client'
import KatkilarCard from '@/components/profil-page/KatkilarCard'
import SubMenu from '@/components/profil-page/SubMenu'
import TabsSection from '@/components/profil-page/TabsSection'
import { Banknote, BriefcaseBusiness, ChevronLeft, Star } from 'lucide-react'
import React, { useState } from 'react'



export default function Page() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    
  return (
    <div className='w-full mb-6'>
        <div className='flex flex-col bg-white overflow-hidden  text-sm gap-y-4 py-6 sm:border border-gray-300 rounded-lg '>
            
            <div className='flex flex-col'>
              <div className='flex items-center sm:justify-start justify-center relative'>
                          <ChevronLeft
            size={24}
            className="absolute left-4 cursor-pointer sm:hidden block text-primary "
            onClick={() => setIsSidebarOpen(true)}
          />

                <h1 className='text-2xl font-bold px-4 text-primary w-full text-center'>Katkılarım</h1>
              </div>
                <KatkilarCard title={'Görüşler'} eventCount={4} icon={<Star size={20} />}  />
                <KatkilarCard title={'Maaşlar'} eventCount={1} icon={<Banknote  size={20} />}  />
                <KatkilarCard title={'Mülakatlar'} eventCount={2} icon={<BriefcaseBusiness size={20} />}  />
            </div>
        </div>

        <SubMenu
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                title="Profil Menüsü"
                widthClass="w-64"
              />
    </div>
  )
}
