import type { MetadataRoute } from 'next'
import categorySeo from '@/app/data/categorySeo.json'

const baseUrl = 'https://www.tncomputers.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastMod = new Date()

  /* 🔹 STATIC PAGES */
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
    '/blog',
  ]

  /* 🔹 CATEGORY PAGES */
  const categorySlugs = Object.keys(categorySeo)

  /* 🔹 BLOG PAGES (SERVER FETCH) */
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=87`,
    { cache: 'no-store' }
  )

  const data = await res.json()

  const blogPages =
    data?.blogs?.map((blog: any) => ({
      url: `${baseUrl}/blog/${slugConvert(blog.title)}`,
      lastModified: new Date(blog.created_at),
      priority: 0.7,
    })) || []

  return [
    // 🔹 Static pages
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: lastMod,
      priority: route === '' ? 1.0 : 0.8,
    })),

    // 🔹 Category pages
    ...categorySlugs.map((slug) => ({
      url: `${baseUrl}/categories/${slug}`,
      lastModified: lastMod,
      priority: 0.75,
    })),

    // 🔹 Blog pages
    ...blogPages,
  ]
}

/* 🔹 Slug helper */
function slugConvert(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}
