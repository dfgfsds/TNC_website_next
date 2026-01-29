import type { MetadataRoute } from 'next'
import categorySeo from '@/app/data/categorySeo.json'

const baseUrl = 'https://www.tncomputers.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date()

  const staticRoutes = [
    '',
    '/shop',
    '/about-us',
    '/contact-us',
    '/refund-policy',
    '/privacy-policy',
    '/custom-pc-build',
    '/terms',
    '/categories',
    '/profile',
    '/cart',
  ]

  const categorySlugs = Object.keys(categorySeo)

  return [
    // 🔹 Static pages
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: lastMod,
      priority: route === '' ? 1.0 : 0.8,
    })),

    // 🔹 Category pages (AUTO from JSON)
    ...categorySlugs.map((slug) => ({
      url: `${baseUrl}/categories/${slug}`,
      lastModified: lastMod,
      priority: 0.7,
    })),
  ]
}
