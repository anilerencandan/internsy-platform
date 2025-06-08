export interface Blog{
    id: string
    title:string
    content:string
    content_type:string
    image_url:string
    author:string
    like_count:number
    created_at: Date
    comment_count:number
    subject: string
    description:string
    users: {
        fullname: string
    }
}

export interface BlogCommentsDto {
    id:string
    comment_count: number
    like_count: number
}

export interface BlogComments {
    id:string
    guide_id: string
    user_id: string
    comment:string
    created_at: Date
}