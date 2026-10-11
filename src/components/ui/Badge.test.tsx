import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { Badge, CursorTag } from './Badge'

describe('Badge Component', () => {
  it('renders badge children and handles pulse state', () => {
    const { getByText, container } = render(
      <Badge pulse variant="emerald">
        Available
      </Badge>,
    )
    expect(getByText('Available')).toBeInTheDocument()
    expect(container.querySelector('.animate-pulse')).toBeInTheDocument()
  })

  it('passes axe accessibility scan', async () => {
    const { container } = render(
      <div>
        <Badge variant="emerald">Operational</Badge>
        <Badge variant="blue">Get in touch</Badge>
        <Badge variant="muted">Tag</Badge>
      </div>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('CursorTag Component', () => {
  it('renders cursor label and pointer svg', () => {
    const { getByTestId, getByText } = render(
      <CursorTag label="Distributed Systems" color="purple" />,
    )
    expect(getByTestId('cursor-tag')).toBeInTheDocument()
    expect(getByText('Distributed Systems')).toBeInTheDocument()
  })
})
