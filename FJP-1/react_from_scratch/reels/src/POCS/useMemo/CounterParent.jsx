import React, { useState, useMemo, useCallback } from 'react';
import Counter from "./Counter";
function CounterParent() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    const increment = () => {
        setCount((count) => {
            return count + 1;
        });
    }
    const increment1 = () => {
        setCount1((count1) => {
            return count1 + 1;
        });
    }
    const incrementChild = useCallback(() => {
        setCount((count) => {
            return count + 1;
        })
    }, [count]);
    // useMemo is a hook -> that will only run your function
    // when the depended state variable changes  
    const isEven = useMemo(() => {
        // console.log(count);
        let i = 0;
        while (i < 3000000000) i++;
        return count % 2 === 0;
    }, [count]);
    const randomObj = useMemo(() => {
        return {
            name: "child component"
        }
    }, [count]);
    // const randomObj = {
    //     name: "child component"
    // }


    console.log("Parent Rendered");
    return (
        <div>
            <button
                onClick={increment}
            >Count - {count}
            </button>
            <span>  {isEven ? "even" : "odd"}</span>
            <br></br>
            <button
                onClick={increment1}
            >Count - {count1}</button>
            <Counter count={count} incrementChild={incrementChild}
                randomObj={randomObj}
            ></Counter>
        </div>
    )
}
export default CounterParent