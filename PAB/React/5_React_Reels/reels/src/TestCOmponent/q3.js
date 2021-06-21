// class Counter extends Component {
//     state = {
//         count: 0,
//     };

//     incrementCount = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <button onClick={this.incrementCount}>Count: {this.state.count}</button>
//             </div>
//         );
//     }
// }
import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <button onClick={incrementCount}>Count: {count}</button>
        </div>
    );

}

export default Counter

