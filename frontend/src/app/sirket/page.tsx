import React from 'react'
import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { CircleCheck, SquareArrowOutUpRight, Star } from 'lucide-react'

export default function Sirket() {
  return (
    <div className='page'>
        <div className='flex flex-col gap-y-6'>
            <div className='relative min-h-[96px] '>
                <Image src={'/images/google-kapak.jpeg'} fill className='object-cover object-center' alt={'google-kapak'}/>
                <div className='absolute -bottom-4 left-4 bg-white border-[1px] border-gray-300 rounded-md overflow-hidden '>
                    <FaGoogle className='p-2' size={48}/>
                </div>
            </div>

            <div className='flex flex-col gap-y-1 px-4'>
                <h3 className='text-2xl font-semibold'>Google</h3>
                <h4 className='text-sm text-gray-700 flex gap-x-2 items-center'><CircleCheck size={16} /> Onaylı Şirket</h4>
                <div className='grid grid-cols-2 items-center gap-x-4 text-sm font-semibold py-4'>
                    <button className='border border-black p-2 rounded-lg text-center '>
                        Takip Et
                    </button>
                    <button className='border border-black p-2 rounded-lg text-center text-white bg-black'>
                        Görüş Ekle
                    </button>
                </div>
            </div>

            <div className='flex gap-x-6 px-4'>
                <div className='w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm '>Genel Bilgiler<span className='bg-primary w-full h-1 mt-1'/></div>
                <div className='w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm '><span>63K</span>Görüşler<span className='bg-primary w-full h-1 mt-1'/></div>
                <div className='w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm '><span>63K</span>Mülakatlar<span className='bg-primary w-full h-1 mt-1'/></div>
                <div className='w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm '><span>4.9K</span>Staj İlanları<span className='bg-primary w-full h-1 mt-1'/></div>
                <div className='w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm '>Maaş Bilgisi<span className='bg-primary w-full h-1 mt-1'/></div>
            </div>
        </div>

        <div className="border-t-[1px] border-gray-300"></div>

        <div className='flex flex-col gap-y-2 p-4 text-sm font-semibold'>
            <div className='flex items-center gap-x-2'><h1 className='text-2xl font-bold'>Genel Puan</h1> <span className='flex items-center gap-x-1 font-bold text-lg'>4.3<Star size={16} fill=''/></span></div>
            <div className='flex items-center gap-x-2 text-primary'><a href="">goo.gle/4ehVuXi</a><SquareArrowOutUpRight size={12} /></div>
            <p>Mountain View, Amerika</p>
            <p>10000+ Çalışan</p>
            <p>Kategori: Teknoloji</p>
            <p>Kuruluş: 1998</p>
            <p>Gelir: $10+ Milyar [USD]</p>
            
        </div>

    </div>
  )
}
