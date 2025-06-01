import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    const supabase = await createClient()
    const {post_id} = await req.json()

    const {data: auth} = await supabase.auth.getUser()
    if(!auth?.user) {
        return NextResponse.json({error: "Giris gerekli"}, {status:401})
    }

    const user_id = auth.user.id

    const {data: existing, error: existErr} = await supabase
        .from('forum_post_likes')
        .select('*')
        .eq('post_id', post_id)
        .eq('user_id', user_id)
        .single()

       
    console.error('exist error', existErr)

    if(existing) {
        await supabase
            .from('forum_post_likes')
            .delete()
            .eq('post_id', post_id)
            .eq('user_id', user_id)

        return NextResponse.json({liked: false})
    } else {
        const {error} = await supabase
            .from('forum_post_likes')
            .insert({post_id, user_id})


        return NextResponse.json({liked: true})
    }

}

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { searchParams } = new URL(req.url);
  const post_id = searchParams.get("post_id");

  if (!post_id) {
    return NextResponse.json({ error: "post_id gerekli" }, { status: 400 });
  }

  const { count, error } = await supabase
    .from("forum_post_likes")
    .select("*", { count: "exact", head: true })
    .eq("post_id", post_id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ like_count: count || 0 });
}