'use client'
import KatkilarCard from '@/components/profil-page/KatkilarCard'
import TabsSection from '@/components/profil-page/TabsSection'
import { Banknote, BriefcaseBusiness, ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const tabs = [
    { label: "Profil", href: "/profil" },
    { label: "Katkilar", href: "/profil/katkilar" },
    { label: "Bildirimler", href: "/profil/bildirimler" },
    { label: "Ayarlar", href: "/profil/ayarlar" },
  ]
  

export default function Page() {
      const Path = usePathname()
    
  return (
    <div className='page-content'>
            <TabsSection />
                
            <div className='flex flex-col bg-white rounded-[8px] overflow-hidden  text-sm gap-y-4 '>
                
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold p-4'>Katkılarım</h1>
                    <KatkilarCard title={'Görüşler'} eventCount={4} icon={<Star size={20} />}  />
                    <KatkilarCard title={'Maaşlar'} eventCount={1} icon={<Banknote  size={20} />}  />
                    <KatkilarCard title={'Mülakatlar'} eventCount={2} icon={<BriefcaseBusiness size={20} />}  />
                        

                </div>

            </div>
    </div>
  )
}
