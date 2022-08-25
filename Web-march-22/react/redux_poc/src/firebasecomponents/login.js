import React from 'react'
import firebase, { googleAuth } from "../firebase";

function login() {
    async function googleLogin() {
        const results = await firebase.auth()
        .signInWithPopup(googleAuth);
            
            const credential = results.credential;
            
            var token = credential.accessToken;
            console.log(token);
    }
    return (<>
        <h1>Firebase Login Example</h1>
        <button onClick={googleLogin}>Login</button>

    </>
    )
}

export default login;