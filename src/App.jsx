import React from 'react'
import Header from './components/Header'

import Footer from './components/Footer'
import FeaturesProp from './components/FeaturesProp'
import Heroo from './components/Heroo'


export default function App() {
  return (
    <div className=' font-title'>
      <Header/>
      <Heroo/>
      <FeaturesProp/>
      <Footer/>
    </div>
  )
}
