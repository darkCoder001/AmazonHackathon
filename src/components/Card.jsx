import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Card({ imageSrc, heading, text }) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isClickMeVisible, setIsClickMeVisible] = useState(true);

  const handleCardClick = () => {
    if (isClickMeVisible) {
      setIsClickMeVisible(false);
      setIsContentVisible(true);
    } else {
      setIsContentVisible(false);
      setIsClickMeVisible(true);
    }
  };

  return (
    <motion.div
      className="group rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative"
      style={{
        background: 'linear-gradient(45deg, rgba(88, 28, 135, 0.3), rgba(255, 255, 255, 0.1), rgba(88, 28, 135, 0.3))',
        padding: '3px',
      }}
      onClick={handleCardClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full h-64 overflow-hidden bg-transparent rounded-lg">
        <img
          src={imageSrc}
          alt={heading}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        
        <AnimatePresence>
          {isClickMeVisible && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold z-20"
            >
              Click me
            </motion.div>
          )}
        </AnimatePresence>

        
        <AnimatePresence>
          {isContentVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 transition-all duration-300"
            />
          )}
        </AnimatePresence>
      
        <AnimatePresence>
          {isContentVisible && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center z-10"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">{heading}</h2>
              <p className="text-white">{text}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}