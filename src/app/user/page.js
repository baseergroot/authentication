"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation'

const User = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  useEffect(() => {
    axios.get("api/userdetails")
    .then((response) => {console.log(response.data) 
      setName(response.data.name)
      setUsername(response.data.username)
    })
  })

  const logout = async () => {
    await axios.get("/api/auth/logout")
    .then(response => {
      console.log(response.data.message)
      router.push("/login")
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='flex items-center flex-col bg-slate-900 w-[100vw] h-[100vh] text-white text-xl'>
      <h1 className='text-center mt-30'>Hello, <span className="text-orange-700 text-2xl">{name}</span></h1>
      <h2 className='text-center'>You are logged in as, <span className='text-orange-700'>{username}</span></h2>
      <button
          onClick={logout}
          className="w-[10vw] text-[16px] font-bold mt-10 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Logout
    </button>
    </div>
  )
}

export default User