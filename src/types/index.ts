export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

export interface SkillCategory {
  title: string
  icon: any
  skills: string[]
}
