import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Sparkles, Cpu } from 'lucide-react';
import { Fade } from "react-awesome-reveal";


const resources = [
  {
    title: 'Smart Order with Gen AI',
    description: 'Using Gen AI, we instantly convert orders from the dashboard into the exact format needed for Amazon Fulfillment. No manual work, just seamless automation!',
    icon: Code,
  },
  {
    title: 'Check Orders with Gen AI',
    description:  'Track where your orders come from with an interactive map and get region-wise order percentages—all powered by Gen AI for smarter insights!',
    icon: Brain,
  },
  {
    title: 'Ask Your Orders: Chat with Gen AI',
    description:  'Use our smart chatbot to track your orders effortlessly—just ask, and Gen AI will tell you where they are in real-time!',
    icon: Cpu,
  },
  {
    title: 'Store Smart, Save More with Gen AI',
    description:  'Gen AI analyzes and picks the best storage location for your orders to cut transport costs and boost efficiency!',
    icon: Sparkles,
  },
];

export default function Resources() {
  return (
    <Fade direction="left" duration={2500}>
    <section className="bg-transparent py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold  p-8 mt-12 md:mt-0 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We're Using <span className='text-[#FF9900]'> Gen AI</span> 
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