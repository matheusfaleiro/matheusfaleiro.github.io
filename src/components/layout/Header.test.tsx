import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Header } from './Header'

describe('Header Component', () => {
  it('renders branding and section navigation', () => {
    const { getByText, getByAltText } = render(<Header />)
    expect(getByText('Matheus Faleiro')).toBeInTheDocument()
    expect(getByText('AI & System Architect')).toBeInTheDocument()
    expect(getByAltText('MF Monogram')).toBeInTheDocument()
    expect(getByText('Overview')).toBeInTheDocument()
    expect(getByText('Architecture')).toBeInTheDocument()
  })

  it('toggles mobile menu drawer on button click', () => {
    const { getByLabelText, queryByTestId, getByTestId } = render(<Header />)
    const toggleBtn = getByLabelText('Open menu')
    expect(queryByTestId('mobile-nav-drawer')).not.toBeInTheDocument()

    fireEvent.click(toggleBtn)
    expect(getByTestId('mobile-nav-drawer')).toBeInTheDocument()
  })

  it('passes accessibility checks', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
