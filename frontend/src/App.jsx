import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'http://127.0.0.1:8000/api/posts/'

function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API returned ${response.status}`)
        }
        return response.json()
      })
      .then(setPosts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="blog">
      <h1>My Blog</h1>

      {loading && <p>Loading posts...</p>}
      {error && (
        <p className="error">
          Couldn't reach the API at {API_URL} ({error}). Is the Django
          server running?
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
    </main>
  )
}

export default App
