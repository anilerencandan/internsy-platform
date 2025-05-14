import TopicPost from '@/components/kariyer-rehberi/TopicPost'
import { Search } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col'>
        {/* head section */}
        <div className='flex flex-col gap-y-4 p-4 border-b-[1px] border-gray-300'>
            <div className='flex items-center gap-x-4'>
                <div className='bg-gray-300 rounded-md shadow-md w-16 h-16'></div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl font-bold'>Teknoloji</h1>
                </div>
            </div>
            <div className='flex items-center gap-x-2 text-sm'>
                <button className='text-center border rounded-md px-4 py-2'>Takip Et</button>
            </div>
        </div>

        <div className="flex items-center justify-center gap-x-8 text-sm border-b-[1px] border-gray-300">
            <div className="flex flex-col items-center p-4 border-b-[4px] border-primary">
                <p className="font-semibold">En Yeni</p>
                <p className="text-xs text-gray-600">Paylaşımlar</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <p className="font-semibold">En Popüler</p>
                <p className="text-xs text-gray-600">Paylaşımlar</p>
            </div>
        </div>

            {/* search bar */}

            <div className="flex items-center text-sm p-4 border-b-[1px] border-gray-300">
                <div className="flex items-center gap-x-2 flex-1">
                    <Search size={16} />
                    <input
                    type="text"
                    placeholder="Arama"
                    className="flex-1 bg-transparent focus:outline-none"
                    />
                </div>
            </div>

        {/* posts section */}
        {Array.from({ length: 5 }, (_, index) => (
            <TopicPost key={index} />
        ))}



        <div className='flex items-center justify-between p-6 '>
            <span>Geri</span>
                {Array.from({length: 5}).map((_, index) => (
                    <span key={index}>{index}</span>
                ))}         
            <span>İleri</span>
        </div>
    </div>


)
}