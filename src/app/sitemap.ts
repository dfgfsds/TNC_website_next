import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.tncomputers.in'
  const lastModified = '2025-12-27T05:47:57+00:00'

  return [
    { url: `${baseUrl}/`, lastModified, priority: 1.0 },

    { url: `${baseUrl}/about-us`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified, priority: 0.8 },

    { url: `${baseUrl}/refund-policy`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/terms`, lastModified, priority: 0.8 },

    { url: `${baseUrl}/categories`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/shop`, lastModified, priority: 0.8 },

    { url: `${baseUrl}/profile`, lastModified, priority: 0.8 },
    { url: `${baseUrl}/cart`, lastModified, priority: 0.8 }
  ]
}
