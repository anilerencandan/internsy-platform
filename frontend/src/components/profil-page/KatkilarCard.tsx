import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

interface KatkilarCardProps {
    title: string;
    eventCount: number;
    icon: React.ReactNode;
    link?: string;
}

export default function KatkilarCard({title, eventCount, icon, link}: KatkilarCardProps) {
  return (
        <div  className='flex flex-col gap-y-4 p-4 border-b border-gray-300'>
        <div className='flex items-center justify-between '> 
            <div className='flex items-center gap-x-2 font-semibold '>
                {icon}
                {title + ` [${eventCount}]`} 

            </div>

            <Link href={link || "#"}>
                <ChevronRight size={20} />
            </Link>
        </div>

        <button className='w-fit bg-gray-100 rounded-md px-4 py-2 font-semibold text-center'>Görüş Ekle</button>
    </div>
    )
}
