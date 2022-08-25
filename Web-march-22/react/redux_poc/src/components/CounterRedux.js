import React from 'react';
import { connect } from 'react-redux';
// state, state change functions -> props
function CounterRedux(prop) {
    console.log("3 counterredux ", prop);
    let count = prop.count;
    let increment = prop.increment;
    let decrement = prop.decrement;
    return (
        <>
            <div >Counter redux</div>
            <button onClick={increment}>+</button>
            <span>  Count:{count}  </span>
            <button onClick={decrement}>-</button>
        </>
    )
}
// ye aapke store ke saare states get kar ke component provide  
function mapStateToProps(store) {
    console.log("counter msp");
    return store.Count;
}
// it provide dispatch-> call reducer fn ko
// state update 
function mapDispatchToProps(dispatch) {
    return {
        increment: () => {
            console.log("4, dispatchToprops");
            dispatch({ type: "increment" })
        },
        decrement: () => {
            dispatch({ type: "decrement" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)
    (CounterRedux)