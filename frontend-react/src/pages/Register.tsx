import React, { useState } from 'react'
import { registerProduct } from '../api'
import { Product } from '../types'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [batch, setBatch] = useState('')
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const p = await registerProduct({ name, batch })
      setProduct(p)
      setName('')
      setBatch('')
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Register Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />

        <label>Batch</label>
        <input value={batch} onChange={e => setBatch(e.target.value)} required />

        <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {product && (
        <div className="product">
          <h3>Registered</h3>
          <div>ID: {product.id}</div>
          <div>Name: {product.name}</div>
          <div>Batch: {product.batch}</div>
          <div>Code: {product.code}</div>
        </div>
      )}
    </div>
  )
}
