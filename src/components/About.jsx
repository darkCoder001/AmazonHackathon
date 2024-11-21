import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';

const About = () => {
  const [isSurpriseVisible, setIsSurpriseVisible] = useState(false);
  const [isClickMeVisible, setIsClickMeVisible] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const handleDivClick = () => {
    if (isClickMeVisible) {
      setIsClickMeVisible(false);
      setIsSurpriseVisible(true);
    } else if (isSurpriseVisible) {
      setIsSurpriseVisible(false);
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center p-8 mt-12 md:mt-0 mb-8 md:mb-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{
        background: 'transparent'
      }}
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={itemVariants}
          className="text-white space-y-6"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-bold"
          >
            About Section
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#999999]"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora harum quae ullam quo laboriosam tenetur animi aperiam beatae, voluptatibus, cum atque nisi laborum. Dolores dolore ex eaque repudiandae at quis!
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Check className="text-green-500" />
              <span>About 1</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="text-blue-500" />
              <span>About 2</span>
            </div>
            <div className="flex items-center space-x-3">
              <X className="text-red-500" />
              <span>About 3</span>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center relative"
        >
          <motion.div
            className="w-64 h-64 bg-gray-200 rounded-lg cursor-pointer relative overflow-hidden"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            onClick={handleDivClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
        
            <AnimatePresence>
              {isClickMeVisible && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-20 text-white font-bold"
                >
                  Click me for a Surprise!
                </motion.div>
              )}
            </AnimatePresence>

            
            <div className="w-full h-full opacity-20 bg-gradient-to-br from-gray-300 to-gray-100"></div>
            <AnimatePresence>
              {isSurpriseVisible && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 bg-white flex items-center justify-center"
                >
                  <div className="text-center p-4">
                    <h2 className="text-2xl font-bold mb-4">Surprise!</h2>
                    <p>Discover the power of our innovative solution.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;