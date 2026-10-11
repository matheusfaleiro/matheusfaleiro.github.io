# delivery-pipeline Specification

## Purpose

Defines senior-level frontend engineering quality gates: unit testing, accessibility checks with jest-axe, automated linting with oxlint, strict TypeScript verification, git pre-commit hooks, and a continuous integration deployment workflow.

## Requirements

### Requirement: Unit and accessibility testing suite

The project SHALL configure Vitest, React Testing Library, and jest-axe to run unit tests and automated accessibility scans across all core components and utilities.

#### Scenario: Running test suite

- **WHEN** `npm run test` or `npm test` is executed
- **THEN** Vitest executes all test files and passes with zero errors

#### Scenario: Automated accessibility verification

- **WHEN** tests render components and run `axe(container)`
- **THEN** no accessibility violations are found

### Requirement: Code quality and linting verification

The project SHALL validate code syntax, style, and rules using oxlint and Prettier, with zero warnings/errors on strict rules.

#### Scenario: Running linter

- **WHEN** `npm run lint` is executed
- **THEN** oxlint completes with exit code 0

### Requirement: Type safety and compiler validation

The project SHALL enforce strict type-checking across all TypeScript files using `tsc --noEmit`.

#### Scenario: Running typecheck

- **WHEN** `npm run typecheck` or `tsc -b` is executed
- **THEN** TypeScript compiler finishes with exit code 0 and no type errors

### Requirement: Pre-commit git hooks

The repository SHALL configure Husky pre-commit hooks that run staged linting and formatting via lint-staged before allowing git commits.

#### Scenario: Git commit execution

- **WHEN** a git commit is triggered
- **THEN** lint-staged runs linters and formatters on staged files and rejects the commit if any check fails

### Requirement: CI deployment quality gate

The GitHub Actions deployment workflow SHALL run linting, type-checking, and tests as prerequisite jobs before building and publishing to GitHub Pages.

#### Scenario: Pull request or push to main

- **WHEN** code is pushed to `main`
- **THEN** the CI workflow executes `lint`, `typecheck`, and `test` jobs and halts deployment if any check fails
