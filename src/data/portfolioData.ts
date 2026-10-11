import type {
  ProfileMetadata,
  NavItem,
  ArchitecturalPillar,
  CareerMilestone,
  SkillCategoryGroup,
  SpokenLanguage,
  AcademicNode,
} from '@/types/portfolio'

export const profile: ProfileMetadata = {
  name: 'Matheus Faleiro',
  role: 'AI & System Architect',
  headline: 'AI Engineer | LLMs & AI Agents | Senior Software Engineer | System Architecture',
  location: 'Copenhagen, Capital Region of Denmark, Denmark',
  summary:
    'Over 10 years of experience in highly regulated environments (FinTech, Pharma). Specializing in architecting robust, scalable software systems, Clean Architecture, Domain-Driven Design (DDD), and Secure Data Flow.',
  email: 'me@matheusfaleiro.dev',
  linkedinUrl: 'https://www.linkedin.com/in/matheusfaleiro',
  availabilityBadge: 'SYSTEM ARCHITECT // AI & AGENTS // COPENHAGEN, DENMARK',
  statusPrompt: 'status: ready for high-impact AI/Backend initiatives',
  nodeStatus: 'cph_node_01 // operational',
  geoCoordinates: '55.6761° N, 12.5683° E',
  pgpFingerprint: '4D8A 9F2C BE81 7720',
}

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Overview', href: '#hero' },
  { id: 'principles', label: 'Architecture', href: '#principles' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Stack', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const pillars: ArchitecturalPillar[] = [
  {
    id: 'system-design',
    number: '01 // DOMAIN',
    category: 'System Design',
    title: 'System Design',
    description:
      'Modular, testable applications using SOLID principles, Clean Architecture, and Event-Driven patterns to decouple domain rules from infrastructure.',
    iconName: 'Network',
    codeSnippet: {
      comment: '// Domain Isolation',
      content: ['interface ExecuteWorkflow {', '  fun invoke(cmd: Command)', '}'],
    },
    tag: {
      label: 'Strict Boundaries',
      color: 'lime',
      rotation: '-rotate-1',
    },
    accentColor: 'border-tag-blue text-tag-blue',
  },
  {
    id: 'backend-readiness',
    number: '02 // RUNTIME',
    category: 'Backend Readiness',
    title: 'Backend Readiness',
    description:
      'Deep foundation in Kotlin, Java, C#/.NET, resilient API consumption, WebSockets, offline-first synchronization, and low-latency payloads.',
    iconName: 'Server',
    codeSnippet: {
      comment: '// Resilient Socket Sync',
      content: [
        'val stream = socket.listen()',
        '  .retryWhen(ExponentialBackoff)',
        '  .collect { syncOffline(it) }',
      ],
    },
    tag: {
      label: 'Sub-50ms Latency',
      color: 'amber',
      rotation: 'rotate-2',
    },
    accentColor: 'border-tag-emerald text-tag-emerald',
  },
  {
    id: 'devops-mindset',
    number: '03 // PIPELINE',
    category: 'DevOps Mindset',
    title: 'DevOps Mindset',
    description:
      'CI/CD pipeline optimization across Azure DevOps & GitHub Actions, deterministic builds, auditability, and zero-trust security postures.',
    iconName: 'RefreshCw',
    codeSnippet: {
      comment: '# Automated Audit Gate',
      content: [
        '- stage: GxP_Compliance_Gate',
        '  jobs: [VerifySignatures, Scan]',
        '  status: PASS_AUDIT_21CFR11',
      ],
    },
    tag: {
      label: 'Continuous Delivery',
      color: 'pink',
      rotation: '-rotate-2',
    },
    accentColor: 'border-tag-purple text-tag-purple',
  },
  {
    id: 'ai-llm-systems',
    number: '04 // SYNTHESIS',
    category: 'AI & LLM Systems',
    title: 'AI & LLM Systems',
    description:
      'Generative AI prototyping to production, multi-agent orchestration, telemetry, runtime evaluations, and high-security compliance integrations.',
    iconName: 'Cpu',
    codeSnippet: {
      comment: '// Agent Loop Dispatch',
      content: [
        'agent.orchestrate(task) {',
        '  plan -> tools.execute()',
        '  telemetry.traceTokenCost()',
        '}',
      ],
    },
    tag: {
      label: 'Zero-to-One Tooling',
      color: 'violet',
      rotation: 'rotate-1',
    },
    accentColor: 'border-tag-cyan text-tag-cyan',
  },
]

export const milestones: CareerMilestone[] = [
  {
    id: 'gn-group',
    company: 'GN Group',
    role: 'AI Engineer',
    period: 'March 2026 - Present | Ballerup, Denmark',
    location: 'Ballerup, Denmark',
    description:
      'Leading LLM workflows, agent evaluation paradigms, and edge & cloud system integration for next-generation intelligent acoustic and audio software solutions.',
    isCurrent: true,
    markerColor: 'emerald',
    tags: [
      { label: 'LLM Workflows' },
      { label: 'Agent Evaluation' },
      { label: 'Cloud / Edge Sync' },
    ],
  },
  {
    id: 'novo-nordisk',
    company: 'Novo Nordisk',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 - June 2026 | Copenhagen, Denmark',
    location: 'Copenhagen, Denmark',
    description:
      'Led architectural strategy for high-compliance digital products in strictly regulated environments (GxP). Spearheaded product incubation for internal GenAI (ChatGPT) tool from 0 to 1; architected comprehensive telemetry, observability, and monitoring pipelines with Azure.',
    markerColor: 'blue',
    tags: [
      { label: 'GxP Regulatory Compliance', colorClass: 'text-tag-cyan' },
      { label: 'Internal GenAI (0 to 1)', colorClass: 'text-tag-emerald' },
      { label: 'Azure Telemetry', colorClass: 'text-tag-purple' },
      { label: 'Clean Architecture' },
    ],
  },
  {
    id: 'framna',
    company: 'Framna',
    role: 'Android Developer',
    period: 'June 2021 - Jan 2023 | Copenhagen, Denmark',
    location: 'Copenhagen, Denmark',
    description:
      'Engineered real-time communication SDK for Dixa; implemented high-performance WebSocket and REST integrations for ultra-low latency voice and data streaming; delivered Android Auto & Android TV ecosystem expansion; authored public-facing API specifications.',
    markerColor: 'variant',
    tags: [{ label: 'Real-Time SDK' }, { label: 'WebSockets' }, { label: 'Android Auto / TV' }],
  },
  {
    id: 'cit',
    company: 'CI&T',
    role: 'Senior Android Developer',
    period: 'Jan 2020 - June 2021 | Belo Horizonte, Brazil',
    location: 'Belo Horizonte, Brazil',
    description:
      'Architected massive B2B e-commerce platform for AB InBev. Engineered offline-first data synchronization, resulting in a measurable 15% reduction in order processing time and an 80% decrease in reported bugs.',
    markerColor: 'variant',
    tags: [
      { label: '-15% Order Processing Time', colorClass: 'text-secondary font-bold' },
      { label: '-80% Bug Volume', colorClass: 'text-secondary font-bold' },
      { label: 'Offline-First Sync' },
    ],
  },
  {
    id: 'arctouch',
    company: 'ArcTouch',
    role: 'Android Developer',
    period: 'June 2018 - Dec 2019 | Greater Florianopolis',
    location: 'Greater Florianopolis, Brazil',
    description:
      'Built specialized integrations for enterprise clients including Disney and NCAA media platforms, pairing hardware sensor arrays with high-fidelity mobile touchpoints.',
    markerColor: 'variant',
    tags: [],
  },
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Android Developer',
    period: 'June 2017 - June 2018 | Belo Horizonte, Brazil',
    location: 'Belo Horizonte, Brazil',
    description:
      'Spearheaded e-commerce codebase modernization using decoupled Kotlin/Java architecture; facilitated internal engineering workshops covering TDD & BDD testing practices.',
    markerColor: 'variant',
    tags: [],
  },
  {
    id: 'prime-systems',
    company: 'Prime Systems',
    role: 'Mobile Developer',
    period: 'March 2016 - May 2017',
    location: 'Belo Horizonte, Brazil',
    description:
      'Developed cross-platform mobile solutions linked to robust C#/.NET enterprise backend services.',
    markerColor: 'variant',
    tags: [],
  },
  {
    id: 'bhs',
    company: 'BHS - Belo Horizonte Sistemas',
    role: 'Software Engineer Intern',
    period: 'Nov 2013 - Aug 2014',
    location: 'Belo Horizonte, Brazil',
    description:
      'Engineered resume management modules using ASP.NET MVC and Microsoft SQL Server database schemas.',
    markerColor: 'variant',
    tags: [],
  },
]

export const topDisciplines = [
  { label: '★ System Architecture', color: 'yellow', rotation: '-rotate-1' },
  { label: '★ Back-End Web Development', color: 'cyan', rotation: 'rotate-1' },
  { label: '★ Mobile Application Development', color: 'pink', rotation: '-rotate-2' },
] as const

export const skillGroups: SkillCategoryGroup[] = [
  {
    id: 'languages-core',
    title: 'Languages & Core',
    iconName: 'Code',
    skills: ['Kotlin', 'Java', 'C#', '.NET', 'Python', 'TypeScript', 'SQL Server'],
    footerComment: '// Multi-platform typed concurrency',
    accentColorClass: 'text-tag-cyan',
  },
  {
    id: 'cloud-systems',
    title: 'Cloud & Systems',
    iconName: 'Cloud',
    skills: [
      'Azure',
      'Azure DevOps',
      'GitHub Actions',
      'Docker',
      'WebSockets',
      'REST APIs',
      'GxP Compliance',
    ],
    footerComment: '// Audited enterprise infrastructure',
    accentColorClass: 'text-tag-emerald',
  },
  {
    id: 'certifications-logic',
    title: 'Certifications & Logic',
    iconName: 'ShieldCheck',
    skills: [
      'Algorithms & Data Structures',
      'Test-Driven Development (TDD)',
      'Behavior-Driven Development (BDD)',
      'Advanced Kotlin Programming',
      'Object-Oriented Design Patterns',
    ],
    footerComment: '// Rigorous testing & clean design',
    accentColorClass: 'text-tag-purple',
  },
]

export const spokenLanguages: SpokenLanguage[] = [
  { name: 'Portuguese', fluency: '(Native)', color: 'emerald' },
  { name: 'English', fluency: '(Native / Bilingual)', color: 'emerald' },
  { name: 'Spanish', fluency: '(Limited)', color: 'blue' },
  { name: 'Libras', fluency: '(Limited)', color: 'purple' },
  { name: 'Danish', fluency: '(Elementary)', color: 'crimson' },
]

export const educationNodes: AcademicNode[] = [
  {
    id: 'gsu',
    years: '2014 - 2015',
    institution: 'Georgia State University',
    degree: 'Foreign Exchange Student',
    description:
      'Computer and Information Systems Security / Information Assurance. Deep immersion in cryptography, system hardening, and secure protocols.',
    location: 'Atlanta, United States',
    accentColorClass: 'bg-tag-blue',
  },
  {
    id: 'newton-paiva',
    years: '2012 - 2017',
    institution: 'Centro Universitário Newton Paiva',
    degree: 'Bachelor Degree',
    description:
      'Computer and Information Systems Major. Comprehensive curriculum covering software engineering, database modeling, and distributed architectures.',
    location: 'Belo Horizonte, Brazil',
    accentColorClass: 'bg-tag-emerald',
  },
  {
    id: 'polytechnic-mg',
    years: '2010 - 2011',
    institution: 'Polytechnic School of Minas Gerais',
    degree: 'Técnico em Informática',
    description:
      'Core technical programming foundation, network hardware, low-level data structures, and computer architecture.',
    location: 'Minas Gerais, Brazil',
    accentColorClass: 'bg-tag-purple',
  },
]
