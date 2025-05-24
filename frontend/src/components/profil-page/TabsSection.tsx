'use client'
import { Bell, Bookmark, CircleUserRound, Star, UserRoundCog } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const tabs = [
    { label: "Profil", href: "/profil" , icon: <CircleUserRound size={20}/>},
    { label: "Katkılar", href: "/profil/katkilar",icon:<Star  size={20}/>},
    { label: "Bildirimler", href: "/profil/bildirimler", icon: <Bell size={20}/>},
    { label: "Ayarlar", href: "/profil/ayarlar", icon: <UserRoundCog  size={20}/>},
    { label: "Takipler", href: "/profil/kaydedilenler", icon: <Bookmark size={20}/>},
  ]

export default function TabsSection() {
    const path = usePathname()

    return (
      <div className="bg-white border-t border-gray-200 px-2 py-2 flex flex-wrap gap-2 justify-center items-center">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={` sm:w-[110px] md:w-[120px] px-2 sm:px-3 py-1 text-center text-[11px] sm:text-sm rounded-md border font-medium whitespace-nowrap flex items-center justify-center gap-x-2
              ${path === tab.href 
                ? "bg-primary text-white border-primary"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 transition"}`}
          >
            {tab.icon} <span className='sm:block '>{tab.label}</span>
          </Link>
        ))}
      </div>
    );
}
