'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const tabs = [
    { label: "Profil", href: "/profil" },
    { label: "Katkılar", href: "/profil/katkilar" },
    { label: "Bildirimler", href: "/profil/bildirimler" },
    { label: "Ayarlar", href: "/profil/ayarlar" },
    { label: "Sosyal", href: "/profil/sosyal" },
  ]

export default function TabsSection() {
    const path = usePathname()

  return (
        <div className=' bg-white pt-4 grid grid-cols-5 overflow-x-auto scrollbar-hide px-2 border-b border-gray-600 '>
            {tabs.map((tab) => (
                    
                <Link
                key={tab.href}
                href={tab.href}
                className={`text-center flex flex-col justify-end gap-y-1 font-semibold text-sm pb-3 ${
                    path === tab.href ? "text-primary border-b-2 border-primary" : "text-gray-700 border-b-2 border-white"
                }`}
                >
                {tab.label}
                </Link>
            ))}
    </div>       
  )
}
