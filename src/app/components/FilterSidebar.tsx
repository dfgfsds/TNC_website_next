'use client';

import { useState } from 'react';
import { FaTimes, FaFilter } from 'react-icons/fa';
import { useCategories } from '../../../context/CategoriesContext';

interface Category {
  id: string;
  name: string;
}

interface FilterSidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string; // ✅ add this
}

export default function FilterSidebar({
  selectedCategory,
  onSelectCategory,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {categories,isLoading} =useCategories();
  
  
  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#a100fe] text-white font-semibold rounded"
          onClick={() => setIsOpen(true)}
        >
          <FaFilter /> Filter Categories
        </button>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:block md:w-1/4 h-fit   border rounded p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="space-y-2">
          <button
            className={`block w-full text-left px-3 py-2 rounded ${
              selectedCategory === null
                ? 'bg-[#a100fe] text-white font-semibold'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => onSelectCategory(null)}
          >
            All Products  
          </button>
          {isLoading ? <></>
          :
          categories?.data?.map((category:any) => (
            <button
              key={category.id}
              className={`block w-full text-left px-3 py-2 rounded ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => onSelectCategory(category.id)}
            >
              {category.name}
            </button>
          ))
          }
        </div>
      </aside>

      {/* Sidebar - Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button
                className="text-xl text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-2">
              <button
                className={`block w-full text-left px-3 py-2 rounded ${
                  selectedCategory === null
                    ? 'bg-[#a100fe] text-white font-semibold'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => {
                  onSelectCategory(null);
                  setIsOpen(false);
                }}
              >
                All Products
              </button>

              {categories.map((category:any) => (
                <button
                  key={category.id}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    onSelectCategory(category.id);
                    setIsOpen(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
