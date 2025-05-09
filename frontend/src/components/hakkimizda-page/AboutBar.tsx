// components/AboutTabs.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Vizyon & Misyon", href: "/hakkimizda/vizyon-misyon" },
]

export default function AboutTabs() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-6 text-sm font-medium border-b px-4">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`py-4 ${
              isActive
                ? "text-emerald-600 border-b-2 border-emerald-600"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {tab.name}
          </Link>
        )
      })}
    </nav>
  )
}