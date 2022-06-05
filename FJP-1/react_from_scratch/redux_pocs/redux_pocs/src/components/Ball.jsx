import React, { useState } from 'react';
import { connect } from "react-redux";
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
// to get your state variable from redux store, dispatch function bhi provide karta 
const mapStateToProps = (store) => {
    return store;
}
export default connect(mapStateToProps)(Ball);