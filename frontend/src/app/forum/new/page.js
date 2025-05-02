// src/app/forum/new/page.js
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function NewPostPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const router = useRouter()

  // 1) Kategori listesini çek
  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase
        .from('forum_categories')
        .select('id, name')
        .order('name', { ascending: true })
      if (error) console.error('Kategori yükleme hatası:', error)
      else setCategories(data)
    }
    fetchCategories()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!selectedCategory) {
      setErrorMsg('Lütfen bir kategori seçin.')
      return
    }
    setLoading(true)
    setErrorMsg(null)

    // 2) Session’dan user_id ve display_name al
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // 3) Kayıt ekle
    const { error } = await supabase
      .from('forum_posts')
      .insert({
        title,
        content,
        category_id: selectedCategory,
        user_id: user.id,
        display_name: user.user_metadata?.fullname || 'Anonim Üye',
      })

    setLoading(false)
    if (error) {
      setErrorMsg(error.message)
    } else {
      // Başarılı → Listeye dön
      router.push('/forum')
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Yeni Gönderi Oluştur</h1>
      {errorMsg && <p className="text-red-600 mb-4">{errorMsg}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Kategori</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded-md"
          >
            <option value="">-- Kategori Seçin --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Başlık</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">İçerik</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={6}
            className="mt-1 block w-full border px-3 py-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </form>
    </main>
  )
}
