// autocomplete 
// rfce
import React from 'react'
import Home from './Home';
import Favourites from './Favourites';
import PageNotFound from "./PageNotFound";
import { Route, Redirect,Switch } from "react-router-dom";
function Movies() {
    return (
        <>
            {/* switch will run only first matched route   */}
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route path="/favourites">
                    <Favourites></Favourites>
                </Route>
                {/* if you got / path -> it will send to /movies */}
                <Redirect from="/" to="/home" exact></Redirect>
                {/* without any path it will match every route */}
                <Route>
                    <PageNotFound></PageNotFound>
                </Route>
            </Switch>

        </>
    )
}

export default Movies;