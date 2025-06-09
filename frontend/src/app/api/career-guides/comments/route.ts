import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const supabase = await createClient()
    const {searchParams} = new URL(req.url)

    const guide_id = searchParams.get('guide_id')

    if(!guide_id) return NextResponse.json({error: 'guide_id gerekli'}, {status: 400})

    const {data: auth} = await supabase.auth.getUser()
    if(!auth?.user) return NextResponse.json({error: 'Giris Gerekli'}, {status: 401})

    
    const {data, error} = await supabase
    .from('career_guide_comments')
    .select('*, responses:career_comments_responses(*, users(role))')
    .eq('guide_id', guide_id)
    .order('created_at', {ascending: true})



    if(error) NextResponse.json({error: error.message}, {status: 500})
    
    console.log('commentsdata:', data)

    return NextResponse.json(data)
}

export async function POST(req:NextRequest) {
    const supabase = await createClient()
    const {guide_id, comment} = await req.json()

    if(!guide_id || !guide_id?.trim()){
        return NextResponse.json({error: 'guide_id gerekli'}, {status: 400})
    }

    const {data:auth} = await supabase.auth.getUser()
    if(!auth?.user){
        return NextResponse.json({error: 'Giris gerekli'}, {status:401})
    }

    const {data, error} = await supabase
    .from('career_guide_comments')
    .insert({guide_id, comment, user_id: auth.user.id})
    .select()
    .single()

    if(error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
    
    return NextResponse.json(data)
}