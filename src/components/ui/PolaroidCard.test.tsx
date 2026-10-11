import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { PolaroidCard } from './PolaroidCard'

describe('PolaroidCard Component', () => {
  it('renders image, caption title, and caption metadata', () => {
    const { getByAltText, getByText, getByTestId } = render(
      <PolaroidCard
        imageSrc="/assets/portrait.png"
        imageAlt="Matheus Portrait"
        captionTitle="cph_workstation_2026.raw"
        captionMeta="ISO 400 // 55.67°N"
      />,
    )
    expect(getByTestId('polaroid-card')).toBeInTheDocument()
    expect(getByAltText('Matheus Portrait')).toBeInTheDocument()
    expect(getByText('cph_workstation_2026.raw')).toBeInTheDocument()
    expect(getByText('ISO 400 // 55.67°N')).toBeInTheDocument()
  })

  it('passes accessibility scan', async () => {
    const { container } = render(
      <PolaroidCard
        imageSrc="/assets/portrait.png"
        imageAlt="Matheus Portrait"
        captionTitle="cph_workstation_2026.raw"
      />,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
