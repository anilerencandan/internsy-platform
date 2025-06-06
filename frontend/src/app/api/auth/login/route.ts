// app/api/auth/login/route.ts
import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }

  return NextResponse.json({ message: 'Giriş başarılı', data }, { status: 200 })
}
