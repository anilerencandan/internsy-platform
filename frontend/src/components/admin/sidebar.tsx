"use client"

import { MessageSquareX, MessageCircleX, PenTool, Users, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
}

export function Sidebar({ activePage, setActivePage }: SidebarProps) {
  const menuItems = [
    {
      id: "complaints",
      label: "Şikayetler",
      icon: MessageSquareX,
    },
    {
      id: "comment-complaints",
      label: "Şikayet Edilen Yorumlar",
      icon: MessageCircleX,
    },
    {
      id: "interview-complaints",
      label: "Şikayet Edilen Mülakatlar",
      icon: FileText,
    },
    {
      id: "blog",
      label: "Blog Paylaşma",
      icon: PenTool,
    },
    {
      id: "community-requests",
      label: "Topluluk Talepleri",
      icon: Users,
    },
  ]

  return (
    <div className="w-64 bg-white shadow-sm border-r">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
      </div>
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors",
                activePage === item.id
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-gray-600 hover:bg-gray-50",
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
