import { Metadata } from 'next'
import categorySeo from '@/app/data/categorySeo.json'
import CategoryClient from '@/app/components/CategoriesBasedProduct'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const seo =
    categorySeo[params.slug as keyof typeof categorySeo]

  // Fallback SEO
  if (!seo) {
    return {
      title: 'Category Products | TN Computers',
      description:
        'Buy computers, laptops & accessories at best price in India',
    }
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    alternates: {
      canonical: `https://www.tncomputers.in/categories/${params.slug}`,
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: `https://www.tncomputers.in/categories/${params.slug}`,
      siteName: 'TN Computers',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
    },
  }
}

export default function Page({ params }: Props) {
  return <CategoryClient slug={params.slug} />
}
