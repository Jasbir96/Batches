import React from 'react'
import { Link } from "react-router-dom";
import { auth } from "../firebase";
function Header() {
    async function logoutHandler() {
        await auth.signOut();
        // console.log("user signed out");
        alert("user logged out");
    }
    return (
        <>
            <h2>Header</h2>
            <Link to="/profile">Profile</Link>
            <div onClick={logoutHandler}>Logout</div>
        </>
    )
}

export default Header