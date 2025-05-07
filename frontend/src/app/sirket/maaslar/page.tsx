import Link from "next/link"
import { ChevronLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CompanyTabs from '@/components/company-page/CompanyTabs'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { CircleCheck, Search, Settings2, SquareArrowOutUpRight, Star } from 'lucide-react'


export default function SalaryPage() {
  return (
    <div className="page">
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
        
    <div className="p-4">
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
  </div>
  )
}