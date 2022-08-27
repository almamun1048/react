import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import style from './newtodo.module.css';

const NewTodo = (props) => {
  const [todo,setTodo] = useState({title:'',des:''});
  const {title,des} = todo;

  const handleChange=(event)=>{
    const name = event.target.name;
    setTodo({...todo,id:uuidv4(),[name]:event.target.value})
  }

  const handleSubmit=(event)=>{
      event.preventDefault();
      props.onAddTodo(todo);
      setTodo({title:'',des:''});
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style["form-field"]}>
        <label htmlFor='title'>Title :</label>
        <input type='text' name='title' id='title' value={title} onChange={handleChange} required/>
      </div>
      <div className={style["form-field"]}>
        <label htmlFor='des'>Details :</label>
        <textarea type='text' name='des' id='des' value={des} onChange={handleChange} required/>
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo