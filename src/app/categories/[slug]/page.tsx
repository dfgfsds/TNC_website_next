// import { Metadata } from 'next'
// import categorySeo from '@/app/data/categorySeo.json'
// import CategoryClient from '@/app/components/CategoriesBasedProduct'

// type Props = {
//   params: { slug: string }
// }

// export async function generateMetadata(
//   { params }: Props
// ): Promise<Metadata> {
//   const seo =
//     categorySeo[params.slug as keyof typeof categorySeo]

//   // Fallback SEO
//   if (!seo) {
//     return {
//       title: 'Category Products | TN Computers',
//       description:
//         'Buy computers, laptops & accessories at best price in India',
//     }
//   }

//   return {
//     title: seo.metaTitle,
//     description: seo.metaDescription,
//     alternates: {
//       canonical: `https://www.tncomputers.in/categories/${params.slug}`,
//     },
//     openGraph: {
//       title: seo.metaTitle,
//       description: seo.metaDescription,
//       url: `https://www.tncomputers.in/categories/${params.slug}`,
//       siteName: 'TN Computers',
//       type: 'website',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: seo.metaTitle,
//       description: seo.metaDescription,
//     },
//   }
// }

// export default function Page({ params }: Props) {
//   return <CategoryClient slug={params.slug} />
// }

// app/categories/[slug]/page.tsx

import { Metadata } from 'next'
import categorySeo from '@/app/data/categorySeo.json'
import CategoryClient from '@/app/components/CategoriesBasedProduct'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {

  const seo: any = categorySeo[params.slug as keyof typeof categorySeo]

  if (!seo || Object.keys(seo).length === 0) {
    return {
      title: 'Category Products | TN Computers',
      description: 'Buy computers, laptops & accessories at best price in India',
    }
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords || [],

    robots: seo.robots || 'index, follow',

    alternates: {
      canonical: seo.ogUrl || `https://www.tncomputers.in/categories/${params.slug}`,
    },

    openGraph: {
      title: seo.ogTitle || seo.metaTitle,
      description: seo.ogDescription || seo.metaDescription,
      url: seo.ogUrl || `https://www.tncomputers.in/categories/${params.slug}`,
      type: seo.ogType || 'website',
      siteName: seo.ogSiteName || 'TN Computers',

      images: [
        {
          url: seo.ogImageSecureUrl || seo.image,
          width: seo.ogWidth || 1200,
          height: seo.ogHeight || 630,
          alt: seo.ogImageAlt || seo.metaTitle,
        },
      ],
    },

    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      title: seo.twitterTitle || seo.metaTitle,
      description: seo.twitterDescription || seo.metaDescription,
      images: [seo.twitterImage || seo.image],
      site: seo.twitterSite || '@tncomputers',
    },

    other: {
      "application/ld+json": JSON.stringify([
        seo.schema,
        seo.faqSchema
      ]),
      "image_src": seo.imageSrc || seo.image,
    }
  }
}

export default function Page({ params }: Props) {
  return (
    <CategoryClient slug={params.slug} />
  )
}