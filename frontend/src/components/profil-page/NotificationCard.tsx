"use client"

import { useState } from "react"
import { Bell, Briefcase, Calendar, CheckCircle, ChevronLeft, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SubMenu from "./SubMenu"

export default function NotificationCards() {
  const [activeTab, setActiveTab] = useState("all")

  const notifications = [
    {
      id: 1,
      type: "application",
      title: "Başvurunuz İnceleniyor",
      description: "ABC Şirketi staj başvurunuzu inceliyor",
      time: "10 dakika önce",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
      read: false,
    },
    {
      id: 2,
      type: "message",
      title: "Yeni Mesaj",
      description: "İK Yöneticisi size bir mesaj gönderdi",
      time: "1 saat önce",
      icon: <MessageSquare className="h-5 w-5 text-green-500" />,
      read: false,
    },
    {
      id: 3,
      type: "interview",
      title: "Mülakat Daveti",
      description: "XYZ Şirketi ile mülakat için davet edildiniz",
      time: "3 saat önce",
      icon: <Calendar className="h-5 w-5 text-purple-500" />,
      read: false,
    },
    {
      id: 4,
      type: "system",
      title: "Profiliniz Tamamlandı",
      description: "Profiliniz %100 tamamlandı, tebrikler!",
      time: "1 gün önce",
      icon: <CheckCircle className="h-5 w-5 text-blue-500" />,
      read: true,
    },
    {
      id: 5,
      type: "application",
      title: "Başvuru Sonucu",
      description: "DEF Şirketi başvurunuzu değerlendirdi",
      time: "2 gün önce",
      icon: <Briefcase className="h-5 w-5 text-blue-500" />,
      read: true,
    },
  ]

  const filteredNotifications =
    activeTab === "all" ? notifications : notifications.filter((notification) => notification.type === activeTab)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  return (
    <div className="w-full mx-auto">
      <div className="flex items-center justify-between mb-4">
                  <ChevronLeft
            size={24}
            className=" left-0 cursor-pointer sm:hidden block text-primary"
            onClick={() => setIsSidebarOpen(true)}
          />

        
        <h2 className="text-2xl font-bold text-primary">Bildirimler</h2>
        <Badge variant="outline" className="bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-full">
          {notifications.filter((n) => !n.read).length} Yeni
        </Badge>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="all">Tümü</TabsTrigger>
          <TabsTrigger value="application">Başvurular</TabsTrigger>
          <TabsTrigger value="message">Mesajlar</TabsTrigger>
          <TabsTrigger value="interview">Mülakatlar</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="space-y-3">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={`border-l-4 border-gray-300 ${notification.read ? "border-l-gray-300" : "border-l-blue-500"}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 bg-gray-50 p-2 rounded-full">{notification.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base font-semibold">{notification.title}</CardTitle>
                          {!notification.read && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                        </div>
                        <CardDescription className="mt-1 text-sm text-gray-600">
                          {notification.description}
                        </CardDescription>
                        <div className="mt-2 flex items-center text-xs text-gray-500">
                          <Clock className="mr-1 h-3 w-3" />
                          {notification.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <Bell className="mx-auto h-10 w-10 text-gray-300" />
                <p className="mt-2 text-gray-500">Bu kategoride bildirim bulunmamaktadır</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <SubMenu
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              title="Profil Menüsü"
              widthClass="w-64"
            />
    </div>
  )
}
