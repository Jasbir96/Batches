import React, { Component } from 'react'
import { Link } from "react-router-dom"; export default class NavBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        )
    }
}
