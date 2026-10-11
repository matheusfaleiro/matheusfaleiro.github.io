import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Skills } from './Skills'

describe('Skills Section', () => {
  it('renders section title and bento groups', () => {
    const { getByText } = render(<Skills />)
    expect(getByText('Top Skills, Stack & Tooling Matrix')).toBeInTheDocument()
    expect(getByText('Languages & Core')).toBeInTheDocument()
    expect(getByText('Cloud & Systems')).toBeInTheDocument()
    expect(getByText('Certifications & Logic')).toBeInTheDocument()
    expect(getByText('Portuguese')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Skills />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
