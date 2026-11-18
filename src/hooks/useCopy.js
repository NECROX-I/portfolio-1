import { useState } from 'react'

// copy(text) -> Promise<boolean>. `copied` is true for 2 seconds after success.
export default function useCopy() {
  const [copied, setCopied] = useState(false)
  const copy = async text => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return true
    } catch (e) {
      return false
    }
  }
  return [copied, copy]
}
