import { SquareArrowOutUpRight } from 'lucide-react'
import React from 'react'
import RatingStars from './RatingStars'
import CompanyPost from './CompanyPost'

export default function OverviewSection() {
  return (
    <>
      <div className='flex flex-col gap-y-2 text-sm font-semibold border-b border-gray-300 pb-4'>
        <div className='flex flex-col gap-y-2  text-sm font-semibold border-b border-gray-300 pb-2'>
            <h1 className='text-2xl font-bold'>Google Görüşleri</h1>
            <RatingStars value={4.4} />
            <p className='text-black'>Staj deneyiminden memnun kalanların oranı: %84</p>
            <p className='text-gray-600'>[43122 tane toplam görüş]</p>
        </div> 

        <div className='flex items-center gap-x-2 text-primary'>
          <a href="">goo.gle/4ehVuXi</a>
          <SquareArrowOutUpRight size={12} />
        </div>
        <p>Mountain View, Amerika</p>
        <p>10000+ Çalışan</p>
        <p>Kategori: Teknoloji</p>
        <p>Kuruluş: 1998</p>
        <p>Gelir: $10+ Milyar [USD]</p>
      </div>

        {Array.from({ length: 5 }, (_, index) => (
          <CompanyPost key={index}/>
        ))}


    </>
    )
}
