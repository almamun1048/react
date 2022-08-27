import React,{useState} from 'react'

const NewTodo = (props) => {
    const [newData,setNewData] = useState("")

    const handleChange = (e) =>{
          setNewData(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.onFriend(newData)
        setNewData("")
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={newData}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default NewTodo
