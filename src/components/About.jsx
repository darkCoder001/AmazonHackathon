import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';
import { Fade } from "react-awesome-reveal";

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
    <Fade direction="left" duration={2500}>
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
            About <span className=' text-[#FF9900]'>Section</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#999999]"
          >
            Amazon Multi-Channel Fulfillment (MCF) helps businesses store their products in Amazon's warehouses and use Amazon's delivery system to ship orders, no matter where the customer buys from—like a website, app, or online store. It takes care of packing, shipping, and tracking orders so businesses can focus on selling and growing.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Check className="text-green-500" />
              <span>Store Inventory: Businesses keep their products in Amazon's warehouses.</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="text-blue-500" />
              <span>Ship Anywhere: Amazon packs and delivers orders from any sales channel, like websites or online stores.</span>
            </div>
            <div className="flex items-center space-x-3">
              <X className="text-red-500" />
              <span>Save Time: It handles storage, shipping, and tracking, making order management easier for businesses.</span>
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
                    <p>Amazon launched Multi-Channel Fulfillment (MCF) in 2002 as part of its strategy to expand logistics services beyond its own marketplace.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </Fade>
  );
};

export default About;