import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const UserForm = ({btnText,handleSubmitData,selectedUser}) => {

    const [users,setUsers] = useState({
        username : "",
        email : ""
    })
    const {username,email} = users;

    useEffect(()=>{
      setUsers({
        username:selectedUser.username,
        email:selectedUser.email
      })
      
    },[selectedUser])

    const handleChange = (e)=>{
        const selectedField = e.target.name;
        const selectedValue = e.target.value;
        setUsers((prevSate)=>{
            return {...prevSate,[selectedField]:[selectedValue]}
         })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSubmitData(users)
        setUsers({
          username : "",
          email : ""
      })
    }
  return (
    <form onSubmit={handleSubmit}> 
      <div className="filed-group">
        <label>userName :</label>
        <input 
        type='text'
        name='username'
        id='username'
        value={username}
        onChange={handleChange}
        required
        />
      </div>
      <div className="filed-group">
        <label>Email :</label>
        <input 
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={handleChange}
        required
        />
      </div>
      <button type='submit' className='btn'>{btnText}</button>
    </form>
  )
}

UserForm.defaultProps = {
selectedUser:{
  username:"",
  email:""
}
}

export default UserForm
