import React from 'react';

export default function Card({ imageSrc, heading, text }) {
  return (
    <div
      className="group rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
      style={{
        background: 'linear-gradient(45deg, rgba(88, 28, 135, 0.3), rgba(255, 255, 255, 0.1), rgba(88, 28, 135, 0.3))',
        padding: '3px',
      }}
    >
      <div className="relative w-full h-64 overflow-hidden bg-transparent rounded-lg">
        <img
          src={imageSrc}
          alt={heading}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <h2 className="text-2xl font-bold mb-2 text-white">{heading}</h2>
          <p className="text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}