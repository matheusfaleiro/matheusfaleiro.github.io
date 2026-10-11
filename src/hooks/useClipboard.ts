import { useState, useCallback } from 'react'

export interface UseClipboardOptions {
  timeout?: number
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { timeout = 2500 } = options
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          // Fallback for environments lacking clipboard API
          const textArea = document.createElement('textarea')
          textArea.value = text
          textArea.style.position = 'fixed'
          textArea.style.opacity = '0'
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          document.execCommand('copy')
          document.body.removeChild(textArea)
        }
        setCopied(true)
        setError(null)
        setTimeout(() => setCopied(false), timeout)
        return true
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to copy'))
        setCopied(false)
        return false
      }
    },
    [timeout],
  )

  return { copied, error, copy }
}
