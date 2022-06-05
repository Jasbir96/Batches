import React, { useState } from 'react';
import { connect } from "react-redux";
// // /all the changes that are possible to the current state
// function reducer(state, action) {
//     switch (action.type) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             console.log("Wrong type");
//     }
// }
function Ball(props) {
    console.log(props)
    return (< >
        <h1>Balls</h1>
        <h2>No of Balls:{props.balls}</h2>
        <button>+</button>
        <button>-</button>
    </>
    )
}
// to get your state varibale from redux store, dispatch function bhi provide karta 
const mapStateToProps = (store) => {
    return store;
}
export default connect(mapStateToProps)(Ball);