import React from 'react'
import StajIlan from '../company-page/StajIlanCard'

export default function StajIlanlarCard() {
  return (
    <div className='flex flex-col gap-y-4'>
        <h3 className='text-xl font-bold'>Staj İlanları</h3>
        <StajIlan />
        {/* <div className='flex flex-col text-sm '>
          <div className='flex items-center gap-x-2 pb-4'><FaGoogle size={16}/>Google</div>
          <p className='font-bold text-sm'>Sex Mühendisi</p>
          İstanbul
        </div> */}
    </div>
)
}
