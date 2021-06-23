import React, { useContext, useEffect } from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import Feed from './components/Feed'
import Login from './components/Login'
import Signup from './components/Signup';
import Profile from './components/Profile';
// let isSingedUp = Math.random() < 0.5 ? true : false;
function App() {
    useEffect(() => {
        console.log("App is rendered")
    })
    return (
        <>
            <Router>
                <h1>App component</h1>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/" component={Feed}></Route>
                </Switch>
            </Router>
            <h1>App component</h1>
        </>
    )
}

export default App;
// Private Route
