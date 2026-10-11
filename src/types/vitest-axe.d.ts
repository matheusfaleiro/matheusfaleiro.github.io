/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom/vitest" />

import 'vitest'
import type { AxeResults } from 'axe-core'

declare module 'vitest' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> {
    toHaveNoViolations(): void
  }
}
