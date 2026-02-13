import React, { useContext, useRef } from 'react'
import { RiImageAddLine } from "react-icons/ri";
import Card from '../components/Card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpeg"
import image3 from "../assets/image3.jpeg"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/bg.jpeg"
import { userDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Customize() {
  const {
    serverUrl, userData, setUserData, frontendImage, setFrontendImage,
    BackendImage, setBackendImage, selectedImage, setSelecstedImage
  } = useContext(userDataContext)

  const navigate=useNavigate()
  
  const inputImage = useRef()

  const handleImage = (e) => {
    const file = e.target.files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }

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

        <div
          className="w-[70px] h-[85px] bg-[#030326] border-2 border-blue-500 rounded-2xl overflow-hidden 
                     hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white 
                     flex items-center justify-center"
          onClick={() => {
            inputImage.current.click()
            setSelecstedImage("input")
          }}
        >
          {!frontendImage && <RiImageAddLine size={55} className="text-white" />}
          {frontendImage && <img src={frontendImage} className='h-full object-cover' />}
        </div>

        <input type='file' accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
      </div>
      
      {selectedImage && (
        <button
          className='mt-6 px-16 py-4 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all'
          onClick={() => navigate("/customize2")}
        >
          Next
        </button>
      )}

      {/* Back Button */}
      <button
        className='mt-4 px-16 py-4 bg-gray-600 text-white text-lg rounded-full hover:bg-gray-700 transition-all'
        onClick={() => navigate("/signup")}
      >
        Back
      </button>

    </div>
  )
}

export default Customize
