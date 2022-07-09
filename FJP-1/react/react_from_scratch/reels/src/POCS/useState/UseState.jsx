import React, { useState } from 'react'
function UseState() {
    let [count, setCount] = useState(0);
    const IncrementCount = () => {
        setCount(count + 1);
    }
    const DecrementCount = () => {
        setCount(count - 1);
    }
    const IncrementbyFive = () => {
        for (let i = 1; i <= 5; i++) {
            // if you are making a new state using the old state 
            // then it should used like this
            setCount((count)=>{
              return  count + 1
            });
        }
    }
    return (
        <>
            <button onClick={IncrementCount}>Increment</button>
            <span>    {count}    </span>
            <button onClick={DecrementCount}>Decrement</button>
            <button onClick={IncrementbyFive}> five </button>
        </>
    )
}
export default UseState;