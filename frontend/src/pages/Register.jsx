import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { register } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      await register(username, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      {error && <p className="error">{error}</p>}
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  )
}
