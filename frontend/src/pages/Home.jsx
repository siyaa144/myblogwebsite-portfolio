import { useEffect, useState } from 'react'
import { apiFetch } from '../api'

export default function Home() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiFetch('/posts/')
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <h1>My Blog</h1>

      {loading && <p>Loading posts...</p>}
      {error && (
        <p className="error">
          Couldn't reach the API ({error}). Is the Django server running?
        </p>
      )}

      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post">
            <h2>{post.title}</h2>
            <p className="meta">
              by {post.author} on{' '}
              {new Date(post.created_date).toLocaleDateString()}
            </p>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
