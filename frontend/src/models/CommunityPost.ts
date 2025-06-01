export type CommunityPostType = {
  id: string
  title: string
  content: string
  created_at: string
  like_count: number
  comment_count: number
  forum_categories?: {
    name: string
  }
}
