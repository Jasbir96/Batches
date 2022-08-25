import './App.css';
import React from 'react'
import Counter from './components/simpleReact/Counter';
import store from "./redux/store";
import { Provider } from "react-redux";
import CounterRedux from './components/CounterRedux';
import BatRedux from './components/BatRedux';
import UserRedux from './components/UserRedux';

function App() {
  return (
    <Provider store={store}>
      <h1>Redux Examples</h1>
      {/* <Counter></Counter> */}
      <CounterRedux></CounterRedux>
      <BatRedux></BatRedux>
      <UserRedux></UserRedux>
    </Provider>
  );
}
export default App;
