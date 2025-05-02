'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function LandingPage() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) router.replace('/forum')
      else setLoading(false)
    })
  }, [router])

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Yükleniyor…</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}
