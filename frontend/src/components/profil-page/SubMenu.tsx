
import { LogOut, X } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  widthClass?: string; // e.g. "w-64", "w-80"
}

export default function SlideOver({
  isOpen,
  onClose,
  title = 'Menü',
  widthClass = 'w-64',
}: SlideOverProps) {

    const navLinks = [
  { label: 'Profil', href: '/profil' },
  { label: 'Bildirimler', href: '/profil/bildirimler' },
  { label: 'Katkılar', href: '/profil/katkilar' },
  { label: 'Ayarlar', href: '/profil/ayarlar' },
  { label: 'Takipler', href: '/profil/takipler' },
];
  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-30 z-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 bg-white shadow-xl
          transform transition-transform duration-300
          ${widthClass}
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300 h-[64px]">
          <h2 className="font-semibold text-lg">{title}</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col px-4 py-2 gap-y-2 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-gray-700 hover:text-primary"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <Separator className="my-2" />
            <Link href={'/'} className="w-full flex items-center justify-between text-base">
                Çıkış Yap <LogOut />
            </Link>
        </nav>
        
      </aside>
    </>
  );
}
