import React from 'react'
import "./CounterGroup.css"
import Counter from "./Counter";
function CounterGroup() {
    return (
        <div>

            <h2>CounterGroup</h2>
            <div className="counter-group">
                {/* 1 */}
                <Counter number={1}></Counter>
                <Counter number={2}></Counter>
                <Counter number={3}></Counter>
            </div>
        </div>


    )
}
export default CounterGroup;