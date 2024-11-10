import React from 'react';

export default function Features({ image, text }) {
  return (
    <div className=" flex-col items-center bg-[#f8fafc] rounded-lg shadow-md p-6 w-60 transition-transform transform hover:scale-105 hover:shadow-2xl hover:translate-y-2">
      <div className="w-52 h-48 flex items-center justify-center mb-4">
        <img src={image} alt="image" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-lg font-semibold text-[#1f1f1f] mt-2">{text}</h2>
    </div>
  );
}
