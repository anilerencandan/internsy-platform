import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function StartYourSearchSection() {
  return (
    <div className='px-4 flex flex-col gap-y-4 items-center text-center bg-[#f2f4f5] py-12 relative'>
        <h3 className='text-2xl font-semibold'>Keşfetmeye Başla</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi officia expedita cupiditate optio cumque iure doloremque impedit aliquam commodi.</p> 
        <ChevronDown className='absolute bottom-2 color-primay text-primary' size={32}/>
    </div>
  )
}
