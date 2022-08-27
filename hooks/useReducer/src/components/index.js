import React,{useState,useReducer} from 'react'
import {reducer} from './reducer'

const booksData = [
    {id:1,name:"pather pachal"},
    {id:2,name:"padma nodir majhi"},
    {id:3,name:"srikanto"}
]

const Modal = ({modalText}) => {
    return <p>{modalText}</p>
}

const iniTialState = {
    books:booksData,
    isModalOpen:false,
    modalText:""
}
const UseReducer = () => {
    const [bookState,dispatch] = useReducer(reducer,iniTialState)
    const [bookName,setBookName] = useState('')


    const handleSubmit = (e)=>{
        e.preventDefault()
        const newBook = {id: new Date().getTime().toString(),name: bookName}
        dispatch({type:"ADD",payload:newBook})
        setBookName("")
    }

    const removeBook = (id)=>{
        dispatch({type:"REMOVE",payload:id})
    }
  return (
    <div>
       <h3>Book List</h3>
       <form onSubmit={handleSubmit}>
        <input type='text'
         value={bookName}
         onChange={(e)=>{setBookName(e.target.value)}}
        />
        <button type='submit'>Add Book</button>
       </form>
       {bookState.isModalOpen && <Modal modalText={bookState.modalText} /> }
       {bookState.books.map((book)=>{
        const {id,name} = book
        return <li key={id}>
            {name} <button onClick={()=>{removeBook(id)}}>Remove</button>
        </li>
       })}
    </div>
  )
}

export default UseReducer
