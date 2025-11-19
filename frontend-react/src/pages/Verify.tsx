import React, { useState } from 'react'
import { verifyProduct } from '../api'

export default function VerifyPage() {
  const [code, setCode] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setStatus(null)
    try {
      const res = await verifyProduct(code)
      setStatus(res.status)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Verify Product</h2>
      <form onSubmit={handleVerify}>
        <label>Code</label>
        <input value={code} onChange={e => setCode(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? 'Checking...' : 'Verify'}</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}
      {status && <div className="product">Status: {status}</div>}
    </div>
  )
}
