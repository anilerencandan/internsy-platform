import React from 'react'

export default function Pagination() {
  return (
        <div className='flex items-center justify-between p-6'>
            <span>Geri</span>
            {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>{index}</span>
            ))}
            <span>İleri</span>
        </div>
  )
}
