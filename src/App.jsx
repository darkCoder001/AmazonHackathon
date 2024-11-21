import React from 'react'
import StarryNight from './components/StarryNight'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardExample from './components/CardExample'
import Footer from './components/Footer'
import About from './components/About'


export default function App() {
  return (
    <div className="relative min-h-screen w-screen font-title overflow-x-hidden">
      <StarryNight />
      <div className="absolute inset-0 z-10 flex flex-col">
        <Header />
        <HeroSection />
        <CardExample />
        <About/>
        <Footer />
      </div>
    </div>
  )
}
