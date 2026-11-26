import React from 'react'

const App = () => {
 
    let name = 'karthik muppidi'
    let age = 27

    function clickmessage (){
        alert('button clicked')
    }

  return (
    <div>
      
      <h1>react basic skill </h1>
      <p> every variable and function send to the function name, age and function created and return back to the react js</p>
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={clickmessage}>sumbit</button>

    </div>
  )
}

export default App
