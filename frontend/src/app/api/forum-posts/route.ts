// app/api/topluluk-review/route.ts
import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json(data)
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { category_id, user_id, title, content, display_name } = body

    const { data, error } = await supabase
      .from('forum_posts')
      .insert([
        {
          category_id,
          user_id,
          title,
          content,
          display_name,
          like_count: 0,
          comment_count: 0,
          is_deleted: false,
          created_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('POST Hatası:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(data[0])
  } catch (err) {
    console.error('Sunucu hatası:', err)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json()

  const { error } = await supabase
    .from('forum_posts')
    .delete()
    .eq('id', id)

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ message: 'Silindi' })
}
