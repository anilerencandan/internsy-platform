import React from 'react'

export default function FilterSection() {
  return (
    <>
    <h1 className='text-2xl font-bold'>Aradığın Şirketi Bul</h1>

            <div>
                <label className='text-sm' htmlFor="">Şirket İsmi</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Şirket seçin' type="text" name="" id="" />
            </div>

            <div>
                <label className='text-sm' htmlFor="">Lokasyonu</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Konum seçin' type="text" name="" id="" />
            </div>

            <div>
                <label className='text-sm' htmlFor="">Endüstri</label>
                <input className='bg-gray-100 rounded-full placeholder:text-gray-600 py-2 px-4 w-full' placeholder='Endustri seçin' type="text" name="" id="" />
            </div>
            
            <div className='flex items-center justify-end'>
                <button className='rounded-[8px] bg-black text-white p-2'>Ara</button>
            </div>

            <div className="border-t-[1px] border-gray-300"></div>
</>
)
}
