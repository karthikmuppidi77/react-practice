import React, { useContext } from 'react'
import { UserContext } from '../contexts/Usercontext'

const Username = () => {
    const name = useContext(UserContext)
  return (
    <div>
       <h1>schoolname:{name}</h1>
    </div>
  )
}

export default Username
