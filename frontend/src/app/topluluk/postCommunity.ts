'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function postCommunity(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const category_id = formData.get('category_id') as string

  if (!title || !content || !category_id) {
    console.error("Eksik alan!")
    redirect('/error')
  }

  const { data: auth, error: authError } = await supabase.auth.getUser()
  if (authError || !auth.user) {
    redirect('/login')
  }

  const user_id = auth.user.id

  const { error: insertError } = await supabase.from('forum_posts').insert({
    user_id,
    category_id,
    title,
    content
  })

  if (insertError) {
    console.error("Post insert error:", insertError)
    redirect('/error')
  }

  revalidatePath('/topluluk')
  redirect('/topluluk')
}
