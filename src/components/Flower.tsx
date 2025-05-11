
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FlowerProps {
  image: string;
  x: number;
  y: number;
  delay?: number;
}

const Flower: React.FC<FlowerProps> = ({ image, x, y, delay = 0 }) => {
  const [bloomed, setBloomed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([]);
  
  const handleClick = () => {
    if (!bloomed) {
      setBloomed(true);
      
      // Generate particles for bloom effect
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 60,
        size: Math.random() * 6 + 2,
        color: ['#FFCCD5', '#C1E1C1', '#FEF7CD', '#D3E4FD'][Math.floor(Math.random() * 4)]
      }));
      setParticles(newParticles);
      
      // Clear particles after animation
      setTimeout(() => {
        setParticles([]);
      }, 1000);
    }
  };

  useEffect(() => {
    // Auto bloom some flowers after a delay for visual effect
    if (Math.random() > 0.7 && !bloomed) {
      const timer = setTimeout(() => {
        handleClick();
      }, 5000 + Math.random() * 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div 
      className={`absolute cursor-pointer ${bloomed ? 'z-20' : 'z-10'}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: delay, duration: 0.5 }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
    >
      {/* Particles for blooming effect */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{ 
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            top: '50%',
            left: '50%'
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ 
            x: particle.x, 
            y: particle.y, 
            opacity: 0 
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      <motion.div
        whileHover={{ scale: bloomed ? 1.05 : 1.2 }}
        whileTap={{ scale: 0.95 }}
        animate={hovering && !bloomed ? { y: [0, -5, 0] } : {}}
        transition={{ 
          duration: 1, 
          repeat: hovering && !bloomed ? Infinity : 0,
          ease: "easeInOut" 
        }}
      >
        <motion.img 
          src={image} 
          alt="Flower" 
          className={`w-20 h-20 transition-all duration-300 ${bloomed ? 'drop-shadow-lg' : ''}`}
          onClick={handleClick}
          animate={bloomed ? { 
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          } : {}}
          transition={{ 
            duration: bloomed ? 0.5 : 0.3,
            times: bloomed ? [0, 0.5, 1] : [0, 1]
          }}
        />
      </motion.div>

      {bloomed && (
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-green-700 bg-white/70 px-2 py-1 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Bloomed!
        </motion.div>
      )}
    </motion.div>
  );
};

export default Flower;
