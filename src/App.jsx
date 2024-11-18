import React from 'react'
import StarryNight from './components/StarryNight'
import Header from './components/Header'
import FeaturesProp from './components/FeaturesProp'

export default function App() {
  return (
    <div className='relative h-screen w-screen overflow-hidden font-title'>
      <StarryNight />
      <div className="absolute inset-0 z-10 flex flex-col">
        <Header />
        {/* <FeaturesProp /> */}
      </div>
    </div>
  )
}