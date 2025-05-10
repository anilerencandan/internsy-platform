import React from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { CircleCheck, Search, Settings2, SquareArrowOutUpRight, Star } from 'lucide-react'
import CompanyPost from '@/components/company-page/CompanyPost'
import SortDropdown from '@/components/company-page/SortDropdown'
import RatingStars from '@/components/company-page/RatingStars'
import CompanyTabs from '@/components/company-page/CompanyTabs'
import MulakatlarSection from '@/components/company-page/MulakatlarSection'
import OverviewSection from '@/components/company-page/OverviewSection'

export default function Sirket() {
  return (
    <div className=''>
      {/* Banner + Şirket Bilgileri */}
        <div className="">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl text-gray-700 mb-2">Staj Ücreti</h2>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600">
              17.000 - 22.500 TL<span className="text-xl sm:text-2xl md:text-3xl font-normal"> /aylık</span>
            </div>
          </div>

          <div className="bg-gray-50 p-2">

            <h3 className="text-lg sm:text-xl text-gray-600 mb-4">Veri Bilgisi</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="bg-emerald-600 p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 text-sm sm:text-base text-gray-600">
                <span className="font-medium">Güvenilir</span>
                <span className="text-gray-400">•</span>
                <span>Güncellendi: 4 Mayıs 2025</span>
                <span className="text-gray-400">•</span>
                <span>49.300 maaş bildirimi</span>
                <span className="text-gray-400">Maaş Bilgisi, tarihe ve çalışacağınız güne göre değişkenlik gösterebilir</span>
              </div>
            </div>

            <div className="mt-3 sm:mt-2 ml-0 sm:ml-11">
              <div className="h-1.5 w-28 sm:w-32 bg-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>

        
        {/* <MulakatlarSection /> */}
    
    </div>
  )
}

