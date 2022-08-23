import React, { useReducer } from 'react';
function reducer(state, action) {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
    }
}
function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <>
            <div>Counter</div>
            <button onClick={() => { dispatch("increment") }}>+</button>
            <span>  Count: {count} </span>
            <button onClick={() => { dispatch("decrement") }}>-</button>
        </>
    )
}

export default Counter