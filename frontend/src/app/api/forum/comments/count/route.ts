import { createClient } from "@/utils/supabase/server"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const supabase = await createClient()
  const { searchParams } = new URL(req.url)
  const post_id = searchParams.get("post_id")

  if (!post_id) {
    return NextResponse.json({ error: "post_id gerekli" }, { status: 400 })
  }

  const { count, error } = await supabase
    .from("forum_post_comments")
    .select("*", { count: "exact", head: true })
    .eq("post_id", post_id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ comment_count: count || 0 })
}
