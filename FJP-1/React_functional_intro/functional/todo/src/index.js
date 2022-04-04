import ReactDOM from 'react-dom';
import './index.css';
// import PrintMyNames from './PrintMyNames';
import CounterClass from './CounterClass';

// functional -> html milegi
// object -> props
// change -> static
// function Counter() {
//   return (
//     <div>
//       <button>+</button>
//       <p>0</p>
//       <button>-</button>
//     </div>
//   )
// }

// react
import React, { useState } from 'react';

function CounterFn() {
  // count -> state varibale define -> initial value ->0 
  //  update count -> update 
  let [count, updateCount] = useState(0);
  const incrementCounter = () => {
    updateCount(count + 1);
  }
  const decrementCounter = () => {
    updateCount(count - 1);
  }
  return (<div>
      <button
        onClick={incrementCounter}
      >+</button>
      <p>{count}</p>
      <button onClick={decrementCounter}>-</button>
    </div>
  )
}







// bottom to top
// Dom render -> content print -> html root -> id -> 
ReactDOM.render(
  // <PrintMyNames></PrintMyNames>
  // <CounterClass></CounterClass>
  <CounterFn></CounterFn>
  ,
  document.getElementById('root')
);


