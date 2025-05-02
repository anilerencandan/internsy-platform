// src/app/forum/[id]/page.js
import { supabase } from '@/lib/supabaseClient'
import CommentForm from '@/components/CommentForm'
import CommentsList from '@/components/CommentsList'

// Server Component
export default async function PostDetail({ params }) {
  const postId = params.id

  // 1) Postu çek
  const { data: posts, error: postError } = await supabase
    .from('forum_posts')
    .select('id, title, content, display_name, created_at')
    .eq('id', postId)
    .single()

  if (postError) {
    return <p className="p-4 text-red-600">Hata: {postError.message}</p>
  }

  // 2) Yorumları çek
  const { data: comments, error: commentsError } = await supabase
    .from('forum_comments')
    .select('id, content, display_name, created_at')
    .eq('post_id', postId)
    .order('created_at', { ascending: true })

  if (commentsError) {
    return <p className="p-4 text-red-600">Yorum yükleme hatası: {commentsError.message}</p>
  }

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <article className="prose">
        <h1>{posts.title}</h1>
        <p className="text-gray-600">— {posts.display_name}, {new Date(posts.created_at).toLocaleDateString()}</p>
        <div>{posts.content}</div>
      </article>

      <section>
        <h2 className="text-2xl font-semibold">Yorumlar</h2>
        <CommentsList comments={comments} />
        <CommentForm postId={postId} />
      </section>
    </main>
  )
}
