import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Contact } from './Contact'

describe('Contact Section', () => {
  it('renders section title, email card, and LinkedIn card', () => {
    const { getByText } = render(<Contact />)
    expect(getByText(/Let's Architect Something Exceptional/i)).toBeInTheDocument()
    expect(getByText('me@matheusfaleiro.dev')).toBeInTheDocument()
    expect(getByText('linkedin.com/in/matheusfaleiro')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Contact />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
