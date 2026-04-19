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

const rawCaseStudies: CaseStudy[] = [
  {
    slug: 'design-system-documentation',
    title: 'Creating a single source of truth for the Bricks Design System',
    description:
      'Aligning internationally distributed design and development teams, removing workflow bottlenecks and setting the foundation for long term maintenance and scale.',
    tags: ['Design Systems', 'Figma', 'Documentation'],
    year: 'Jun 2024 - Nov 2024',
    industry: 'B2B SEO',
    thumbnail: '/images/bricks-cover.webp',
  },
  {
    slug: 'conductor-website-redesign',
    title: "Redesigning Conductor's website for their AI go-to-market launch",
    description:
      "Modernizing the visual identity, aligning stakeholders across UX and marketing, and launching a homepage that announced Conductor's next chapter.",
    tags: ['Visual Design', 'Web Design', 'Cross-functional Collaboration'],
    year: 'Feb 2025 - May 2025',
    industry: 'B2B SEO',
    thumbnail: '/images/product-overview-move-in-animation.mp4',
  },
  {
    slug: 'evidence-of-insurability',
    title: 'Rapid prototyping in Claude Code for Evidence of Insurability',
    description:
      'Proof-of-concept prototyping flow for an enterprise insurance Evidence of Insurability experience — built and iterated in Claude Code. NDA-protected; password required.',
    tags: ['AI Workflows', 'Rapid Prototyping', 'User Testing'],
    year: 'Mar 2026 - Present',
    industry: 'Insurance',
  },
  {
    slug: 'ai-claims-portal',
    title: '8 customer segments, 3 billing systems, 1 claims portal - accelerated with AI',
    description:
      'Unifying eight customer segments and three billing systems into a single claims portal — shipped faster with AI-assisted design and engineering workflows. NDA-protected; password required.',
    tags: ['Figma Engineering for AI', 'Cross-functional Alignment'],
    year: 'Jan 2026 - Present',
    industry: 'Insurance',
  },
]

// Parse the start date from the `year` field. Accepts "Jun 2024",
// "Feb 2025 - May 2025", "Mar 2026 - Present", or a bare "2023".
// Falls back to 0 (oldest) when the value can't be parsed.
function parseStartDate(year: string): number {
  const start = year.split(/[–-]/)[0].trim()
  const t = Date.parse(start)
  return Number.isNaN(t) ? 0 : t
}

// Sorted by start date, most recent first. Keep source order for ties.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => parseStartDate(b.year) - parseStartDate(a.year),
)
