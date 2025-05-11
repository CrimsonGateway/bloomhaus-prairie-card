
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Flower from './Flower';
import Butterfly from './Butterfly';
import GrowingPlant from './GrowingPlant';
import { flower1, flower2, flower3, flower4, farmBackground, cloud, tree } from '../assets';
import { Heart, Gift, Sun, Sparkles } from 'lucide-react';

const MothersDay: React.FC = () => {
  const [cardOpened, setCardOpened] = useState(false);
  const [nameEntered, setNameEntered] = useState(false);
  const [name, setName] = useState('');
  const [showSunrays, setShowSunrays] = useState(false);

  useEffect(() => {
    // Toggle sun rays for a day/night cycle effect
    const interval = setInterval(() => {
      setShowSunrays(prev => !prev);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const handleOpenCard = () => {
    setCardOpened(true);
  };

  const handleSubmitName = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setNameEntered(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-pastel-blue to-white">
      {!cardOpened ? (
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
              onClick={handleOpenCard}
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
      ) : (
        <motion.div 
          className="relative bg-pastel-yellow rounded-xl p-6 shadow-lg max-w-2xl w-full h-[600px] overflow-hidden pixel-border"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Scene */}
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

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col">
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

            {/* Interactive Flowers */}
            <Flower image={flower1} x={20} y={35} delay={0.2} />
            <Flower image={flower2} x={40} y={50} delay={0.4} />
            <Flower image={flower3} x={70} y={30} delay={0.6} />
            <Flower image={flower4} x={80} y={55} delay={0.8} />
            
            {/* Butterflies with different colors */}
            <Butterfly initialX={30} initialY={20} color="#ffadad" />
            <Butterfly initialX={60} initialY={40} color="#bdb2ff" />
            <Butterfly initialX={15} initialY={60} color="#caffbf" />
            
            {/* Message Section */}
            <div className="mt-auto mb-4 z-30">
              {!nameEntered ? (
                <motion.div 
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <form onSubmit={handleSubmitName} className="flex flex-col items-center gap-3">
                    <label className="text-pink-700 font-medium">Who is this card for?</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Mom's name"
                      className="px-4 py-2 rounded-md border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
                    />
                    <motion.button 
                      type="submit"
                      className="pixel-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Continue
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <GrowingPlant message={`Dear ${name}, thank you for being an amazing mother. Your love helps me grow every day!`} />
              )}
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-2 right-2 text-yellow-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={24} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MothersDay;
