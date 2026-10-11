import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Hero } from './Hero'

describe('Hero Section', () => {
  it('renders primary hero title, role badges, and sticky notes', () => {
    const { getByText, getByAltText } = render(<Hero />)
    expect(getByText('Matheus Faleiro')).toBeInTheDocument()
    expect(getByText(/SYSTEM ARCHITECT \/\/ AI & AGENTS/i)).toBeInTheDocument()
    expect(getByText(/Designing Something Robust/i)).toBeInTheDocument()
    expect(getByText(/cph_workstation_2026.raw/i)).toBeInTheDocument()
    expect(getByAltText('Matheus Faleiro Portrait')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Hero />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
