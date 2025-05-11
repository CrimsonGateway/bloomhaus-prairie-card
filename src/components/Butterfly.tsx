import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { butterfly } from '../assets';

interface ButterflyProps {
  initialX: number;
  initialY: number;
  color?: string;
}

const Butterfly: React.FC<ButterflyProps> = ({ initialX, initialY, color }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isMoving, setIsMoving] = useState(false);
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly move the butterfly
      const newX = position.x + (Math.random() * 12 - 6);
      const newY = position.y + (Math.random() * 12 - 6);
      
      // Keep within reasonable bounds
      const boundedX = Math.max(5, Math.min(90, newX));
      const boundedY = Math.max(5, Math.min(80, newY));
      
      setPosition({ x: boundedX, y: boundedY });
      setRotation(prev => (Math.random() > 0.5 ? prev + 5 : prev - 5));
    }, 2000);

    return () => clearInterval(interval);
  }, [position]);

  const handleMouseEnter = () => {
    setIsMoving(true);
  };

  const handleMouseLeave = () => {
    setIsMoving(false);
  };

  // Apply a light filter if color is provided
  const filterStyle = color ? {
    filter: `drop-shadow(0 0 5px ${color})`
  } : {};

  return (
    <motion.div 
      className="absolute z-30 cursor-pointer"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%` 
      }}
      animate={{ 
        x: isMoving ? [0, 10, -10, 0] : 0,
        y: isMoving ? [0, -10, 0, -5] : 0,
        rotate: rotation
      }}
      transition={{ 
        duration: 2,
        repeat: isMoving ? Infinity : 0,
        ease: "easeInOut"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.2 }}
    >
      <img 
        src={butterfly} 
        alt="Butterfly" 
        className="w-10 h-10 animate-flutter"
        style={filterStyle}
      />
    </motion.div>
  );
};

export default Butterfly;
