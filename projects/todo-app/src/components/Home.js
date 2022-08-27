import React, { useState } from 'react';
import style from './home.module.css';
import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {
  const [todos,setTodos] = useState([]);

  const handleNewTodo=(todo)=>{
    setTodos([...todos,todo])
  }

  const handleRemoveTodo = (id)=>{
    setTodos(todos.filter((todo)=> todo.id !== id))
  }

  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handleNewTodo}/>
      <Todos todos={todos} onRemoveTodo = {handleRemoveTodo}/>
    </div>
  )
}

export default Home
