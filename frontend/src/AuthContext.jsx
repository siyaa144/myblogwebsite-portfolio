import { createContext, useContext, useEffect, useState } from 'react'
import { apiFetch } from './api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [access, setAccess] = useState(() => localStorage.getItem('access'))
  const [username, setUsername] = useState(() =>
    localStorage.getItem('username'),
  )

  useEffect(() => {
    if (access) localStorage.setItem('access', access)
    else localStorage.removeItem('access')
  }, [access])

  useEffect(() => {
    if (username) localStorage.setItem('username', username)
    else localStorage.removeItem('username')
  }, [username])

  async function login(user, password) {
    const data = await apiFetch('/token/', {
      method: 'POST',
      body: { username: user, password },
    })
    setAccess(data.access)
    setUsername(user)
  }

  async function register(user, password) {
    await apiFetch('/register/', {
      method: 'POST',
      body: { username: user, password },
    })
    await login(user, password)
  }

  function logout() {
    setAccess(null)
    setUsername(null)
  }

  return (
    <AuthContext.Provider
      value={{ access, username, isAuthenticated: !!access, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
