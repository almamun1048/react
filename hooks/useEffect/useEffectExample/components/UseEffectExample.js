import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
   const [count,setCount] = useState(0)
   const [isLoading,setIsLoading] = useState(true)

   const increase = ()=>{
    setCount((count)=> count + 1)
   }

   const handleLoading = ()=>{
    setIsLoading((isLoading)=> !isLoading)
   }

   useEffect(()=>{
    console.log("useEffect clicked")
   },[count,isLoading])
  return (
    <div>
        {console.log("rendaring")}
      <h1>Count : {count}</h1>
      <button onClick={increase}>+</button>

      <button onClick={handleLoading}>isLoading</button>
    </div>
  )
}

export default UseEffectExample
