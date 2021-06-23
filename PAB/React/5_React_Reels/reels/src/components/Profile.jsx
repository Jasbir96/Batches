import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

function Profile() {
    useEffect(() => {
        console.log("Profile is rendered")
    })
    return (
        <div>
            Profile
            <Link to="/login">Login</Link>

        </div>
    )
}

export default Profile
