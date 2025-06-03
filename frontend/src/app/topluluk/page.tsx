// app/forum/page.tsx veya pages/forum.tsx (Next.js App Router / Pages Router ihtiyacına göre)
import CommunityPost from "@/components/forum-page/CommunityPost";
import PostEkleSection from "@/components/topluluk-page/PostEkleSection";
import SeninIcinTopluluklarCard from "@/components/topluluk-page/SeninIcinTopluluklarCard";
import PostEkleMobil from "@/components/topluluk-page/PostEkleMobil";
import { createClient } from "@/utils/supabase/server";
import { CommunityType } from "@/models/Community";
import { CommunityPostType } from "@/models/CommunityPost";
import React from "react";
import Searchbar from "@/components/Searchbar";
import WelcomeFormModal from "@/components/topluluk-page/WelcomeFormModal";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Plus } from "lucide-react";

export default async function ForumPage() {
  // 1. Supabase client (server-side)
  const supabase = await createClient();

  // 2. Şu anki kullanıcıyı al (auth)
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div className="p-4 text-center">Giriş yapmalısın.</div>;
  }
  const authUserId = user.id;

  // 3. Forum postlarını çek
  const resultPosts = await supabase
    .from("forum_posts")
    .select(`
      id,
      title,
      user_id,
      content,
      created_at,
      like_count,
      comment_count,
      category_id,
      communities ( name )
    `)
    .order("created_at", { ascending: false });

  if (resultPosts.error) {
    return <div className="p-4 text-red-600">Hata: {resultPosts.error.message}</div>;
  }

  console.log("annen:", resultPosts.data)
  const posts = resultPosts.data as unknown as CommunityPostType[];

  // 4. Kullanıcının takip ettiği toplulukları çek (max 3)
  const followedCommunitiesResult = await supabase
    .from("community_followers")
    .select(`
      category_id,
      communities (
        id,
        name,
        description,
        slug,
        cover_image_url
      )
    `)
    .eq("user_id", authUserId)
    .limit(3);

    console.log('onur', followedCommunitiesResult)

  let followedCommunities: CommunityType[] = [];
  if (!followedCommunitiesResult.error && followedCommunitiesResult.data) {
    // flatMap benzeri davranış: her item.communities bir dizi olarak dönüyorsa düzleştir.
    followedCommunities = followedCommunitiesResult.data
      .map((item) => item.communities || [])
      .flat() as CommunityType[];
  }

  // 5. Tüm toplulukları çek (PostEkleSection & PostEkleMobil için)
  const postCategoriesResult = await supabase.from("communities").select("*");
  const postCategories = (postCategoriesResult.data as CommunityType[]) || [];

  return (
    <div className="page-content sm:grid grid-cols-12 gap-x-12 xl:px-0 sm:px-4 px-0 sm:pt-4 mb-6">
      
      <div className="sm:hidden flex gap-x-2 overflow-x-auto scrollbar-hide py-4 px-4">
        <Link href={'/topluluklari-kesfet'} className="flex flex-col gap-y-2 items-center justify-center text-sm w-[80px] overflow-hidden ">
          <div className="flex items-center justify-center w-16 h-16 border border-gray-300 bg-gray-50 rounded-full flex-shrink-0">
            <Plus className="text-primary" size={32}/>
          </div>
          <p className="line-clamp-1 text-center font-semibold text-xs">Keşfet</p>
        </Link>   
        {postCategories.map((community, index) => (
        <Link href={'/topluluklari-kesfet'} className="flex flex-col gap-y-2 items-center justify-center text-sm w-[80px]  ">
          <Image width={60} height={60} src={'/images/avatar.jpg'} alt="avatar.jpg" key={index} className="w-16 h-16 border rounded-full flex-shrink-0"/>
          <p
            title={community.name}
            className="text-center font-semibold text-xs w-[85px] max-w-full truncate break-words line-clamp-2 overflow-hidden"
          >
            {community.name}
          </p>
        </Link>
          ))}
      </div>

      <div className="sm:hidden flex px-4">
        <Searchbar />
      </div>
      
      <Separator className="sm:hidden flex mt-4"/>

      {/* ———————————————————————————————————————————————————————————— */}
      {/* Sol sütun: Post ekleme alanı (masaüstünde görünür, mobilde gizli) */}
      <div className="lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm sticky top-20 h-fit">
        <PostEkleSection
          communityCard={followedCommunities}
          postCategories={postCategories}
        />
      </div>

      {/* ———————————————————————————————————————————————————————————— */}
      {/* Orta sütun: Forum post listesi */}
      <div className="lg:col-span-6 sm:col-span-8 col-span-1">
        <div className="sm:flex hidden mb-4">
          {/* Arama ve Hoşgeldin modali (masaüstü) */}
          <Searchbar />
          <WelcomeFormModal />
        </div>
        <div className="flex flex-col overflow-hidden sm:border border-gray-300 sm:rounded-xl">
          {posts.map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* ———————————————————————————————————————————————————————————— */}
      {/* Sağ sütun: “Senin İçin Topluluklar” (masaüstünde görünür, mobilde gizli) */}
      <div className="lg:col-span-3 hidden lg:flex flex-col sticky top-20 h-fit">
        <SeninIcinTopluluklarCard />
      </div>

      {/* ———————————————————————————————————————————————————————————— */}
      {/* GENEL: Mobilde sağ altta “+” butonu */}
      <PostEkleMobil
        categories={postCategories}
        followedCommunities={followedCommunities}
        currentUserId={authUserId}
      />
    </div>
  );
}
