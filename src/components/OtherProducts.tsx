'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  imageUrl: string;
  showBadge?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, showBadge = false }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="flex-shrink-0 w-72 bg-white rounded-xl border border-gray-200 overflow-hidden"
    >
      <div className="relative">
        <img src={imageUrl} alt="Product" className="w-full h-80 object-cover" />
        
        {showBadge && (
          <div className="absolute top-4 left-4 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            25% OFF
          </div>
        )}
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill={isLiked ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </motion.button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Dresses</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-semibold">4.5</span>
            <span className="text-xs text-gray-400">(2910)</span>
          </div>
        </div>
        
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2">
          J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yello
        </h3>
        
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lg font-bold text-gray-900">AED 900</span>
          <span className="text-sm text-gray-400 line-through">AED 1300</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-orange-300 border-2 border-white shadow-sm"></div>
          <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-white shadow-sm"></div>
          <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white shadow-sm"></div>
          <span className="text-xs text-gray-500 ml-1">+2</span>
        </div>
      </div>
    </motion.div>
  );
};

const SimilarItems: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      
      let newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(maxScroll, scrollPosition + scrollAmount);
      
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const products = [
    { showBadge: false },
    { showBadge: true },
    { showBadge: false },
    { showBadge: true },
    { showBadge: true },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Similar Items</h2>
        <div className="w-12 h-1 bg-orange-300 mt-2"></div>
      </div>
      
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 mb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl="/other.png"
            showBadge={product.showBadge}
          />
        ))}
      </div>
      
      <div className="flex justify-center items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('left')}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll('right')}
          className="w-12 h-12 rounded-full bg-rose-300 hover:bg-rose-400 flex items-center justify-center transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default SimilarItems;