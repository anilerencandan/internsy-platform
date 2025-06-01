// app/api/forum/is-liked/route.ts
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = new URL(req.url);
  const post_id = searchParams.get("post_id");

  const { data: auth } = await supabase.auth.getUser();

  if (!auth?.user) {
    return NextResponse.json({ liked: false });
  }

  const user_id = auth.user.id;

  const { data, error } = await supabase
    .from("forum_post_likes")
    .select("id")
    .eq("post_id", post_id)
    .eq("user_id", user_id)
    .single();

  return NextResponse.json({ liked: !!data });
}
