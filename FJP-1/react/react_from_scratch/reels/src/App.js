import React from 'react'
import Signup from './components/Signup';
import Profile from './components/Profile';
import Feed from "./components/Feed";
import Login from "./components/Login";
import Forget from "./components/Forget";
import PageNotFound from "./components/PageNotFound";
import { Switch, Route } from "react-router-dom";
function App() {
    return (
        <Switch>
            <Route path="/signup" >
                <Signup></Signup>
            </Route>
            <Route path="/login" >
                <Login></Login>
            </Route>
            <Route path="/forget" >
                <Forget></Forget>
            </Route>
            <Route path="/profile" >
                <Profile></Profile>
            </Route>
            <Route path="/" exact>
                <Feed></Feed>
            </Route>
            <Route>
                <PageNotFound></PageNotFound>
            </Route>
        </Switch>

    )
}

export default App;