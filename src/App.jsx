import React, { useRef } from 'react';
import StarryNight from './components/StarryNight';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardExample from './components/CardExample';
import Footer from './components/Footer';
import About from './components/About';
import Resources from './components/Resources';
import { Fade } from "react-awesome-reveal";

export default function App() {

  const resourceRef = useRef(null);
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <Fade direction="left" duration={4500}>
    <div className="relative min-h-screen w-screen font-title overflow-x-hidden bg-black">
      {/* //<StarryNight /> */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <Header 
          refs={{
            resource: resourceRef,
            about: aboutRef,
            card: cardRef,
            footer: footerRef
          }} 
        />
          <HeroSection />
          
        <div ref={cardRef}>
          <CardExample />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        
        
        <div ref={resourceRef}>
          <Resources />
        </div>

        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </div>
    </Fade>
  );
}
