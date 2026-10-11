import { describe, it, expect } from 'vitest'
import {
  profile,
  navItems,
  pillars,
  milestones,
  topDisciplines,
  skillGroups,
  spokenLanguages,
  educationNodes,
} from './portfolioData'

describe('portfolioData content integrity', () => {
  it('has valid profile metadata', () => {
    expect(profile.name).toBe('Matheus Faleiro')
    expect(profile.email).toBe('me@matheusfaleiro.dev')
    expect(profile.linkedinUrl).toContain('linkedin.com')
  })

  it('has complete navigation sections', () => {
    expect(navItems.length).toBeGreaterThanOrEqual(5)
    expect(navItems.map((n) => n.id)).toEqual([
      'hero',
      'principles',
      'experience',
      'skills',
      'contact',
    ])
  })

  it('contains the 4 core architectural pillars', () => {
    expect(pillars).toHaveLength(4)
    pillars.forEach((pillar) => {
      expect(pillar.title).toBeTruthy()
      expect(pillar.codeSnippet.content.length).toBeGreaterThan(0)
    })
  })

  it('contains the 8 career milestones in reverse chronological sequence', () => {
    expect(milestones).toHaveLength(8)
    expect(milestones[0].company).toBe('GN Group')
    expect(milestones[0].isCurrent).toBe(true)
    expect(milestones[7].company).toBe('BHS - Belo Horizonte Sistemas')
  })

  it('contains the 3 skill groups and 5 spoken languages', () => {
    expect(skillGroups).toHaveLength(3)
    expect(topDisciplines).toHaveLength(3)
    expect(spokenLanguages).toHaveLength(5)
  })

  it('contains the 3 academic nodes', () => {
    expect(educationNodes).toHaveLength(3)
  })
})
