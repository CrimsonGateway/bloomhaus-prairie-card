
import React, { useState, useEffect } from 'react';
import CardIntro from './CardIntro';
import InteractiveScene from './InteractiveScene';

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
        <CardIntro onOpenCard={handleOpenCard} />
      ) : (
        <InteractiveScene 
          showSunrays={showSunrays}
          nameEntered={nameEntered}
          name={name}
          setName={setName}
          handleSubmitName={handleSubmitName}
        />
      )}
    </div>
  );
};

export default MothersDay;
