import React, { useState } from 'react'

const App = () => {
  

 const[name,setName] = useState("")
 
 
function handleinput(e){

  setName(e.target.value)
    
}

  return (
    <div>
        <h2>controlled component</h2>
        <input type="text" value={name} onChange ={handleinput} >
      </input>

      <div>repeat:{name}</div>

    </div>
  )
}

export default App
