import { Code2, Layers, Terminal } from 'lucide-react'
import type { Project, SkillCategory } from '@/types'

export const projects: Project[] = [
  {
    title: 'Modern Web Application',
    description:
      'A high-performance full-stack web application designed with modern architectural patterns and responsive UI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/matheusfaleiro',
    liveUrl: 'https://matheusfaleiro.dev',
  },
  {
    title: 'Developer Tooling & CLI',
    description:
      'Streamlined command-line interfaces and developer utilities built for developer experience and productivity.',
    tags: ['TypeScript', 'Node.js', 'Automation'],
    githubUrl: 'https://github.com/matheusfaleiro',
  },
  {
    title: 'Cloud & API Integration Platform',
    description:
      'Resilient microservices and RESTful API integrations with automated testing and continuous deployment.',
    tags: ['REST APIs', 'Docker', 'CI/CD', 'PostgreSQL'],
    githubUrl: 'https://github.com/matheusfaleiro',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5 / CSS3', 'Vite'],
  },
  {
    title: 'Backend & Systems',
    icon: Terminal,
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL', 'Python', 'C# / .NET'],
  },
  {
    title: 'Architecture & DevOps',
    icon: Layers,
    skills: ['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'PostgreSQL', 'Cloud Deployments'],
  },
]
