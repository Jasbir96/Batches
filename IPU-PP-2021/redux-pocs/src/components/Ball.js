import React, { useState } from 'react';
import { connect } from "react-redux";
function Ball(props) {
    console.log(props)
    return (
        <div>
        <h1>Number of Balls {props.balls}</h1>
            <button
                onClick={props.buyBall}
            >Buy Balls</button>
            <button
                onClick={props.sellBall}
            >Sell Balls</button>
        </div>
    )
}
// redux -> pass store
// return part of the store
//  component prop form 
// state 
// use selector -> deep comparison -> slower 
//  mapStateToProps-> high level compare -> faster
function mapStateTOProps(store) {
    return store.Ball;
}
// function 
function mapDispatchToProps(dispatch) {
    return {
        sellBall: function () {
            dispatch({
                type: "sell_ball",
                
            })
        },
        buyBall: function () {
            dispatch({
                type: "buy_ball"
            })
        }}}
export default 
connect(mapStateTOProps, mapDispatchToProps)(Ball);
