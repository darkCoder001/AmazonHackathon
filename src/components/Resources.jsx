import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Sparkles, Cpu } from 'lucide-react';
import { Fade } from "react-awesome-reveal";


const resources = [
  {
    title: 'Rescource 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi ducimus alias quam! Qui voluptas blanditiis doloribus amet, reprehenderit harum natus aspernatur consectetur veniam eligendi, nesciunt nulla delectus aliquam. Asperiores.',
    icon: Code,
  },
  {
    title: 'Rescource 2',
    description:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi ducimus alias quam! Qui voluptas blanditiis doloribus amet, reprehenderit harum natus aspernatur consectetur veniam eligendi, nesciunt nulla delectus aliquam. Asperiores.',
    icon: Brain,
  },
  {
    title: 'Rescource 3',
    description:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi ducimus alias quam! Qui voluptas blanditiis doloribus amet, reprehenderit harum natus aspernatur consectetur veniam eligendi, nesciunt nulla delectus aliquam. Asperiores.',
    icon: Cpu,
  },
  {
    title: 'Rescource 4',
    description:  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque animi ducimus alias quam! Qui voluptas blanditiis doloribus amet, reprehenderit harum natus aspernatur consectetur veniam eligendi, nesciunt nulla delectus aliquam. Asperiores.',
    icon: Sparkles,
  },
];

export default function Resources() {
  return (
    <Fade direction="left" duration={2500}>
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold mb-12 p-8 mt-12 md:mt-0 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We're Using AI
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF9900] to-orange-600 rounded-lg opacity-75 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-black text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <resource.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#FF9900]">{resource.title}</h3>
                <p className="text-white">{resource.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Fade>
  );
}