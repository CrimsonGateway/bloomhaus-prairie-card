
import React from 'react';
import { motion } from 'framer-motion';

const CardHeader: React.FC = () => {
  return (
    <motion.div 
      className="text-center mb-4 bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      <motion.h1 
        className="text-3xl font-bold text-pink-700 mb-2"
        animate={{ 
          color: ['#be185d', '#db2777', '#be185d'],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        Happy Mother's Day
      </motion.h1>
      <p className="text-lg text-pink-600">Touch the flowers to make them bloom!</p>
    </motion.div>
  );
};

export default CardHeader;
