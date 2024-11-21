import React from 'react';
import Card from './Card';
import img1 from '/images/Feature1.png';
import img2 from '/images/Feature2.png';
import img3 from '/images/Feature3.jpg';
import { Fade } from "react-awesome-reveal";
function CardExample() {
  return (
    
    <Fade  direction="left" duration={2500} triggerOnce>
    
    <div className="flex flex-col lg:flex-row justify-around items-center min-h-screen p-4 md:pb-0 gap-6 mt-28 md:pt-20">

      <div className="w-full max-w-sm">

        <Card
          imageSrc={img1}
          heading="Feature 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut."
        />
      </div>
      <div className="w-full max-w-sm">
        <Card
          imageSrc={img2}
          heading="Feature 2"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut."
        />
      </div>
      <div className="w-full max-w-sm">
        <Card
          imageSrc={img3}
          heading="Feature 3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut."
        />
      </div>
    </div>
    </Fade>
  );
}

export default CardExample;
