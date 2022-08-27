import React,{useState} from 'react'
import { useSearchParams } from 'react-router-dom'
const User = () => {
   const [searchPeram,setSearchParam] = useSearchParams();
   const [name,setName] = useState("");
   const [age,setAge] = useState("");

   const handleSubmit = (e) =>{
    e.preventDefault();
    setSearchParam({name:name,age:age})
   }

  return (
    <div style={{padding:"20px"}}>
      <form onSubmit={handleSubmit}>

        <input 
        type='text'
        placeholder='name'
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />

        <input 
        type='text'
        placeholder='age'
        value={age}
        onChange={(e)=>{
          setAge(e.target.value)
        }}
        />

        <button type='submit'>setQuery</button>
      </form>
        <h1>User Page</h1>
        <h2>Name : {searchPeram.get("name")}</h2>
        <h2>Age : {searchPeram.get("age")}</h2>
    </div>
  )
}

export default User
