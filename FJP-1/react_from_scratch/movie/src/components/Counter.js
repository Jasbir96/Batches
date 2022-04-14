import React from 'react'
function Counter(props) {
    let [count, changeCount] = React.useState(0);
    let number = props.number;
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