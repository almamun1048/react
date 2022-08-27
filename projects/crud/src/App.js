import React, { useEffect, useState } from 'react'
import './App.css'
import UserForm from './components/UserForm';

const url = "https://rest-api-without-db.herokuapp.com/users/";

const App = () => {
  const [users,setUser] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const [selectedUser,setSelectedUser]=useState({
    username:"",
    email:""
  })
  const [upDateFlag,setUpdateFlag] = useState(false)
  const [selectedId,setSelectedId] = useState("")

  const getAllUsers = ()=>{
    fetch(url)
    .then((res)=>{
      if(!res.ok){
        throw Error("could not fetch");
      }
      return res.json();
    })
    .then((data)=>{
      setUser(data.users);
    })
    .catch((err)=>{
      setError(err.message);
    })
    .finally(()=>{
      setIsLoading(false);
    })
  }

  useEffect(()=>{
    getAllUsers();
  },[])


  const hadleDelete = (id)=>{
    fetch(url + `/${id}`,{method:"DELETE"})
    .then((res)=>{
      if(!res.ok){
        throw Error("could not Delete");
      }
      getAllUsers();
    })
    .catch((err)=>{
      setError(err.message);
    })
  }

  const addUser = (user)=>{
    fetch(url,{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(user)
    })
    .then((res)=>{
      if(res.status === 201){
        getAllUsers();
      }
      else{
        throw new Error("could not created new user");
      }
      
    })
    .catch((err)=>{
      setError(err.message);
    })
  }
  const handleEdit = (id)=>{
    setSelectedId(id)
    setUpdateFlag(true)
    const filteredData = users.filter((user)=>user.id === id)
    setSelectedUser({
      username:filteredData[0].username,
      email:filteredData[0].email
    })
  }
  const handleUpdate = (user) =>{
    fetch(url+`/${selectedId}`,{
      method:"PUT",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(user)
    })
    .then((res)=>{
      if(!res.ok){
        throw new Error("could not update");
      }
      getAllUsers();
      setUpdateFlag(false)
    })
    .catch((err)=>{
      setError(err.message);
    })
  }
  return (
    <div className='layout'>
      <h1 className='heading'>User Management App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {upDateFlag ? <UserForm btnText="update" selectedUser={selectedUser} handleSubmitData={handleUpdate}  /> : <UserForm btnText="addUser" handleSubmitData={addUser}/>}
    <div className='card-container'>
    {users && users.map((user)=>{
        const {id,username,email} = user;
        return <article className='card' key={id}>
          <p>{username}</p>
          <p>{email}</p>
          <button className='btn' onClick={()=>{
            handleEdit(id);
          }}>Edit</button>
          <button className='btn' onClick={()=>{hadleDelete(id)}}>Delete</button>
        </article>
      })}
    </div>


    </div>
  )
}

export default App
