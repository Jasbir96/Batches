import React, { useState, useReducer } from 'react';
// /all the changes that are possible to the current state
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            console.log("Wrong type");
    }
}
function Ball() {
    const [balls, dispatch] = useReducer(reducer, 10);
    return (
        < >
            <h1>Balls</h1>
            <h2>No of Balls:{balls}</h2>
            <button
                onClick={() => {
                    dispatch({ type: "increment" })
                }}
            >+</button>
            <button
                onClick={() => { dispatch({ type: "decrement" }) }}
            >-</button>
        </>
    )
}

export default Ball