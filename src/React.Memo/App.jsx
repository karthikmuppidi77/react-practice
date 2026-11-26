import React, { useState } from 'react'
 

 const Child = React.memo(function Child(){
    
    console.log('child rendered')
    return (
        <div>
            <h1>child</h1>
        </div>
    )

}

)

const App = () => {
const [count,setCount] = useState(0)

function userclick(){
   setCount(count +1) 
}

  return (

    <div>
      <h1>count no.{count}</h1>
      <button onClick={userclick}>update</button>
      <Child/>
    </div>
  )
}

export default App
