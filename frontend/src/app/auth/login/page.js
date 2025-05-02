// src/app/auth/login/page.js
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const router = useRouter()
  const params = useSearchParams()
  const fromSignup = params.get('fromSignup')

  useEffect(() => {
    if (fromSignup) {
      setErrorMsg('Kayıt başarılı! Lütfen giriş yapın.')
    }
  }, [fromSignup])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
    } else {
      router.push('/') // girişten sonra anasayfa
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-red-500">Giriş Yap</h1>
      {errorMsg && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">Şifre</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Bekleyin...' : 'Giriş Yap'}
      </button>
      <p className="text-center text-sm">
        Hesabın yok mu?{' '}
        <a href="/auth/signup" className="text-indigo-600 hover:underline">
          Kayıt Ol
        </a>
      </p>
    </form>
  )
}
