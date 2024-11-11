import React from 'react';

export default function Heroo() {
  return (
    <div className="flex flex-col md:flex-row bg-[#eff6ff] p-6 md:p-8 md:pl-20 items-center justify-center ">
      <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6 px-4 text-center md:text-left">
      <div className="h-8 w-[100px] flex items-center justify-center">
           <img src="/images/logo.png" alt="logo"  />
        </div>
        <div className="space-y-1 mb-4">
          <h1 className="text-3xl  md:text-6xl font-bold text-gray-800">Sell Anywhere and fulfill with</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800"> Multi-Channel Fulfillment</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800">(MCF)</h1>
        </div>
        <div className="text-gray-600 mb-6 space-y-1">
          <p>Bringing the best of Amazon's fulfillment solution</p>
          <p>to power your business - anywhere, anytime</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-white text-gray-800 font-bold py-4 px-10 rounded-full shadow-md hover:bg-gray-100 transition-all">
            Start Selling
          </button>
          <button className="bg-[#f59e0b]  font-bold py-4 px-10 rounded-full shadow-md hover:bg-orange-600 transition-all">
            Sign up
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
        <img src="/images/man1.png" alt="Man" className="h-64 w-64 md:h-96 md:w-80 object-cover" />
      </div>
    </div>
  );
}
