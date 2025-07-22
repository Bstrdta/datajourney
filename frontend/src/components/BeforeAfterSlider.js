import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeAlt, afterAlt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="relative w-full h-[600px] rounded-2xl overflow-hidden cursor-col-resize select-none shadow-premium"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img 
          src={beforeImage} 
          alt={beforeAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ❌ AVANT
        </div>
      </div>

      {/* After Image with Clip Path */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <img 
          src={afterImage} 
          alt={afterAlt}
          className="w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ✅ APRÈS
        </div>
      </div>

      {/* Slider Handle */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-8 h-8 bg-primary-turquoise rounded-full shadow-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4L16 12L8 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 4L8 12L16 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider;