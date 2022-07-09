import React, { useReducer } from 'react'
function UseReducer() {
    // 1. initial state variable
    const intialState = {
        value: 0,  
    };
    // jo bhi aapke function they jo 
    // state change karenge unka logic kisme switch case ke andar
    // un state ko change karne combined function pass
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { value: action.value }
            case "decrement":
                return { value: action.value };
            case "IncrementByFive":
                return { value: state.value + 5 };

            default:
                return state;
        }
    }
    // dispatch-> reducer-> state change
    let [countObj, dispatch] = useReducer(intialState, reducer);

    return (
        <>
            <button onClick={dispatch({ type: "increment", value: 10 })}>Increment</button>
            <span>    {countObj.value}    </span>
            <button onClick={dispatch({ type: "decrement", value: 5 })}>Decrement</button>
            <button onClick={dispatch({ type: "IncrementByFive" })}> five </button>
        </>
    )
}
export default UseState;