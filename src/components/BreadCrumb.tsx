'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const defaultItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Our Category', href: '/' },
    { label: 'T-Shirt', active: true },
  ];

  const breadcrumbItems = items || defaultItems;

  return (
    <nav className="flex items-center gap-2 py-4 px-6 rounded-2xl mx-8 mt-5 bg-gray-50">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href && !item.active ? (
            <motion.a
              href={item.href}
              className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
            </motion.a>
          ) : (
            <span className={item.active ? 'text-gray-400' : 'text-gray-900 font-medium'}>
              {item.label}
            </span>
          )}
          
          {index < breadcrumbItems.length - 1 && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;