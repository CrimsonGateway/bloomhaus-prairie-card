
import React from 'react';
import { motion } from 'framer-motion';
import Flower from './Flower';
import Butterfly from './Butterfly';
import Background from './Background';
import CardHeader from './CardHeader';
import NameForm from './NameForm';
import GrowingPlant from './GrowingPlant';
import { flower1, flower2, flower3, flower4 } from '../assets';
import { Sparkles } from 'lucide-react';

interface InteractiveSceneProps {
  showSunrays: boolean;
  nameEntered: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  handleSubmitName: (e: React.FormEvent) => void;
}

const InteractiveScene: React.FC<InteractiveSceneProps> = ({ 
  showSunrays, 
  nameEntered, 
  name, 
  setName, 
  handleSubmitName 
}) => {
  return (
    <motion.div 
      className="relative bg-pastel-yellow rounded-xl p-6 shadow-lg max-w-2xl w-full h-[600px] overflow-hidden pixel-border"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Scene */}
      <Background showSunrays={showSunrays} />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col">
        <CardHeader />

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
            <NameForm name={name} setName={setName} onSubmit={handleSubmitName} />
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
  );
};

export default InteractiveScene;
