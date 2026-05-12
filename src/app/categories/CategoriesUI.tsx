'use client';

import Link from 'next/link';
import { useCategories } from '../../../context/CategoriesContext';
import Image from 'next/image';
import { slugConvert } from '../../../lib/utils';


export async function generateMetadata() {

  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "name": "Computer Categories | TN Computers",

    "description":
      "Explore laptops, gaming PCs, desktops, refurbished computers, printers, accessories, keyboards, storage devices, and IT products at TN Computers Chennai.",

    "url": "https://www.tncomputers.in/categories",

    "image": "https://www.tncomputers.in/tn-computers-logo.png",

    "mainEntity": {
      "@type": "ItemList",

      "name": "Computer Product Categories",

      "itemListOrder":
        "https://schema.org/ItemListOrderAscending",

      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Laptops"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gaming PCs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Refurbished Computers"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Computer Accessories"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Printers & Storage Devices"
        }
      ]
    }
  };

  return {
    title: "Computer Categories | TN Computers Chennai",

    description:
      "Browse laptop, desktop & accessories categories at TN Computers Chennai. Find top brands, custom PCs and the best deals with warranty.",

    keywords: [
      "laptop categories Chennai",
      "computer categories Chennai",
      "gaming pc categories",
      "refurbished computers Chennai",
      "computer accessories Chennai",
      "desktop categories Chennai",
      "printers Chennai",
      "storage devices Chennai",
      "TN Computers categories",
    ],

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "https://www.tncomputers.in/categories",
    },

    openGraph: {
      title: "Computer Categories | TN Computers Chennai",

      description:
        "Browse laptop, desktop & accessories categories at TN Computers Chennai. Find top brands, custom PCs and the best deals with warranty.",

      url: "https://www.tncomputers.in/categories",

      type: "website",

      images: [
        {
          url: "https://www.tncomputers.in/tn-computers-logo.png",
          width: 1200,
          height: 630,
          alt: "TN Computers Categories",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: "Computer Categories | TN Computers Chennai",

      description:
        "Browse laptop, desktop & accessories categories at TN Computers Chennai.",

      images: [
        "https://www.tncomputers.in/tn-computers-logo.png",
      ],
    },

    other: {
      "application/ld+json": JSON.stringify(schema),
      "image_src":
        "https://www.tncomputers.in/tn-computers-logo.png",
    },

    icons: {
      icon: "https://www.tncomputers.in/favicon.ico",
    },
  };
}

export default function CategoriesPage() {
    

    const { categories }: any = useCategories();

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold mb-4 mt-3">Shop by Category</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Browse our collection of sustainable and eco-friendly products organized by category.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {categories?.data?.map((category: any) => (
                        <Link
                            href={`/categories/${slugConvert(category?.name)}`}
                            key={category?.id}
                            className="relative group overflow-hidden rounded-md shadow hover:shadow-lg transition"
                        >
                            {/* Background Image */}
                            <div className="aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={category?.image || 'https://semantic-ui.com/images/wireframe/image.png'}
                                    alt={category?.name || 'Category'}
                                    className="h-full w-full object-cover  transition-transform duration-500"
                                    width={300}
                                    height={288}
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                            {/* Text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center px-4">
                                    {category?.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
