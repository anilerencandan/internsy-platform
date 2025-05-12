'use client'
import { Edit } from 'lucide-react'
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
    <div className='bg-gray-100'>
        <div className=' bg-white pt-4 grid grid-cols-4 overflow-x-auto scrollbar-hide  px-4 border-b border-gray-600 '>
            {tabs.map((tab) => (
                    
                <Link
                key={tab.href}
                href={tab.href}
                className={` text-center flex flex-col justify-end gap-y-1 font-semibold text-sm pb-3 ${
                    Path === tab.href ? "text-primary border-b-2 border-primary" : "text-gray-700 border-b-2 border-white"
                }`}
                >
                {tab.label}
                </Link>
            ))}
            </div>       

            <div className='p-4'>
                
            <div className='flex flex-col bg-white rounded-[8px] shadow-md text-sm gap-y-4 p-4 '>
            <h1 className='text-xl font-bold'>Profil</h1>
            <div className='flex items-center justify-between py-2'>
                <h2 className='text-lg font-semibold'>Bilgilerim</h2>
                <Edit size={20}/>
            </div>
            <p>Get the best matches and a more relevant community experince</p>


            <div className='flex flex-col'>
                <label htmlFor="">Employment status*</label>
                <p className=' text-gray-600'>Student</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Full Name</label>
                <p className=' text-gray-600'>Onur Er</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Location*</label>
                <p className=' text-gray-600'>Turkey, NC [US]</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">University or College*</label>
                <p className=' text-gray-600'>Kocaeli Univ</p>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Degree Type</label>
                <p className=' text-gray-600'>Bachelors</p>
            </div>

            <div className="border-t-[1px] border-gray-300"></div>

            <h3 className='text-lg font-semibold'>Resume</h3>

            <p>prefill job application when you add a resume and use easy apply</p>
            
            <p>Your resume can be visible to hiring eemployers or you can keep it hidden. See the <a href="" className='text-primary underline'>privacy policiy</a> for mor info</p>

            </div>
        </div>
    </div>
  )
}
