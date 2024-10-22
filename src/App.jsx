import React, { useState } from 'react'

function App() {

  let [count,setCount] = useState(0);

  const add =() =>{
    setCount(count+1);
    console.log(count)
  }

    const remove = () => {
      if(count <= 0){
        setCount(count=0)
      }else{
    setCount(count - 1)};
  };

  const reset =() =>{
    setCount(count= 0);
  };
  
  return (


    <div>

      

    <h1>Value of Counter is {count} </h1>

    <button className='p-4'  onClick={add} >Add</button>
    <button onClick={remove}>Remove</button>
    <button className='p-4' onClick={reset}>Reset</button>


    </div>
  )
}

export default App