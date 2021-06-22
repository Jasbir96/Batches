import React, { useContext } from 'react'
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom"
import Feed from './components/Feed'
import Login from './components/Login'
import Signup from './components/Signup';
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
// let isSingedUp = Math.random() < 0.5 ? true : false;
function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    {/* {console.log("Hello")} */}
                    <Route path="/login" component={Login}></Route>
                    <Route path="/signup" component={Signup}></Route>
                    {/* <Route path="/" component={Feed}></Route> */}
                    <PrivateRoute path="/" exact abc={Feed}></PrivateRoute>
                </Switch>
            </AuthProvider>
        </Router>
    )
}
// history 
// location
function PrivateRoute(parentProps) {
    let { currentUser } = useContext(AuthContext);
    console.log("in private route", currentUser);

    const Component = parentProps.abc;
    // console.log(parentProps);
    return (
        <Route {...parentProps} render={
            (parentProps) => {
                return (currentUser != null ?
                    <Component {...parentProps}></Component> : <Redirect to="/login"></Redirect>
                )
            }
        }></Route>
    )
}
export default App;
// Private Route
