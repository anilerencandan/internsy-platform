import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function SeninIcinTopluluklarCard() {
  return (
    <div className='flex flex-col gap-y-4  rounded-lg overflow-hidden'>
      <div className='flex flex-col pt-4 rounded-lg overflow-hidden  border border-gray-300'>

          <h2 className='text-lg font-semibold px-4'>Senin için Topluluklar</h2>
          <a href="" className='text-primary font-semibold p-4 border-b-[1px] border-gray-300'>Toplulukları Keşfet</a>

          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className=' p-4 flex gap-x-2  border-b-[1px] border-gray-300 w-full hover:bg-gray-100 '>
            <div className='hidden xl:flex flex-col items-center text-sm font-bold gap-y-1 overflow-hidden shrink-0 text-gray-400'> 
              <Image src={'/images/avatar.jpg'} alt={'avatar'} width={32} height={32} className='w-8 h-8 rounded-full ' />
              2M
            </div>
            <div className='flex flex-col text-sm'>
              <strong>Yapay Zeka</strong>
              <p className='text-xs'>A commnunity for Conuslting professionals accross companies</p>
              <div className='flex justify-end gap-x-2 text-bold pt-2 font-semibold '>
                <Button className='rounded-lg px-4 py-2 text-black bg-transparent hover:bg-primary hover:text-white shadow-none'>Görüntüle</Button>
                <Button className='bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-black '>Takip Et</Button>
              </div>
            </div>
            
          </div>
          ))}

        </div>
        <div className='flex flex-col gap-y-1 rounded-lg overflow-hidden bg-gray-100 text-sm border border-gray-300 p-4'>
          <a href="/hakkimizda" className='hover:underline'>Hakkımızda</a>
          <a href="" className='hover:underline'>Kullanım Şartları</a>
          <a href="/cerez-politikasi" className='hover:underline'>Çerez Politikası</a>
          <a href="/gizlilik-ve-guvenlik" className='hover:underline'>Gizlilik ve Güvenlik</a>
          <br />

        Copyright 2025. Internsy
        </div>
    </div>
)
}
