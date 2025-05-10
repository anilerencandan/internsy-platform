import MaaslarPost from '@/components/maaslar-page/MaaslarPost'
import { Building, Flag, Forward, Star } from 'lucide-react'
import React from 'react'

export default function MaaslarSection() {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
            <div className='flex gap-x-4'>
                <div className='flex flex-col gap-y-4 justify-center'>
                    <div className='flex items-center text-sm text-gray-600 gap-x-1'><Star size={16} fill='black'/>4,07 (2529 Mulakat)  </div>
                </div>
            </div>
            <div className='flex items-center  gap-x-2'>
                <button className='flex items-center text-sm border border-black rounded-lg px-4 py-2 gap-x-1'><Star size={16} fill='black'/> Mulakat Paylas</button>
            </div>
        </div>

        <div className='flex flex-col gap-y-2'>
            <h2 className='text-xl font-bold p-4'>2529 Mulakat Sureci</h2>

            {Array.from({length: 5}, (_, index) => (
                <MaaslarPost key={index} />
            ))}
        </div>
    </div>
  )
}
