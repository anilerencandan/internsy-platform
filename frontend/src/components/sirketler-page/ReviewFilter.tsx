import { Search, Settings2 } from 'lucide-react'
import React from 'react'
import SortDropdown from '../company-page/SortDropdown'

export default function ReviewFilter() {
  return (
        <div className='flex flex-col gap-y-4 p-4 border-b border-gray-300 text-sm'>
            <h3 className='text-xl font-bold'>Staj yapılan alana göre görüşler</h3>
            <div className="w-full flex bg-[#f4f4f4] rounded-full px-4 py-2 items-center gap-x-2">
            <Search />
            <input className="bg-transparent focus:outline-none w-full text-sm text-gray-800 placeholder:text-gray-500" type="text" placeholder="Staj Yapılan Alan" />
            <Settings2 />
            </div>
            <div className="flex items-center justify-between text-gray-600">
            <SortDropdown />
            </div>
        </div>
    )
}
