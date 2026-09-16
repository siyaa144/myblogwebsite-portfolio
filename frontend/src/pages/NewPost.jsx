import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '../api'
import { useAuth } from '../AuthContext'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [error, setError] = useState(null)
  const { access } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      await apiFetch('/posts/', {
        method: 'POST',
        token: access,
        body: { title, text },
      })
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>New post</h1>
      {error && <p className="error">{error}</p>}
      <label>
        Title
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Text
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={6}
          required
        />
      </label>
      <button type="submit">Publish</button>
    </form>
  )
}
