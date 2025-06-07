'use client'
import EmailPasswordDialog from '@/components/profil-page/EditMailDialog'
import SubMenu from '@/components/profil-page/SubMenu';
import { Menu } from "lucide-react"
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'

  

export default function Page() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  return (
    <div className='mb-6'>
            <div className='flex flex-col bg-white rounded-[8px] overflow-hidden  text-sm gap-y-4 sm:border border-gray-300 py-6'>
                
                <div className='flex flex-col '>
                    <div className='flex items-center sm:justify-start justify-center relative'>
                        <Menu
                            size={24}
                            className="absolute left-4 cursor-pointer sm:hidden block text-primary"
                            onClick={() => setIsSidebarOpen(true)}
                        />
                    <h1 className='text-2xl font-bold px-4 text-primary text-center w-full'>Ayarlar</h1>
                    </div>

                    <div className='flex flex-col gap-y-6 p-4'>
                        <h2 className='text-lg font-semibold'>Email ve Şifre</h2>
                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Email address</label>
                                <p className=' text-gray-600'>onur@gmail.com</p>
                            </div>

                            <EmailPasswordDialog type={'email'} />
                        </div>

                        <div className="border-t-[1px] border-gray-300"></div>

                        <div className='flex items-center justify-between text-sm'>
                            <div className='flex flex-col'>
                                <label htmlFor="">Current Password</label>
                                <p className=' text-gray-600'>***************</p>
                            </div>

                            <EmailPasswordDialog type={'password'} />   
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
            <SubMenu
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    title="Profil Menüsü"
                    widthClass="w-64"
                  />
    </div>
  )
}
