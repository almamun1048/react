// npm init -y
// npm install redux
// topic : store
const {createStore} = require("redux");


//define constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

//state
const initialCounterState = {
    count: 0
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

//create reducer for counter
const counterReduser = (state = initialCounterState,action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count:state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count - 1
            }

        default:
            state;
    }
}

//1.state
//2.dispatch action
//3.reduser
//4.store- getState(), dispatch(), subscribe()

const store = createStore(counterReduser);

store.subscribe(()=>{
    console.log(store.getState())
})

// dispatch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())

