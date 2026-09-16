export const API_BASE = 'http://127.0.0.1:8000/api'

export async function apiFetch(path, { method = 'GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers.Authorization = `Bearer ${token}`

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message =
      (data && (data.detail || JSON.stringify(data))) ||
      `Request failed with ${response.status}`
    throw new Error(message)
  }

  return data
}
