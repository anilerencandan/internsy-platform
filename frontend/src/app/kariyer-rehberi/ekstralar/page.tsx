import PageClient from '@/components/kariyer-rehberi/PageClient'
import React from 'react'

export default async function BlogPage() {
  const BlogsData = await fetch('http://localhost:3000/api/career-guides?category=extra')
  const initialBlogs = await BlogsData.json()

  return (
    <PageClient initialPosts={initialBlogs}/>
  )
}
