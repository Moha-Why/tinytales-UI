'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RatingReviews: React.FC = () => {
  const ratings = [
    { stars: 5, percentage: 67 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 6 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 9 },
  ];

  const reviews = Array(4).fill({
    name: 'Alex Daewn',
    stars: 4,
    time: '4 months ago',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed',
  });

  const StarIcon: React.FC<{ filled?: boolean }> = ({ filled = true }) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? '#D4A5A5' : '#E5E7EB'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-8 py-12 bg-white">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Rating & Reviews</h2>
        <div className="w-16 h-1 bg-rose-300 mt-2"></div>
      </div>

      {/* Rating Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Large Rating Number */}
        <div className="lg:col-span-2 flex justify-center md:items-start">
          <div className="flex items-baseline">
            <span className="text-7xl font-bold text-gray-900">4,5</span>
            <span className="text-2xl text-gray-400 ml-1">/5</span>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="lg:col-span-6 flex flex-col justify-center gap-3">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-4">
              <StarIcon filled={true} />
              <span className="text-sm text-gray-600 w-3">{rating.stars}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${rating.percentage}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-rose-300 rounded-full"
                />
              </div>
              <span className="text-sm text-gray-600 w-10">%{rating.percentage}</span>
            </div>
          ))}
        </div>

        {/* Total Reviews & Add Comment */}
        <div className="lg:col-span-4 flex flex-col items-end justify-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-500 mb-1">Total Reviews</p>
            <p className="text-5xl font-bold text-gray-900">3.0K</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-secondary text-gray-50 rounded-full font-medium flex items-center gap-2"
          >
            Add Comment
            <img src="/comment.svg" alt="" />
          </motion.button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.stars} />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-400">{review.time}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.text}</p>
            {index < reviews.length - 1 && (
              <div className="w-full h-px bg-gray-200 mt-8"></div>
            )}
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gray-100 text-rose-300 rounded-full font-medium"
        >
          View More Comments
        </motion.button>
      </div>
    </div>
  );
};

export default RatingReviews;