'use client';

import React from 'react';
import CategoryCard from './CategoryCard';
import { useCategories } from '../../../context/CategoriesContext';

function TopCategories() {
  const { categories } = useCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-12">
      <h2 className="text-xl md:text-2xl font-bold uppercase text-[#a100fe] mb-4 md:mb-8">
        Top <span className="text-black">Categories</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories?.data?.slice(0, 9).map((item: any) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default TopCategories;
