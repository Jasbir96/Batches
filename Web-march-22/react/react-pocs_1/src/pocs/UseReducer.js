import React, { useReducer, useState } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                color: state.color,
                value: state.value + 1
            }
        case "decrement":
            return {
                color: state.color,
                value: state.value - 1
            }
        case "incby5":
            return {
                color: state.color,
                value: state.value + 5
            }
        case "decby5":
            return {
                color: state.color,
                value: state.value - 5
            }
        case "reset":
            return { ...initialState }
        case "setValue":
            return {
                color: state.color,
                value: action.payload
            }
        case "setColor":
            return {
                color: action.payload,
                value: state.value
            }
    }
}
const initialState = {
    value: 0,
    color: "lightblue"
}
function UseReducer() {
    // value
    const [stateObj, dispatch] = useReducer(reducer, initialState);
    // form handling -> local -> useState 
    const [inpValue, setInpValue] = useState("");
    const [inpColor, setInpColor] = useState("");
    return (
        <>
            <h1 style={{ color: stateObj.color }}
            >{stateObj.value}</h1>
            <br></br>
            <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button>
            <button onClick={() => { dispatch({ type: "incby5" }) }}>+5</button>
            <button onClick={() => { dispatch({ type: "decby5" }) }}>-5</button>
            <br></br>
            <input placeholder='value' value={inpValue}
                onChange={(e) => { setInpValue(e.target.value) }}></input>
            <button onClick={() => { dispatch({ type: "setValue", payload: inpValue }) }}
            >setValue</button>
            <br></br>
            <input placeholder="color" value={inpColor}
                onChange={(e) => { setInpColor(e.target.value) }}></input>
            <button
                onClick={() => { dispatch({ type: "setColor", payload: inpColor }) }}
            >setColor</button>
            <br></br>
            <button onClick={() => { dispatch({ type: "reset" }) }}>reset</button>
        </>
    )
}
export default UseReducer