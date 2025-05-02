// src/components/CommentsList.js
export default function CommentsList({ comments }) {
    if (comments.length === 0) {
      return <p className="text-gray-600">Henüz yorum yok.</p>
    }
  
    return (
      <ul className="space-y-4 mt-4">
        {comments.map(c => (
          <li key={c.id} className="border p-4 rounded-lg">
            <p className="mb-2">{c.content}</p>
            <div className="text-sm text-gray-500">
              — {c.display_name}, {new Date(c.created_at).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    )
  }
  