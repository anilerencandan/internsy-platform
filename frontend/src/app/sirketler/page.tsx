import { Settings2, Star } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'

export default function sirketlerPage() {
  return (
    <div className='page gap-y-12 py-6'>
        <div className='flex flex-col gap-y-2 px-4'>
            <label className='text-sm' htmlFor="">Aklında bir şirket var mı?</label>
            <div className='flex items-center gap-x-2'>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Şirket adını yazın' type="text" name="" id="" />
                <button className='rounded-[8px] bg-black text-white p-2'>Ara</button>
            </div>
        </div>

        <div className='flex flex-col gap-y-6 px-4 '>
            <h1 className='text-2xl font-bold'>Şirketleri Keşfet</h1>
            
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-600'>1-10 of 9,990 sonuç</p>
                <div className='flex gap-x-2 items-center font-semibold'>
                    Filtre
                    <Settings2 size={20}/>
                </div>
            </div>

            <div className='flex items-center text-sm text-primary gap-x-2'>
                <div className='flex '>
                    <Star className='fill-primary text-white' />
                    <Star className='fill-primary text-white' />
                    <Star className='fill-primary text-white' />
                    <Star className='fill-primary text-white' />
                    <Star className='fill-gray-100 text-white' />
                </div>
                ve üstü
            </div>

            <div className='flex flex-col gap-y-12'>
                {Array.from({ length: 12 }, (_, index) => (
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-2'>
                            <FaGoogle size={48} className='border-[1.5px] border-gray-400 rounded-sm p-2' />
                            <p className='font-semibold'>Google</p>
                            <span className='flex gap-x-1 items-center text-sm text-primary font-semibold'>4.3 <Star className='fill-primary text-white'/></span>
                        </div>

                        <div className='flex flex-col gap-y-2 text-sm text-gray-700'>
                            <p>10000+ çalışan · Mountain View. - California</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Placeat tenetur eum quae exercitationem laborum atque magnam ratione reiciendis neque. Explicabo...</p>
                            <div className='flex items-baseline gap-x-4 mt-2'>
                                <div className='flex items-baseline justify-start gap-x-2 font-semibold text-lg text-black'>4.9K <span className='text-sm text-primary'>jobs</span></div>
                                <div className='flex items-baseline justify-start gap-x-2 font-semibold text-lg text-black'>62.8K <span className='text-sm text-primary'>reviews</span></div>
                                <div className='flex items-baseline justify-start gap-x-2 font-semibold text-lg text-black'>122.4K <span className='text-sm text-primary'>salaries</span></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    </div>
  )
}
