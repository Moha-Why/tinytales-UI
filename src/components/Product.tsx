'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Cotton');
  const [selectedSize, setSelectedSize] = useState<string>('2XL');
  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [mainImage, setMainImage] = useState<string>('/product_main.png');
  
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8'
  ];

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => Math.max(1, prev - 1));
  
  const handleAddToCart = () => {
    setIsInCart(true);
    setTimeout(() => setIsInCart(false), 2000);
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen p-8 gap-8">
      {/* Left Section - 40% */}
      <div className="w-full lg:w-[40%] flex flex-col gap-4">
        {/* Main Product Image */}
        <motion.div 
          className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={mainImage}
            alt="Product Main" 
            className="w-full h-full object-cover cursor-pointer"
          />
        </motion.div>
        
        {/* Variant Image */}
        <motion.div 
          className="w-full rounded-lg overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          onClick={() => setMainImage('/product_varient.png')}
        >
          <img 
            src="/product_varient.png" 
            alt="Product Variant" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right Section - 60% */}
      <div className="w-full lg:w-[60%] flex flex-col gap-6">
        {/* Row 1: Type and Icons */}
        <div className="flex items-center justify-between">
          <span className="text-gray-600 px-5 py-2 rounded-full border border-gray-300 text-lg">
            T-Shirt
          </span>
          <div className="flex gap-3">
            <motion.div 
              className="p-2 border border-gray-300 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
            >
              <img src="/add_cart.svg" alt="Add to cart" className="w-6 h-6" />
            </motion.div>            
            <motion.div 
              className={`p-2 border rounded-lg cursor-pointer transition-colors ${
                isWishlisted ? 'border-red-400 bg-red-50' : 'border-gray-300'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleWishlist}
            >
              <img src="/heart_product.svg" alt="Wishlist" className="w-6 h-6" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isInCart && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm"
            >
              Added to cart!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Row 2: Product Title */}
        <motion.h1 
          className="text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
        </motion.h1>

        {/* Row 3: Prices */}
        <motion.div 
          className="flex items-center gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-3xl font-bold text-gray-900">$300</span>
          <span className="text-2xl text-gray-400 line-through">$350</span>
          <p className="text-sm text-gray-500 w-full">
            This price is exclusive of taxes
          </p>
        </motion.div>

        {/* Row 4: Description */}
        <p className="text-gray-600">
          Lorem ipsum dolor sit, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy
        </p>

        {/* Row 5: Divider */}
        <div className="w-full h-px bg-gray-300"></div>

        {/* Row 6: Material Select */}
        <motion.div 
          className="relative"
          whileTap={{ scale: 0.98 }}
        >
          <label className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-600">
            Material
          </label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            value={selectedMaterial}
            onChange={(e) => setSelectedMaterial(e.target.value)}
          >
            <option>Cotton</option>
            <option>Polyester</option>
            <option>Blend</option>
          </select>
        </motion.div>

        {/* Row 7: Size Select */}
        <motion.div 
          className="relative"
          whileTap={{ scale: 0.98 }}
        >
          <label className="absolute -top-3 left-3 bg-white px-2 text-sm text-gray-600">
            Size
          </label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 cursor-pointer"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option>2XL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </select>
        </motion.div>

        {/* Row 8: Color Options */}
        <div className="rounded-lg p-4">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Color</h3>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <motion.div 
                className={`p-2 bg-gray-50 transition-all flex items-center justify-center rounded-full cursor-pointer ${
                  selectedColor === index ? 'ring-2 ring-offset-2 ring-gray-900' : ''
                }`} 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setSelectedColor(index)}
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 9: Quantity Title */}
        <h3 className="text-2xl font-semibold text-gray-900">
          Quantity <span className="text-base text-gray-600">($300 for Piece)</span>
        </h3>

        {/* Row 10: Counter and Total */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="counter flex items-center gap-4">
            <div className="flex items-center justify-between p-2 bg-gray-100 gap-4 rounded-lg">
              <motion.button 
                onClick={handleDecrement}
                className="px-3 py-1 rounded-sm text-2xl bg-white hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                −
              </motion.button>
              <motion.span 
                className="text-xl font-semibold text-gray-900 min-w-10 text-center"
                key={quantity}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {quantity}
              </motion.span>
              <motion.button 
                onClick={handleIncrement}
                className="px-3 py-1 rounded-sm text-2xl bg-white hover:bg-gray-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
            <motion.span 
              className="text-2xl font-bold text-gray-900"
              key={quantity * 300}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              ${quantity * 300}
            </motion.span>
          </div>
          <motion.button 
            className="px-12 py-3 w-full justify-center md:w-auto flex items-center gap-3 text-white bg-secondary rounded-xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
          >
            Add To Cart
            <img src="/shopping bag.svg" alt="" className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;