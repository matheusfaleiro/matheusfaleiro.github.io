import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Experience } from './Experience'

describe('Experience Section', () => {
  it('renders experience heading and milestone cards', () => {
    const { getByText } = render(<Experience />)
    expect(getByText('Experience & Career Milestones')).toBeInTheDocument()
    expect(getByText('GN Group')).toBeInTheDocument()
    expect(getByText('Novo Nordisk')).toBeInTheDocument()
    expect(getByText('Framna')).toBeInTheDocument()
    expect(getByText('CI&T')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Experience />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
