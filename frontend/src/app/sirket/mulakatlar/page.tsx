import React from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { CircleCheck, Search, Settings2, SquareArrowOutUpRight, Star } from 'lucide-react'
import CompanyPost from '@/components/company-page/CompanyPost'
import SortDropdown from '@/components/company-page/SortDropdown'
import RatingStars from '@/components/company-page/RatingStars'
import CompanyTabs from '@/components/company-page/CompanyTabs'
import MulakatlarSection from '@/components/company-page/MulakatlarSection'

export default function Sirket() {
  return (
    <div className='page'>
      {/* Banner + Şirket Bilgileri */}
      <div className='flex flex-col gap-y-6'>
        <div className='relative min-h-[96px]'>
          <Image src={'/images/google-kapak.jpeg'} fill className='object-cover object-center' alt={'google-kapak'} />
          <div className='absolute -bottom-4 left-4 bg-white border border-gray-300 rounded-md overflow-hidden'>
            <FaGoogle className='p-2' size={48} />
          </div>
        </div>

        <div className='flex flex-col gap-y-1 px-4'>
          <h3 className='text-2xl font-semibold'>Google</h3>
          <h4 className='text-sm text-gray-700 flex gap-x-2 items-center'><CircleCheck size={16} /> Onaylı Şirket</h4>
          <div className='grid grid-cols-2 items-center gap-x-4 text-sm font-semibold py-4'>
            <button className='border border-black p-2 rounded-lg'>Takip Et</button>
            <button className='border border-black p-2 rounded-lg text-white bg-black'>Görüş Ekle</button>
          </div>
        </div>

        {/* Tıklanabilir Sekmeler */}
        <CompanyTabs />
      </div>
    <MulakatlarSection />
</div>
)
}