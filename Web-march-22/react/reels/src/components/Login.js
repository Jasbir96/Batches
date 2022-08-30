import React, { useState } from 'react'
import { auth } from "../firebase";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function loginHandler() {
        alert(email + " " + password);
        // firebase talk -> login
        try {
            let userCreds = await auth.signInWithEmailAndPassword(email, password);
            console.log(userCreds.user);
        } catch (err) {
            alert(err.message);
        }
        setEmail("");
        setPassword("");
    }
    return (
        <>
            <h1>Login</h1>
            <input type="text" placeholder="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            ></input>
            <br></br>
            <input type="password" placeholder="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
            ></input>
            <button
                onClick={loginHandler}
            >Login</button>
        </>
    )
}

export default Login