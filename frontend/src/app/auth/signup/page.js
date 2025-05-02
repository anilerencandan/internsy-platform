// src/app/auth/signup/page.js
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    setLoading(false)

    if (error) {
      setErrorMsg(error.message)
    } else {
      // Başarılı kayıt → mail onayı ekranına yönlendirebilirsin
      router.push('/auth/login?fromSignup=true')
    }
  }

  return (
    <form onSubmit={handleSignUp} className="space-y-6">
      <h1 className="text-2xl font-bold text-center">Kayıt Ol</h1>
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
        {loading ? 'Bekleyin...' : 'Kayıt Ol'}
      </button>
      <p className="text-center text-sm">
        Zaten hesabın var mı?{' '}
        <a href="/auth/login" className="text-indigo-600 hover:underline">
          Giriş Yap
        </a>
      </p>
    </form>
  )
}
