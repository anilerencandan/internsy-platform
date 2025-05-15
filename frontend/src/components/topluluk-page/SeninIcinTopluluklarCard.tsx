import React from 'react'
import { Button } from '../ui/button'
import type { CommunityCardType } from '@/models/Community'
import sampleCommunities from '@/sample/CommunitySampleData.json'
import { AnonimAvatar } from '../AnonimAvatar'
import {
  BrainCircuit,
  Code,
  ShieldCheck,
  Briefcase
} from 'lucide-react'

const iconMap: Record<string, JSX.Element> = {
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-gray-600" />,
  Code: <Code className="w-5 h-5 text-gray-600" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-gray-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-gray-600" />
}

export default function SeninIcinTopluluklarCard() {
  const topluluklar = sampleCommunities as CommunityCardType[]

  return (
    <div className='flex flex-col gap-y-4 rounded-lg overflow-hidden'>
      <div className='flex flex-col pt-4 rounded-lg overflow-hidden border border-gray-300'>
        <h2 className='text-lg font-semibold px-4'>Senin için Topluluklar</h2>
        <a href="" className='text-primary font-semibold p-4 border-b border-gray-300'>Toplulukları Keşfet</a>

        {topluluklar.map((topluluk) => (
          <div key={topluluk.id} className='p-4 flex gap-x-2 border-b border-gray-300 w-full hover:bg-gray-100'>
            <div className='hidden xl:flex flex-col items-center text-xs font-bold gap-y-1 overflow-hidden shrink-0 text-gray-400'>
              <AnonimAvatar icon={topluluk.icon ? iconMap[topluluk.icon] : undefined} />
              {topluluk.followers}
            </div>
            <div className='flex flex-col text-sm'>
              <strong>{topluluk.name}</strong>
              <p className='text-xs text-gray-600'>{topluluk.description}</p>
              <div className='flex justify-end gap-x-2 pt-2 font-semibold'>
                <Button className='rounded-lg px-4 py-2 text-black bg-transparent hover:bg-primary hover:text-white shadow-none'>Görüntüle</Button>
                <Button className='bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 text-black'>Takip Et</Button>
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
