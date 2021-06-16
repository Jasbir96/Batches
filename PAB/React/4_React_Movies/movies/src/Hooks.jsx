import React, { useState, useEffect } from 'react';
export default function Hooks() {
    // variable , setter function -> default state 
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(Date.now());
    // function fn() {
    //     console.log("hello");
    //     document.title = `You clicked ${count} times`;
    // }
    // Update the document title using the browser API
    // component did mount + component did update -> mounting phase
     function fn() {
        console.log("Hello from fn", Date.now());
    }
    // // everytime 
    useEffect(fn); 
    // // component did mount  one time after render
    useEffect(fn, []);
    // // after everytime the parameter inside that array changes
    useEffect(fn, [count]);
    // console.log("Hello");
    return (
        <>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <span>{count}</span>
            <button 
            onClick={() => { setCount(count - 1) }}>-</button>
        <p onClick={() => { setTime(Date.now()) }}>{time}</p>
        </>
    )
}
