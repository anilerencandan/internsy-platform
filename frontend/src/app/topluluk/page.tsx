import CommunityPost from '@/components/forum-page/CommunityPost'
import React from 'react'

export default function forumPage() {
  return (
    <div className='w-screen page'>
        {Array.from({ length: 10 }, (_, index) => (
          <CommunityPost />
        ))}
    </div>
  )
}
