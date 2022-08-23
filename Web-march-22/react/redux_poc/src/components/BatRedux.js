import React, { useState } from 'react'
import { connect } from 'react-redux';
function BatRedux(props) {
    console.log("3 batredux ");

    const [value, setVal] = useState("");
    const bat = props.batCount;
    const buyBat = props.buyBat;
    return (
        <>
            <h2>Bat Example</h2>
            <h3>Total No of Bats : {bat}</h3>
            <input value={value} onChange={(e) => setVal(e.target.value)}></input>
            <button onClick={() => {
                buyBat(value);
                setVal("");
            }}> BuyBat</button>
        </>
    )
}
function mapStateToProps(state) {
    console.log("ba msp");
    return state.Bat;
}
function mapDispatchToProps(dispatch) {
    return {
        buyBat: (value) => {
            dispatch({ type: "sellbat", payload: value })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BatRedux);