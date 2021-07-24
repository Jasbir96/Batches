import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NaVBar from './cartComponents/NaVBar';
import ProductPage from "./cartComponents/ProductPage";
import CartPage from "./cartComponents/CartPage";
import HomePage from "./cartComponents/HomePage";
function Ecommerce() {
    return (
        <Router>
            <NaVBar/>
            <Switch>
                <Route path="/product" component={ProductPage}></Route>
                <Route path="/cart" component={CartPage}></Route>
                <Route path="/" component={HomePage} ></Route>
                <Redirect to="/" ></Redirect>
            </Switch>
        </Router>
    )
}

export default Ecommerce
