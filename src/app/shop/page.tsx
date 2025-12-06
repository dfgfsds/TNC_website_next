'use client';

import { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import ProductGrid from '../components/ProductGrid';
import { useCategories } from '../../../context/CategoriesContext';
import { useProducts } from '../../../context/ProductsContext';



export default function ShopPage() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
   const { categories } = useCategories();
   const {products,isLoading }=useProducts();

  const filteredProducts = selectedCategory
    ? products?.data?.filter((p:any) => p.category === selectedCategory)
    : products?.data;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Shop Product</h1>
      <p className="text-sm text-gray-500 mb-6">Home &gt; Shop Product</p>

      <div className="flex flex-col md:flex-row gap-6">
        <FilterSidebar
          categories={categories?.data}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="w-full">
          <img
            src="https://t4.ftcdn.net/jpg/02/54/80/85/360_F_254808568_fj6iuMwwzloSZYKbhDPShWzSK6GeEjXj.jpg"
            alt="banner"
            className="w-full h-[250px] object-cover rounded mb-10"
          />

          <div className="flex justify-between mb-4">
            <p className="text-sm">Showing 1–{filteredProducts?.length} of {products?.data?.length} results</p>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <ProductGrid products={filteredProducts} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  )
}
