import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function SeninIcinTopluluklarCard() {
  return (
    <>
    <div className='flex flex-col gap-y-4 p-4 rounded-lg border border-gray-300'>

          <h2 className='text-lg font-semibold'>Senin için Topluluklar</h2>
          <a href="" className='text-primary font-semibold'>Toplulukları Keşfet</a>

          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className='flex gap-x-2 py-4 border-b-[1px] border-b-gray-300 w-full'>
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
    </>
)
}
