import React, { Component } from 'react'
class CounterClass extends React.Component {
    state = {
      count: 0
    }
    incrementCounter = () => {
      // this.state,counter++;
      // setState
      this.setState({
        count: this.state.count + 1
      })
    }
    decrementCounter = () => {
      // this.state,counter--;
      this.setState({
        count: this.state.count - 1
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