import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import PrintMyNames from './PrintMyNames';
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
class Counter extends React.Component {
 
  state = {
    count: 0
  }
  incrementCounter = () => {
    // this.state,counter++;
    // setState
    this.setState({
      count: count + 1
    })
  }
  decrementCounter = () => {
    // this.state,counter--;
    this.setState({
      count: count - 1
    })
  }
  // ji interaction jo chnage karna wo change kar do 
  // if you change the state then render function will run again with the new state variable
  render() {
    return (
      <div>
        <button
          onClick={this.incrementCounter}
        >+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}
// bottom to top
// Dom render -> content print -> html root -> id -> 
ReactDOM.render(
  // <PrintMyNames></PrintMyNames>
  <Counter></Counter>
  ,
  document.getElementById('root')
);


