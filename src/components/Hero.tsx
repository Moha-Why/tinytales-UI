import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[20vh] md:h-[30vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.png)' }}
      />
      
      {/* Color Mask Overlay */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: '#F5F5F5', opacity: 0.1 }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-2xl md:text-7xl lg:text-[32px] font-bold text-gray-900">
          Product Details
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;