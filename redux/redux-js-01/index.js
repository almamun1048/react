// npm init -y
// npm install redux
// topics : state,action
//define constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER"

//state
const initialCounterState = {
    count: 0
}

const initialUsersState = {
    users: [{name: "Al Mamun"}]
}

//action - object - type,payload
const incrementCounter = () =>{
    return {
        type: INCREMENT
    }
}

const decrementCounter = () =>{
    return {
        type: DECREMENT
    }
}

const addUser = () =>{
    return {
        type: ADD_USER,
        payload:{name:"sabbir"}
    }
}

//1.state
//2.dispatch action
//3.reduser
//4.update
//5.store
