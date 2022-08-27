import React,{useState} from 'react';

export default function WithHooks() {
    const [count,setCount] = useState(0);
    const handleIncrement = ()=>{
        setCount(count + 1);
    }
  return (
    <div>
      <h1 style={{color:"red"}}>HOOKS and useState in functional Component</h1>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}
