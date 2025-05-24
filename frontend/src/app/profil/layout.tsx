'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import React, { ReactNode } from 'react';
import { LogOut } from 'lucide-react';

interface ProfileLayoutProps {
  children: ReactNode;
}

const navLinks = [
  { label: 'Profil', href: '/profil' },
  { label: 'Bildirimler', href: '/profil/bildirimler' },
  { label: 'Katkılar', href: '/profil/katkilar' },
  { label: 'Ayarlar', href: '/profil/ayarlar' },
  { label: 'Takipler', href: '/profil/takipler' },
];

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const pathname = usePathname();

  return (
    <div className='page-content sm:grid grid-cols-12 gap-x-12 xl:px-0 sm:px-4 px-0 sm:pt-4 mb-6'>
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm sticky top-20 h-fit'>
        <div className='flex flex-col border border-gray-300 rounded-lg gap-y-4 py-6 px-4'>
          <div className='flex flex-col gap-y-4 shrink-0'>
            <div className='rounded-full w-20 h-20 flex items-center justify-center text-3xl font-semibold shadow-md'>
              OE
            </div>

            <div className='font-semibold text-lg'>Onur Er</div>
            <div>Kocaeli Üniversitesinde Öğrenci</div>

            <Separator className='my-2' />

            <div className='flex flex-col gap-y-2'>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-2 px-1 transition-all duration-200 text-base ${
                      isActive ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {isActive && <div className='w-1 h-4 bg-blue-600 rounded-sm' />}
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <Separator className='my-2' />

            <Link href={'/'} className='w-full flex items-center justify-between text-base'>Çıkış Yap <LogOut /></Link>

          </div>
        </div>
      </div>

      <div className='lg:col-span-9 sm:col-span-8 col-span-12'>{children}</div>

    </div>
  );
}
