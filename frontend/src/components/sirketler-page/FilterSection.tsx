import { Star } from 'lucide-react'
import React from 'react'

export default function FilterSection() {
  return (
    <>
    <h1 className='text-2xl font-bold'>Aradığın Şirketi Bul</h1>

            <div>
                <label className='text-sm' htmlFor="">Şirket İsmi</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Şirket seçin' type="text" name="" id="" />
            </div>

            <div>
                <label className='text-sm' htmlFor="">Lokasyonu</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Konum seçin' type="text" name="" id="" />
            </div>

            <div>
                <label className='text-sm' htmlFor="">Endüstri</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Endustri seçin' type="text" name="" id="" />
            </div>
            
            <div className='flex items-center justify-end'>
                <button className='rounded-[8px] bg-black text-white p-2'>Ara</button>
            </div>

            <div className="border-t-[1px] border-gray-300"></div>

            <div className='flex flex-col gap-y-4'>
                <h2 className='text-lg font-semibold'>Şirket puanına göre filtrele</h2>
                <div className='flex items-center text-sm text-primary gap-x-2'>
                    {Array.from({ length: 5 }, (_, index) => (
                        <Star key={index} size={16} fill='blue' className='text-primary' />
                    ))} ve üstü
                </div>
            </div></>
)
}
