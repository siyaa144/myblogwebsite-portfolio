import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider, useAuth } from './AuthContext'
import NavBar from './NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import NewPost from './pages/NewPost'
import Register from './pages/Register'

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function AppRoutes() {
  return (
    <>
      <NavBar />
      <main className="blog">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/new"
            element={
              <RequireAuth>
                <NewPost />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  )
}

export default App
