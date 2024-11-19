import React from 'react';

function MovingText() {
  return (
    <div className="w-full h-screen bg-white flex items-center overflow-hidden">
      <div className="text-black text-2xl whitespace-nowrap animate-movingText">
        Features
      </div>
    </div>
  );
}

export default MovingText;
