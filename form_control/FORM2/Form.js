import React, { useState } from 'react'

export default function Form() {
    const [user,setUser] = useState({
        name : '',
        email : '',
        password : ''
    })
    const {name,email,password} = user

    const handleUser = (e)=>{
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(user)
        setUser({
          name:"",
          email:"",
          password:""
      })
    }

  return (
    <div>
        <h1>Registrasion</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type="text" name="name" id="name" value={name} onChange={handleUser} required/>
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type="email" name="email" id="email" value={email} onChange={handleUser} required/>
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type="password" name="password" id="password" value={password} onChange={handleUser} required/>
        </div>
        <div>
            <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}
