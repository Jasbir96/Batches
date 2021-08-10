import React from 'react';
import Ball from './Component/Ball';
import Bat from './Component/Bat';
import { Provider } from "react-redux";
import store from './store';
import User from './Component/User';
import EcommerceStore from "./cartPOC/app/store";
import Ecommerce from './cartPOC/Ecommerce';
function App() {
  return (
    // 4
    // redux example
    <Provider store={store}>
      <div className="App">
        <Ball></Ball>
        <Bat></Bat>
        <User></User>
      </div>
    </Provider>
    // <Provider store={EcommerceStore}>
    //   <Ecommerce></Ecommerce>
    // </Provider>
  );
}
export default App;
