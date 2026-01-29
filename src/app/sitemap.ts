import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.tncomputers.in'
const lastMod = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/shop',
    '/about-us',
    '/contact-us',
    '/refund-policy',
    '/privacy-policy',
    '/terms',
    '/categories',
    '/profile',
    '/cart',
  ]

  const categorySlugs = [
    'headphone',
    'hard-drive',
    'keyboard-and-mouse',
    // 'custom-pc-build',
    'custom-cables',
    'pc-components',
    'ram',
    'amd',
    'cpu-cooler',
    'monitors',
    'graphics-card',
    'intel',
    'power-supply',
    'ssd',
    'processor',
    'cabinet',
    'desktops',
    'laptops',
    'barcode-scanner',
    'printer',
    'gamepad',
    'refurbished-laptops',
  ]

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
      priority: 0.7,
    })),
  ]
}
