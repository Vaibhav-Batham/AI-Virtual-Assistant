import React, { createContext } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'

export const userDataContext = createContext()

function UserContext({ children }) {
  const serverUrl = "http://localhost:8000"
  const [userData, setUserData] = useState(null)
  const [frontendImage,setFrontendImage]=useState(null)
  const [BackendImage,setBackendImage]=useState(null)
  const[selectedImage,setSelecstedImage]=useState(null)

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(
        "http://localhost:8000/api/user/current",
        { withCredentials: true }
      )

      setUserData(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleCurrentUser()
  }, [])

  const value = {
    serverUrl,
    userData,
    setUserData,
    frontendImage,
    setFrontendImage,
    BackendImage,
    setBackendImage,
    selectedImage,
    setSelecstedImage
  }

  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext
