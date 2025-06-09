import { supabase } from "@/lib/supabase";
import { quartersInYear } from "date-fns/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    const { searchParams } = new URL(req.url)
    const limitParam = searchParams.get('limit')
    const limit = limitParam ? parseInt(limitParam) : 24
    const offsetParam = searchParams.get('offset') 
    const offset = offsetParam ? parseInt(offsetParam) : 0
    const search = searchParams.get('q')
    const id = searchParams.get('id')

    const category = searchParams.get('category')

    const from = offset
    const to = offset + limit - 1

    let query = supabase.from('career_guides').select('*, users(role)')

    if (id) {
    // JOIN syntax'ı foreign key ismine göre
    const { data: blog, error: blogError } = await supabase
        .from("career_guides")
        .select(`
            *,
            author_info:public_user_profiles!career_guides_author_fkey(
                role, 
                auth_id
            )
        `)
        .eq("id", id)
        .single();

        // Eğer yukarıdaki hata verirse, farklı referans isimleri deneyin:
        const { data: joinTest2, error: joinError2 } = await supabase
            .from("career_guide_comments")
            .select(`
                *,
                author_info:public_user_profiles(role, auth_id)
            `)
            .eq("user_id", "89a49d68-006f-4de0-8456-5eb3d3ab0839") // İlk yorumun user_id'si
            .limit(1);

        console.log("JOIN test2 result:", joinTest2);
        console.log("JOIN test2 error:", joinError2);
            

        if (blogError || !blog) {
            return NextResponse.json({ error: blogError || "Blog bulunamadı" }, { status: 404 });
        }


        return NextResponse.json({
            ...blog,
        });
        }
    
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