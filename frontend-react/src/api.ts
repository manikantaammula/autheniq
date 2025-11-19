import { Product } from './types'

const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

export async function registerProduct(payload: { name: string; batch: string }): Promise<Product> {
  const res = await fetch(`${BASE}/api/products/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to register')
  return res.json()
}

export async function verifyProduct(code: string): Promise<{ status: string }> {
  const res = await fetch(`${BASE}/api/verify?code=${encodeURIComponent(code)}`)
  if (!res.ok) throw new Error('Verify failed')
  return res.json()
}
