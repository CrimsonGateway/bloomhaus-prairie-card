
import React from 'react';
import { motion } from 'framer-motion';
import { farmBackground, cloud, tree } from '../assets';

interface BackgroundProps {
  showSunrays: boolean;
}

const Background: React.FC<BackgroundProps> = ({ showSunrays }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img src={farmBackground} alt="Farm Background" className="w-full h-full object-cover opacity-70" />
      
      {/* Animated sun */}
      <motion.div 
        className="absolute top-[10%] right-[15%] w-16 h-16 bg-yellow-300 rounded-full opacity-80"
        animate={{ 
          scale: showSunrays ? [1, 1.1, 1] : 1,
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        {showSunrays && (
          <>
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={i}
                className="absolute top-1/2 left-1/2 w-1 h-8 bg-yellow-200 opacity-60"
                style={{
                  transformOrigin: 'center bottom',
                  transform: `rotate(${i * 30}deg) translateY(-15px)`
                }}
                initial={{ scaleY: 0.5 }}
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </>
        )}
      </motion.div>
      
      <motion.img 
        src={cloud} 
        alt="Cloud" 
        className="absolute w-20 h-12 top-[10%] left-[15%]"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.img 
        src={cloud} 
        alt="Cloud" 
        className="absolute w-16 h-10 top-[15%] right-[20%]"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.img 
        src={tree} 
        alt="Tree" 
        className="absolute w-40 h-60 bottom-0 left-[5%] z-10"
        animate={{ 
          skew: [0, 0.5, 0, -0.5, 0],
          y: [0, -2, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.img 
        src={tree} 
        alt="Tree" 
        className="absolute w-32 h-48 bottom-0 right-[8%] z-10"
        animate={{ 
          skew: [0, -0.5, 0, 0.5, 0],
          y: [0, -1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

export default Background;
