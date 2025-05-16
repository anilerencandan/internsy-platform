import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

export default function SirketCard() {
  return (
    <Link  href={'/sirket'} className='flex flex-col gap-y-4 p-4 hover:bg-gray-100 rounded-md border border-gray-200'>
        <div className='flex flex-col gap-y-2 gap-x-2'>
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl font-bold flex-shrink-0`}
            >
              G
            </div>
            <div className='flex items-center gap-x-1'>
                <h3 className='font-medium'>Google</h3><span className="mx-1">•</span>
                <span className='flex gap-x-1 items-center text-sm text-black font-semibold'>
                    4.3 <Star size={16} className='fill-yellow-400 text-yellow-400'/>                                    

                </span>
            </div>
        </div>

        <div className='flex flex-col gap-y-2 text-sm text-gray-700'>
            <p>10000+ çalışan · Mountain View. - California</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Placeat tenetur eum quae exercitationem laborum atque magnam ratione reiciendis neque. Explicabo...</p>
            <div className='flex items-baseline gap-x-4 mt-2'>
                <div className='flex items-baseline justify-start gap-x-2 font-bold text-lg text-primary'>15<span className='text-sm font-bold text-black'>Staj İlanı</span></div>
                <div className='flex items-baseline justify-start gap-x-2 font-bold text-lg text-primary'>62<span className='text-sm font-bold text-black'>Çalışan Görüşü</span></div>
                <div className='flex items-baseline justify-start gap-x-2 font-bold text-lg text-primary'>34<span className='text-sm font-bold text-black'>Mülakat Deneyimi</span></div>

            </div>
        </div>
        </div>
    </Link>
  )
}
