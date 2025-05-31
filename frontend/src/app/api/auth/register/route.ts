import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password, fullname, university } = await req.json()

  // 1. Auth kaydı
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 })
  }

  const authUser = authData.user

  // 2. users tablosuna ekleme (auth_id zorunlu)
  const { error: userInsertError } = await supabase.from('users').insert([
    {
      auth_id: authUser?.id, // 🔥 bunu ekledik
      email,
      fullname,
      university,
      created_at: new Date().toISOString(),
    },
  ])

  if (userInsertError) {
    return NextResponse.json({ error: userInsertError.message }, { status: 500 })
  }

  return NextResponse.json({ message: 'Kayıt başarılı', user: authUser }, { status: 200 })
}
