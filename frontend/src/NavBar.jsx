import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function NavBar() {
  const { isAuthenticated, username, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/new">New post</Link>
          <span className="meta">Signed in as {username}</span>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Log in</Link>
          <Link to="/register">Sign up</Link>
        </>
      )}
    </nav>
  )
}
