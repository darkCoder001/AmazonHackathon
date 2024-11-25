import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ heading, text }) {
  return (
    <motion.div
      className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative bg-gradient-to-r from-[#FF9900] to-orange-600 p-6"
      style={{
        background: 'linear-gradient(45deg, rgba(88, 28, 135, 0.3), rgba(255, 255, 255, 0.1), rgba(88, 28, 135, 0.3))',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-white text-lg">{text}</p>
      </div>
    </motion.div>
  );
}
