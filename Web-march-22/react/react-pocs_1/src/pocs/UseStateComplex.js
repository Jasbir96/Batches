import React, { useState, useReducer } from 'react';
// all the prem/comb of your state change 
// predictible state change  -> state change logic
function reducer(state, action) {
    console.log("action access", action, state)
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "increment_by_five":
            return state + 5;
        case "dec_by_five":
            return state - 5;
    }
}

function UseState() {
    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);
    // let [count, setCount] = useState(0);
    // const IncrementCount = () => {
    //     setCount((count) => count + 1);
    // }
    // const DecrementCount = () => {
    //     setCount((count) => count - 1);
    // }
    // const IncrementbyFive = () => {

    //     setCount((count) => {
    //         return count + 5
    //     });

    // }
    console.log("state variable ", count);
    return (
        <>
<button onClick={() => { dispatch("increment") }}>
    Increment</button>
            <span>    {count}   </span>
            <button onClick={() => { dispatch("decrement") }}>
                Decrement</button>
            <button onClick={() => { dispatch("increment_by_five") }}>
                +five</button>
            <button onClick={() => { dispatch("dec_by_five") }}>
                - five </button>
        </>
    )
}
export default UseState;