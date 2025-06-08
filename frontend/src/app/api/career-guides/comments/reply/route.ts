import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { comment_id, content } = await req.json();

  if (!comment_id || !content?.trim()) {
    return NextResponse.json({ error: "Yanıt içeriği eksik" }, { status: 400 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Giriş yapmanız gerekiyor" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("career_comments_responses")
    .insert({
      comment_id,
      user_id: user.id,
      content,
    })
    .select(`
      *,
      users:user_id (
        fullname
      )
    `)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
