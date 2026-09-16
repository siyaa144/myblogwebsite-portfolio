import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    try {
      await login(username, password)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Log in</h1>
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
          required
        />
      </label>
      <button type="submit">Log in</button>
    </form>
  )
}
