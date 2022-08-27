import React,{useState} from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

let oldFriends = ['Asif','Sabbir','Reduan']

const Home = () => {
    const [friends,setFriends] = useState(oldFriends)

    const handleNewFriend = (friend) =>{
        setFriends([...friends,friend])
    }

  return (
    <div>
      <NewTodo onFriend = {handleNewFriend}/>
      <Todos friendList = {friends} />
    </div>
  )
}

export default Home 
