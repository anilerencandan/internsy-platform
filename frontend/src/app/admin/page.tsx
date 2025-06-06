"use client"

import { useState } from "react"
import { LoginPage } from "@/components/admin/login-page"
import { Sidebar } from "@/components/admin/sidebar"
import { ComplaintsPage } from "@/components/admin/complaints-page"
import { BlogPage } from "@/components/admin/blog-page"
import { CommunityRequestsPage } from "@/components/admin/community-requests-page"
import { CommentComplaintsPage } from "@/components/admin/comment-complaints-page"
import { InterviewComplaintsPage } from "@/components/admin/interview-complaints-page"

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState("complaints")

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const renderPage = () => {
    switch (activePage) {
      case "complaints":
        return <ComplaintsPage />
      case "comment-complaints":
        return <CommentComplaintsPage />
      case "interview-complaints":
        return <InterviewComplaintsPage />
      case "blog":
        return <BlogPage />
      case "community-requests":
        return <CommunityRequestsPage />
      default:
        return <ComplaintsPage />
    }
  }

  // Giriş yapılmamışsa login sayfasını göster
  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />
  }

  // Giriş yapılmışsa admin panelini göster
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 p-6">{renderPage()}</main>
    </div>
  )
}
