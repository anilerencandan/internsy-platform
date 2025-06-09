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

export interface BlogDTO {
     id: string;
  title: string;
  content: string;
  like_count: number;
  comment_count: number;
  comments: BlogCommentsDTO[]
    
}

export interface BlogCommentsDTO {
    id:string
    guide_id:string
    user_id:string
    comment:string
    created_at:Date
    like_count:number
    comment_count:number
    users: {
      role:string
    }
    responses: {
      id:string
      content: string
      created_at: Date
      comment_id:string
      user_id:string
      like_count:number
      users:{
        role: string
      }
    }[]
}