import React from 'react';
import Card from './Card';

import { Fade } from "react-awesome-reveal";
function CardExample() {
  return (
    
    <Fade  direction="left" duration={2500} triggerOnce>
    
    <div className="flex flex-col lg:flex-row justify-around items-center min-h-screen p-4 md:pb-0 gap-6 mt-28 md:pt-20">

      <div className="w-full max-w-sm">

        <Card
       
          heading="Smart Order Management with Gen AI"
          text="Leverage generative AI to optimize order processing, ensuring accurate placement, quicker fulfillment, and seamless integration with Amazon MCF for a smarter, more efficient workflow."
        />
      </div>
      <div className="w-full max-w-sm">
        <Card
        
          heading="All Your Orders, One Dashboard"
          text="
      All Your Orders, One Dashboard
      Manage orders from Shopify, eBay, or your personal website in a single dashboard, seamlessly connected to Amazon MCF for hassle-free fulfillment."
              />
      </div>
      <div className="w-full max-w-sm">
        <Card
       
          heading="User-Centric Secure Access"
          text="Protect user data with secure OAuth authentication, ensuring safe and reliable order syncing from platforms like Shopify and eBay, all in one seamless system connected to Amazon MCF for hassle-free fulfillment."/>
      </div>
    </div>
    </Fade>
  );
}

export default CardExample;
