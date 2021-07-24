import React, { useState } from 'react'
import { connect } from "react-redux";
import { Buy_Bat } from "../redux/types";

function Bat(props) {
    // const [bat, setBat] = useState(5);
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>Number of Bats : {props.quantity}</h1>
            <h2>It say's {props.dummyState}</h2>
            <input value={value}
                onChange={(e) => {
                    // console.log(e.target.value)
                    setValue(e.target.value)
                }}
            ></input>
            <button onClick={() => {
                props.setBat(value);
                setValue("");
            }}>Buy Bat</button>
        </div>
    )
}
// 5 -> provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store.Bat;
}
// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        setBat: (val) => {
            dispatch({
                type: Buy_Bat,
                // data send to reducer function 
                payload: val
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Bat)
