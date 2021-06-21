import React, { useState, useEffect } from "react";
export default function Banner() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Boom");
    });
    const updateState = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={updateState}>State: {count}</button>
        </div>
    );
}

// export class Banner extends Component {
//     state = {
//         count: 0,
//     };

//     updateState = () => {
//         this.setState({
//             count: this.state.count + 1,
//         });
//     };

//     componentDidMount() {
//         console.log("Boom");
//     }

//     componentDidUpdate() {
//         console.log("Boom");
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.updateState}>State: {this.state.count}</button>
//             </div>
//         );
//     }
// }
  // Remove the redundant console.log statement using React hooks.
  // Answer: