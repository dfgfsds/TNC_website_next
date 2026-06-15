// 'use client'

// import { useProducts } from '../../../context/ProductsContext'
// import { useCategories } from '../../../context/CategoriesContext'
// import { useState } from 'react'
// import { useVendor } from '../../../context/VendorContext'
// import { useCartItem } from '../../../context/CartItemContext'
// import LoginModal from '@/app/components/LoginModal/page'
// import ProductGrid from '@/app/components/ProductGrid'
// import { slugConvert } from '../../../lib/utils'
// import categorySeo from '@/app/data/categorySeo.json'

// export default function CategoryClient({ slug }: { slug: string }) {
//   const [signInModal, setSignInModal] = useState(false)
//   const [showFullContent, setShowFullContent] = useState(false)

//   const { products, isLoading }: any = useProducts()
//   const { categories }: any = useCategories()
//   const { vendorId } = useVendor()
//   const { cartItem }: any = useCartItem()

//   const truncateWords = (text: string, wordLimit: number) => {
//     const words = text.split(' ')
//     return words.length <= wordLimit
//       ? text
//       : words.slice(0, wordLimit).join(' ') + '...'
//   }

//   const seoData =
//     categorySeo[slug as keyof typeof categorySeo]

//   const category = categories?.data?.find(
//     (cat: any) => slugConvert(cat.name) === slug
//   )

//   const categoryName = category?.name || 'Category'

//   const filteredProducts = products?.data?.filter(
//     (product: any) => slugConvert(product.category_name) === slug
//   )

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
//         {categoryName} Products
//       </h1>

//       {isLoading ? (
//         <p className="text-center">Loading...</p>
//       ) : filteredProducts?.length ? (
//         <>
//           <ProductGrid products={filteredProducts} />

//           {seoData?.content && (
//             <div className="mt-16 bg-gray-50 p-8 rounded-xl">
//               <h2 className="text-2xl font-bold mb-4">
//                 {seoData.content.h1}
//               </h2>

//               <p className="mb-6">
//                 {showFullContent
//                   ? seoData.content.intro
//                   : truncateWords(seoData.content.intro, 80)}
//               </p>

//               <div
//                 className={`prose max-w-none ${showFullContent ? '' : 'max-h-60 overflow-hidden'
//                   }`}
//                 dangerouslySetInnerHTML={{
//                   __html: seoData.content.body,
//                 }}
//               />

//               <button
//                 onClick={() => setShowFullContent(!showFullContent)}
//                 className="mt-4 text-blue-600 font-semibold"
//               >
//                 {showFullContent ? 'Read Less...' : 'Read More...'}
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <p className="text-center">No products found.</p>
//       )}

//       {signInModal && (
//         <LoginModal
//           open={signInModal}
//           handleClose={() => setSignInModal(false)}
//           vendorId={vendorId}
//         />
//       )}
//     </div>
//   )
// }

'use client'

import { useProducts } from '../../../context/ProductsContext'
import { useCategories } from '../../../context/CategoriesContext'
import { useState } from 'react'
import { useVendor } from '../../../context/VendorContext'
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

  const seoData: any = categorySeo[slug as keyof typeof categorySeo]

  const category = categories?.data?.find(
    (cat: any) => slugConvert(cat.name) === slug
  )

  const categoryName = category?.name || 'Category'

  const filteredProducts = products?.data?.filter(
    (product: any) => slugConvert(product.category_name) === slug
  )

  // 22 CATEGORIES PREMIUM THEMING MATRIX
  const categoryStyles: Record<string, { container: string; textButton: string; border: string; accent: string }> = {
    laptops: {
      container: 'bg-gradient-to-br from-purple-50 via-white to-indigo-50 border-purple-100 shadow-xl shadow-purple-100/30',
      textButton: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-purple-200',
      border: 'prose-h2:border-l-4 prose-h2:border-purple-500 prose-h2:pl-4',
      accent: 'text-purple-600'
    },
    // headphones: {
    //   container: 'bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border-cyan-100 shadow-xl shadow-cyan-100/30',
    //   textButton: 'bg-gradient-to-r from-cyan-600 to-emerald-600 hover:shadow-cyan-200',
    //   border: 'prose-h2:border-l-4 prose-h2:border-cyan-500 prose-h2:pl-4',
    //   accent: 'text-cyan-600'
    // }
  }

  const currentStyle = categoryStyles[slug] || {
    container: 'bg-white border-gray-100 shadow-xl shadow-gray-100/50',
    textButton: 'bg-[#9333ea] hover:opacity-95',
    border: 'prose-h2:border-l-4 prose-h2:border-[#9333ea] prose-h2:pl-4',
    accent: 'text-[#9333ea]'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* TOP SECTION - ONLY TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-4xl font-black tracking-tighter text-blue-600 mb-4">
          {seoData?.content?.h1 || `${categoryName}`}
        </h1>
        <div className={`h-1.5 w-24 mx-auto rounded-full ${currentStyle.textButton.split(' ')[0]}`}></div>
      </div>

      {/* PRODUCT GRID - NOW SHOWS IMMEDIATELY */}
      {isLoading ? (
        <div className="flex flex-col items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          <p className="mt-4 text-gray-500 font-medium">Fetching Best {categoryName}...</p>
        </div>
      ) : filteredProducts?.length ? (
        <>
          <ProductGrid products={filteredProducts} />
        </>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <p className="text-xl text-gray-400 font-semibold tracking-tight">No products listed in {categoryName} yet.</p>
        </div>
      )}
      {/* BOTTOM SECTION - SEO CONTENT WITH PREMIUM DESIGN */}
      {seoData?.content?.body && (
        <div className={`mt-24 border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${currentStyle.container}`}>

          {/* INTRO MINI BLOCK */}
          {/* <div className="p-8 md:p-12 pb-0">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic opacity-90">
              "{seoData.content.intro.substring(0, 250)}..."
            </p>
          </div> */}

          <div className="p-8 md:p-12 pb-0">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium italic opacity-90">
              &ldquo;{seoData.content.intro.substring(0, 250)}...&rdquo;
            </p>
          </div>

          <div className="relative p-8 md:p-12">
            <div
              className={`prose max-w-none 
                    prose-headings:font-black prose-headings:tracking-tight prose-headings:text-gray-900
                    prose-h2:text-2xl md:prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12
                    prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-gray-800
                    prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6 prose-p:text-base md:prose-p:lg
                    prose-ul:bg-white/50 prose-ul:p-6 prose-ul:rounded-2xl prose-ul:border prose-ul:border-gray-100 prose-ul:shadow-sm
                    prose-li:text-gray-700 prose-li:font-medium
                    prose-strong:text-gray-900
                    prose-a:text-indigo-600 prose-a:no-underline prose-a:font-bold hover:prose-a:underline
                    ${currentStyle.border}
                    ${showFullContent ? '' : 'max-h-[500px] overflow-hidden'}`}
              dangerouslySetInnerHTML={{
                __html: seoData.content.body,
              }}
            />

            {/* GRADIENT OVERLAY FOR READ MORE */}
            {!showFullContent && (
              <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
            )}
          </div>

          {/* READ MORE BUTTON BOX */}
          <div className="pb-12 text-center relative z-10 bg-white/10 backdrop-blur-[2px]">
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className={`group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 rounded-2xl shadow-lg active:scale-95 ${currentStyle.textButton}`}
            >
              <span className="relative">
                {showFullContent ? 'Show Less Details' : 'Read Full Buying Guide & FAQ'}
              </span>
              <svg
                className={`ml-2 w-5 h-5 transition-transform duration-300 ${showFullContent ? 'rotate-180' : 'group-hover:translate-y-1'}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
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