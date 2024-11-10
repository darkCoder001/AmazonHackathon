import React from 'react'
import Features from './Features'
import image1 from '/images/f1.png'
import image2 from '/images/f2.png'
import image3 from '/images/f3.png'
import image4 from '/images/f4.png'
export default function FeaturesProp() {
  return (
    <>
    <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
      Our Offerings
    </h1>
    <div className=" flex gap-12 w-full justify-center items-center">
      <Features image={image1} text={"D2C Fulfillment"} />
      <Features image={image2} text={"B2B Fulfillment"} />
      <Features image={image3} text={"Market Fulfillment"} />
      <Features image={image4} text={"Returns Management"} />
    </div>
  </>
  )
}
