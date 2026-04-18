export interface CaseStudy {
  slug: string
  title: string
  description: string
  tags: string[]
  year: string
  industry: string
  comingSoon?: boolean
  /** Path to the work grid card thumbnail, relative to /public (e.g. "/work/slug/thumbnail.png") */
  thumbnail?: string
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
    thumbnail: '/images/bricks-cover.png',
  },
  {
    slug: 'conductor-website-redesign',
    title: "Redesigning Conductor's website for their AI go-to-market launch",
    description:
      "Modernizing the visual identity, aligning stakeholders across UX and marketing, and launching a homepage that announced Conductor's next chapter.",
    tags: ['Visual Design', 'Web Design', 'Cross-functional Collaboration'],
    year: 'TODO: Date range (e.g. Jan 2025 - Apr 2025)',
    industry: 'B2B SEO',
    thumbnail: '/images/conductor-cover.webp',
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
