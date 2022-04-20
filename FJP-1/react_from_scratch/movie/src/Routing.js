import React from 'react'
import { Route } from "react-router-dom";
import { Switch } from 'react-router-dom';
function Home() {
    return (
        <div>Home</div>
    )
}
function Login() {
    return (
        <div>Login</div>
    )
}
function PageNotFound() {
    return (
        <div>404 page not found</div>
    )
}
function Routing() {
    return (<>
            <div className="border-b-2 mb-4 ">
                <button className="bg-blue-500 mr-4">Login</button>
                <button className="bg-blue-500">Home</button>
            </div>
            {/* it only execute first route  */}
            <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route  >
                <PageNotFound></PageNotFound>
            </Route>
            </Switch>
            
            
           
        </>
    )
}

export default Routing;





