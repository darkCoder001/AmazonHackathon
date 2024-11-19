import React from 'react'
import StarryNight from './components/StarryNight'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardExample from './components/CardExample'
import MovingText from './components/MovingText'


export default function App() {
  return (
    <div className='relative min-h-screen w-screen  font-title'>
      <StarryNight />
      <div className="absolute inset-0 z-10 flex flex-col ">
        <Header />
        <HeroSection/>
         <MovingText/>
        <CardExample/>
        
      </div>
    </div>
  )
}