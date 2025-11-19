import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import RegisterPage from './pages/Register'
import VerifyPage from './pages/Verify'

export default function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Register</Link> | <Link to="/verify">Verify</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </main>
    </div>
  )
}
