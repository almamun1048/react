import React, { useState } from 'react'

const Toggole = () => {
    const [toggle,setToggole] = useState(true);
  return (
    <div style={{backgroundColor:"orange",padding:"10px",textAlign:"center"}}>
      { toggle && <p>Lorem ipsum dolor sit amet.</p> }
      <button onClick={()=> setToggole(!toggle)}> {toggle ? "Hide" : "Show"} </button>
    </div>
  )
}

export default Toggole
