'use client';

import { Menu, Edit, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import SubMenu from './SubMenu';

const navLinks = [
  { label: 'Profil', href: '/profil' },
  { label: 'Bildirimler', href: '/profil/bildirimler' },
  { label: 'Katkılar', href: '/profil/katkilar' },
  { label: 'Ayarlar', href: '/profil/ayarlar' },
  { label: 'Takipler', href: '/profil/takipler' },
];

export default function UserInformationSection({
  onToggleEditMode,
}: {
  onToggleEditMode: () => void;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Ana içerik */}
      <div className="flex flex-col gap-y-4 sm:border border-gray-300 rounded-lg py-6 px-4">
        <div className="flex items-center relative justify-center">
          <h1 className="text-2xl font-bold text-primary">Profil</h1>
          <Menu
            size={24}
            className="absolute left-0 cursor-pointer sm:hidden block text-primary"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
        <div className="flex items-center justify-between py-2">
          <h2 className="text-lg font-semibold">Bilgilerim</h2>
          <button onClick={onToggleEditMode}>
            <Edit size={20} />
          </button>
        </div>
            <div className='flex flex-col'>
                <label htmlFor="">Employment status*</label>
                <p className=' text-gray-600'>Student</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Full Name</label>
                <p className=' text-gray-600'>Onur Er</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Location*</label>
                <p className=' text-gray-600'>Turkey, NC [US]</p>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">University or College*</label>
                <p className=' text-gray-600'>Kocaeli Univ</p>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Degree Type</label>
                <p className=' text-gray-600'>Bachelors</p>
            </div>

            {/* <div className="border-t-[1px] border-gray-300"></div>

            <h3 className='text-lg font-semibold'>Resume</h3>

            <p>prefill job application when you add a resume and use easy apply</p>
            
            <p>Your resume can be visible to hiring eemployers or you can keep it hidden. See the <a href="" className='text-primary underline'>privacy policiy</a> for mor info</p> */}
      </div>
      

    <SubMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="Profil Menüsü"
        widthClass="w-64"
      />
    </>
  );
}



//             <p>Get the best matches and a more relevant community experince</p>


           