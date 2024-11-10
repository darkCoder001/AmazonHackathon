import React from 'react'
import Header from './components/Header'
import Hero from './components/hero'
import Footer from './components/Footer'
import FeaturesProp from './components/FeaturesProp'


export default function App() {
  return (
    <div className=' font-title'>
      <Header/>
      <Hero/>
      <FeaturesProp/>
      <Footer/>
    </div>
  )
}
