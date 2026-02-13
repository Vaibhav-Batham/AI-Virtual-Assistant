import React, { useContext } from "react"
import { userDataContext } from "../context/userContext"

function Home() {
  const {userData}=useContext(userDataContext)
  return (
    <div className="text-white text-3xl flex justify-center items-center h-screen bg-black">
      Home Page
    </div>
  )
}

export default Home
