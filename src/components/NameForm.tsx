
import React from 'react';
import { motion } from 'framer-motion';

interface NameFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent) => void;
}

const NameForm: React.FC<NameFormProps> = ({ name, setName, onSubmit }) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-3">
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
  );
};

export default NameForm;
