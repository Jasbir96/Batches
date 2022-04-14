// rfce
import React from 'react'
import "./CounterGroup.css"
import Counter from "./Counter";
function CounterGroup(props) {
    let { globalCounterNum, globalCounterVal,resetGlobals } = props;
    // way 1 
    // let globalCounterNum = props.globalCounterNum;
    return (
        <div>
            <h2>CounterGroup</h2>
            <div className="counter-group">
                {/* 1 */}
                <Counter number={1}
                    globalCounterNum={globalCounterNum}
                    globalCounterVal={globalCounterVal}
                    resetGlobals={resetGlobals}
                ></Counter>
                <Counter number={2}
                    globalCounterNum={globalCounterNum}
                    globalCounterVal={globalCounterVal}
                    resetGlobals={resetGlobals}
                ></Counter>
                <Counter number={3}
                    globalCounterNum={globalCounterNum}
                    globalCounterVal={globalCounterVal}
                    resetGlobals={resetGlobals}

                ></Counter>
            </div>
        </div>


    )
}
export default CounterGroup;