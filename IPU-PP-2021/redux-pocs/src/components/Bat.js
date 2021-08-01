import React, { useState } from 'react'
import { connect } from "react-redux";

function Bat(props) {
    // const [bat, setBat] = useState(5);
    const [value, setValue] = useState("");
    return (
        <div>
            <h1>Number of Bats : {props.bats}</h1>
            <input value={value}
                onChange={(e) => {
                    // console.log(e.target.value)
                    setValue(e.target.value)
                }}
            ></input>
            <button onClick={() => {
                props.setBat(props.bats-value);
                setValue("");
            }}>Buy Bat</button>
        </div>
    )
}
// export default Bat;
// // 5 -> provide state variables from store
const mapStateToProps = store => {
    return store.Bat;
}
// // dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
        setBat: (val) => {
            dispatch({
                type: "set_bat",
                // data send to reducer function 
                payload: val
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Bat)
