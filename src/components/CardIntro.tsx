
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles } from 'lucide-react';

interface CardIntroProps {
  onOpenCard: () => void;
}

const CardIntro: React.FC<CardIntroProps> = ({ onOpenCard }) => {
  return (
    <motion.div 
      className="bg-pastel-pink rounded-xl p-6 shadow-lg max-w-md w-full pixel-border"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-3xl font-bold text-pink-700 mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Happy Mother's Day
        </motion.h1>
        <p className="text-lg text-pink-600 mb-6">Click to open your special card</p>
        <motion.button 
          onClick={onOpenCard}
          className="pixel-button flex items-center gap-2 mx-auto group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Heart size={18} className="text-pink-600 group-hover:text-pink-700" fill="#f472b6" />
          <span>Open Card</span>
        </motion.button>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles size={40} className="text-yellow-400/70" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 left-1/4"
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gift size={30} className="text-pink-500" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 right-1/4"
          initial={{ y: 0 }}
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Gift size={30} className="text-pastel-purple" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardIntro;
