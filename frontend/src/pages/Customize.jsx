import React from 'react'
import { RiImageAddLine } from "react-icons/ri";
import Card from '../components/Card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/bg.jpeg"

function Customize() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-t from-black to-[#030353] flex flex-col items-center justify-center p-6 gap-6'> 

      {/* Top Heading */}
      <h1 className='text-white text-[30px] text-center mb-6'>
        Select your <span className='text-blue-400'>Assistant Image</span>
      </h1>     

      {/* Cards + Add Image */}
      <div className='flex flex-wrap justify-center items-center gap-6'>
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />

        <div className="w-70 h-85 bg-[#030326] border-2 border-blue-500 rounded-2xl overflow-hidden 
                        hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover-border-white 
                        flex items-center justify-center">
          <RiImageAddLine size={55} className="text-white" />
        </div>
      </div>

      {/* Next Button bottom */}
      <button className='mt-6 px-16 py-4 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all'>
  Next
</button>

    </div>
  )
}

export default Customize
