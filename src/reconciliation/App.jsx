import React, { useState } from 'react'

const App = () => {

const[count,setCount] = useState(1)
function handleclick(){
    console.log('before count')
    setCount(count*1 )
    console.log('after count')

}

  return (
    <div>
        <h1>reconciliation</h1>
        <h2>count:{count}</h2>
        <button onClick={handleclick}>click</button>
    </div>
  )
}

export default App
