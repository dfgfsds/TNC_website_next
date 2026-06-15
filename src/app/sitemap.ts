// import type { MetadataRoute } from 'next'
// import categorySeo from '@/app/data/categorySeo.json'

// const baseUrl = 'https://www.tncomputers.in'

// export default function sitemap(): MetadataRoute.Sitemap {
//   const lastMod = new Date()

//   const staticRoutes = [
//     '',
//     '/shop',
//     '/about-us',
//     '/contact-us',
//     '/refund-policy',
//     '/privacy-policy',
//     '/custom-pc-build',
//     '/terms',
//     '/categories',
//     '/profile',
//     '/cart',
//   ]

//   const categorySlugs = Object.keys(categorySeo)

//   return [
//     // 🔹 Static pages
//     ...staticRoutes.map((route) => ({
//       url: `${baseUrl}${route}`,
//       lastModified: lastMod,
//       priority: route === '' ? 1.0 : 0.8,
//     })),

//     // 🔹 Category pages (AUTO from JSON)
//     ...categorySlugs.map((slug) => ({
//       url: `${baseUrl}/categories/${slug}`,
//       lastModified: lastMod,
//       priority: 0.7,
//     })),
//   ]
// }


import type { MetadataRoute } from 'next'
import categorySeo from '@/app/data/categorySeo.json'

const baseUrl = 'https://www.tncomputers.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date()

  // 🔹 Static Pages
  const staticRoutes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/shop',
      priority: 0.9,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/categories',
      priority: 0.9,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/custom-pc-build',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/about-us',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/contact-us',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/privacy-policy',
      priority: 0.6,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/refund-policy',
      priority: 0.6,
      changeFrequency: 'yearly' as const,
    },
    {
      path: '/terms',
      priority: 0.6,
      changeFrequency: 'yearly' as const,
    },
  ]

  // 🔹 Dynamic Categories from JSON
  const categorySlugs = Object.keys(categorySeo)

  // 🔹 Blog URLs
  const blogRoutes = [
    'performance-test-can-acer-aspire-lite-al15-41-handle-multitasking',
    'lenovo-v15-g3-iap-review-affordable-performance-for-everyday-use',
    'top-features-that-make-the-hp-victus-15-fb3189ax-a-smart-buy',
    'is-the-hp-s03-0001-omnidesk-slim-right-for-your-home-office-setup',
    'is-the-dell-vostro-3030-sff-a-good-investment-for-long-term-use',
    'dominate-any-game-why-our-ryzen-5-5600gt-pre-built-pc-is-a-must-have',
    'tips-to-optimize-acer-aspire-lite-al15-41-for-better-performance',
    'why-the-acer-aspire-lite-al15-53-is-a-great-choice-for-professionals',
    'acer-travellite-tl14-52m-best-choice-for-entrepreneurs-and-startups',
    'hp-victus-15-fa2701tx-gaming-laptop-at-tn-computers',
    'hp-omen-16-ap0165ax-battery-life--performance-test-for-gamers',
    'top-features-of-dell-inspiron-3530-that-simplify-daily-productivity',
    'top-reasons-to-choose-the-lenovo-thinkpad-e14-gen-7-for-professionals',
    'why-the-dell-latitude-5480-is-still-a-top-performer-in-2025',
    'refurbished-dell-latitude-5420-full-review-performance-specs--value',
    'refurbished-dell-latitude-5490-reliable-performance-for-remote-teams',
    'can-the-refurbished-dell-latitude-7390-handle-heavy-office-software',
    'aoc-24g4-best-monitor-for-pc-and-console-gamers-on-a-budget',
    'why-the-refurbished-hp-elitebook-840-g7-is-the-best-hp-elitebook-for-professionals',
  ]

  return [
    // 🔹 Static Pages
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route.path}`,
      lastModified: lastMod,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),

    // 🔹 Category Pages
    ...categorySlugs.map((slug) => ({
      url: `${baseUrl}/categories/${slug}`,
      lastModified: lastMod,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),

    // 🔹 Blog Pages
    ...blogRoutes.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: lastMod,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}