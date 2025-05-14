'use client'
import NotificationCards from '@/components/profil-page/NotificationCard'
import TabsSection from '@/components/profil-page/TabsSection'
import { Badge } from '@/components/ui/badge'
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
      const path = usePathname()
    
  return (
    <div className='page-content '>
            <TabsSection />
        

                
            <div className='flex flex-col bg-white rounded-[8px] overflow-hidden  text-sm gap-y-4  p-4'>
              <NotificationCards />
            </div>

    </div>
  )
}
