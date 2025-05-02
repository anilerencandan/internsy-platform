// src/app/page.js
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function LandingPage() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace('/forum')
      } else {
        setSession(null)
        setLoading(false)
      }
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, sessionData) => {
        const session = sessionData?.session
        if (session) router.replace('/forum')
      }
    )    
    return () => subscription.unsubscribe()
  }, [router])

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Yükleniyor…</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            internsy
          </Link>
          <div className="space-x-4">
            <Link
              href="/auth/login"
              className="px-4 py-2 border rounded-md hover:bg-gray-100 text"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero (sadece metin) */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-600">
          Your work people are here
        </h1>
        <p className="mt-4 text-gray-700">
          Connect anonymously with fellow interns about companies, salaries, interviews and more.
        </p>
        <div className="mt-8">
          <Link
            href="/auth/signup"
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Continue with Email
          </Link>
        </div>
      </div>
    </div>  
  )
}
