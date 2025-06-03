export interface CommunityType {
  id: string
  name: string
  description?: string
  slug?: string
  cover_image_url?: string
  follower_count: number
}


export interface followedCommunity {
  category_id: string
  communities?: {
    id:string
    name: string
    description: string
    slug: string
    cover_image_url: string
  }
}