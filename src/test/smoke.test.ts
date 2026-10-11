import { describe, it, expect } from 'vitest'

describe('Vitest Environment', () => {
  it('is working properly with jsdom', () => {
    expect(window).toBeDefined()
    expect(document).toBeDefined()
  })
})
