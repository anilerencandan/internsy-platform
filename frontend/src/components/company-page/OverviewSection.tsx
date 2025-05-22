import React from 'react'
import RatingStars from './RatingStars'
import CompanyPost from './CompanyPost'
import { Info } from "lucide-react"
import { SquareArrowOutUpRight } from 'lucide-react'
import StajIlanlarCard from "@/components/sirketler-page/StajIlanlarCard";


export default function OverviewSection() {
  return (
    <>
      <div className='flex flex-col gap-y-2 text-sm font-semibold border-b border-gray-300 pb-4'>

        <div className='flex flex-col gap-y-2  text-sm font-semibold  border-gray-300 pb-2'>
            <h1 className='text-2xl font-bold'>Google Görüşleri</h1>   

          <div className="flex items-center gap-x-1">
            <RatingStars value={4.4} />
            <Info className="h-4 w-4 text-gray-400" />
          </div>

          <p className="text-black">Staj deneyiminden memnun kalanların oranı: %84</p>
          <p className="text-gray-600">[43122 tane toplam görüş]</p>
        </div> 


      </div>

        {Array.from({ length: 5 }, (_, index) => (
          <CompanyPost key={index}/>
        ))}


    </>
    )
}
