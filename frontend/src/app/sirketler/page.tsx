import { Settings2, Star } from 'lucide-react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import Link from 'next/link'
import FilterSection from '@/components/sirketler-page/FilterSection'
import SirketCard from '@/components/sirketler-page/SirketCard'

export default function sirketlerPage() {
  return (
    <div className='page-content sm:grid grid-cols-12 gap-x-6 sm:p-4 py-6'>
        <div className=' flex sm:hidden flex-col gap-y-2 px-4'>
            <label className='text-sm' htmlFor="">Aklında bir şirket var mı?</label>
            <div className='flex items-center gap-x-2'>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Şirket adını yazın' type="text" name="" id="" />
                <button className='rounded-[8px] bg-black text-white p-2'>Ara</button>
            </div>
        </div>

        {/* Desktop Filter Section */}
        <div className='sm:col-span-4 hidden sm:flex flex-col gap-y-4 sticky top-4 h-fit'>
            <FilterSection />
        </div>

        <div className='sm:col-span-8 flex flex-col gap-y-6 px-4'>
            <h1 className='text-2xl font-bold pt-6'>Şirketleri Keşfet</h1>
            
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-600'>1-10 of 9,990 sonuç</p>
                <div className='flex gap-x-2 items-center font-semibold'>
                    Filtre
                    <Settings2 size={20}/>
                </div>
            </div>

            <div className='flex items-center text-sm text-primary gap-x-2'>
                <div className='flex '>
                    <Star className=' fill-yellow-400 text-white' />
                    <Star className=' fill-yellow-400 text-white' />
                    <Star className=' fill-yellow-400 text-white' />
                    <Star className=' fill-yellow-400 text-white' />
                    <Star className=' fill-yellow-400 text-white' />
                </div>
                ve üstü
            </div>

            <div className=' flex flex-col gap-y-6 '>
                {Array.from({ length: 12 }, (_, index) => (
                    <SirketCard key={index} />
                ))}
            </div>


        </div>
    </div>
  )
}
