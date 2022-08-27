import React from 'react' ;
import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    fullName : "Al Mamun",
    age : 25,
    phones : [
      {home : "01870472455"},
      {office : "01798067868"}
    ]
  },
  {
    fullName : "Habiba",
    age : 22,
    phones : [
      {home : "01470472455"},
      {office : "01398067868"}
    ]
  },
  {
    fullName : "Kamrul",
    age : 20,
    phones : [
      {home : "01570472455"},
      {office : "01698067868"}
    ]
  },
]

const App = () => {
  
  return (
    <div>
      <h1>Nested List</h1>
    { users.map((user)=><article key={uuidv4()}>
      <h3>fullName : {user.fullName}</h3>
      <p>Age : {user.age}</p>
      {
        user.phones.map((phone)=>
        <div key={uuidv4()}>
          <p>{phone.home}</p>
          <p>{phone.office}</p>
        </div>
        )
      }
    </article>
      )}
    </div>
  )
}

export default App
