import React from 'react';
import './App.css';
import Ball from './components/Ball';
import Bat from './components/Bat';
import User from './components/User';
import Home from './routing/Home';
import About from './routing/About';
import Products from './routing/Products';
import Login from './routing/Login';

import { Switch, Route, Redirect } from "react-router-dom";
export let authobj = {
  isAuthenticated: true,
  userName: "Jasbir"
};
function App() {
  return (
    <>
      {/* <h1>Hello redux</h1>
      <Ball></Ball>
      <Bat></Bat>
      <User></User> */}
      <Switch>
        <PrivateRoute path="/product" component={Products}></PrivateRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </>
  );
}
function PrivateRoute({ component: Component, ...rest }) {
  // let Component = props.component;
  // delete prop.component;
  // let rest={...props};
  console.log(rest);
  // render function allows conditional rendering

  return (
    <Route {...rest} render={(props) => {

      return (authobj.isAuthenticated == true ? 
      <Component {...props}></Component> : 
      <Redirect {...props} 
      to="/login"></Redirect>)
      // /check -> auth -> allow access
    }}></Route>
  )
  // x -> rerroute login page
}

export default App;
