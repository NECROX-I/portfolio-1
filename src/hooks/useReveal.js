import { useEffect, useRef } from 'react'

// Fades an element in once when it scrolls into view. Attach the returned ref.
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) return el.classList.add('seen')
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (el.classList.add('seen'), io.disconnect()),
      { threshold: 0.08 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
