import { Flag, Forward, Star } from 'lucide-react'
import React from 'react'

export default function MaaslarPost() {
  return (
    <div className='flex flex-col gap-y-4 border-b border-gray-300 p-4'>
    <div className='flex flex-col w-fit items-center p-4 gap-y-2 bg-gray-100 rounded-lg '>
        <p className='font-bold text-lg'>3</p>
        <div className='flex items-center gap-x-1'>
            {Array.from({length: 5}, (_, index) => (
                <Star size={12} fill='black'/>
            ))}
        </div>
    </div>

    <div className='text-sm underline'>Anonim Mulakat Katilimcisi</div>

    <div className='flex flex-col text-sm'>
        <p className='text-bold'>Makina Muhendis</p>
        <p className='text-gray-600'>6 Mayis 2025</p>
    </div>
    
    <p className='text-sm'>Teklif Yapilmadi X Mulakat Zordu X <br /> ilk olarak telefon gorusmesi ypaildi Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    
    <p className='text-sm text-gray-600 mt-4'>Bu bilgi faydali mi ?</p>

    <div className='flex items-center justify-between'>
        <button className='bg-black text-white rounded-lg px-4 py-2 text-sm'>Evet</button>
        <div className='flex items-center gap-x-2'>
            <Flag size={20} fill='black'/>
            <Forward size={20} fill='black'/>
        </div>
    </div>
</div>

)
}
