import './App.css';
import React from 'react'
import Counter from './components/simpleReact/Counter';
import store from "./redux/store";
import { Provider } from "react-redux";
import CounterRedux from './components/CounterRedux';
import BatRedux from './components/BatRedux';
import UserRedux from './components/UserRedux';
import Login from "./firebasecomponents/login";
function App() {
  return (<>
    <h1>Redux Examples</h1>
    <Login></Login>



    {/* Redux ki pocs */}
    // <Provider store={store}>
    {/* <Counter></Counter> */}
    <CounterRedux></CounterRedux>
    <BatRedux></BatRedux>
    <UserRedux></UserRedux>

    // </Provider>
  </>

  );
}
export default App;
