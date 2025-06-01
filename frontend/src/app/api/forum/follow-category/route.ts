// app/api/forum/follow-category/route.ts
import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const supabase = await createClient()
  const { category_id } = await req.json()

  const { data: auth } = await supabase.auth.getUser()
  if (!auth?.user) return NextResponse.json({ error: "Giriş gerekli" }, { status: 401 })

  const user_id = auth.user.id

  // Takip var mı kontrol et
  const { data: existing } = await supabase
    .from("community_followers")
    .select("*")
    .eq("user_id", user_id)
    .eq("category_id", category_id)
    .single()

  if (existing) {
    // Zaten takip ediyorsa sil (takipten çık)
    await supabase
      .from("community_followers")
      .delete()
      .eq("user_id", user_id)
      .eq("category_id", category_id)

    return NextResponse.json({ following: false })
  } else {
    // Takip et
    const { error } = await supabase
      .from("community_followers")
      .insert({ user_id, category_id })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ following: true })
  }
}
