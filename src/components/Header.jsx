import React from 'react';
import { Search, ChevronDown } from "lucide-react";

export default function Header({ refs }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex h-16 items-center justify-between px-4 md:px-6 fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-8 w-[100px] flex items-center justify-center">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      <div className="hidden md:flex gap-8">
        <div className="cursor-pointer flex items-center gap-1" onClick={() => handleScroll(refs.resource)}>
          Resources
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1" onClick={() => handleScroll(refs.card)}>
          Features
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1" onClick={() => handleScroll(refs.about)}>
          About
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1" onClick={() => handleScroll(refs.footer)}>
          Footer
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => window.location.href = 'https://github.com/pronoy1510/pronoy1510'}
          className="hidden md:flex bg-gray-200 text-black px-6 py-2 rounded-2xl cursor-pointer hover:text-white hover:bg-[#FF9900]"
        >
          Start Selling
        </button>

        <div className="flex items-center justify-center cursor-pointer p-2">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </div>
      </div>
    </div>
  );
}
