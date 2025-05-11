
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { seed, soil } from '../assets';

interface GrowingPlantProps {
  message: string;
}

const GrowingPlant: React.FC<GrowingPlantProps> = ({ message }) => {
  const [planted, setPlanted] = useState(false);
  const [grown, setGrown] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, color: string }>>([]);

  useEffect(() => {
    if (showParticles) {
      // Generate random particles
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 - 50,
        y: Math.random() * -50 - 20,
        size: Math.random() * 5 + 2,
        color: ['#FFCCD5', '#C1E1C1', '#FEF7CD', '#D3E4FD'][Math.floor(Math.random() * 4)]
      }));
      setParticles(newParticles);
      
      // Remove particles after animation
      const timer = setTimeout(() => {
        setShowParticles(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [showParticles]);

  const handlePlant = () => {
    if (!planted) {
      setPlanted(true);
      setShowParticles(true);
      setTimeout(() => {
        setGrown(true);
      }, 1500);
    }
  };

  return (
    <div className="relative mt-8 flex flex-col items-center">
      {!planted ? (
        <div className="flex flex-col items-center gap-4">
          <motion.img 
            src={seed} 
            alt="Seed" 
            className="w-12 h-12"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
          />
          <button 
            onClick={handlePlant}
            className="pixel-button group relative overflow-hidden"
          >
            <span className="relative z-10">Plant a seed of love</span>
            <div className="absolute inset-0 bg-pink-400 opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-30 transition-all duration-300"></div>
          </button>
        </div>
      ) : (
        <div className="relative h-[200px] w-full flex justify-center">
          <img src={soil} alt="Soil" className="absolute bottom-0 w-36" />
          
          {/* Magic particles when planting */}
          {showParticles && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              {particles.map(particle => (
                <motion.div
                  key={particle.id}
                  className="absolute rounded-full"
                  style={{ 
                    backgroundColor: particle.color,
                    width: particle.size,
                    height: particle.size
                  }}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: particle.x, 
                    y: particle.y, 
                    opacity: 0 
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              ))}
            </div>
          )}
          
          {grown ? (
            <motion.div 
              className="absolute bottom-0 w-full flex flex-col items-center"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 150, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <motion.div 
                className="h-[150px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg max-w-xs text-center shadow-md transform hover:scale-105 transition-transform duration-300">
                  <p className="text-lg text-pink-700 font-medium">{message}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-0 w-1 h-[150px] bg-pastel-green"
                initial={{ height: 0 }}
                animate={{ height: 150 }}
                transition={{ duration: 1.5 }}
              />
              
              <motion.div 
                className="absolute bottom-[140px] left-[calc(50%-30px)] w-6 h-12 bg-pastel-green rotate-45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
              
              <motion.div 
                className="absolute bottom-[140px] right-[calc(50%-30px)] w-6 h-12 bg-pastel-green -rotate-45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />

              {/* Additional leaves */}
              <motion.div 
                className="absolute bottom-[120px] left-[calc(50%-20px)] w-4 h-8 bg-pastel-green rotate-65"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              />
              
              <motion.div 
                className="absolute bottom-[120px] right-[calc(50%-20px)] w-4 h-8 bg-pastel-green -rotate-65"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              />
            </motion.div>
          ) : (
            <motion.div 
              className="absolute bottom-5 w-6 h-6 bg-amber-800 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GrowingPlant;
