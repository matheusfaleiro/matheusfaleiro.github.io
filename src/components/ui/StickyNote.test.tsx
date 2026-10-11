import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { StickyNote } from './StickyNote'

describe('StickyNote Component', () => {
  it('renders content with tag and subtext', () => {
    const { getByText, getByTestId } = render(
      <StickyNote tag="#MEMO" subtext="2024" color="yellow" rotation="-rotate-6">
        Designing Something Robust.
      </StickyNote>,
    )
    expect(getByTestId('sticky-note')).toBeInTheDocument()
    expect(getByText('#MEMO')).toBeInTheDocument()
    expect(getByText('2024')).toBeInTheDocument()
    expect(getByText('Designing Something Robust.')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(<StickyNote color="yellow">Note Content</StickyNote>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
