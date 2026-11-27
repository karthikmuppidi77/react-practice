import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Not found</h1>
      <button onClick={()=>navigate("/")}>go to home</button>
    </div>
  )
}

export default Notfound
