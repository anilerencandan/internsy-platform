import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const { searchParams } = new URL(req.url)
    const limitParam = searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : 24
    const offsetParam = searchParams.get('offset') 
    const offset = offsetParam ? parseInt(offsetParam) : 0
    const search = searchParams.get('q')

    const category = searchParams.get('category')

    const from = offset
    const to = offset + limit - 1

    let query = supabase.from('career_guides').select('*')

    if(search){
        category ? query = query.ilike('title', `${search}%`).eq('content_type', category).limit(10) : query = query.ilike('title', `${search}%`).limit(10)
    }

    if(!search){
        category ? query = query.eq('content_type', category).range(from, to) : query = query.range(from, to)
    } 

    const { data, error } = await query

    if(error) return NextResponse.json({error}, {status:500})

    return NextResponse.json(data)
}