import React, { useState } from 'react'
import style from './faq.module.css'

const Faq = ({id,title,desc}) => {
  const [toggole,setToggole] = useState(false);
  return (
    <article>
        <div>
            <h3>{id + "."}</h3>
            <h3>{title}</h3>
            <button onClick={()=> {setToggole(!toggole)}} className={style.btn}>{toggole ? "-" : "+"}</button>
         </div>
      {toggole && <p>{desc}</p>}
    </article>
  )
}

export default Faq
