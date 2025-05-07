'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { label: "Genel Bilgiler", href: "/sirket" },
  { label: "Mülakatlar", href: "/sirket/mulakatlar" },
  { label: "Staj İlanları", href: "/sirket/staj-ilanlari" },
  { label: "Maaş Bilgisi", href: "/sirket/maaslar" },
]

export default function CompanyTabs() {
  const path = usePathname()

  return (
    <div className='flex overflow-x-auto scrollbar-hide gap-x-4 px-4 border-b'>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`w-fit text-center flex flex-col justify-end gap-y-1 font-semibold text-sm pb-2 ${
            path === tab.href ? "text-primary border-b-2 border-primary" : "text-gray-700"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}