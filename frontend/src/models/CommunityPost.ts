export type CommunityPostType = {
  id: string
  title: string
  content: string
  created_at: string
  like_count: number
  comment_count: number
  user_id: string
  category_id: string
  communities: {
    name: string
  }
}
