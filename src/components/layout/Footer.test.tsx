import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Footer } from './Footer'

describe('Footer Component', () => {
  it('renders node status and coordinates', () => {
    const { getByText } = render(<Footer />)
    expect(getByText(/cph_node_01 \/\/ operational/i)).toBeInTheDocument()
    expect(getByText(/55.6761° N, 12.5683° E/i)).toBeInTheDocument()
    expect(getByText(/me@matheusfaleiro.dev/i)).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
