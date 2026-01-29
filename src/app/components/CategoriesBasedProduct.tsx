'use client'

import { useProducts } from '../../../context/ProductsContext'
import { useCategories } from '../../../context/CategoriesContext'
import { useState } from 'react'
import { useVendor } from '../../../context/VendorContext'
import { useCartItem } from '../../../context/CartItemContext'
import LoginModal from '@/app/components/LoginModal/page'
import ProductGrid from '@/app/components/ProductGrid'
import { slugConvert } from '../../../lib/utils'
import categorySeo from '@/app/data/categorySeo.json'

export default function CategoryClient({ slug }: { slug: string }) {
  const [signInModal, setSignInModal] = useState(false)
  const [showFullContent, setShowFullContent] = useState(false)

  const { products, isLoading }: any = useProducts()
  const { categories }: any = useCategories()
  const { vendorId } = useVendor()
  const { cartItem }: any = useCartItem()

  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(' ')
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(' ') + '...'
  }

  const seoData =
    categorySeo[slug as keyof typeof categorySeo]

  const category = categories?.data?.find(
    (cat: any) => slugConvert(cat.name) === slug
  )

  const categoryName = category?.name || 'Category'

  const filteredProducts = products?.data?.filter(
    (product: any) => slugConvert(product.category_name) === slug
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        {categoryName} Products
      </h1>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : filteredProducts?.length ? (
        <>
          <ProductGrid products={filteredProducts} />

          {seoData?.content && (
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">
                {seoData.content.h1}
              </h2>

              <p className="mb-6">
                {showFullContent
                  ? seoData.content.intro
                  : truncateWords(seoData.content.intro, 80)}
              </p>

              <div
                className={`prose max-w-none ${
                  showFullContent ? '' : 'max-h-60 overflow-hidden'
                }`}
                dangerouslySetInnerHTML={{
                  __html: seoData.content.body,
                }}
              />

              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="mt-4 text-blue-600 font-semibold"
              >
                {showFullContent ? 'Read Less...' : 'Read More...'}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center">No products found.</p>
      )}

      {signInModal && (
        <LoginModal
          open={signInModal}
          handleClose={() => setSignInModal(false)}
          vendorId={vendorId}
        />
      )}
    </div>
  )
}
