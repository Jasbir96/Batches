import React, { useReducer } from 'react'
function UseReducer() {
    // 1. initial state variable

    const intialState = 0;
    // jo bhi aapke function they jo 
    // state change karenge unka logic kisme switch case ke andar
    // un state ko change karne combined function pass
    const reducer = (state, action) => {
        switch (action) {
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
            case "IncrementByFive":
                return state + 5;

            default:
                return state;
        }
    }
    // dispatch-> reducer-> state change
    let [count, dispatch] = useReducer(intialState, reducer);

    return (
        <>
            <button onClick={dispatch("increment")}>Increment</button>
            <span>    {count}    </span>
            <button onClick={dispatch("decrement")}>Decrement</button>
            <button onClick={dispatch("IncrementByFive")}> five </button>
        </>
    )
}
export default UseReducer;