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




// import type { MetadataRoute } from 'next'
// import categorySeo from '@/app/data/categorySeo.json'

// const baseUrl = 'https://www.tncomputers.in'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
//     '/blog',
//   ]


//   const categorySlugs = Object.keys(categorySeo)

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=87`,
//     { cache: 'no-store' }
//   )

//   const data = await res.json()

//   const blogPages =
//     data?.blogs?.map((blog: any) => ({
//       url: `${baseUrl}/blog/${slugConvert(blog.title)}`,
//       lastModified: new Date(blog.created_at),
//       priority: 0.7,
//     })) || []

//   return [
 
//     ...staticRoutes.map((route) => ({
//       url: `${baseUrl}${route}`,
//       lastModified: lastMod,
//       priority: route === '' ? 1.0 : 0.8,
//     })),


//     ...categorySlugs.map((slug) => ({
//       url: `${baseUrl}/categories/${slug}`,
//       lastModified: lastMod,
//       priority: 0.75,
//     })),


//     ...blogPages,
//   ]
// }


// function slugConvert(text: string) {
//   return text
//     .toLowerCase()
//     .replace(/[^\w ]+/g, '')
//     .replace(/ +/g, '-')
// }
