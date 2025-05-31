'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.log(error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullname = formData.get('fullname') as string
  const university = formData.get('university') as string

  // 1. Supabase Auth üzerinden kullanıcıyı oluştur
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error || !data.user) {
    console.error('Auth error:', error)
    redirect('/error')
  }

  const auth_id = data.user.id

  // 2. users tablosuna kullanıcı bilgilerini ekle
  const { error: insertError } = await supabase.from('users').insert({
    auth_id,
    email,
    fullname,
    university,
    role: 'student', // varsayılan değer zaten bu ama elle de yazabilirsin
  })

  if (insertError) {
    console.error('Insert error:', insertError)
    redirect('/error')
  }

  // 3. Başarılıysa yönlendir
  revalidatePath('/', 'layout')
  redirect('/')
}