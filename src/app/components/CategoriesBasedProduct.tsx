'use client';

import { useParams } from 'next/navigation';
import { useProducts } from '../../../context/ProductsContext';
import { useCategories } from '../../../context/CategoriesContext';
import { useState } from 'react';
import { useVendor } from '../../../context/VendorContext';
import { useCartItem } from '../../../context/CartItemContext';
import LoginModal from '@/app/components/LoginModal/page';
import ProductGrid from '@/app/components/ProductGrid';
import { slugConvert } from '../../../lib/utils';
import categorySeo from '@/app/data/categorySeo.json';

export default function CategoriesBasedProduct() {
  const { slug } = useParams<{ slug: string }>();

  const [signInModal, setSignInModal] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  const { products, isLoading }: any = useProducts();
  const { categories }: any = useCategories();
  const { vendorId } = useVendor();
  const { cartItem }: any = useCartItem();

  // 🔹 Truncate helper
  const truncateWords = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  // 🔹 SEO content from JSON
  const seoData =
    slug && typeof slug === 'string'
      ? categorySeo[slug as keyof typeof categorySeo]
      : null;

  // 🔹 Find category name
  const category = categories?.data?.find(
    (cat: any) => slugConvert(cat.name) === slug
  );

  const categoryName = category?.name || 'Category';

  // 🔹 Filter products by category slug
  const filteredProducts = products?.data?.filter(
    (product: any) => slugConvert(product.category_name) === slug
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* H1 */}
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">
        {categoryName} Products
      </h1>

      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : filteredProducts?.length ? (
        <>
          {/* PRODUCT GRID */}
          <ProductGrid products={filteredProducts} />

          {/* SEO CONTENT */}
          {seoData?.content && (
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              {/* H2 */}
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {seoData.content.h1}
              </h2>

              {/* INTRO */}
              <p className="mb-6 text-gray-700 leading-7">
                {showFullContent
                  ? seoData.content.intro
                  : truncateWords(seoData.content.intro, 80)}
              </p>

              {/* BODY HTML */}
              {seoData.content.body && (
                <div
                  className={`prose prose-lg max-w-none text-gray-700 transition-all duration-500 overflow-hidden ${
                    showFullContent ? 'max-h-[2000px]' : 'max-h-60'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: seoData.content.body,
                  }}
                />
              )}

              {/* READ MORE */}
              <button
                onClick={() => setShowFullContent(!showFullContent)}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                {showFullContent ? 'Read Less...' : 'Read More...'}
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      {/* LOGIN MODAL */}
      {signInModal && (
        <LoginModal
          open={signInModal}
          handleClose={() => setSignInModal(false)}
          vendorId={vendorId}
        />
      )}
    </div>
  );
}
