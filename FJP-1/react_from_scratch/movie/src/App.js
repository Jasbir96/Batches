// rfce
import React from 'react'
import Home from './components/Home';
import Login from './components/Login';
import New from './components/New';
// import Main from "./components/Main";
import NavBar from "./components/NavBar";
import PageNotFound from './components/PageNotFound';
// import Routing from './Routing';
// npm uninstall react-router-dom
// npm i react-router-dom@5.3.1
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
    return (
        <>
            {/* <div>``````````````````````````````````````````````````````</div>
        <div>App</div> */}
            <NavBar></NavBar>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/new">
                    <New></New>
                </Route>

                <Redirect from="/"  exact to="/home" >
                </Redirect>
                <Route>
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>
            {/* <div>``````````````````````````````````````````````````````</div> */}
        </>
        // <Routing></Routing>
    )
}

export default App;