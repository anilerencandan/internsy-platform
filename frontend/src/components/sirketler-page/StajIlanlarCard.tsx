import React from 'react'
import StajIlan from '../company-page/StajIlanCard'

export default function StajIlanlarCard() {
  return (
    <div className='flex flex-col gap-y-4'>
        <h3 className='text-xl font-bold'>Staj İlanları</h3>
        <StajIlan />
    </div>
)
}
