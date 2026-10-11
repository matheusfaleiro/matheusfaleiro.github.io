import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { CodeBlock } from './CodeBlock'

describe('CodeBlock Component', () => {
  it('renders comment and lines of code', () => {
    const { getByText, getByTestId } = render(
      <CodeBlock comment="// Test Comment" lines={['interface Test {', '  run(): void', '}']} />,
    )
    expect(getByTestId('code-block')).toBeInTheDocument()
    expect(getByText('// Test Comment')).toBeInTheDocument()
    expect(getByText('interface Test {')).toBeInTheDocument()
  })

  it('passes accessibility checks', async () => {
    const { container } = render(<CodeBlock lines={['const x = 10;']} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
