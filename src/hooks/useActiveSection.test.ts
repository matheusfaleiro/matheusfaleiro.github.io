import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useActiveSection } from './useActiveSection'

describe('useActiveSection hook', () => {
  it('initializes with default section', () => {
    const { result } = renderHook(() =>
      useActiveSection(['hero', 'principles', 'experience'], 'hero'),
    )
    expect(result.current).toBe('hero')
  })
})
