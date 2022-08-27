import React, { useState } from 'react';
import style from './form.module.css';

export default function Form() {
const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

const handleName = (e)=>{
  setName(e.target.value)
}
const handleEmail = (e)=>{
  setEmail(e.target.value)
}
const handlePassword = (e)=>{
  setPassword(e.target.value)
}
const handleSubmit = (e)=>{
  e.preventDefault();
 let info = {
    name,
    email,
    password
  }
  console.log(info)
}
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <h1>Registrasion</h1>
        <div>
          <label htmlFor='name' name='name' className={style.form}>Name : </label>
          <input type='text' name='name' id='name' value={name} className={style.form} onChange={handleName} required/>
        </div>
        <div>
          <label htmlFor='email' name='email' className={style.form}>Email : </label>
          <input type='email' name='email' id='email' value={email} className={style.form} onChange={handleEmail} required/>
        </div>
        <div>
          <label htmlFor='password' name='password' className={style.form}>Password : </label>
          <input type='password' name='password' id='password'value={password} className={style.form} onChange={handlePassword} required/>
        </div>
        <div>
          <button type='submit'>register</button>
        </div>
     </form>
    </div>
  )
}
