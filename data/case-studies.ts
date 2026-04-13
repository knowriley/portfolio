export interface CaseStudy {
  slug: string
  title: string
  description: string
  tags: string[]
  year: string
  industry: string
  comingSoon?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'design-system-documentation',
    title: 'Creating a single source of truth for the Bricks Design System',
    description:
      'Aligning internationally distributed design and development teams, removing workflow bottlenecks and setting the foundation for long term maintenance and scale.',
    tags: ['Design Systems', 'Figma', 'Documentation'],
    year: 'Jun 2024 - Nov 2024',
    industry: 'B2B SEO',
  },
  {
    slug: 'coming-soon-1',
    title: 'Rapid prototyping in Claude Code for Evidence of Insurability',
    description: 'Coming soon',
    tags: ['AI Workflows', 'Rapid Prototyping', 'User Testing'],
    year: 'Mar 2026 - Present',
    industry: 'Insurance',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-2',
    title: '8 customer segments, 3 billing systems, 1 claims portal - accelerated with AI',
    description: '',
    tags: ['Figma Engineering for AI', 'Cross-functional Alignment'],
    year: 'Jan 2026 - Present',
    industry: 'Insurance',
    comingSoon: true,
  },
  {
    slug: 'coming-soon-3',
    title: 'Case Study — Coming Soon',
    description: '',
    tags: ['UX Research', 'Figma'],
    year: '2023',
    industry: 'UX Designer',
    comingSoon: true,
  },
]
