// src/components/CommentForm.js
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function CommentForm({ postId }) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!content.trim()) {
      setErrorMsg('Yorum boş olamaz.')
      return
    }
    setLoading(true)
    setErrorMsg(null)

    // Kullanıcı bilgisi
    const {
      data: { user },
    } = await supabase.auth.getUser()

    const { error } = await supabase
      .from('forum_comments')
      .insert({
        post_id: postId,
        user_id: user.id,
        display_name: user.user_metadata?.fullname || 'Anonim Üye',
        content,
      })

    setLoading(false)
    if (error) setErrorMsg(error.message)
    else {
      setContent('')
      // Yorum eklendikten sonra sayfayı yenile
      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
      <textarea
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Yorumunuzu yazın..."
        className="w-full border p-2 rounded-md"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Gönderiliyor...' : 'Yorum Yap'}
      </button>
    </form>
  )
}
