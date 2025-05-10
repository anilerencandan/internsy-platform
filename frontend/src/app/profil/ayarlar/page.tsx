'use client'
import { Separator } from '@/components/ui/separator'
import { ChevronRight, Edit, Star } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const tabs = [
    { label: "Profil", href: "/profil" },
    { label: "Katkilar", href: "/profil/katkilar" },
    { label: "Bildirimler", href: "/profil/bildirimler" },
    { label: "Ayarlar", href: "/profil/ayarlar" },
  ]
  

export default function page() {
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
                    <h1 className='text-xl font-bold p-4'>Ayarlar</h1>

                    <div className='flex flex-col gap-y-6 p-4'>
                        <h2 className='text-lg font-semibold'>Email ve Şifre</h2>
                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Email address</label>
                                <p className=' text-gray-600'>onur@gmail.com</p>
                            </div>

                            <Edit size={20}/>
                        </div>

                        <div className="border-t-[1px] border-gray-300"></div>

                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Current Password</label>
                                <p className=' text-gray-600'>***************</p>
                            </div>

                            <Edit size={20}/>
                        </div>
                    </div>


                    <div className='flex flex-col gap-y-4 text-sm p-4'>
                        <h2 className='text-xl font-semibold'>Social Connections</h2>
                        <p className="text-gray-600">For quick and easy access, use your social accounts.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-2 font-semibold'>
                                <FaGoogle size={32} className='text-gray-600'/> Google
                            </div>
                            <button className='text-white bg-red-700 px-4 py-2 rounded-md'>Disconnect</button>
                        </div>
                    </div>

                    <div className="border-t-[1px] border-gray-300"></div>

                    <div className='flex flex-col gap-y-4 text-sm p-4'>
                        <h2 className='text-xl font-semibold'>Two-factor authentication</h2>

                        <p>Two-factor authentication offers you additioanl security by requirng a verification code every time you sign on a new device. Enable this for enhanced account security.</p>

                        <div className='flex justify-start'>
                            <button className='text-black bg-gray-100 px-4 py-2 rounded-md'>Enable</button>

                        </div>
                    </div>           

                    <div className="border-t-[1px] border-gray-300"></div>
     

                    <div className='flex flex-col gap-y-4 text-sm p-4'>
                        <h2 className='text-xl font-semibold'>Deactive account</h2>

                        <p>You can also <a href="" className='text-primary'>manage your email settings</a></p>

                        <div className='flex justify-end'>
                            <button className='text-white bg-red-700 px-4 py-2 rounded-md'>Deactive account</button>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}
