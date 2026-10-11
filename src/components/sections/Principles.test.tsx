import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Principles } from './Principles'

describe('Principles Section', () => {
  it('renders section title and 4 architectural pillar cards', () => {
    const { getByText } = render(<Principles />)
    expect(getByText('Architectural Principles & Core Pillars')).toBeInTheDocument()
    expect(getByText('System Design')).toBeInTheDocument()
    expect(getByText('Backend Readiness')).toBeInTheDocument()
    expect(getByText('DevOps Mindset')).toBeInTheDocument()
    expect(getByText('AI & LLM Systems')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Principles />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
