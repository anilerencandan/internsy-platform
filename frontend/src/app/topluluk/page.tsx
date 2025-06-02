import CommunityPost from '@/components/forum-page/CommunityPost'
import React from 'react'
import PostEkleSection from '@/components/topluluk-page/PostEkleSection'
import SeninIcinTopluluklarCard from '@/components/topluluk-page/SeninIcinTopluluklarCard'
import Searchbar from '@/components/Searchbar'
import sampleData from '@/sample/CommunityPostSampleData.json'
import { CommunityPostType } from '@/models/CommunityPost'
import WelcomeModal from '@/components/topluluk-page/WelcomeFormModal'
import { createClient } from '@/utils/supabase/server'
import { CommunityType } from '@/models/Community'




export default async function forumPage() {
  const supabase = await createClient()

  const {data: {user}} = await supabase.auth.getUser()

  if(!user) return <div>Giriş yapmalısın.</div>

  const authUserId = user.id

  const resultPosts = await supabase
    .from('forum_posts')
    .select(`
      id,
      title,
      user_id,
      content,
      created_at,
      like_count,
      comment_count,
      category_id,
      communities (
        name
      )
      `)
    .order('created_at', {ascending: false})

    const posts = resultPosts.data as CommunityPostType[] | null
    const error = resultPosts.error

    console.log("gelen post datasi:", posts )

    if(error) {
      return <div>Hata: {error.message}</div>
    }

    const followedCommunitiesResult = await supabase
    .from('community_followers')
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
      .eq('user_id', authUserId)
      .limit(3)

    const followedCommunities = followedCommunitiesResult.data?.map(item => item.communities).flat() as CommunityType[] ?? []

  return (
    <div className='page-content sm:grid grid-cols-12  gap-x-12 xl:px-0 sm:px-4 px-0 sm:pt-4 mb-6'>
      <div className='lg:col-span-3 sm:col-span-4 hidden sm:flex flex-col gap-y-4 text-sm sticky top-20 h-fit'>
      <PostEkleSection communityCard={followedCommunities} />
      </div>
      

      <div className='lg:col-span-6 sm:col-span-8 col-span-1 '>
      <span className='sm:flex hidden'>
      
        <Searchbar />
        <WelcomeModal/>
      </span>
      <div className='flex flex-col overflow-hidden sm:border border-gray-300 sm:rounded-xl'>
        {posts && posts?.map((post) => (
          <CommunityPost key={post.id}  post={post} />
        ))}
        </div>
      </div>

      <div className='lg:col-span-3 flex flex-col sticky top-20 h-fit'>
        <SeninIcinTopluluklarCard />
      </div>
    </div>
  )
}
