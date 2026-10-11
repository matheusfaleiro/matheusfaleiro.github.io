export interface NavItem {
  id: string
  label: string
  href: string
}

export interface StickyNoteItem {
  tag?: string
  text: string
  subtext?: string
  color: 'yellow' | 'cyan' | 'peach' | 'lime' | 'pink' | 'violet' | 'amber'
  rotation: string
  className?: string
}

export interface CursorTagItem {
  label: string
  color: 'cyan' | 'purple' | 'emerald' | 'blue'
  positionClass: string
}

export interface ArchitecturalPillar {
  id: string
  number: string
  category: string
  title: string
  description: string
  iconName: string
  codeSnippet: {
    comment?: string
    content: string[]
  }
  tag: {
    label: string
    color: 'lime' | 'amber' | 'pink' | 'violet'
    rotation: string
  }
  accentColor: string
}

export interface CareerMilestone {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  isCurrent?: boolean
  markerColor: 'emerald' | 'blue' | 'variant'
  tags: {
    label: string
    colorClass?: string
  }[]
  metrics?: {
    label: string
    value: string
  }[]
}

export interface SkillCategoryGroup {
  id: string
  title: string
  iconName: string
  skills: string[]
  footerComment: string
  accentColorClass: string
}

export interface SpokenLanguage {
  name: string
  fluency: string
  color: 'emerald' | 'blue' | 'purple' | 'crimson'
}

export interface AcademicNode {
  id: string
  years: string
  institution: string
  degree: string
  description: string
  location: string
  accentColorClass: string
}

export interface ProfileMetadata {
  name: string
  role: string
  headline: string
  location: string
  summary: string
  email: string
  linkedinUrl: string
  availabilityBadge: string
  statusPrompt: string
  nodeStatus: string
  geoCoordinates: string
  pgpFingerprint: string
}
