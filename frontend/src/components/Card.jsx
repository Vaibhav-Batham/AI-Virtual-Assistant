import React from 'react'

function Card({ image }) {
  return (
    <div className="w-70 h-85 lg:w-[200]] lg:h-[350] bg-[#030326] border-2 border-blue-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover-border-white">
        <img src={image} className='h-full object-cover' alt="card image"/>
    </div>
  )
}

export default Card
