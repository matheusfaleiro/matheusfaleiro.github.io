import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { useClipboard } from './useClipboard'
import { Toast } from '@/components/ui/Toast'

describe('useClipboard hook', () => {
  it('copies text and toggles copied status', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined)
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    })

    const { result } = renderHook(() => useClipboard({ timeout: 100 }))

    expect(result.current.copied).toBe(false)

    await act(async () => {
      const success = await result.current.copy('test@example.com')
      expect(success).toBe(true)
    })

    expect(writeTextMock).toHaveBeenCalledWith('test@example.com')
    expect(result.current.copied).toBe(true)
  })
})

describe('Toast Component', () => {
  it('renders status message when show is true', () => {
    const { getByRole, getByText } = render(<Toast show message="Copied to clipboard!" />)
    expect(getByRole('status')).toBeInTheDocument()
    expect(getByText('Copied to clipboard!')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Toast show message="Email copied" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
