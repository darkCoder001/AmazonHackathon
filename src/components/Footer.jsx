import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white  md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        
    
        <div className="mb-4 md:mb-0">
          <img src="/images/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        
        
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="#about" className="hover:text-gray-400 transition">About Us</a>
          <a href="#services" className="hover:text-gray-400 transition">Services</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          <a href="#privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
        </div>
      </div>
      
      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Amazon. All rights reserved.
      </div>
    </div>
  );
}
