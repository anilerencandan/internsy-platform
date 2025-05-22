'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const tabs = [
    { label: "Profil", href: "/profil" },
    { label: "Katkılar", href: "/profil/katkilar" },
    { label: "Bildirimler", href: "/profil/bildirimler" },
    { label: "Ayarlar", href: "/profil/ayarlar" },
    { label: "Kaydedilenler", href: "/profil/kaydedilenler" },
  ]

export default function TabsSection() {
    const path = usePathname()

    return (
      <div className="bg-white border-t border-gray-200 px-2 py-2 flex flex-wrap gap-2 justify-center items-center">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`w-[88px] sm:w-[110px] md:w-[120px] px-2 sm:px-3 py-1 text-center text-[11px] sm:text-sm rounded-md border font-medium whitespace-nowrap
              ${path === tab.href 
                ? "bg-primary text-white border-primary"
                : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200 transition"}`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    );
}
