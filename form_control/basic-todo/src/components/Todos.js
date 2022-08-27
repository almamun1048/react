import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      { props.friendList.map((friend,index)=> <Todo key={index} friend = {friend} />) }
    </div>
  )
}

export default Todos
