import React, { useState, useEffect } from 'react';
export default function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // const [value, setValue] = useState("");
    // // 1. useEffect -> without any dependencies 
    // // useEffect ->main function compDidMount+compDidUpdate 
    // // cleanup function -> before next useEffect 
    // // useEffect(function main() {
    // //     console.log("It will run every time");
    // //     return function cleanup() {
    // //         console.log("cleanup")
    // //     }
    // // })
    // // // 2. useEffect -> with empty  dependencies  Array 
    // // useEffect ->main function compDidMount  (will run on mounting )
    // // cleanup function -> component will unmount (on removal ) 
    // // useEffect(function main() {
    // // console.log("It will run only once");
    // //     return function cleanup() {
    // //         console.log("cleanup")
    // //     }
    // // }, [])
    // // 3. useEffect -> filled  dependencies  Array
    // // useEffect ->main function compDidMount  + componentDidUpdate With dependency(similar) 
    // //  cleanup function -> before next useEffect
    // useEffect(function main() {
    //     console.log("whenever anything  inside dependency array changes+ first render ");
    //     return function cleanup() {
    //         console.log("cleanup");
    //     }
    // }, [value]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount((count) => count + 1)}>
                Click me
            </button>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value);
            }} />
        </div>
    );
}