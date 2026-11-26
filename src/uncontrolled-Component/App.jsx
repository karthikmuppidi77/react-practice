import React, { useRef } from 'react'

const App = () => {
 
const number = useRef(0)
                
 const countRef = useRef(null)


function handleclick(){
    number.current = number.current+1
    countRef.current.textContent = number.current;
   
}

  return (
    <div> 
      <h1>uncontrolled component</h1>
      <p>
        usercount:<span ref={countRef}>
        </span>
      </p>
      <button onClick={handleclick}>count</button>
     
    </div>
  )
}

export default App