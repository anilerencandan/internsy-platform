// app/api/forum/comments/route.ts
import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { searchParams } = new URL(req.url)
  const post_id = searchParams.get('post_id')

  if (!post_id) {
    return NextResponse.json({ error: 'post_id gerekli' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('forum_post_comments')
    .select('*')
    .eq('post_id', post_id)
    .order('created_at', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { post_id, content } = await req.json()

  const { data: auth } = await supabase.auth.getUser()
  if (!auth?.user) {
    return NextResponse.json({ error: 'Giriş gerekli' }, { status: 401 })
  }

  if (!post_id || !content?.trim()) {
    return NextResponse.json({ error: 'Geçersiz istek' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('forum_post_comments')
    .insert({
      post_id,
      content,
      user_id: auth.user.id,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
