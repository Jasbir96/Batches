import React, { useReducer } from 'react'
let initialState = {
    bat: 10,
    value: ""
}
function reducer(state, action) {
    switch (action.type) {
        case "sell_bat":
            if (state.bat - state.value < 0) {
                return {
                    ...state,
                    value: ""
                }
            }
            return {
                bat: state.bat - state.value,
                value: ""
            }
            break;
        case "buy_bat":

            return {
                bat: state.bat +
                    Number(state.value),
                value: ""
            }
        case "set_value":

            return {
                bat: state.bat,
                value: action.payload
            }

    }
}
function BatuseReducer() {
    let [state, dispatch] = useReducer(reducer,
        initialState);
    return (
        <>
            <h1>Bat</h1>
            <h2>No of Bat:{state.bat}</h2>
            <input type="text" value={state.value}
                onChange={(e) => {
                    let value = e.target.value;
                    dispatch({
                        type: "set_value",
                        payload: value
                    })
                }} />
            <button
                onClick={() => {
                    dispatch({ type: "sell_bat" })
                }}
            >Sell</button>
            <button
                onClick={() => {
                    dispatch({ type: "buy_bat" })
                }}
            >Buy</button>
        </>

    )
}
export default BatuseReducer;