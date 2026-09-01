import type { MetadataRoute } from 'next'
import { baseUrl as apiBaseUrl } from '../../api-endpoints/ApiUrls'

const siteBaseUrl = 'https://www.tncomputers.in'
const VENDOR_ID = 66

const fetchOptions = {
  headers: {
    Origin: siteBaseUrl,
  },
}

function slugConvert(text: string): string {
  return text
    ?.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastMod = new Date()

  let categoryUrls: MetadataRoute.Sitemap = []
  let productUrls: MetadataRoute.Sitemap = []
  let blogUrls: MetadataRoute.Sitemap = []

  try {
    const [catRes, prodRes, blogRes] = await Promise.all([
      fetch(`${apiBaseUrl}/api/categories/?vendor_id=${VENDOR_ID}`, fetchOptions),
      fetch(`${apiBaseUrl}/fetch-all-product-with-variant-size/`, fetchOptions),
      fetch(`${apiBaseUrl}/blog/?vendor_id=${VENDOR_ID}`, fetchOptions),
    ])

    // 🔹 Categories
    if (catRes.ok) {
      const catData = await catRes.json()
      const catArray = catData?.data || catData?.results || (Array.isArray(catData) ? catData : [])
      if (Array.isArray(catArray)) {
        categoryUrls = catArray
          .filter((cat: any) => cat.slug_name || cat.name)
          .map((cat: any) => ({
            url: `${siteBaseUrl}/categories/${encodeURIComponent(cat.slug_name || slugConvert(cat.name))}`,
            lastModified: lastMod,
            changeFrequency: 'weekly' as const,
            priority: 0.85,
          }))
      }
    }

    // 🔹 Products
    if (prodRes.ok) {
      const prodData = await prodRes.json()
      const prodArray = prodData?.data || prodData?.results || (Array.isArray(prodData) ? prodData : [])
      if (Array.isArray(prodArray)) {
        productUrls = prodArray
          .filter((product: any) => product.name || product.slug_name)
          .map((product: any) => ({
            url: `${siteBaseUrl}/product/${encodeURIComponent(product.slug_name || slugConvert(product.name))}`,
            lastModified: lastMod,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
          }))
      }
    }

    // 🔹 Blogs
    if (blogRes.ok) {
      const blogData = await blogRes.json()
      const allBlogs =
        blogData?.blogs ||
        blogData?.results ||
        blogData?.data ||
        (Array.isArray(blogData) ? blogData : [])
      if (Array.isArray(allBlogs)) {
        blogUrls = allBlogs
          .filter((blog: any) => blog.title && !blog.delete_status)
          .map((blog: any) => ({
            url: `${siteBaseUrl}/blog/${encodeURIComponent(slugConvert(blog.title))}`,
            lastModified: new Date(blog.updated_at || blog.created_at || lastMod),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          }))
      }
    }
  } catch (error) {
    console.error('Sitemap: Error fetching dynamic data:', error)
  }

  // 🔹 Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteBaseUrl}/`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${siteBaseUrl}/shop`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/categories`,
      lastModified: lastMod,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/custom-pc-build`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/blog`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteBaseUrl}/about-us`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteBaseUrl}/contact-us`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteBaseUrl}/connect`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteBaseUrl}/privacy-policy`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteBaseUrl}/refund-policy`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${siteBaseUrl}/terms`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  return [
    ...staticRoutes,
    ...categoryUrls,
    ...productUrls,
    ...blogUrls,
  ]
}