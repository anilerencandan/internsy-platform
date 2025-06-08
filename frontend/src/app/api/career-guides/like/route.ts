import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const { searchParams } = new URL(req.url)
    const guide_id = searchParams.get('guide_id')

    const supabase = await createClient()

    const {data:auth, error} = await supabase.auth.getUser()
    if(!auth?.user){
        return NextResponse.json({error: 'Giris gerekli'}, {status: 401})
    }


    const user_id = auth.user.id

    console.log('user_idaaaa:', user_id)
    
    const {data:existing , error: existErr} = await supabase
    .from('career_guide_likes')
    .select('*')
    .eq('user_id', user_id)
    .eq('guide_id', guide_id)

    console.error('exist error', existing)

    if(existing && existing.length > 0){
        const {error: insertError } = await supabase
        .from('career_guide_likes')
        .delete()
        .eq('user_id', user_id)
        .eq('guide_id', guide_id)

        console.log('inserterrorrrr:', insertError)

        return NextResponse.json({liked: false})
    }else{
        const {error} = await supabase
        .from('career_guide_likes')
        .insert({guide_id, user_id})

        console.log('anassinin error:', error)

        return NextResponse.json({liked:true})
    }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const guide_id = searchParams.get("guide_id");

  if (!guide_id) {
    return NextResponse.json({ error: "guide_id gerekli" }, { status: 400 });
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ liked: false }); // Giriş yapmamışsa beğenemez
  }

  const { data, error } = await supabase
    .from("career_guide_likes")
    .select("id")
    .eq("user_id", user.id)
    .eq("guide_id", guide_id)
    .single(); // varsa tek kayıt

  if (error && error.code !== "PGRST116") {
    // PGRST116 = single() içinde kayıt bulunamadı
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

    const { count } = await supabase
    .from("career_guide_likes")
    .select("*", { count: "exact", head: true })
    .eq("guide_id", guide_id)

    return NextResponse.json({ liked: !!data, count });
}
