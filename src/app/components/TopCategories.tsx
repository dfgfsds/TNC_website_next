// 'use client';

// import React from 'react';
// import CategoryCard from './CategoryCard';
// import { useCategories } from '../../../context/CategoriesContext';

// function TopCategories() {
//   const { categories } = useCategories();

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
//       <h2 className="text-xl md:text-2xl font-bold uppercase text-[#a100fe] mb-4 md:mb-8">
//         Top <span className="text-black">Categories</span>
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {categories?.data?.slice(0, 9).map((item: any) => (
//           <CategoryCard key={item.id} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TopCategories;


'use client';

import React from 'react';
import CategoryCard from './CategoryCard';
import { useCategories } from '../../../context/CategoriesContext';

function TopCategories({ categories }: any) {
  // const { categories } = useCategories();
  const categoryList = categories || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 md:py-12">
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-bold uppercase text-[#a100fe] mb-4 md:mb-8">
        Top <span className="text-black">Categories</span>
      </h2>

      {/* Skeleton Loader (when data not ready) */}
      {!categoryList.length && (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="min-h-[180px] sm:min-h-[240px] md:min-h-[280px] rounded-xl bg-gray-200 animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Categories Grid */}
      {categoryList.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categoryList.slice(0, 9).map((item: any) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default TopCategories;
