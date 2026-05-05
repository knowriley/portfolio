export interface CaseStudy {
  slug: string
  title: string
  description: string
  tags: string[]
  year: string
  industry: string
  comingSoon?: boolean
  /** When true, omit from public listings (WorkGrid, etc.). The page route should also notFound(). */
  hidden?: boolean
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
    hidden: true,
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
    hidden: true,
  },
  {
    slug: 'evidence-of-insurability',
    title: 'Ambiguous interaction to explicit choice: improving insurance product selection accuracy by 62%',
    description:
      'Leveraged Claude Code to accelerate design, enabling two rounds of usability testing not originally in scope. These insights drove design changes that improved the customer experience and minimized downstream operational impacts — all without extending the delivery timeline.',
    tags: ['AI Workflows', 'Rapid Prototyping', 'A/B Testing', 'Interaction Design'],
    year: 'Apr 2026',
    industry: 'Insurance',
    thumbnail: '/images/eoi-cover.mp4',
  },
  {
    slug: 'ai-claims-portal',
    title: 'Converging 2 websites and 8 customer segments into 1 unified portal experience at Chubb Benefits',
    description:
      'Unifying eight customer segments and three billing systems into a single claims portal — shipped faster with AI-assisted design and engineering workflows. Password-protected; details available on request.',
    tags: ['Figma Engineering for AI', 'Cross-functional Alignment'],
    year: 'Mar 2026 - Present',
    industry: 'Insurance',
    thumbnail: '/images/chubb-cover-unified-experience.webp',
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
