import type { MetadataRoute } from 'next'
import { caseStudies } from '@/data/case-studies'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://knowriley.com'

  const staticRoutes: MetadataRoute.Sitemap = ['', '/about'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }))

  const studyRoutes: MetadataRoute.Sitemap = caseStudies
    .filter((study) => !study.hidden)
    .map((study) => ({
      url: `${base}/work/${study.slug}`,
      lastModified: new Date(),
    }))

  return [...staticRoutes, ...studyRoutes]
}
