import { useState } from 'react'

// 'dark' | 'light'. Saved in localStorage; the initial value is set in index.html to avoid a flash.
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch (e) { /* storage unavailable */ }
  }
  return [theme, toggle]
}
