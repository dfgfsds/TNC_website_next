// import React from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { fadeUp } from '../data/animations'
// // import { categories } from '../data/categories'
// import CategoryCard from './CategoryCard'
// import { useCategories } from '../../../context/CategoriesContext'

// interface Props { }

// function TopCategories(props: Props) {
//   const { categories } = useCategories();
//   const { } = props
//   // Container stagger animation
//   const staggerContainer = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   }


//   return (
//     <>
//       {/* Top Categories Section */}
//       <motion.div
//         className="max-w-7xl mx-auto px-4 py-12"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={staggerContainer}
//       >
//         <motion.h2
//           className="text-2xl font-extrabold uppercase text-[#a100fe] mb-8"
//           variants={fadeUp}
//         >
//           Top <span className="text-black">Categories</span>
//         </motion.h2>

// <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//           {categories?.data?.map((item: any, index: any) => (
//             <motion.div key={index} variants={fadeUp}>
//               <CategoryCard {...item} />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   )
// }

// export default TopCategories;

import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion'
// import { fadeUp } from '../data/animations'
import CategoryCard from './CategoryCard';
import { useCategories } from '../../../context/CategoriesContext';

interface Props { }

function TopCategories(props: Props) {
  const { categories } = useCategories();
  const { } = props;

  return (
    <>
      {/* Top Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 md-py-12">
        <h2 className="text-xl md-text-2xl font-bold uppercase text-[#a100fe] mb-4 md-mb-8">
          Top <span className="text-black">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories?.data?.slice(0, 9).map((item: any, index: any) => (
            <div key={index}>
              <CategoryCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopCategories;

