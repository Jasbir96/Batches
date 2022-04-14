import React from 'react'
function Counter(props) {
    let [count, changeCount] = React.useState(0);
    let { globalCounterNum, globalCounterVal } = props;

    let number = props.number;

    if (number == Number(globalCounterNum)
        && count != Number(globalCounterVal)) {
        changeCount(Number(globalCounterVal));

        props.resetGlobals();
        // reset c,v  to initial values
    }
    let increment = () => {
        changeCount(Number(count) + 1);
    }
    let decrement = () => {
        changeCount(Number(count) - 1);
    }


    return (
        <div className="counter">
            <h3> Counter Number {number}</h3>
            <button onClick={increment}>+</button>
            <p > Count :  {count}</p>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter