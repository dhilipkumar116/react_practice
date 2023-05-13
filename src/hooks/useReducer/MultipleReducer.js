import React, {useReducer} from 'react'


// when dealing with multiple state variable that has same state transistion
// good to use multiple reducers using same reducer function

const initalState = 0;

const reducer = (state,action) => {
    switch(action){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return initalState;
        default:
            return state;

    }
}
 
function MultipleReducer() {

    const [count, dispatch] = useReducer(reducer,initalState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initalState);

    return (
        <div>
            <h4>counter one : {count}</h4>
            <button onClick={()=>{dispatch('INCREMENT')}}>increment</button>
            <button onClick={()=>{dispatch('DECREMENT')}}>decrement</button>
            <button onClick={()=>{dispatch('RESET')}}>reset</button>
            <br/>
            <h4>counter two : {countTwo}</h4>
            <button onClick={()=>{dispatchTwo('INCREMENT')}}>increment</button>
            <button onClick={()=>{dispatchTwo('DECREMENT')}}>decrement</button>
            <button onClick={()=>{dispatchTwo('RESET')}}>reset</button>
        </div>
    )
}

export default MultipleReducer
