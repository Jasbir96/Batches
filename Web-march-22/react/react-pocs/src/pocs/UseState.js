import React, { useState, useEffect } from 'react'
function UseState() {
    let [count, setCount] = useState(0);
    const IncrementCount = () => {
        setCount(count + 1);
    }
    const DecrementCount = () => {
        setCount(count - 1);
    }
    // useffect with empty array -> exec it's fn only once 
    // after first render 
    // 1. useEffect(function () {
    //     console.log("I am inside useEffect ")
    // }, []);
    // useffect with no array  -> exec it's fn everytime
    // after first render 
    //2. useEffect(function () {
    //     console.log("I am inside useEffect ");
    // })
    // console.log("Render chalega");
    // 3.  useffect with  array of some elems-> exec it's 
    // fn everytime when state of those elemes 
    // change after first render 
    // useEffect(function () {
    //     console.log("I am inise useEFfect")
    // },
    //     [count]
    // )
    useEffect(function () {
        setInterval(
            function () {
                // it is not a good way to set new state 
                setCount(function (prevCount) {
                    return prevCount + 1;
                })
            }, 1000);
    }, [])


    return (
        <>
            <button
                onClick={IncrementCount}>Increment</button>
            <span>    {count}    </span>
            <button
                onClick={DecrementCount}>Decrement</button>
        </>
    )
}
export default UseState;


