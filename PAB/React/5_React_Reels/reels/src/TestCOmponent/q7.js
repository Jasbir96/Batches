import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
    return (<div>App</div>)
}
const Dashboard = () => {
    return (<div>Dashboard</div>)
}
const Profile = () => {
    return (<div>Profile</div>)
}
// '/dashboard/profile
const Router = () => {
    return (<BrowserRouter>
        <Switch>
        <Route path='/dashboard/profile'  component={Profile}></Route>
        <Route path='/dashboard'  component={Dashboard}></Route>
        <Route path='/' component={App}></Route>
        </Switch>
    </BrowserRouter>
    )
}