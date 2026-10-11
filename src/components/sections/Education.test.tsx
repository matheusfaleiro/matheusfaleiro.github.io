import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Education } from './Education'

describe('Education Section', () => {
  it('renders section title and academic nodes', () => {
    const { getByText } = render(<Education />)
    expect(getByText('Education & Academic Background')).toBeInTheDocument()
    expect(getByText('Georgia State University')).toBeInTheDocument()
    expect(getByText('Centro Universitário Newton Paiva')).toBeInTheDocument()
    expect(getByText('Polytechnic School of Minas Gerais')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<Education />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
