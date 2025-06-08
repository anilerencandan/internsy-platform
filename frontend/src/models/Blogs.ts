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
  users?: {
    fullname: string;
  };
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
      fullname:string
    }[]
}