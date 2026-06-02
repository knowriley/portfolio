export interface CaseStudy {
  slug: string
  title: string
  description: string
  /** Optional ~155-char override for the page's meta/OG description. Falls back to `description`. Use when `description` is too long for a search snippet. */
  metaDescription?: string
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
    slug: 'design-system-source-of-truth',
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
    slug: 'ai-gtm-website-launch',
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
    slug: 'insurance-product-selection',
    title: 'Ambiguous interaction to explicit choice: improving insurance product selection accuracy by 62%',
    description:
      'Leveraged Claude Code to accelerate design, enabling two rounds of usability testing not originally in scope. These insights drove design changes that improved the customer experience and minimized downstream operational impacts, all without extending the delivery timeline.',
    metaDescription:
      'Used Claude Code to accelerate design and fit in two extra rounds of usability testing, driving changes that improved product selection accuracy by 62%.',
    tags: ['AI Workflows', 'Rapid Prototyping', 'A/B Testing', 'Interaction Design'],
    year: 'Apr 2026',
    industry: 'Insurance',
    thumbnail: '/images/eoi-cover.mp4',
  },
  {
    slug: 'insurance-claims-portal',
    title: "Pivoting design strategy mid-build for Chubb's 350K customer claims portal",
    description:
      "Led the design strategy and redesign of Chubb Benefits' unified consumer claims portal supporting 350K customers. Stepped into a leadership role to re-align design and engineering after an AI-accelerated rebuild diverged from the original strategy.",
    metaDescription:
      "Led the design strategy and redesign of Chubb Benefits' unified claims portal for 350K customers, re-aligning design and engineering mid-build.",
    tags: ['Relationship Management', 'AI Workflows'],
    year: 'Nov 2025 – May 2026',
    industry: 'Insurance',
    thumbnail: '/images/chubb-cover-unified-experience.mp4',
  },
]

// Parse the most-recently-active date from the `year` field — i.e. the END of
// the range, or the single date if there's no range, or `Date.now()` for any
// "Present" sentinel. Accepts "Jun 2024", "Feb 2025 - May 2025",
// "Mar 2026 - Present", or a bare "2023". Falls back to 0 if unparseable.
function parseRecency(year: string): number {
  const parts = year.split(/[–-]/).map((s) => s.trim())
  const end = parts[parts.length - 1]
  if (/present/i.test(end)) return Date.now()
  const t = Date.parse(end)
  if (!Number.isNaN(t)) return t
  const startFallback = Date.parse(parts[0])
  return Number.isNaN(startFallback) ? 0 : startFallback
}

// Sorted by most recently active first — in-progress ("Present") studies
// lead, then completed studies by their end date. Keep source order for ties.
export const caseStudies: CaseStudy[] = [...rawCaseStudies].sort(
  (a, b) => parseRecency(b.year) - parseRecency(a.year),
)
