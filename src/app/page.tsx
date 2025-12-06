'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import CategoryCard from './components/CategoryCard';
import { fadeUp } from './data/animations';
import NewArrivals from './components/newArrivals';
import ProductPromoSection from './components/ProductPromoSection';
import FeatureHighlights from './components/FeatureHighlights';
import BrandsSection from './components/BrandsSection';
import CustomerReviewSection from './components/CustomerReviewSection';
import Carousel from './components/Carousel';
import TopCategories from './components/TopCategories';
import { useUser } from '../../context/UserContext';


const HomePage = () => {
  // const [index, setIndex] = useState(0)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length)
  //   }, 5000)
  //   return () => clearInterval(timer)
  // }, [])


  return (
    <div>
      {/* Hero Section */}
      <Carousel />
      <TopCategories />
      <NewArrivals />
      <ProductPromoSection />
      <FeatureHighlights />
      <CustomerReviewSection />
      <BrandsSection />

    </div>
  )
}

export default HomePage
