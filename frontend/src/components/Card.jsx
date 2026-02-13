import React, { useContext } from 'react'
import { userDataContext } from '../context/userContext'

function Card({ image }) {
  const {
    serverUrl, userData, setUserData, frontendImage, setFrontendImage,
    BackendImage, setBackendImage, selectedImage, setSelecstedImage
  } = useContext(userDataContext)

  return (
    <div
      className={`w-[70px] h-[85px] lg:w-[200px] lg:h-[350px] bg-[#030326] border-2 border-blue-500 rounded-2xl overflow-hidden
                  flex items-center justify-center cursor-pointer
                  hover:shadow-2xl hover:shadow-blue-950 hover:border-white
                  ${selectedImage === image ? "border-4 border-white shadow-2xl shadow-blue-950" : ""}`}
      onClick={() => setSelecstedImage(image)}
     
    >
      <img src={image} className='h-full object-cover' alt="card image"/>
    </div>
  )
}

export default Card
