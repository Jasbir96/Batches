// import React from 'react'
// export default class Demo extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("1st function constructor-> mounting phase");
//         this.state = {
//             count: 0,
//             list: [1]
//         }
//     }
//     componentDidMount() {
//         // request 
//         console.log("3rd function is componentDidMount -> mounting phase")
//     }
//     componentDidUpdate() {
//         console.log("4th function is componentDidUpdate ->update Phase");
//     }
//     incrementCount = () => {
//         this.setState((state) => {
//             return { ...state, count: state.count + 1, }
//         })
//     }
//     removeCounter = () => {
//         this.setState({
//             list: []
//         })
//     }
//     render() { 
//          return (
//             <div>
//                 <h1>Count</h1>
//                 <h1>{this.state.count}</h1>
//                 {this.state.list.map((obj, idx) => {
//                     return (
//                         <Button key={idx}
//                             incrementCount={this.incrementCount}></Button>
//                     )
//                 })}
//                 <button onClick={this.removeCounter}>Remove</button>
//                 {console.log("2nd function is  render ->in mounting phase ")}
//             </div>
//         )
//     }
// }
// let cf;
// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     // mounting 
//     componentDidMount() {
//         console.log("In button");
//         // cf = setInterval(() => {
//         //     console.log(Date.now());
//         // }, 3000)
//     }
//     // during unmount phase 
//     componentWillUnmount() {
//         clearInterval(cf);
//     }
//     render() {
//         return(
//             <React.Fragment>
//                 <button onClick={this.props.incrementCount}>+</button>
//                 {console.log("children Render")}
//             </React.Fragment>
//         )
//     }
// }
// // shouldComponent update
// export default class Demo extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             value: true,
//             countOfClicks: 0
//         };
//         this.pickRandom = this.pickRandom.bind(this);
//     }

//     pickRandom() {
//         this.setState({
//             value: Math.random() > 0.5, // randomly picks true or false
//             countOfClicks: this.state.countOfClicks + 1
//         });
//     }
//     // comment out the below to re-render on every click
//     shouldComponentUpdate(nextProps, nextState) {
//         return this.state.value != nextState.value;
//     }
//     render() {
//         return (
//             <div>
//                 shouldComponentUpdate demo
//                 <p><b>{this.state.value.toString()}</b></p>
//                 <p>Count of clicks: <b>{this.state.countOfClicks}</b></p>
//                 <button onClick={this.pickRandom}>
//                     Click to randomly select: true or false
//                 </button>
//             </div>
//         );
//     }
// }

