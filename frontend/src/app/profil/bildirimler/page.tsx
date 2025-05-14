'use client'
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
    <div className='bg-gray-100'>
        <div className=' bg-white pt-4 grid grid-cols-4 overflow-x-auto scrollbar-hide  px-4 border-b border-gray-600 '>
            {tabs.map((tab) => (
                    
                <Link
                key={tab.href}
                href={tab.href}
                className={` text-center flex flex-col justify-end gap-y-1 font-semibold text-sm pb-3 ${
                    path === tab.href ? "text-primary border-b-2 border-primary" : "text-gray-700 border-b-2 border-white"
                }`}
                >
                {tab.label}
                </Link>
            ))}
            </div>       

            <div className='p-4'>
                
            <div className='flex flex-col bg-white rounded-[8px] overflow-hidden shadow-md text-sm gap-y-4 '>
                
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold p-4'>Bildirimler</h1>


                </div>

            </div>
        </div>
    </div>
  )
}
