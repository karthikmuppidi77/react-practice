import React, { useCallback, useMemo, useState } from 'react'
 

 const Child = React.memo(function Child({onClick}){
    
    console.log('child rendered')
    return (
        <div>
            <h1>child</h1>
            <button onClick={onClick}>child button</button>

        </div>
    )

}
)


const App = () => {
const [count,setCount] = useState(0)
const [number,setNumber] = useState(5)

const result = useMemo(()=>{
  console.log('calculating...')
  return number*number;

},[number])
  


function userclick(){
   setCount(count +1) 
}

const handleClick = useCallback(function handleClick(){
  console.log('clicked the button from the child',)
},[])


  return (

    
    <div>
      <h1>count no.{count}</h1>
      <button onClick={userclick}>update</button>
      <Child onClick={handleClick}/>
      <h3>square:{result}</h3>
    </div>
  )
}

export default App
