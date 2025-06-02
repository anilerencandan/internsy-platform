import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server"; // senin oluşturduğun yol

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  const { searchParams } = new URL(req.url);
  const category_id = searchParams.get("category_id");

  if (!category_id) {
    return NextResponse.json({ error: "category_id gerekli" }, { status: 400 });
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Kullanıcı doğrulanamadı" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("community_followers")
    .select("id")
    .eq("user_id", user.id)
    .eq("category_id", category_id)
    .maybeSingle();

    
  if (error) {
    console.error("error:", error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  console.log('is following', data)
  return NextResponse.json({ following: !!data });
}
