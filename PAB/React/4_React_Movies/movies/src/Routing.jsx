import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
// /abcd/def
// /
// /abcd
// /abcd/def
export default class Routing extends Component {
    render() {
        return (
            <div>
                Routing Example
                {/* path-> / ->home*/}
                {/* route -> path is a subpath route match */}
                {/* switch -> every route that i have i will render only one of them */}
                {/* ui */}
                <ul>
                    <li><Link to="/home/profile">Profile</Link> </li>
                    <li><Link to="/listing">Listing</Link></li>
                    <li><Link to="/home">Home</Link></li>
                </ul>
                {/* /logic */}
                <Switch>
                    <Route path="/home/profile" component={Profile}></Route>
                    <Route path="/listing" component={Listing}></Route>
                    <Redirect from="/home" to="/"></Redirect>
                    <Route path="/" exact component={Home}></Route>
                    <Route component={Error}></Route>
                </Switch>
            </div>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
} 
class Profile extends Component {
    render() {
        return (
            <div>
                Profile
            </div>
        )
    }
} 
class Listing extends Component {
    render() {
        return (
            <div>
                Listing
            </div>
        )
    }
}
class Error extends Component {
    render() {
        return (
            <div>
                Error
            </div>
        )
    }
}